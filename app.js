// =========-----> QUESTION # 01 <------=========
var items = [
    {name: "juice", price: 50, quantity: 3},
    {name: "cookie", price: 30, quantity: 9},
    {name: "shirt", price: 880, quantity: 1},
    {name: "pen", price: 100, quantity: 2}
];

var totalPrice = 0;

items.forEach(function(item) {
    var itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    console.log(`Total price of ${item.name}: ${itemTotal}`);
});

console.log(`Total price of all items: ${totalPrice}`);


// ========> QUESTION # 02 <=========
var user = {
    name: "Fatima Sarwar",
    email: "fatimasarwar105@gmail.com",
    password: "abcxyz123",
    age: 23,
    gender: "Female",
    city: "Karachi",
    country: "Paksitan"
};

if (user.age !== undefined) {
    console.log("Age exists.");
}

if (user.country !== undefined) {
    console.log("Country exists.");
}

if (user.firstName !== undefined && user.lastName !== undefined) {
    console.log("firstName and lastName exist.");
} else {
    console.log("firstName and lastName do not exist.");
}


// =================> QUESTION # 03 <=========
function Person(name, age, gender, city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
}

var person1 = new Person("Fatima", 23, "Female", "Karachi");
var person2 = new Person("Batman", 33, "Male", "Gotham");

console.log(person1);
console.log(person2);


// ========> QUESTION # 04 <=============
var records = [];
function Population(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function addRecord(name, gender, address, education, profession) {
    var person = new Population(name, gender, address, education, profession);
    records.push(person);
    localStorage.setItem('records', JSON.stringify(records));
    console.log(`Record added: ${name}, ${gender}, ${education}, ${profession}`);
}


addRecord("Fatima", "Female", "Karachi", "Bachelor's", "Developer");

var storedRecords = JSON.parse(localStorage.getItem('records'));
console.log(storedRecords);
