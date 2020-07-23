// Chapters 31-34


// Task 1
/*
var fullDate=new Date();
document.write(fullDate+"</br></br>");

*/

// Task 2

/*
var onlyMonth=fullDate.getMonth();
if(onlyMonth==0)
{
    document.write("January"+"</br></br>");
}
else if(onlyMonth==1)
{
    document.write("February"+"</br></br>");
}
else if(onlyMonth==2)
{
    document.write("March"+"</br></br>");
}
else if(onlyMonth==3)
{
    document.write("April"+"</br></br>");
}
else if(onlyMonth==4)
{
    document.write("May"+"</br></br>");
}
else if(onlyMonth==5)
{
    document.write("June"+"</br></br>");
}
else if(onlyMonth==6)
{
    document.write("July"+"</br></br>");
}
else if(onlyMonth==7)
{
    document.write("August"+"</br></br>");
}
else if(onlyMonth==8)
{
    document.write("September"+"</br></br>");
}
else if(onlyMonth==9)
{
    document.write("October"+"</br></br>");
}
else if(onlyMonth==10)
{
    document.write("November"+"</br></br>");
}
else if(onlyMonth==11)
{
    document.write("December"+"</br></br>");
}


*/



// Task 3

/*
var dayToday=fullDate.getDay();
if(dayToday==0)
{
    document.write("Sun"+"</br></br>");
}
else if(dayToday==1)
{
    document.write("Mon"+"</br></br>");
}
else if(dayToday==2)
{
    document.write("Tue"+"</br></br>");
}
else if(dayToday==3)
{
    document.write("Wed"+"</br></br>");
}
else if(dayToday==4)
{
    document.write("Thu"+"</br></br>");
}
else if(dayToday==5)
{
    document.write("Fri"+"</br></br>");
}
else if(dayToday==6)
{
    document.write("Sat"+"</br></br>");
}


*/

// Task 4

/*
dayToday
if(dayToday==0)
{
    document.write("It's Fun day"+"</br></br>");
}

else if(dayToday==6)
{
    document.write("It's Fun day"+"</br></br>");
}

*/


// Task 5

/*
var getDays=fullDate.getDay();
if(getDays<16)
{
    document.write("First Fifteen days of the month"+"</br></br>");
}
else{
    document.write("Last days of the month"+"</br></br>");
}


*/


// Task 6

/*
var storeData=new Date("Jan 1, 1970");
var gettodayDatemili=fullDate.getTime();
var convertMiliseconds=storeData.getTime();
var diff=gettodayDatemili-convertMiliseconds;
document.write("Current Date: "+fullDate+"</br>");
document.write("Elapsed milliseconds since January 1,1970:"+diff+"</br>");
document.write("Elapsed milliseconds since January 1,1970:"+(diff/1000*60*60*24)+"</br></br>");


*/

// Task 7

/*
var getPmOrAm=fullDate.getHours();
document.write(getPmOrAm+"</br>");
if(getPmOrAm>=1 && getPmOrAm<=12){
document.write("It's AM"+"</br></br>");
}
else if(getPmOrAm>=13 && getPmOrAm<=23)
{
    document.write("It's PM"+"</br></br>");
}

*/


// Task 8

/*
var setTheDate=new Date(fullDate.setMonth(11));
document.write(setTheDate+"</br></br>");

*/


// Task 9

/*
var todaysDateC=new Date();
var calculatingRamadandDays=new Date("Jun 18, 2015");
var getDaysMili=calculatingRamadandDays.getTime();
var todaysDateMili=todaysDateC.getTime();
var diffBetweenTwoDate=todaysDateMili-getDaysMili;
var daysCount=diffBetweenTwoDate/(1000*60*60*24);
document.write(Math.floor(daysCount)+" days have passed since 1st Ramadan, 2015"+"</br></br>");
*/



// Task 10

/*
storeData=new Date("Dec 5, 2015");
convertMiliseconds=storeData.getTime();
var diff=gettodayDatemili-convertMiliseconds;
document.write("On reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT),"+diff/1000*60*60+"</br></br>");


*/


// Task 11

/*
var extractTodaysDate=new Date();
document.write("current date:"+extractTodaysDate+"</br>");
var extractHours=new Date(extractTodaysDate.setHours(14));
document.write("1 hour ago, "+extractHours+"</br></br>");


*/


// Task 12

/*
var extractCurrentDate=new Date();
document.write("current date:"+extractCurrentDate+"</br>");
var convertTo100Years=new Date(extractCurrentDate.setFullYear(1920));
document.write("100 years back, it was "+convertTo100Years+"</br></br>");   
*/


// Task 13

/*
var takeInputAge=+prompt("Enter your age");
var getInputAge=new Date(takeInputAge);
document.write("Your age is "+takeInputAge+"</br>");
var getCurrDate=new Date();
var getYearToday=getCurrDate.getUTCFullYear();
var calculateYearAge=getYearToday-getInputAge;
document.write("Your birth year is "+calculateYearAge+"</br></br>");


*/


// Task 14

/*
var customerNameN=prompt("Enter your name");
var enterNumberUnits=+prompt("Enter number of units","410");
var enterChargesPerUnits=+prompt("Enter charges per unit ","16");
var netAmountBillWithInDueDate=enterNumberUnits*enterChargesPerUnits;
var latePaymentCharges=350;
var grossAmountPayableAfterDueDate=netAmountBillWithInDueDate+latePaymentCharges;
var onlyMontH=fullDate.getMonth();
var Monthm="";
if(onlyMontH==0)
{
 Monthm="January";
}
else if(onlyMontH==1)
{
Monthm="February";
}
else if(onlyMontH==2)
{
Monthm="March";
}
else if(onlyMontH==3)
{
Monthm="April";
}
else if(onlyMontH==4)
{
Monthm="May";
}
else if(onlyMontH==5)
{
Monthm="June";
}
else if(onlyMontH==6)
{
Monthm="July";
}
else if(onlyMontH==7)
{
Monthm="August";
}
else if(onlyMontH==8)
{
Monthm="September";
}
else if(onlyMontH==9)
{
Monthm="October";
}
else if(onlyMontH==10)
{
Monthm="November";
}
else if(onlyMontH==11)
{
Monthm="December";
}

document.write("<h1>K-Electric Bill</h1>"+"</br>");
document.write("Customer Name: "+"<strong>"+customerNameN+"</strong>"+"</br>");
document.write("Month: "+"<strong>"+Monthm+"</strong>"+"</br>");
document.write("Number of units: "+"<strong>"+enterNumberUnits+"</strong>"+"</br>");
document.write("Charges per units: "+"<strong>"+enterChargesPerUnits+"</strong>"+"</br></br>");
document.write("Net Amount Payable (within Due Date): "+"<strong>"+netAmountBillWithInDueDate+"</strong>"+"</br>");
document.write("Late payment surcharge: "+"<strong>"+latePaymentCharges+"</strong>"+"</br>");
document.write("Gross Amount Payable (after Due Date): "+"<strong>"+grossAmountPayableAfterDueDate+"</strong>"+"</br>");
*/


//////////////////////////////////////////////////////////////////////////////////
                                    //END//
//////////////////////////////////////////////////////////////////////////////////                                    