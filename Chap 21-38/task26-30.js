                            // Chapters 26-30


// Task 1
/*
var giveInputNumberP=prompt("Enter any positive number");
document.write("Number: "+giveInputNumberP+"</br>");
document.write("round off value: "+Math.round(giveInputNumberP)+"</br>");
document.write("floor value: "+Math.floor(giveInputNumberP)+"</br>");
document.write("ceil value: "+Math.ceil(giveInputNumberP)+"</br></br>");
*/


// Task 2

/*
var giveInputNumberN=prompt("Enter any negative number");
document.write("Number: "+giveInputNumberN+"</br>");
document.write("round off value: "+Math.round(giveInputNumberN)+"</br>");
document.write("floor value: "+Math.floor(giveInputNumberN)+"</br>");
document.write("ceil value: "+Math.ceil(giveInputNumberN)+"</br></br>");

*/

// Task 3

/*
var checkAbsoluteValue=prompt("Enter any number");
document.write("The absolute value of "+checkAbsoluteValue+" is "+Math.abs(checkAbsoluteValue)+"</br></br>");


*/


// Task 4

/*
var randomDiceValue=Math.random()*7;
if(Math.floor(randomDiceValue)!=0)
{
    document.write("random dice value "+Math.floor(randomDiceValue)+"</br></br>");
}

*/

// Task 5
/*
var tossHeadsOrTails=Math.random()*3;
if(Math.floor(tossHeadsOrTails)==1)
{
document.write(Math.floor(tossHeadsOrTails)+"</br>")
document.write("random coin value: Heads"+"</br></br>");
}
else if(Math.floor(tossHeadsOrTails)==2)
{
    document.write(Math.floor(tossHeadsOrTails)+"</br>")
    document.write("random coin value: Tails"+"</br></br>");
}
*/


// Task 6

/*
var randomNumberBetween1and100=Math.random()*101;
document.write("Random number between 1 and 100: "+Math.floor(randomNumberBetween1and100));
*/


// Task 7
/*
var weightInput=prompt("Enter your weight in kilograms");
if(weightInput.length==2)
{
var cpy=weightInput.slice(0,2);
document.write("The weight of user is "+cpy+" kilograms");
}
else if(weightInput.length==5)
{
    var cpy=weightInput.slice(0,2);
    document.write("The weight of user is "+cpy+" kilograms");
}
else if(weightInput.length==7)
{
    var cpy=weightInput.slice(0,4);
    document.write("The weight of user is "+cpy+" kilograms");
}
else if(weightInput.length==13)
{
    var cpy=weightInput.slice(0,4);
    document.write("The weight of user is "+cpy+" kilograms");
}
*/


// Task 8

/*
var secretNumberBetween1to10=Math.random()*10;
var takeFloorSecret=Math.floor(secretNumberBetween1to10);
var guessSecretNumberByUser=+prompt("Enter a number between 1 and 10");
if(guessSecretNumberByUser==takeFloorSecret)
{
    alert("Answer is correct")
}
else{
    alert("Try again");
}

*/

//////////////////////////////////////////////////////////////////////////////////
                                    //END//
//////////////////////////////////////////////////////////////////////////////////                                    