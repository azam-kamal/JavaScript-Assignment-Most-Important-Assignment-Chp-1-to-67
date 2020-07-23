//Task1
/*
document.write("Task1"+"<br>");
var a=10;
document.write("Result:"+"<br>"+"The value of a is : "+a+"<br>");
document.write("........."+"<br>");

document.write("The Value of ++a is : "+ ++a + "<br>");
document.write("Now the Value a is : "+a+"<br>");

document.write("The Value of a++ is : "+ a++ + "<br>");
document.write("Now the Value a is : "+a+"<br>");

document.write("The Value of --a is : "+ --a + "<br>");
document.write("Now the Value a is : "+a+"<br>");

document.write("The Value of a-- is : "+ a-- + "<br>");
document.write("Now the Value a is : "+a+"<br>");

document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");

//Task2
document.write("Task2"+"<br>");
var a=2;
var b=1;
var result=--a - --b + ++b + b--;
document.write("a is "+ a + "<br>"+"b is "+ b + "<br>" +"Result is "+result+"<br>");
document.write("Output:"+"<br>"+"--a; = 1");
document.write("<br>"+"--a - --b; = value of a become 1 by pre decrement becoming 1 and subtracted with pre decremented value of b which beomes zero and Result will be 1"+"<br>");
document.write("Output of --a - --b + ++b; will be 1 from --a - --b and value from ++b which after pre increment becomes 1 and result will be 2"+"<br>");
document.write("Now Final output value of --a - --b + ++b + b-- : 2 from previous calculations adding with value of b which is 1 before post decrement and Result will be 3"+"<br>");

document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");


//Task 3
document.write("Task3"+"<br>");
var x=prompt("Enter Your Name");
document.write("Welcome Dear "+"x");

document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");


//Task 4
document.write("Task4"+"<br>");
var num = +prompt("Enter Number")
if(parseInt(num)){
var i;
for(i=1;i<10;i++) {
    document.write(num + " x " + i + " = " + num*i + "<br>");
}
}
else{
    var i;
    for(i=1;i<10;i++) {
        document.write(5 + " x " + i + " = " + 5*i + "<br>");
    }   
}

document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");
document. write("<br>"+"..................................................."+"<br>");
*/
//Task 5
//document.write("Task5"+"<br>");
var sub1=prompt("Enter Subject 1 Name");
var sub2=prompt("Enter Subject 2 Name");
var sub3=prompt("Enter Subject 3 Name");
var total=100;
var mark1=prompt("Enter Subject 1 Marks");
var mark2=prompt("Enter Subject 2 Marks");
var mark3=prompt("Enter Subject 3 Marks");

// Task 6
var firstSubject=prompt("Enter first subject name");
var secondSubject=prompt("Enter second subject name");
var thirdSubject=prompt("Enter third subject name");
var totalMarks=100;
var obtaindMarksFS=+prompt("Enter Obtained marks for subject "+firstSubject);
var obtaindMarksSS=+prompt("Enter Obtained marks for subject "+secondSubject);
var obtaindMarksTS=+prompt("Enter Obtained marks for subject "+thirdSubject);
var percentageFS=((obtaindMarksFS/totalMarks)*100);
var percentageSS=((obtaindMarksSS/totalMarks)*100);
var percentageTS=((obtaindMarksTS/totalMarks)*100);
var totalMarksThreeSubjects=300;
var totalObtainedMarksThreeSubjects=obtaindMarksFS+obtaindMarksSS+obtaindMarksTS;
var totalPercentageThreeSubjects=((totalObtainedMarksThreeSubjects/totalMarksThreeSubjects)*100);
document.write
("<table>"+
"<tr>"+ 
"<th>Subject</th>"+ 
"<th>Total Marks</th>"+
"<th>Obtained Marks</th>"+
"<th>Percentage</th>"+
"</tr>"+  
"<tr>"+
"<td>"+firstSubject+"</td>"+
"<td>"+totalMarks+"</td>"+
"<td>"+obtaindMarksFS+"</td>"+
"<td>"+percentageFS+"%"+"</td>"+
"</tr>"+ 
"<tr>"+
"<td>"+secondSubject+"</td>"+
"<td>"+totalMarks+"</td>"+
"<td>"+obtaindMarksFS+"</td>"+
"<td>"+percentageSS+"%"+"</td>"+
"</tr>"+ 
"<tr>"+
"<td>"+thirdSubject+"</td>"+
"<td>"+totalMarks+"</td>"+
"<td>"+obtaindMarksFS+"</td>"+
"<td>"+percentageTS+"%"+"</td>"+
"</tr>"+ 
"<tr>"+
"<td colspan=1>"+"</td>"+
"<td>"+"<strong>"+totalMarksThreeSubjects+"</strong>"+"</td>"+
"<td>"+"<strong>"+totalObtainedMarksThreeSubjects+"</strong>"+"</td>"+
"<td>"+"<strong>"+totalPercentageThreeSubjects+"</strong>"+"</td>"+
"</tr>"+
"</table>");