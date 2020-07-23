// Task 1
var a=3;
var b=5;
var sum=a+b;
alert("Sum of "+a+" and "+b+" is "+sum);

// Task 2
var a=3;
var b=5;
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var mod=a%b;
alert("Addition of "+a+" and "+b+" is "+sum);
alert("Subtraction of "+a+" and "+b+" is "+sub);
alert("Multiplication of "+a+" and "+b+" is "+mul);
alert("Division of "+a+" and "+b+" is "+div);
alert("Modulus of "+a+" and "+b+" is "+mod);

// Task 3
var variable=5;
document.write("Value after variable declaration is undefined </br>");
document.write("Initial value: "+variable+"</br>");
document.write("Value after increment: "+ ++variable+"</br>");
variable=variable+7
document.write("Value after addition is: "+variable+"</br>");
document.write("Value after decrement is: "+ --variable+"</br>");
variable=variable%3;
document.write("The remainder is: "+variable+"</br></br></br>");

// Task 4
var ticketPrice=600;
document.write("Total cost to buy 5 tickets to a movie is "+5*ticketPrice+"PKR </br></br></br>");

//Task 5
var num=4;
document.write("Table of "+num+"</br>");
document.write(num+"x"+"1="+num*1+"</br>");
document.write(num+"x"+"2="+num*2+"</br>");
document.write(num+"x"+"3="+num*3+"</br>");
document.write(num+"x"+"4="+num*4+"</br>");
document.write(num+"x"+"5="+num*5+"</br>");
document.write(num+"x"+"6="+num*6+"</br>");
document.write(num+"x"+"7="+num*7+"</br>");
document.write(num+"x"+"8="+num*8+"</br>");
document.write(num+"x"+"9="+num*9+"</br>");
document.write(num+"x"+"10="+num*10+"</br></br></br>");

// Task 6
var celsius=25;
var fahrenheit=70;
var Convert_Celsius_Fahrenheit=((fahrenheit-32)*5/9);
var Convert_Fahrenheit_Celsius=(celsius*(9/5)+32);
document.write(celsius+"°C is "+Convert_Fahrenheit_Celsius+"</br>");
document.write(fahrenheit+"°F is "+Convert_Celsius_Fahrenheit+"</br></br></br>");

// Task 7
var item1Price=650;
var item2Price=100;
var shippingCharges=100;
var quanI1=3;
var quanI2=7;
var item1total=item1Price*quanI1;
var item2total=item2Price*quanI2;
var total=item1total+item2total+shippingCharges;
document.write("Price of item 1 is "+item1Price+"</br>");
document.write("Quantity of item 1 is "+quanI1+"</br>");
document.write("Price of item 2 is "+item2Price+"</br>");
document.write("Quantity of item 2 is "+quanI2+"</br>");
document.write("Shipping Charges "+shippingCharges+"</br></br>");
document.write("Total cost of your order is "+total+"</br></br></br>");

// Task 8
var totalMarks=980;
var obtainedMarks=804;
var percentage=((obtainedMarks/totalMarks)*100)
document.write("Total marks : "+totalMarks+"</br>");
document.write("Marks obtained : "+obtainedMarks+"</br>");
document.write("Percentage : "+percentage+"</br></br></br>");

// Task 9
var usDollar=10;
var saudiRayals=25;
var convert_to_pakistaniRupees=(usDollar*104.80)+(saudiRayals*28);
document.write("Total Currency in PKR : "+convert_to_pakistaniRupees+"</br></br></br>");

// Task 10
var num=7;
var calculation=(((num+5)*10)/2);
document.write("Calculation result is :"+calculation+"</br></br></br>");

// Task 11
var currentYear=2020;
var birthYear=1999;
var age=currentYear-birthYear;
document.write("<strong>Age Calculator</strong></br></br></br>");
document.write("Current Year: "+currentYear+"</br>");
document.write("Birth Year:"+birthYear+"</br>");
document.write("Your Age is:"+age+"</br></br></br>");

//Task 12
document.write("<strong>The Geometrizer</strong></br></br></br>");
var radius=20;
document.write("Radius of a circle:"+radius+"</br>");
document.write("The circumference is:"+(2*3.142*radius)+"</br>");
document.write("The area is:"+(3.142*radius*radius)+"</br></br></br>");

// Task 13
var favouriteSnack="chocolate chip";
var currentAge=21;
var maximumAge=90;
var amoundPerDay=5;
var total=amoundPerDay*maximumAge-amoundPerDay*currentAge;
document.write("Favourite Snack :"+favouriteSnack+"</br>");
document.write("Current age: "+currentAge+"</br>");
document.write("Estimated Maximum Age :"+maximumAge+"</br>");
document.write("Amount of snacks per day :"+amoundPerDay+"</br>");
document.write("You will need "+total+" chocolate chip to last you until the ripe old age of "+maximumAge+"</br>");