// chap 1 & 2 task
alert("Error! Please Enter a Valid Password");
alert("Welcome to JS Land \n Happy Coding!");
alert("Welcome to JS Land \n confirm Happy Coding!");

//  chap 3 task

var aej = 19;
alert("I am" + " " + aej + " " + "Years Old");

var birthYear = 2002;
document.write("My birth year is " + birthYear);
document.write("<br/> Data type of decleared variable is " + typeof (birthYear));

for (var i = 0; i < 10; i++) {
    alert("You have visited this website " + i + " times");
    break;
}

var visitor = "<b>John Doe</b>";
var product = "<b>T-shirt</b>";
var quantity = "ordered <b>5</b>";
document.write("<br/>");
document.write("<br/>");
document.write(visitor + " " + quantity + " " + product);
document.write("(s) on XYZ Clothing store");


// chap 4 task

var names, users, admins;
var $n, n_, n9, n, user;
// var f+, /f, +5, 7n, 9user;

var head = "<h1>Rules for naming JS variables</h1>";
document.write("<br/>");
document.write("<br/>");
document.write(head);
var b1 = 01;
var b2 = "$";
var b3 = "_";
var b4 = "letters";
var b5 = "sensitive";
var b6 = "keywords";
document.write("<br/>");
document.write("Variable name can only contain, " + b1 + " " + b2 + " and " + b3 + " " + ". " + "For example : $my_1stVariable");
document.write("<br/>");
document.write("Variable must begin with a, " + b4 + " " + b2 + " or " + b3 + " " + ". " + "For example : $name_name or name");
document.write("<br/>");
document.write("Variable names are case " + b5);
document.write("<br/>");
document.write("Variable names should not be JS " + b6);


// chap 5 task

var x = 10;
var y = 4;
var z = x + y;
var a = x - y;
var b = x * y;
var c = x / y;
var d = x % y;
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("Sum of 10 & 4 is " + z);
document.write("<br/>");
document.write("Sub of 10 & 4 is " + a);
document.write("<br/>");
document.write("Mul of 10 & 4 is " + b);
document.write("<br/>");
document.write("Div of 10 & 4 is " + c);
document.write("<br/>");
document.write("Mod of 10 & 4 is " + d);


var un;
document.write("<br/>");
document.write("<br/>");
document.write("Value after variable declaration is " + un);
var iVal = 6
document.write("<br/>");
document.write("Intial Value : " + iVal);
var iIval = ++iVal;
document.write("<br/>");
document.write("Value after increment is : " + iIval);
var aIval = iVal + 6;
document.write("<br/>");
document.write("Value after addition is : " + aIval);
var dIval = --aIval;
document.write("<br/>");
document.write("Value after decrement is : " + dIval);
var rIval = dIval / 3;
document.write("<br/>");
document.write("The Remainder is : " + rIval);


var noOfTicket = 5;
var perTicketAmount = 600;
document.write("<br/>");
document.write("<br/>");
document.write("Total cost to buy 5 tickets to a movie is : " + (perTicketAmount * noOfTicket) + "PKR");


document.write("<br/>");
document.write("<h3>Table Of 4</h3>");

var t1 = "4";
var t2 = "x";
var t3 = "=";
for (var i = 1; i < 11; i++) {
    document.write(t1 + " " + t2 + " " + i + " " + t3 + " " + (i * 4) + "<br/>");
}


var fahren = 25;
var cels = 70;

document.write("<br/>");
document.write("70Fahrenheit is " + ((cels - 32) * (5 / 9)) + "Celsius");
document.write("<br/>");
document.write("25Celsius is " + ((fahren * (9 / 5)) + 32) + "fahrenheit");


var shopping = "<h1>Shopping Cart</h1>";
document.write("<br/>");
document.write(shopping);
document.write("<br/>");

var p1 = 650;
var p2 = 100;
var q1 = 3;
var q2 = 7;
var sc = 100;
document.write("Price of item 1 is " + p1);
document.write("<br/>");
document.write("Quantity of item 1 is " + q1);
document.write("<br/>");
document.write("Price of item 2 is " + p2);
document.write("<br/>");
document.write("Quantity of item 2 is " + q2);
document.write("<br/>");
document.write("Shipping charges is " + sc);
document.write("<br/>");
document.write("<br/>");
document.write("Total cost of your order is " + ((q1 * p1) + (q2 * p2) + sc));


var markSheet = "<h1>Marks Sheet</h1>";
document.write("<br/>");
document.write(markSheet);
var tm = prompt("Enter your Total Marks :");
var om = prompt("Enter your Obtained Marks :");
var percentage = (om * 100) / tm;
percentage = percentage.toFixed(3); 
document.write("Total Marks " + tm);
document.write("<br/>");
document.write("Obtained Marks " + om);
document.write("<br/>");
document.write("Percentage " + percentage);


document.write("<br/>");
document.write("<br/>");
document.write("<h1>Currency in PKR</h1>");
document.write("<br/>");
document.write("Total Currency in PKR : " + ((10 * 104.80) + (25 * 28)));

