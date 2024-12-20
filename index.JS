// const users = [
//     { firstName: "john", lastName: "Biden", age: 26 },
//     { firstName: "jimmy", lastName: "cob", age: 75 },
//     { firstName: "sam", lastName: "lewis", age: 50 },
//     { firstName: "Ronald", lastName: "Mathew", age: 26 },
//   ];
  

// users.map(user=>{
//     console.log(`${user.firstName}${user.lastName}`)
// })



// const student = [
//   { name: "Smith", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "John", rollNumber: 16, marks: 35 },
//   { name: "Tiger", rollNumber: 7, marks: 55 }
// ];

// const  tatalmarck = student.reduce((val,student)=> val+student.marks,0);
// console.log(tatalmarck)


let a = [1,2,3,4,5]

const duble = a.map (value => value*2)
console.log(duble)

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let b = [];


for (let i = 0; i < a.length; i++) {
  if (a[i] > 4) {
    b.push(a[i]);
  }
}

console.log(b); 
