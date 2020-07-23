///Task1

// function showDet(){
 
//     var e=document.getElementById("e").value
//     var n=document.getElementById("n").value
//     var a=document.getElementById("a").value
    
//     var p=document.getElementById("nn")
//     p.innerHTML=e;

//     var p=document.getElementById("ee")
//     p.innerHTML=n;

//     var p=document.getElementById("aa")
//     p.innerHTML=a;



// }


//Task2

// function readmore(){
   
//     var gett=document.getElementById("showed")
//     gett.innerHTML="Manufacturer : Audi, Color : Metallic Blue, Car Specs...Fuel Type: PetrolEngine Displacement,  (cc)2995Max Power (bhp@rpm)335.2@5000–6400Max,   Torque (nm@rpm)500nm@1370–4500  , Seating Capacity5,"
// }


// //Task3

// function addstu()
// {
//     var i=document.getElementById("i").value;
//     var n=document.getElementById("n").value;
//     var c=document.getElementById("c").value;

//     var t=document.getElementById("myTable");
   
// ////////////////////////////

// //var body = document.getElementsByTagName("body")[0];

// // creates a <table> element and a <tbody> element
// //var tbl = document.createElement("table");
// var tblBody = document.createElement("tbody");

//   var row = document.createElement("tr");

 
//     // Create a <td> element and a text node, make the text
//     // node the contents of the <td>, and put the <td> at
//     // the end of the table row
//     var cell1 = document.createElement("td");
//     var cellText1 = document.createTextNode(i);
//     cell1.appendChild(cellText1);
//     row.appendChild(cell1);


//     var cell2 = document.createElement("td");
//     var cellText2 = document.createTextNode(n);
//     cell2.appendChild(cellText2);
//     row.appendChild(cell2);


//     var cell3 = document.createElement("td");
//     var cellText3 = document.createTextNode(c);
//     cell3.appendChild(cellText3);
//     row.appendChild(cell3);

//     var cell4 = document.createElement("td");
//     var btn1 = document.createElement("button");
//     btn1.innerHTML="Delete";
//     btn1.onclick=function(){

//         var x = this.parentNode.parentNode.rowIndex;
//         document.getElementById("myTable").deleteRow(x);
   
//     }
//     cell4.appendChild(btn1);
//     row.appendChild(cell4);


//     var cell5 = document.createElement("td");
//     var btn2 = document.createElement("button");
//     btn2.innerHTML="Edit";
//     btn2.onclick=function(){

//         var x = this.parentNode.parentNode;
//         x.setAttribute('contenteditable',"true");
//         alert("The Row is now Editable");
   
//     }
//     cell5.appendChild(btn2);
//     row.appendChild(cell5);

// /*
//     var cell1 = document.createElement("td");
//     var cellText1 = document.createTextNode(i);
//     cell1.appendChild(cellText);
//     row.appendChild(cell1);
// */
 

//   // add the row to the end of the table body
//   tblBody.appendChild(row);


// // put the <tbody> in the <table>
// t.appendChild(tblBody);
// // appends <table> into <body>
// //body.appendChild(tbl);
// // sets the border attribute of tbl to 2;
// t.setAttribute("border", "2");
 
// }


//  function deleteRow(r) {
//      var i = r.parentNode.parentNode.rowIndex;
//      document.getElementById("myTable").deleteRow(i);
//  }