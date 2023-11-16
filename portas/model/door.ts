export default class DoorModel {
  #num: number;
  #selected: boolean;
  #gift: boolean;
  #open: boolean;

  constructor(num: number, selected = false, gift = false, open = false) {
    this.#num = num;
    this.#selected = selected;
    this.#gift = gift;
    this.#open = open;
  }

  get num() {
    return this.#num
  }

  get selected() {
    return this.#selected
  }

  get gift() {
    return this.#gift;
  }

  get open() {
    return this.#open;

  }
  get closed() {
    return !this.#open;
  }
  
  toggleSelect() {
    const selected = !this.selected;
    return new DoorModel(this.num, selected, this.gift, this.open);
  }

  unSelect() {
    const selected = false;
    return new DoorModel(this.#num, selected, this.#gift, this.#open);
  }
  
  toOpen() {
    const open = true;
    return new DoorModel(this.#num, this.#selected, this.#gift, open);
  }
}