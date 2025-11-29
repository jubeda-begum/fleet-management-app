Question-8:
let nums=[10,3,7,20,13,2]
let squares=nums.map(num=> num*num)
console.log("squares:",squares);
let primeNums=nums.filter(num=>{
    if(num<2)
        return false
    return true;
})
console.log("prime Numbers:",primeNums);
let totalSum=nums.reduce((sum,num)=>sum+num,0)
console.log("Total sum:",totalSum);
let sortedDesc=[...nums].sort((a,b)=>b-a);
console.log("sorted Descending:",sortedDesc);


Question-9:
function displayCar()
{
    console.log("This is a Car")
}
function displayTrucck()
{
    console.log("This is a Truck")
}function displayBike()
{
    console.log("This is a Bike")
}
function vehicleInfo(vehicleCategory,callbackFn){
console.log("vehicle Category:",vehicelCategory)
callbackFn()
}
vehicleInfo("Car",displayCar);
vehicleInfo("Bike",displayBike);
vehicleInfo("Truck",displayBike);

