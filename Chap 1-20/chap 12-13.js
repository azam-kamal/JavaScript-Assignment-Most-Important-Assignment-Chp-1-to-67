//Task 1
var x=prompt("Enter Any Character");
var a=x.charCodeAt(0);
if(a>=65 && a<=90){
    alert("Character is Uppercase letter");
}
else if(a>=97 && a<=122){
    alert("Character is Lowercase Letter");
}
else{
    alert("Character is a Digit or Special Char");
}


//Task 2

var i=+prompt("Enter First digit");
var j=+prompt("Enter Second digit");

if(i>j){
    alert("Digit "+i+" is greater");
}
else if(j>i){
    alert("Digit "+j+" is greater");
}
else if(i==j){
    alert("Both Digits are Equal");
}

//Task 3

var k=+prompt("Enter Number");


if(k>0){
    alert("Digit is Positive");
}
else if(k<0){
    alert("Digit is Negative");
}
else if(k==0){
    alert("Digit is Zero");
}

//Task 4
var v=prompt("Enter a Character");
if (v=="a" || v=="e" || v=="i" || v=="o" || v=="u" || v=="A" || v=="E" || v=="I" || v=="O" || v=="U"){
    alert("True");
}
else{
    alert("False");
}


// Task 5
var password="hello";
var pass=prompt("Enter your Password","Password");
if(pass=="Password"){
    alert("Please enter your password");
}
else if(pass==password){
    alert("Correct!  The password you entered matches  the Original password")
}
else{
    alert("Incorrect Password");
}


//Task 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else{
greeting = "Good evening";
alert(greeting);
}


// Task 7
var time = prompt("Enter Time");
if(time >= 0000 && time <1200){
    alert("Goog Morning");
}
else if(time >=1200 && time < 1700){
    alert("Goog Afternoon");
}
else if(time >=1700 && time < 2100){
    alert("Goog Evening");
}
else if(time >=2100 && time < 2359){
    alert("Goog Night!");
}



