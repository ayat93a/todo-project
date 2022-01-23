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
    greeting = ""
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
//*added for task 6
var userStatus ;
if (confirm ('Are you a student ?')) {
 if ('Are you a student ?' == 'ok'){
var userStatus = "student" ;
} else if ('Are you a student ?' == 'cancel') { 
  var status = "not a student"; 
} else {
  var userStatus = "invalid" ;
}
}
var needHelp ;
if (confirm ('Do you like to use a mobile app for our site?')) {
 if ('Do you like to use a mobile app for our site?' == 'ok'){
var needHelp = "prefer to have a mobile app" ;
}else if ('Do you like to use a mobile app for our site?' == 'cancel'){
   var needHelp = "dont like to use app";
} else { 
  var needHelp = "invalid" ;}
}
var heared ;
if (confirm ('Do you heared about us befor?')) {
 if ('Do you heared about us befor?' == 'ok') {
var heared = "heared about todo befor" ;
} else if ('Do you heared about us befor?' == 'cancel') { 
  var heared = "dont heared about todo befor"; 
} else {
  var heared = "invalid" ;
} 
}
var confirm = confirm('are you sure?') 
let userinfo = [yourName,txt , num, inputAge() ,  userStatus , needHelp , heared ];
alert (userinfo);
for (var i=0 ; i<7 ; i++) ;
alert (userinfo.i);



