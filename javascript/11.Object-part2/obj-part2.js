//both spread operator and Object.assign() only deep copy one level not for nested object objects.

const obj1 = {
  name: "manoj",
  age: 23,
  address: {
    state: "ap",
    pincode: 533698,
  },
};

/*

//only one level deep
const obj2 = { ...obj1 };
obj2.address.state = "mp";

const obj3 = Object.assign({},obj1);
obj3.address.pincode = 123456;

//full deep copy
const obj4 = structuredClone(obj1);
obj4.address.pincode = 789101;

console.log(obj1,obj2,obj3,obj4);

*/

/*
//won't change anything we cannot change any property if we use freeze
Object.freeze(obj1);
obj1.name="manu";
obj1.age=100;

console.log(obj1);
*/

/*
Object.seal(obj1);
//can change/update/modify existing properties
obj1.name = "manu";
obj1.age = 100;
console.log(obj1);
//but cannot add another property
obj1.gender = "male";
console.log(obj1);
//but cannot delete properties
delete obj1.name;
console.log(obj1);
*/

//destructing an object
/*
let obj = {
  name: "manoj",
  age: 23,
  arr: [10, 20, 30],
  address: {
    state: "ap",
    pincode: 533242,
  },
};

let {
  name: myname,
  arr: [maths, ...rem],
} = obj;
console.log(myname, maths, rem);
*/


