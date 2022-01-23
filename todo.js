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
function inputStat (){
  if (confirm ('Are you a student ?')) {
    if ('Are you a student ?' == 'ok'){
    userStatus == "student" ;
   } else if ('Are you a student ?' == 'cancel') { 
   userStatus == "not a student"; 
   } else {
    userStatus =="invalid" ;}
  }
};
inputStat ()
var needHelp ;
function help (){
if (confirm ('Do you like to use a mobile app for our site?')) {
 if ('Do you like to use a mobile app for our site?' == 'ok'){
  needHelp == "prefer to have a mobile app" ;
}else if ('Do you like to use a mobile app for our site?' == 'cancel'){
    needHelp == "dont like to use app";
} else { 
   needHelp == "invalid" ;}
} };
help ();
var heared ;
function hear(){
if (confirm ('Do you heared about us befor?')) {
 if ('Do you heared about us befor?' === 'ok') {
 heared == "heared about todo befor" ;
} else if ('Do you heared about us befor?' === 'cancel') { 
   heared == "dont heared about todo befor"; 
} else {
   heared == "invalid" ;
} 
}  };
hear();
var conferm = confirm('are you sure?');
  var userinfo = [yourName, txt , num, userStatus , needHelp ,heared ];
alert (userinfo)
/*for (var i=0 ; i<7 ; i++) ;
alert (userinfo.i);*/
