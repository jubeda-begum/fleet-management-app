// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

console.log(`Line 1
Line 2
Line 3`);

const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// 2. Arrow Functions & this
const square = n => n * n;
console.log(square(4));

const obj = {
  test: function() { console.log(this.value); },
  value: 10
};
obj.test();


// 3. Rest, Spread & Copying Objects
const a = [1, 2, 3];
const b = [4, 5];
const mergedArr = [...a, ...b];
console.log(mergedArr);

const product = { name: "pen", price: 10 };
const copy = { ...product };
console.log(copy);

const largest = (...nums) => Math.max(...nums);
console.log(largest(3, 7, 2, 10));


// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [x, y, z] = arr;
console.log(x, y, z);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand, ram } = laptop;
console.log(brand, ram);

const info = {};
console.log(info?.data?.value);


// 5. Scoping 
if (true) {
  let a1 = "hello";
  var a2 = "world";
}
console.log(a2);


// 6. Ternary Operator
const speed = 45;
const status = speed > 60 ? "Fast" : "Normal";
console.log(status);

const age = 18;
const msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);


// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
console.log([...nums, 4, 5]);

const arrA = [10, 20];
const arrB = [30, 40];
console.log([...arrA, ...arrB]);

const findSum = (...n) => n.reduce((a, b) => a + b, 0);
console.log(findSum(1, 2, 3, 4));


// 8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const { id, status: userStatus } = user;
console.log(id, userStatus);

const makeUser = (name, age) => ({ name, age });
console.log(makeUser("Sam", 22));


// 9. Template Literals 
const marks = 90;
console.log(`HELLO AMIT, your score is ${marks}/100`);

const roll = 101;
const role = "admin";
const student = { roll, role };
console.log(student);

const obj2 = {
  roll,
  message() { return `Your role is ${role}`; }
};
console.log(obj2.message());


// 10. Arrow Function Shorthands
const add = (a, b) => a + b;
console.log(add(5, 3));

const double = n => n * 2;
console.log(double(4));


// 11. Spread Operator 
const nums1 = [1, 2, 3];
const clone = [...nums1];
console.log(clone);

const inserted = [0, ...nums1];
console.log(inserted);

const objA = { a: 1 };
const objB = { b: 2 };
const combined = { ...objA, ...objB };
console.log(combined);


// 12. Optional Chaining
const userData = { name: "Alex", address: { city: "Bangalore" } };
console.log(userData?.address?.city);
console.log(userData?.phone?.number);

const dataObj = { a: { b: 10 } };
console.log(dataObj?.a?.b);
console.log(dataObj?.x?.y);
