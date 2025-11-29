const isEven = num => num % 2 === 0;
console.log(isEven(5));

const check = a => a > 3 ? "True" : "False";
console.log(check(2));
console.log(check(5));

const greet = name => name ? `Hello, ${name}` : "Guest";
console.log(greet("Sam"));
console.log(greet());
