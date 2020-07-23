// Task 1
var multidimensionalArray=[["Azam",189],["Ahmed",141],["Zohaib",084]];

// Task 2
var array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0; i<3; i++)
{
    for(var j=0; j<4; j++)
    {
       document.write(array[i][j]+" ");
    }      
    document.write("</br>");
}   
document.write("</br></br></br>");

// Task 3
for(var i=1; i<=10; i++)
{
    document.write(i+"</br>");
}
document.write("</br></br></br>");

// Task 4
var tableNumber=+prompt("Enter a number to show it's multiplication table");
var tableLength=+prompt("Enter length multiplication table");
for(var i=1; i<=tableLength; i++)
{
    document.write(tableNumber+" x "+i+" = "+tableNumber*i+"</br>");
}
document.write("</br></br></br>");

// Task 5
var fruits=new Array("apple","banana","mango","orange","strawberry");
for(var i=0; i<fruits.length; i++)
{
 document.write(fruits[i]+"</br>");   
}
document.write("</br>");
for(var i=0; i<fruits.length; i++)
{
 document.write("Element at index "+i+" is "+fruits[i]+"</br>");   
}
document.write("</br></br></br>");

// Task 6
document.write("<strong>"+"Counting:"+"</strong>"+"</br></br>");
for(var i=1;i<=15;i++)
{
    document.write(i+" ");
}
document.write("</br></br>");
document.write("<strong>"+"Reverse counting:"+"</strong>"+"</br></br>");
for(var i=10;i>=1;i--)
{
    document.write(i+" ");
}
document.write("</br></br>");
document.write("<strong>"+"Even:"+"</strong>"+"</br></br>");
for(var i=0;i<=20;i+=2)
{
    document.write(i+" ");
}
document.write("</br></br>");
document.write("<strong>"+"Odd:"+"</strong>"+"</br></br>");
for(var i=1;i<=20;i+=2)
{
    document.write(i+" ");
}
document.write("</br></br>");
document.write("<strong>"+"Series:"+"</strong>"+"</br></br>");
for(var i=2;i<=20;i+=2)
{
    document.write(i+"k ");
}
document.write("</br></br></br>");

// Task 7
var A = ["cake","apple pie","cookie","chips","patties"];
var searchItem=prompt("Welcome to ABC Bakery,What do you want to order Sir/ma'am");
var checkiteminBakery="";
for(var i=0; i<A.length; i++)
{
if(A[i]==searchItem)
{
    document.write(A[i]+" is available at index "+i+" in our bakery "+"</br>");
    checkiteminBakery=searchItem;
    break;
}
}
if(checkiteminBakery==""){
    document.write("We are sorry "+searchItem+"is not available in our bakery"+"</br>");  
}
document.write("</br></br></br>");

// Task 8
var arrayItems=[24,53,78,91,12];
var largestNumbers=0;
for(var i=0; i<arrayItems.length; i++)
{
if(largestNumbers<=arrayItems[i])
{
largestNumbers=arrayItems[i];
}    
}
document.write("Array items"+arrayItems+"</br>");
document.write("The Largest number is "+largestNumbers+"</br>");
document.write("</br></br></br>");

// Task 9
var arrayItems=[24,53,78,91,12];
var smallestNumbers=24;
for(var i=0; i<arrayItems.length; i++)
{
if(smallestNumbers>=arrayItems[i])
{
    smallestNumbers=arrayItems[i];
}    
}
document.write("Array items"+arrayItems+"</br>");
document.write("The Largest number is "+smallestNumbers+"</br>");
document.write("</br></br></br>");

// Task 10
for(var i=1;i<=20; i+=1)
{
    document.write(5*i+" , ");
}