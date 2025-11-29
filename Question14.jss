const profile = {
  name: "Charlie",
  age: 30,
  address: { city: "San Francisco" }
};

const updates = {
  age: 20,
  address: { zipcode: 94101, country: "USA" }
};

const merged = {
  ...profile,
  ...updates,
  address: { ...profile.address, ...updates.address }
};

console.log(merged);