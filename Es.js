Question-1:
let arr1=[10,20,30]
let arr2=[40,50]
let combined=[...arr1,...arr2]
console.log(combined)

Question-2:
let person={name:"venu",age:25}
let extra={city:"bengaluru"};
let profile={ ...person, ...extra}
console.log(profile)

Question-3:
function sumAll(...numbers)
{
    return numbers.reduce((total,num)=>total+num,0)
}
console.log(sumAll(1,2,3,4))


Question-4:
let numbers=[10,20,30,40,50]
let [first,second,...remaining]=numbers;
console.group(first);
console.log(second);
console.log(remaining);


Question-5:
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let{
    address:{
        city,geo:{lat,lng}
    }
}=user;
console.log(city);
console.log(lat);
console.log(lng);



Question-6:
const multiply=(a,b) => a*b
console.log(multiply(5,4))



Question-7:
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let empRole=emp?.details?.profile?.role;
console.log(empRole)