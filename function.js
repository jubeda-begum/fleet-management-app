let age = 20;

function displayAge() {
    console.log("Age inside displayAge():", age);
}

function changeAge() {
    age = 25;
    console.log("Age inside changeAge() after update:", age);
}

displayAge();
changeAge();
console.log("Age after calling changeAge():", age);
