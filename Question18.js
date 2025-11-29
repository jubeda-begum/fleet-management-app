if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);

const profile = {
  user: {
    details: {
      email: "tech@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

const data = { a: { b: 5 } };

console.log(data?.a?.b);
console.log(data?.a?.c);
console.log(data?.x?.y);
