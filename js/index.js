'use strict'

const myArray1 = new MyArray(1,undefined,1,new MyArray(2,new MyArray(3,3,3),2,2),1,1);
const myArray2 = myArray1.flat(2);
console.log(myArray2);