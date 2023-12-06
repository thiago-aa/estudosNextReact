import CustomerRepository from "../../core/CustomerRepository";
import Customer from "../../core/Customer";
import firebase from '../config';


export default class CustomerCollection implements CustomerRepository {

  #converter = {
    toFirestore(customer: Customer): firebase.firestore.DocumentData {
      return {
        name: customer.name,
        age: customer.age,
      };
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>): Customer {
      const data = snapshot.data();
      return new Customer(data.name, data.age, snapshot.id);
    },
  };

  async save(customer: Customer): Promise<Customer> {
    if(customer?.id) {
      await this.myCollection().doc(customer.id).set(customer);
      return customer;
    } else {
      const docRef = await this.myCollection().add(customer);
      const doc = await docRef.get();
      return doc.data();
    }
  }
  
  async delete(customer: Customer): Promise<void> {
    if(customer?.id) {
      return this.myCollection().doc(customer.id).delete();
    }
  }

  async getAll(): Promise<Customer[]> {
    const query = await this.myCollection().get()
    return query.docs.map((doc: any) => doc.data()) ?? [];
  }

  private myCollection() {
    return firebase.firestore().collection('customers').withConverter(this.#converter)
  }

}