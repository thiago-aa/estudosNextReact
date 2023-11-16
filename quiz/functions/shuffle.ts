export default function shuffle(arr: any[]): any[]{
  return arr
    .map(val => ({val, random: Math.random()}))
    .sort((obj1, obj2)=> obj1.random - obj2.random)
    .map(obj => obj.val)
}