console.log("hello world");
console.log(document)

let username = window.prompt("Enter your name");
console.log(`hello ${username}`);

var a = 10;
let b = 20;
const c = 30;

if (true) {
  var a = 40;
  let b = 50; 
  const c = 30;

}

console.log(a); 
console.log(b); 

let name = "Alice"; // Str
let age = 25; // Number
let isStudent = true; // Boolean
let score = null; // Null
let city; // Undefined
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof score); // Output: object (quirk of JS)
console.log(typeof city); // Output: undefined

function add(a,b)
 {
  return a + b;
 }

console.log(add(5,3));

let ages = 20;
if (ages >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Needs Improvement");
}

let result = ages >= 18 ? "Adult" : "Minor";
console.log(result);


let text = "The rain in Spain falls mainly";
let pattern = /rain/;
console.log(pattern.test(text)); // true
console.log(text.match(pattern)); // ['rain']






const email = document.getElementById("email-user");
console.log(email);
console.log(email.value);

const submit = document.getElementById("validate");
submit.addEventListener("click", function(){
    if(email.value.match(pattern)){
        console.log("Email is valid");

        const result = document.createElement("p");
        result.innerText="Email is valid";
        result.style.backgroundColor="green";
        result.style.color="white";
        document.body.appendChild(result);

