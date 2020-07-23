// Task 1
var studentNames=["Azam","Kamal"];

// Task 2
var studentNames=new Array();

// Task 3
var stringArray=new Array("Azam","Kamal","Ahmed","Hamza","Najee","Ahrar");

// Task 4
var numberArray=new Array(1,2,3,4,5,6,7,8,9,10);

// Task 5
var booleanArray=new Array(true,false);

// Task 6
var mixedArray=new Array("Azam","JavaScript",1,2,3,true,false);

// Task 7
var qualificationsinPakistan=new Array("SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD");
document.write("Qualifications:"+"</br></br>");
var j=1;
for (var i=0; i<qualificationsinPakistan.length; i++)
 {
  document.write(j+") "+qualificationsinPakistan[i]+"</br>");  
  j++;
}
document.write("</br></br></br>")
// Task 8
var studNames=["Azam","Annie","Ayesha"];
var studScores=[450,300,450];
for(var i=0; i<3; i++)
{
document.write("Score of "+studNames[i]+" is "+studScores[i]+" . "+"Percentage "+((studScores[i]/500)*100)+"</br>");
}
document.write("</br></br></br>");

// Task 9
var color=new Array("Black","Red","Green");
var addColor=prompt("Please enter color name you want to add at the start of an array","e.g Red");
color.unshift(addColor);
//add new color at the starting
document.write(color+" "+"</br>");
addColor=prompt("Please enter color name you want to add at the end of an array","e.g Red");
color.push(addColor);
//add new color at the end
document.write(color+" "+"</br>");
color.unshift("Brown","Purple");
//add new color at the starting
document.write(color+" "+"</br>");
color.shift();
// delete color from starting
document.write(color+" "+"</br>");
color.pop();
// delete color from end
document.write(color+" "+"</br>");
var positionofColor=prompt("Please enter position number at which color you want to add");
addColor=prompt("Please enter color name you want to add at your own desire position of an array","e.g Red");
color.splice(positionofColor,0,addColor);
// color add at the desire position
document.write(color+" "+"</br>");
positionofColor=+prompt("Please enter position number at which color you want to delete");
var deletenumberColor=+prompt("Please enter numbers of how many color you want to delete from an array");
color.splice(positionofColor,deletenumberColor);
document.write(color+" "+"</br></br></br>");

// Task 10
var score=new Array(320,230,480,120);
document.write("Scores of Students : "+score+"</br>")
document.write("Ordered scores of Students : "+score.sort()+"</br></br></br>");

// Task 11
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedcities=cities.slice(2,6);
document.write("Cities list:"+"</br>");
document.write(cities+"</br>");
document.write("Selected cities list:"+"</br>");
document.write(selectedcities+"</br></br></br>");

// Task 12
var arr=["This","is","my","cat"];
var inString=arr.join(" ");
document.write("<h1>"+"Array:"+"</h1>");
document.write("<h1>"+arr+"</h1>"+"</br>");
document.write("<h1>"+"String:"+"</h1>");
document.write("<h1>"+inString+"</h1>"+"</br>");

// Task 13
var arr=["keyboard","mouse","printer","monitor"];
var cpy=arr.slice(0,4);
var j=0;
document.write("Devices:"+"</br>");
document.write(arr+"</br></br>");
for(var a=0; a<cpy.length; a++)
{
 document.write("Out:"+"</br>");  
 document.write(arr[j]+"</br>"); 
 arr.shift();
}
document.write("</br></br></br>");

// Task 14
 arr=["keyboard","mouse","printer","monitor"];
 cpy=arr.slice(0,4);
 j=3;
document.write("Devices:"+"</br>");
document.write(arr+"</br></br>");
for(var a=0; a<cpy.length; a++)
{
 document.write("Out:"+"</br>");  
 document.write(arr[j]+"</br>"); 
 j--;
 arr.pop();
}
document.write("</br></br></br>");

// Task 15
var mobiles=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(
"<select>"+
"<option>"+mobiles[0]+"</option>"+
"<option>"+mobiles[1]+"</option>"+
"<option>"+mobiles[2]+"</option>"+
"<option>"+mobiles[3]+"</option>"+
"<option>"+mobiles[4]+"</option>"+
"<option>"+mobiles[5]+"</option>"+
"</select>"
);