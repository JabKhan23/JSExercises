//exercise 1
console.log("Jabaran");

console.warn("Khan");

console.info("Manchester");

console.error("Scorpio/Virgo depending");

let bestCar = "Ferrai";
let bestModel = "F50";
console.log("The best car for me is a" + bestCar + " and the model that I really love is the" + bestModel);
console.log("Hello world.","color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");


//exercise 2
let a; //typeof(a) returns null
let b = "12345";//typeof(b) returns string
let c = 12344;//typeof(c) returns number
let d = true;//typeof(d) returns boolean
let e = {a:"JavaScript"};//typeof(e) returns object

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

//exercise 3
// let foo
// bar =3;
// console.log(foo);
// console.log(bar);

let foo2, bar2;

console.log(foo2);
console.log(bar2);

function sayHello() {
    return // <--error will be here as it needs a ; and the way it is declared isn't correct
    {
      "Someone says hello";
    }
  }