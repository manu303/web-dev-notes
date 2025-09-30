const student = {
  name: "manoj",
  age: 23,
};

const manoj = {
  department: "MECH",
  rollNo: "19B91A0303",
  sgpa: 8.0,
  cgpa: 7.7,
};

manoj.__proto__ = student;

console.log(manoj.name, manoj.age);

console.log(manoj.__proto__ === student);
console.log(student.__proto__ === Object.prototype);
console.log(student.__proto__.__proto__ === null);
