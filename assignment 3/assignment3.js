//task 1 

document.writeln("task 1 \n");

var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS", "M. Phil.","PhD"];


document.writeln("<h1>Qualifications: </h1> \n");

for(i=0; i<qualifications.length;i++){
    document.writeln(i+1 + ") " + qualifications[i]);
}
document.writeln("");

//task 2

document.writeln("task 2 \n");

var students = ["Ali", "Haris", "Furqan"];
var scores = [320, 230, 480];
var totalScore = 500;
var percentages = [(320/500) *100 , (230/500) *100 , (480/500) * 100];

for(i=0; i< percentages.length; i++){
    document.writeln("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentages[i] + "%");
}
document.writeln("");
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

document.writeln("task 5 \n");
var arr = [3,"a","a","a",2,3,"a",3,"a",2,4,9,30];
var uniqueArray = [];
for (var i = 0; i < arr.length; i++){
    if (!uniqueArray.includes(arr[i])){
        uniqueArray.push(arr[i]);
   }
}
document.writeln("Initial array is : " + arr );
document.writeln("After removing repeating elements : " + uniqueArray +"\n" );


//task 6

document.writeln("task 6 \n");

var aCities = ["Karachi", "lahore", "Islamabad","Faisalabad"];
var o = ["th","st","nd","rd"];
for (var i = 0; i < aCities.length - 1 ; i++) {
    for (var j = 1; j < o.length; j++) {
            document.writeln(i+1 + o[i+1] + " choice is " + aCities[i]);
            break;
        
    }
}
document.writeln("");
//task 7

document.writeln("task 7 \n");
var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var uniqueArray = [];
for (var i = 0; i < b.length; i++){
    if (!uniqueArray.includes(b[i])  ){
        uniqueArray.push(b[i]);

   }
}
for (var j = 0; j < a.length; j++){
    if (!uniqueArray.includes(a[j])  ){
        uniqueArray.push(a[j]);
    }
}
document.writeln("a= "+ a);
document.writeln("b= "+ b);
document.writeln("After merging a & b and removing all duplicates: " + uniqueArray + "\n");

// task 8 
document.writeln("task 8");
document.writeln("<h1>Counting</h1>");
for (a =1 ; a<=15; a++){
    document.write( a, "," );
}

document.writeln("<h1>Reverse</h1>");
for (b=10 ; b>=1; b--){
    document.write( b, "," );
}

document.writeln("<h1>Even</h1>");
for (c=0 ; c<=20; c++){
    if(c%2 ==0){
        document.write( c, "," );
    }
}

document.writeln("<h1>Odd</h1>");
for (d=0 ; d<=20; d++){
    if(d % 2 ==1){
        document.write( d, "," );
    }
}

document.writeln("<h1>Series</h1>");
for (e=1 ; e<=10; e++){
    document.write( e*2000, "," );
    }
document.writeln("\n");


// task 9 
document.writeln("task 9");

var array = [24, 53, 78, 91, 12];
var largest= 0;

for (i=0; i<=array.length;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.writeln("Array items "+array);
document.writeln("The largest number is "+largest + "\n");


// task 10

document.writeln("task 10");
var array = [20,53,78,4,91,12];
var A = new Uint32Array([20,53,78,4,91,12]);


A = A.sort();

document.writeln("Initial array is A= " + array);
document.writeln("After sorting an array A= "+ A);

