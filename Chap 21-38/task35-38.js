//Chapter 35-38


//Task 1
/*
function timee(){
    var d=new Date();
    document.write(d);
}
timee();
*/


//Task2
/*
function greet(){
    var a=prompt("Enter Your Firstname");
    var b=prompt("Enter Your lastname");
    alert("Welcome "+a+" "+b);
}
greet();
*/


//Task 3
/*
function add(){
    var a=+prompt("Enter Num 1");
    var b=+prompt("Enter Num 2");
    alert("Sum: "+ (a+b));
}
add();
*/


//Task 4

/*
function calc(){
var num1=+prompt("Enter Num1");
var num2=+prompt("Enter Num2");
var result=0;
var opt=prompt("Enter Operator i.e + , - , * , /");

if(opt=="+")
{
    return (num1+num2);
}
elseif(opt=="-")
{
    return (num1-num2);
}
elseif(opt=="*")
{
    return (num1*num2);
}
elseif(opt=="/")
{
    return (num1/num2);
}
}
var value=calc();
document.write(value);
*/


//Task 5

/*
function square(){
    var a=+prompt("Enter Number to Square it");
    var b=a*a;
    document.write(b);
}
square();
*/

//Task 6

/*
function fact(num){
    var f=1;
for(var i=num ; i>0; i--){
    f=f*i
}
return f;
}
var num=+prompt("Enter Num to cal Factorial");
var result=fact(num);
document.write(result);
*/


//Task 7

/*
function counting(){
var start=+prompt("Enter Start Number");
var end=+prompt("Enter End Number");
for (var i=start; i<=end; i++){
    document.write(i+"<br>");
}
}
counting();
*/


//Task 8

/*
function calcSquare(a){
    return (a*a);
}

function calculateHypotenuse(){
    var b=+prompt("Enter Base value");
    var p=+prompt("Enter Perpendicular value");
    var bb=calcSquare(b);
    var pp=calcSquare(p);
    var hyp=bb+pp;
    document.write("Hupotenous: "+hyp);
}
calculateHypotenuse();
*/


//Task 9

/*
function traingle(w,h){
    var a=(w*h);
    return a;
}
var w=+prompt("Enter Width: ");
var h=+prompt("Enter Height: ");
var area=traingle(w,h);
document.write("Area of Traingle: "+area);

*/


//Task 10

/*
function pal(w){
    var pp="";
    var check=false;    
    for(var i=(w.length)-1; i>=0; i--){
        
        if(check==false){
            pp=w[i];
            check=true;
        }
        else{
        pp=pp+w[i];
        }
    }  
    return pp;
}

var a=prompt("Enter String");
var result=pal(a);
if(result==a){
    document.write("The word "+result+" is Palindrome");
}
else{
    document.write("The word "+result+" is not Palindrome");
}
*/

//Task 11

/*
function capital(str)
{
    var first=str[0].toUpperCase();
    var str1=str.slice(1);
    var str2=first+str1;
    var str3=str2.split(" ");
    for(var i=0; i<str3.length; i++){
        first=str3[i];
        str2=first[0].toUpperCase();
        str1=str2+str3[i].slice(1);
        str3[i]=str1;

    }
    return str3.join(" ");
        

}
var s=prompt("Enter String");
var result=capital(s);
document.write(result);
*/


//Task 12

/*
function longWord(str)
{
    var str1=str.split(" ");
    var arr=new Array();
    for(var i=0; i<str1.length; i++)
    {
        arr[i]=str1[i].length;
    }
    var large=arr[0];
    var counter=0;
    for(var i=1; i<arr.length; i++){
        
        if(arr[i]>large){
            large=arr[i];
            counter=i;
        }
    }

    return str1[counter];
    
}
var s=prompt("Enter String");
var result=longWord(s);
document.write(result);
*/


//Task 13

/*
function countt(str,ch) {
    
    var counter = 0;

    for (var i = 0; i <= str.length; i++) {
        if (str[i] == ch ) {
            counter++;
        }
    }
    alert(counter);
    return counter;
}
var strr = prompt("Enter String");
var chh = prompt("enter charater to find");
var cc=countt(strr,chh);

document.write("Text: " + strr + "<br>There are " + cc + " occurence(s) of character " + chh);
*/


//Task 14

/*
function calcCircumference(r){
    var circum=(2)*(Math.PI)*(r);
    return circum
}

function calcArea(r)
{
    var area=Math.PI*r*r;
    return area;
}


var r=prompt("enter radius of circle");
var result1=calcCircumference(r);
var result2=calcArea(r);
document.write("The Circumference is "+result1+"<br>");
document.write("The Area is "+result2);
*/


//////////////////////////////////////////////////////////////////////////////////
                                    //END//
//////////////////////////////////////////////////////////////////////////////////                                    