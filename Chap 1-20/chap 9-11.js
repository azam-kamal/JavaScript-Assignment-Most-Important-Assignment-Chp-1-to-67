// Task 1
var cityName=prompt("Enter city name");
if(cityName=="Karachi")
{
    document.write("Welcome to the city of lights </br></br></br>");
}

// Task 2
var gender=prompt("Enter your gender");
if(gender=="male")
{
document.write("Good Morning Sir </br></br></br>");
}
else if(gender=="female")
{
    document.write("Good Morning Ma'am </br></br></br>");
}

// Task 3
var color=prompt("Enter color name from Red Yellow Green");
if(color=="Red")
{
    document.write("<table>"+
    "<tr>"+
    "<th>"+"Signal color"+"</th>"+
    "<th>"+"Message"+"</th>"+
    "</tr>"+
    "<tr>"+
    "<th>"+color+"</th>"+
    "<th>"+"Must Stop"+"</th>"+
    "</tr>"+
    "</table></br></br></br>");
}
else if(color=="Yellow")
{
    document.write("<table>"+
    "<tr>"+
    "<th>"+"Signal color"+"</th>"+
    "<th>"+"Message"+"</th>"+
    "</tr>"+
    "<tr>"+
    "<th>"+color+"</th>"+
    "<th>"+"Ready to move"+"</th>"+
    "</tr>"+
    "</table></br></br></br>");
}
else if(color=="Green")
{
    document.write("<table>"+
    "<tr>"+
    "<th>"+"Signal color"+"</th>"+
    "<th>"+"Message"+"</th>"+
    "</tr>"+
    "<tr>"+
    "<th>"+color+"</th>"+
    "<th>"+"Move now"+"</th>"+
    "</tr>"+
    "</table></br></br></br>");
}

// Task 4
var fuel=+prompt("Enter remaining fuel in car");
if(fuel<0.25)
{
    document.write("Please refill the fuel in your car</br></br></br>");
}


// Task 6
var totalMarks=300;
var obtainedMarksFS=+prompt("Enter marks of first subject");
var obtainedMarksSS=+prompt("Enter marks of second subject");
var obtainedMarksTS=+prompt("Enter marks of third subject");
var totalobtainedMarks=obtainedMarksFS+obtainedMarksSS+obtainedMarksTS;
var totalPercentage=((totalobtainedMarks/totalMarks)*100);
if(totalPercentage>=80)
{
document.write("<strong>"+"Marks Sheet"+"</strong>"+"</br></br>");
document.write("Total marks : "+totalMarks+"</br>");
document.write("Marks obtained : "+totalobtainedMarks+"</br>");
document.write("Percentage : "+totalPercentage+"</br>");
document.write("Grade : "+"A-one"+"</br>");
document.write("Remarks :"+"Excellent"+"</br></br></br>");    
}
else if(totalPercentage>=70)
{
document.write("<strong>"+"Marks Sheet"+"</strong>"+"</br></br>");
document.write("Total marks : "+totalMarks+"</br>");
document.write("Marks obtained : "+totalobtainedMarks+"</br>");
document.write("Percentage : "+totalPercentage+"</br>");
document.write("Grade : "+"A"+"</br>");
document.write("Remarks :"+"Good"+"</br></br></br>");  
}
else if(totalPercentage>=60)
{
    document.write("<strong>"+"Marks Sheet"+"</strong>"+"</br></br>");
    document.write("Total marks : "+totalMarks+"</br>");
    document.write("Marks obtained : "+totalobtainedMarks+"</br>");
    document.write("Percentage : "+totalPercentage+"</br>");
    document.write("Grade : "+"B"+"</br>");
    document.write("Remarks :"+"You need to improve"+"</br></br></br>");  
}
else if(totalPercentage<60)
{
    document.write("<strong>"+"Marks Sheet"+"</strong>"+"</br></br>");
    document.write("Total marks : "+totalMarks+"</br>");
    document.write("Marks obtained : "+totalobtainedMarks+"</br>");
    document.write("Percentage : "+totalPercentage+"</br>");
    document.write("Grade : "+"Fail"+"</br>");
    document.write("Remarks :"+"Sorry"+"</br></br></br>");  
}

// Task 7
var guessNumber=+prompt("Guess any number and enter it");
if(guessNumber==7)
{
document.write("Bingo! Correct"+"</br></br></br>");  
}
else if(guessNumber==8)
{
document.write("Close enough to the correct answer"+"</br></br></br>");
}
else{
document.write("Sorry! Incorrect"+"</br></br></br>");
}

// Task 8
var checknumberdivisibleby3=+prompt("Enter any number");
if(checknumberdivisibleby3%3==0)
{
document.write("Number is divisible by 3"+"</br></br></br>");  
}
else{
    document.write("Number is not divisible by 3"+"</br></br></br>");
}

// Task 9
var number=+prompt("Enter any number");
if(number%2==0)
{
document.write(number+" is even number"+"</br></br></br>");
}
else{
document.write(number+" is odd number"+"</br></br></br>");
}

// Task 10
var temperature=+prompt("Enter your temperature");
if(temperature>40)
{
document.write("It is too hot outside"+"</br></br></br>"); 
}
else if(temperature>30)
{
document.write("The Weather today is Normal"+"</br></br></br>");  
}
else if(temperature>20)
{
document.write("Today's Weather is cool"+"</br></br></br>");  
}
else if(temperature>10)
{
document.write("OMG! Today's weather is so cool"+"</br></br></br>");  
}

// Task 11
var a=+prompt("Enter first number");
var b=+prompt("Enter second number");
var o=prompt("Enter operation symbol + - * / % !only one should be enter at one time");
if(o=="+")
{
var result=a+b;
document.write("First number : "+a+"</br>"); 
document.write("Second number : "+b+"</br>");
document.write("Addition of "+a+" + "+b+"="+result+"</br></br></br>");     
}
else if(o=="-")
{
var result=a-b;
document.write("First number : "+a+"</br>"); 
document.write("Second number : "+b+"</br>");
document.write("Subtraction of "+a+" - "+b+"="+result+"</br></br></br>");     
}
else if(o=="*")
{
var result=a*b;
document.write("First number : "+a+"</br>"); 
document.write("Second number : "+b+"</br>");
document.write("Multiplication of "+a+" * "+b+"="+result+"</br></br></br>");     
}
else if(o=="/")
{
var result=a/b;
document.write("First number : "+a+"</br>"); 
document.write("Second number : "+b+"</br>");
document.write("Division of "+a+" / "+b+"="+result+"</br></br></br>");     
}
else if(o=="%")
{
var result=a%b;
document.write("First number : "+a+"</br>"); 
document.write("Second number : "+b+"</br>");
document.write("Modulus of "+a+" % "+b+"="+result+"</br></br></br>");     
}

// Task 5
// a
if (++a === 5){ alert("given condition for variable a is true"); } 
//  b
if (b++ === 83){ alert("given condition for variable b is true"); } 
//  c
var c = 12;
if (c++ === 13){ alert("condition 1 is true"); } 
if (c === 13){ alert("condition 2 is true"); }
if (++c < 14){ alert("condition 3 is true"); }
if(c === 14){ alert("condition 4 is true"); } 
// d
var materialCost = 20000;
 var laborCost = 2000; 
 var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost)
 { alert("The cost equals"); } 
 else if (true){ alert("True"); } 
 if (false){ alert("False"); } 
//  f
if("car" < "cat"){ alert("car is smaller than cat"); } 
  