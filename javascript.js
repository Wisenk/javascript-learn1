let name = "John";
let surname = "Doe";

console.log (name);
console.log (surname);


const pi = (3 + 2) - 76* (1+1);

console.log (pi);

console.log ((5 + 6) + 52 * (5 - 2));

console.log(4 + 6 + 9) / 77;

let a = 25;
let b = 7 * a;
console.log (b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log (percentage);


let c= "hello ";
let d = "nice to meet you";
console.log (c + d);

let x = 10;
let y = 20;
let z = "The result is: " + x + y;
console.log (z);

const myInt = 5;
const myFloat = 6.667;
console.log (typeof myInt);
console.log (typeof myFloat);

	

	const names = "Chris";
	const greeting = `Hello, ${names}`;
	console.log (greeting);



const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");


signButton.addEventListener("click", () => {
  let sign = prompt("What's your sign?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign} is my favorite!`;
  }
});


const newLine = `One day you finally knew
what you had to do, and began`;
// if use singular or plural quote, error appears
console.log (newLine);

const newLine2 = "One day you finally knew \n whay you had to do, and began";
console.log (newLine2);

let text = "Hello World";
let char = text.charCodeAt (1);
console.log (char);

let text1 = "Apple, banana, kiwi";
let part = text1.slice (3, 14);
console.log (part);


let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert ("the office is closed");
}



let userName = prompt ("Who's there?");

if (userName  === "Admin") {
  let pass = prompt ("Password?", "");
  if (pass === "TheMaster") {
    alert ("Welcome!");
  } else if (pass ===  "" || pass === null ) {
    alert ("Canceled");
  } else {
    alert ("Wrong password");
  }

} else if (userName === "" || userName === null) {
  alert ("Canceled");
} else {
  alert ("I don't know you");
}