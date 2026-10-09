// let a = 10;
// let b = a;
// b = 20;
// console.log(a, b);

let userOne = {
    name: "Amaka",
    age: 22,
    address: {
        city: "Lagos",
        country: "Nigeria"
    }
};

let userTwo = { ...userOne };

userTwo.age = 40;
userTwo.address.city = "Abuja";

console.log(userOne.age);
console.log(userOne.address.city);

console.log(userTwo.age);
console.log(userTwo.address.city);