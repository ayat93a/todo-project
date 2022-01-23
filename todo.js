alert('Welcome to ToDo list, manage your time with us.');
var yourName = prompt("Enter your name here :");
var txt = prompt("Enter your gender here : ");
var greeting;
function sayhi() {
  if (txt == "female") {
    greeting = "miss "
  } else if (txt == "male") {
    greeting = "mr ";
  } else {
    greeting == " "
  }
  alert('Hi, ' + greeting + yourName);
};
sayhi();
var num = prompt("Enter your age here : ");
var age;
function inputAge() {
  if (num <= 0) {
    age = "not correct";
  } else {
    age = num
  }
};
inputAge();
var confirm = confirm('are you sure')

