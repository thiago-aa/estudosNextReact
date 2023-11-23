export default interface User {
  uid: string;
  email: string | null;
  name: string | null;
  token: string | null;
  provider: string | undefined;
  urlImage: string | null;
}