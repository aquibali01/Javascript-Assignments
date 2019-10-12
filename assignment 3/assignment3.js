//task 1 

document.writeln("task 1 \n");

var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS", "M. Phil.","PhD"];


document.writeln("<h1>Qualifications: </h1> \n");
document.writeln("1) " + qualifications[0] + " \n");
document.writeln("2) " + qualifications[1] + " \n");
document.writeln("3) " + qualifications[2] + " \n");
document.writeln("4) " + qualifications[3] + " \n");
document.writeln("5) " + qualifications[4] + " \n");
document.writeln("6) " + qualifications[5] + " \n");
document.writeln("7) " + qualifications[6] + " \n");
document.writeln("8) " + qualifications[7] + " \n");

//task 2

document.writeln("task 2 \n");

var students = ["Ali", "Haris", "Furqan"];
var scores = [320, 230, 480];
var totalScore = 500;
var percentages = [(320/500) *100 , (230/500) *100 , (480/500) * 100];
document.writeln("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + percentages[0] + "%\n");
document.writeln("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + percentages[1] + "%\n");
document.writeln("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + percentages[2] + "%\n");

//task 3

document.writeln("task 3 \n");

var colors = ["purple", "orange", "magenta"];
document.writeln( "Initial colors list : " + colors + "\n");
colors.unshift(prompt("Enter the color you want to add in the beginning"));
document.writeln("After adding the color in the beginning of list : " +  colors + "\n");
colors.push(prompt("Enter the color you want to add at the end"));
document.writeln("After adding the color at the end of list : " +  colors + "\n");
colors.unshift( "pink", "cyan");
document.writeln("After adding two colors in the beginning of list : " +  colors + "\n");
colors.shift();
document.writeln("After deleting the color in the beginning of list : " +  colors + "\n");
colors.pop();
document.writeln("After deleting the color at the end of list : " +  colors + "\n");
var index = parseInt(prompt("Enter the index where you want to insert the color"));
var color = prompt("Enter the color you want to add to the specified index");
colors.splice(index, 0 , color);
document.writeln("After inserting the " + color + " at "+ index + " of list : " +  colors + "\n");
var indexToDelete = parseInt(prompt("Enter the index where you want to start deleting the colors"));
var colorsToDelete = prompt("Enter the no. of colors to delete");
colors.splice(indexToDelete, colorsToDelete);
document.writeln("After deleting  " + colorsToDelete + " elements from "+ indexToDelete + " of list : " +  colors + "\n");

// //task 4

document.writeln("task 4 \n");


var cities = ["Karachi", "Lahore" , "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,5);

document.writeln("<h1>Cities list :</h1> \n");
document.writeln(cities + " \n");
document.writeln("<h1>Selected cities list : </h1> \n");
document.writeln(selectedCities + " \n");
 
//task 5

// document.writeln("task 5 \n");
// var arr1 = [3,"a","a","a",2,3,"a",3,"a",2,4,9,30];
// var isFound = true;
// var arr2 = [];
// for (var i = 0; i = arr1.length; i++);
//     if (i in varr2){
//         isFound = false;
//             break
//     }else if {
//         varr2.push(i);
//     }

//task 5

document.writeln("task 5 \n");
var arr1 = [3,"a","a","a",2,3,"a",3,"a",2,4,9,30];
var arr2 = [];
for (var i = 0; i < arr1.length; i++);
    if (arr2.includes(arr1[i])=== false){
        arr2.push(arr1[i]);
    }
document.writeln(arr2 + " \n");
