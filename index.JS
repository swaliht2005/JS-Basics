// const users = [
//     { firstName: "john", lastName: "Biden", age: 26 },
//     { firstName: "jimmy", lastName: "cob", age: 75 },
//     { firstName: "sam", lastName: "lewis", age: 50 },
//     { firstName: "Ronald", lastName: "Mathew", age: 26 },
//   ];
  

// users.map(user=>{
//     console.log(`${user.firstName}${user.lastName}`)
// })



const student = [
  { name: "Smith", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "John", rollNumber: 16, marks: 35 },
  { name: "Tiger", rollNumber: 7, marks: 55 }
];

const  tatalmarck = student.reduce((val,student)=> val+student.marks,0);
console.log(tatalmarck)