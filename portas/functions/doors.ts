import DoorModel from "../model/door";

export function createDoors(qtde: number, haveGift: number): DoorModel[] {
  return Array.from({length: qtde}, (v, i) => {
    const doorNumber = i+1;
    const gift = haveGift === doorNumber;
    return new DoorModel(doorNumber, false, gift, false);
  })
}

export function updateDoors(newDoor: DoorModel, doors: DoorModel[]): DoorModel[] {
  return doors.map((door) => {
    if(door.num === newDoor.num){
      return newDoor;
    } else {
      return newDoor.open ? door : door.unSelect();
    }
  })
}