//Chapter 21-25



//Task1

/*
var fname=prompt("Enter First Name");
var lname=prompt("Enter Last Name");
var fullname=fname+" "+lname;
alert("Welcome " +fullname);
*/


//Task 2

/*
var phone=prompt("Enter your Favourite Mobile Phone");
var str=phone.length;
document.write("Your Favourite Phone is "+phone+ "<br>"+"Length of String: "+str);
*/

//Task 3

/*
var c="Pakistan";
var i=c.indexOf("n");
document.write("String: "+c+" <br>"+"Index of n "+i);
*/

//Task 4

/*
var c="Hello World";
var i=c.indexOf("d");
document.write("String: "+c+" <br>"+"Index of n "+i);
*/

//Task 5

/*
var c="Pakistani";
var i=c[3];
document.write("String: "+c+" <br>"+"Character at Index 3: "+i);
*/

//Task 6

/*
var fname=prompt("Enter First Name");
var lname=prompt("Enter Last Name");
var fullname=fname.concat(" "+lname);
alert("Welcome " + fullname);
*/

//Task 7

/*
var c1="Hyderabad";
var c2=c1.slice(5);
var c3="Islam".concat(c2);
document.write("City: "+c1+" <br>"+"After Replacement: "+c3);
*/

//Task 8
/*
var message = "Ali and Sami are best friends. They play cricket and football together";
var msg=message.replace(/and/g,"&");
document.write(msg);
*/

//Task 9
/*
var str="472";
var digit=parseInt(str);
document.write("Value :"+str+"<br>"+"Type :"+typeof str+"<br>"+"Value: "+digit+"<br>Type: "+typeof digit);
*/

//Task 10
/*
var a=prompt("Enter Something");
var b=a.toUpperCase();
document.write(b);
*/

//Task 11
/*
var a=prompt("Enter Something");
var b=a[0]
b=b.toUpperCase();
a=b+a.slice(1);
document.write(a);
*/

//Task 12
/*
var num=35.36;
var str=num.toString();
str=str[0]+str[1]+str[3]+str[4];
document.write("Number: "+num+"<br>Result: "+str);
*/

//Task 13
/*
var a= prompt("Enter Your Name:");
var i=0;
for(i; i<=a.length; i++){
    if(a.charCodeAt(i)==33 || a.charCodeAt(i)==44 || a.charCodeAt(i)==46 || a.charCodeAt(i)==64)
    {
        alert("Please Enter valid username!");
        var b=prompt("Enter Valid Username");
        break;
    }
    else{
        continue;
    }
}
*/

//Task 14

/*
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b=prompt("Enter Item: ");
var c=b.toLowerCase();
var x=false;
for(var i=0 ; i<=a.length; i++){
    if(a[i]==c){
        document.write(b +" is available at index "+i+" of our bakery");
        x=true;
        break;
    }
}
if(x==false){
    document.write("We are sorry. "+b+" is not available in our bakery");
}
*/


//Task 15
/*
var pass = prompt("Enter Password");
var flag=false;
for (var i = 0; i <= pass.length; i++) {
    if ((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) || (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57))
     {
        flag=true;
        if (pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57) {
            document.write("Password cannot begin with a number");
            document.write("<br>Please Enter Valid Password");
            break;
        }
        if (pass.length < 6) {
            document.write("Password should be 6 or above character");
            document.write("<br>Please Enter Valid Password");
            break;
        }
        
    }
    else{
        document.write("Password Should contain Letters and Numbers");
        break;
    }
}
*/


//Task 16

/*
var university = "University of Karachi";
var uni=university.split("");
for(var i=0; i<university.length; i++){
    document.write(uni[i]);
    document.write("<br>");
}
*/


//Task 17
/*
var a=prompt("Enter something");
var b=a.length;
var c=a[b-1];
document.write("User Input :"+a+"<br>The last character :"+c);
*/



//Task 18
/*
var str="The quick brown fox jumps over the lazy dog";
var count=0;

for(var i=0; i<=str.length; i++){
    if((str[i]=="T" || str[i]=="t") && (str[i+1]=="h" && str[i+2]=="e")){
        count=count+1;
    }
}

document.write("Text: "+str+"<br>There are "+count+" occurence(s) of word the");
*/

//////////////////////////////////////////////////////////////////////////////////
                                    //END//
//////////////////////////////////////////////////////////////////////////////////                                    