var any = 4;
document.write("<br/>");
document.write("<br/>");
document.write("Variable 4 is Add 5 : " + (any + 5) + " _Mul by 10 : " + (any * 10) + " _Div by 2 : " + (any / 2));

var cy = 2021;
var by = prompt("Enter Your Birth Year :");
document.write("<br/>");
document.write("<br/>");
document.write("Current Year : " + cy);
document.write("<br/>");
document.write("Birth Year : " + by);
document.write("<br/>");
document.write("Your Age is : " + (cy - by));

var pie = 3.142;
var rad = prompt("Enter Your Circle Radius :");
document.write("<br/>");
document.write("<br/>");
document.write("<h1>The Geometrizer</h1>");
document.write("<br/>");
document.write("Radius Of Circle is : " + rad);
document.write("<br/>");
document.write("The Circumference is : " + (2 * pie * rad));
document.write("<br/>");
document.write("The Area is : " + (pie * rad * rad));


document.write("<br/>");
document.write("<br/>");
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br/>");
document.write("Favourite Snack : chocolate chip");
var ca = 15
document.write("<br/>");
document.write("Current age : " + ca);
var ema = 65
document.write("<br/>");
document.write("Estimate Maximum Age : " + ema);
var spd = 3
document.write("<br/>");
document.write("Amount of snacks per day : " + spd);
document.write("<br/>");
document.write("You Will need " + ((ema * spd) - (ca * spd)) + " chocolate chip to last you until the ripe old age of " + ema);


// chap 6-9

let h = 10;

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("The value of h is : " + h);
document.write("<br/>");
document.write("<br/>");
document.write("-------------------------------------");
document.write("<br/>");
document.write("<br/>");
document.write("The value of ++h is : " + ++h);
document.write("<br/>");
document.write("Now the value of h is : " + h);
document.write("<br/>");
document.write("<br/>");
document.write("The value of h++ is : " + h++);
document.write("<br/>");
document.write("Now the value of h is : " + h);
document.write("<br/>");
document.write("<br/>");
document.write("The value of --h is : " + --h);
document.write("<br/>");
document.write("Now the value of h is : " + h);
document.write("<br/>");
document.write("<br/>");
document.write("The value of h-- is : " + h--);
document.write("<br/>");
document.write("Now the value of h is : " + h);

let k = 2;
let l = 1;
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("The value of k , l is : " + k + " . " + l);
document.write("<br/>");
document.write("<br/>");
document.write("The value of --k is : " + --k);
document.write("<br/>");
document.write("The value of (--k - --l) is : " + (--k - --l));
document.write("<br/>");
document.write("The value of (--k - --l + ++l) is : " + (--k - --l + ++l));
document.write("<br/>");
document.write("The value of (--k - --l + ++l + l--) is : " + (--k - --l + ++l + l--));


document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
var totalMarks = 110;
var english = 80;
var math = 100;
var urdu = 90;
var peng = ((english * 100) / totalMarks).toFixed(2);
var pmath = ((math * 100) / totalMarks).toFixed(2);
var purdu = ((urdu * 100) / totalMarks).toFixed(2);
var nTotalMarks = (totalMarks + totalMarks + totalMarks);
var obtMarks = (english + math + urdu);
var nPercentage = ((obtMarks * 100) / nTotalMarks).toFixed(2);
document.write("<table>");

document.write("<tr>");
document.write("<td><b>Subject</b></td> ");
document.write("<td><b>Toatal Marks</b></td> ");
document.write("<td><b>Obtained Marks</b></td> ");
document.write("<td><b>Percentage</b></td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td><b>English</b></td> ");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + english + "</td>");
document.write("<td>" + peng + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td><b>Math</b></td> ");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + math + "</td>");
document.write("<td>" + pmath + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td><b>Urdu</b></td> ");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + urdu + "</td>");
document.write("<td>" + purdu + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td><b> </b></td> ");
document.write("<td><b>" + nTotalMarks + "</b></td>");
document.write("<td><b>" + obtMarks + "</b></td>");
document.write("<td><b>" + nPercentage + "%" + "</b></td>");
document.write("</tr>");

document.write("</table>");



// chap 9 - 11

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

let khi = prompt("Enter Your City Name :").toLowerCase();

if (khi === "karachi") {
    alert("Welcome to City Of Lights");
} else {
    alert("Welcome");
}

let gendr = prompt("Enter Your Gender :").toLowerCase();

if (gendr === "male") {
    alert("Good Morning Sir");
} else if (gendr === "female") {
    alert("Good Morning Ma`am");
} else {
    alert("Good Morning");
}

let trafficLights = prompt("Enter Traffic Signals Lights :").toLowerCase();

if (trafficLights === "red") {
    alert("Must Stop");
} else if (trafficLights === "yellow") {
    alert("Ready To Move");
} else if (trafficLights === "green") {
    alert("Move Now");
} else {
    alert("Opps Sorry!");
}

let carFuel = prompt("Enter Your Remaining Car Fuel :");

if (carFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("Your Fuel is Ok Enjoy your Drive");
}

let m = 3;

if (++m === 4) {
    alert("given condition for variable m is true");
}