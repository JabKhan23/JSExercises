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

// function sayHello() {
//     return // <--error will be here as it needs a ; and the way it is declared isn't correct
//     {
//       "Someone says hello";
//     }
//   }

//exercise 4

//1 - did a while loop but changed it to for
for (let numA = 100; numA <= 200; numA++) {
  console.log(`Number A = ${numA}`);
}
//2
for (let a2 = 100; a2 <= 200; a2++) {
    if (a2 % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
  }

  //3
  for (let j = 0; j < 10; j++) {
    for (let k = 1; k <= 10; k++) {
      console.log(k);
    }
 }  

 //4



 //exercise 5

let strictA = true;
let strictB = 1;
console.log(strictA == strictB); //true
console.log(strictA === strictB); //false

console.log(strictA != strictB); //false
console.log(strictA !== strictB);//true

let age = 25;

if (age >= 18 && age <= 65) {
  console.log("You are in the age range");
} else if (age < 18) {
  console.log("You are too young for this");
} else {
  console.log("Catch");
}

let ageNew = 56;
let result = ageNew >= 50 ? "You are old but young in heart" : "You are young";
console.log(result);