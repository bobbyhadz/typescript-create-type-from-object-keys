export {};

// EXAMPLE 1 - Create a Type from an object's Keys in TypeScript

const person = {
  name: 'Bobby Hadz',
  age: 30,
  country: 'Chile',
};

// 👇️ type Keys = "name" | "age" | "country"
type Keys = keyof typeof person;

// 👇️ type Values = string | number
type Values = (typeof person)[Keys];

// ---------------------------------------------------

// // EXAMPLE 2 - Create a Type from an object's Values in TypeScript

// const employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// } as const; // 👈️ use const assertion

// // 👇️ type Keys = "id" | "name" | "salary"
// type Keys = keyof typeof employee;

// // 👇️ type Values = 1 | "Bobby Hadz" | 100
// type Values = (typeof employee)[Keys];

// ---------------------------------------------------

// // EXAMPLE 3 - Getting a more generic type of the object's values

// const employee = {
//   id: 1,
//   name: 'Bobby Hadz',
//   salary: 100,
// };

// // 👇️ type Keys = "id" | "name" | "salary"
// type Keys = keyof typeof employee;

// // 👇️ type Values = string | number
// type Values = (typeof employee)[Keys];
