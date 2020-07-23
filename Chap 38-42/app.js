// // Task 1
// function calculate_Power(x,y)
// {
//    var power = 1;
//    if(y==0)
//    return 1;
//    for(var i=1;i<=y;i++)
//    {
//    power = power*x;
// }
//    return power;
// }
// var ap=+prompt("Enter number to calculate power");
// var pp=+prompt("Enter power for the number");
// document.write("Result ="+calculate_Power(ap,pp)+"</br></br>");

// // Task 2
// function calculate_leap_Year(yearrr)
// {
// if(yearrr%4==0)
// {
//     document.write(yearrr+ " is a leap year");
// }
// else{
//     document.write(yearrr+ " is not a leap year");
// }
// }
// var yr=+prompt("Enter year");
// calculate_leap_Year(yr);

// // Task 3
// function calculate_S(a,b,c)
// {
// var S=0;
// S=(a+b+c)/2;
// return S;
// }
// function calculate_Area(a,b,c)
// {    
// var A=calculate_S(a,b,c)*((calculate_S(a,b,c)-a)*(calculate_S(a,b,c)-b)*(calculate_S(a,b,c)-c));
// return A;
// }
// var aaa=+prompt("Enter 1 coordinate of triangle");
// var bbb=+prompt("Enter 2 coordinate of triangle");
// var ccc=+prompt("Enter 3 coordinate of triangle");
// document.write("Area of rectangle "+calculate_Area(aaa,bbb,ccc)+"</br></br>");

// //Task 4
// function calculate_Average(mark1,mark2,mark3)
// {
// var Average=((mark1+mark2+mark3)/3);
// return Average;
// }
// function calculate_Percentage(mark1,mark2,mark3)
// {
// var total=300;
// var sum=mark1+mark2+mark3;
// var Percentage=((sum/total)*100)
// return Percentage;
// }
// function main_Function(mark1,mark2,mark3)
// {
// document.write("Averge is "+calculate_Average(mark1,mark2,mark3)+"</br></br>");
// document.write("Percentage is "+calculate_Percentage(mark1,mark2,mark3)+"</br></br>");
// }
// mark1=+prompt("Enter marks of subject 1 ");
// mark2=+prompt("Enter marks of subject 2 ");
// mark3=+prompt("Enter marks of subject 3 ");
// main_Function(mark1,mark2,mark3)

// // Task 5
// function custom_Indexof()
// {
//     var enterWord=prompt("Enter any word");
//     var enterCharacter=prompt("Enter character to find it's index in word");
//     for(var i=0; i<=enterWord.length; i++)
//     {
//     if(enterCharacter==enterWord[i])
//     {
//         document.write("Character "+enterCharacter+" of word "+enterWord+" is at index "+i+"</br></br>");
//     }
// }
// }
// custom_Indexof();

// // Task 6
// function delete_Vowel_From_Sentence(sentence)
// {
//     var copy_Sentence="";
//     for (var i=0; i<sentence.length; i++)
//     {
//     if(sentence[i]=="a"||sentence[i]=="e"||sentence[i]=="i"||sentence[i]=="o"||sentence[i]=="u")
//     {
//         continue;
//     }
//      else{
//      copy_Sentence+=sentence[i];
//     }
//     }
//     return copy_Sentence;
// }
// var sentence=prompt("Enter sentence");
// document.write("Sentence without vowel is "+delete_Vowel_From_Sentence(sentence));

// //Task 7
// function occurence()
// {
// var txt="Pleases read this application and give me gratuity";
// for(var i=0; i<txt.length; i++)
// { 
//     var combine=txt[i]+txt[i+1];
//     switch(combine)
//     {
//     case "ae":
//     document.write("ae"+", ");
//      break;
//     case "ai":
//         document.write("ai"+", ");
//         break;
//         case "ao":
//     document.write("ao"+", ");
//      break;
//     case "au":
//         document.write("au"+", ");
//         break;
//         case "ea":
//     document.write("ea"+", ");
//      break;
//     case "ei":
//         document.write("ei"+", ");
//         break;
//         case "eo":
//     document.write("eo"+", ");
//      break;
//     case "eu":
//         document.write("eu"+", ");
//         break;
//         case "ia":
//         document.write("ia"+", ");
//         break;
//         case "ie":
//         document.write("ie"+", ");
//         break;
//         case "io":
//         document.write("io"+", ");
//         break;
//         case "iu":
//         document.write("iu"+", ");
//         break;
//         case "ua":
//         document.write("ua"+", ");
//         break;
//         case "ui":
//         document.write("ui"+", ");
//         break;
//         case "uo":
//         document.write("uo"+", ");
//         break;
//         case "ue":
//         document.write("ue"+", ");
//         break;
//     }   
// }
// }
// occurence();
// document.write("</br></br>");

// // Task 8
// function meter(distance_In_Km)
// {
//     document.write("The "+distance_In_Km+ " kilometer in meter is "+distance_In_Km*1000+"</br></br>");
// }
// function feet(distance_In_Km)
// {
//     document.write("The "+distance_In_Km+ " kilometer in foot is "+distance_In_Km*3280.84+"</br></br>");
// }
// function inches(distance_In_Km)
// {
//     document.write("The "+distance_In_Km+ " kilometer in inches is "+distance_In_Km*39370.1+"</br></br>");
// }
// function centimeters(distance_In_Km)
// {
//     document.write("The "+distance_In_Km+ " kilometer in centimeters is "+distance_In_Km*100000+"</br></br>");
// }
// var distance_In_Km=prompt("Enter Distance b/w two cities in KM");
// meter(distance_In_Km);
// feet(distance_In_Km);
// inches(distance_In_Km);
// centimeters(distance_In_Km);

// // Task 9
// function workingHour()
// {
// var hour=+prompt("Enter the working hour of employee");
// if(hour>40)
// {
//     var enterHour=+prompt("Enter hours of employee after completing it's shift");
//     document.write("Your Official Working Hour is "+hour+"</br>");
//     document.write("The extra pay employee for overshift "+enterHour*12+"</br>");
// }
// else{
//     document.write("You have not completed your shift hour"+"</br></br>");
// }
// }
// workingHour();

// // Task 10
// function with_Draw_Amount()
// {
// var amount=prompt("Enter the amount to withdraw");
// var note_Of_Hundred=(amount)/100;
// var note_of_fifty=((amount)%100/50);
// var note_of_ten=((((amount)%100)%50)/10);  
// document.write("you will have "+Math.floor(note_Of_Hundred)+" hundred notes "+Math.floor(note_of_fifty)+" fift  y notes "+note_of_ten+" ten notes"+"</br>");

// }
// with_Draw_Amount()