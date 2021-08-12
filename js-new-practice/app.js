"use strict";

//chap # 1

// alert("Hello world from js");
// window.alert("Hello world from js");

//Variable for strings

// var name = "mark";
// alert(name);
// name = "Ace";

// var nationality;
// nationality = "USA";
// alert(nationality);

// var floodle = "Mark";
// var name = "Mark";
// var floodle = "Mark";
// alert(floodle);

//variables for numbers

// var weight = 150;
// var plus = weight + 25;
// alert(plus);

// var a = +"25";
// var b = a + 30;
// alert(b);

// var stpresident = "washington";
// var prezWhCome1st = "washington";
// alert(stpresident);

//variables names must be in a camel case format

//chap 5: Math EXpression

// var popularNum = 4;
// alert(popularNum);

// var num = 10;
// var totalPop = num * 30;
// alert(totalPop);

// var num = 10;
// var anotherNum = 200;
// var totalNum = num + anotherNum;
// console.log(totalNum);

//% gives us the remainder
// var modules = 91 % 3;
// console.log(modules);

// var modules = 9 % 3;
// console.log(modules);

//Chap#6: Math Expression like num++ or we can write num = num + 1

// var num = 1;
// var newNum = num++; //post increment
// console.log(newNum);
//++sign give the plus 1  result and after ++ will get the result same

// var num = 1;
// var newNum = ++num; //pre increment
// console.log(newNum);

// var num = 1;
// var newNum = --num; //pre decrement
// console.log(newNum);

// var b = 1;
// b++;
// console.log(b);

// var b = 5;
// //b--;
// --b;
// console.log(b);

// var num = 42;
// console.log(num++);
// console.log(num);
// var num1 = num++ + ++num;
// console.log(num1);

// var num = 42;
// var total = ++num + num++; //43+1 + 42 = 86
// console.log(total);

// var num = 42;
// var total = --num + num--; //40 + 42;
// console.log(total);

// var num = 1;
// var total = num++;
// console.log(total);

//Chap 7: Eliminating ambiguity

// var totalCost = 1 + 3 * 4;
// console.log(totalCost);

// var resultOfCompilation = (2 * 4) * 4 + 2; //4 x 2 x 4 + 2 = 34
// var resultOfCompilation = 2 * 4 * 4 + 2;
// console.log(resultOfCompilation);

//Chap 8: Concatenating strings

// var a = "Hello world ";
// var b = a.concat("from Wasi");
// console.log(b);

// var str = "Wasi";
// console.log("Hello " + str + "!");

// var arr1 = ["wasi", "adil", "osama", "abubakar"];
// var arr2 = ["mercedes", "audi", "bmw", "pagani"];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);

// var str = "Hello world ";
// var str2 = str.concat("from Iqra uni");
// console.log(str2);

// var names1 = ["osama", "wasi", "adil", "haseeb"];
// var names2 = ["kashif", "ukasha", "mohsin"];
// var finalNames = names1.concat(names2);
// console.log(finalNames);

// var totn_string = "Tech";
// console.log(totn_string.concat(" On", " Tech", " Net    "));

// alert("2" + "2");

//Chap # 9: Prompts

// var numberOfCats = prompt("How many cats are there?");
// var toManyCats = numberOfCats + 1;
// console.log(toManyCats);

// var name = window.prompt("Please Enter Your Name?");
// if (name != null) {
//   //if the name is not empty
//   message = "Hello " + name + " ! How are u doing today?";
//   console.log(message);
// }

// const aNumber = Number(prompt("Enter any Number", ""));
// console.log(aNumber);

// var starSign = window.prompt("What is your Star");
// if (starSign.toLowerCase() === "scorpio") {
//   alert("wow! thats is so frikin beautiful");
// } else {
//   alert("Not available in the list");
// }

//Chap 10: If else statements

// var city = prompt("Enter a city name");
// if (city === "vetican") {
//   console.log("correct!");
// } else {
//   console.log("not available");
// }

// if (10 > 5) {
//   var out_come = "If block";
// }
// console.log(out_come);

// if ("cat" === "dog") {
//   console.log("if Block");
// } else {
//   console.log("else block");
// }

//Chap 11:Comparison operators ==== compare 2 values and check data types

// var ticketNum = prompt("Enter your ticket number");
// if (ticketNum !== 49058) {
//   console.log("seat is available");
// }

//Chap 12: If else conditions

// var person = prompt("Where does pop live");
// if (person === "sanantonio") {
//   console.log("correct");
// } else {
//   console.log("It is not correct");
// }

// var person = prompt("Where does pop live");
// if (person == "vetican") {
//   console.log("Thats right");
// }
// if (person !== "vetican") {
//   console.log("wrong answer");
// }

// var num = prompt("Enter a number");
// if (num > 0) {
//   console.log("The number is+ve");
// } else {
//   console.log("The if statement is easy");
// }

// var time = prompt("Enter a time");
// if (time < 12) {
//   console.log("Good Morning");
// } else if (time < 14) {
//   console.log("Good Afternoon");
// } else {
//   console.log("good evening");
// }

// var city = prompt("ENTER A CITY NAME");
// var age = Number(prompt("HOW OLD ARE U"));
// if (city === "karachi" && age === 20) {
//   console.log("right");
// } else {
//   console.log("error 404");
// }

//Chap 13: Testing set of conditions

// var weight = prompt("enter weight");
// var time = prompt("enter time");
// if (weight > 300 && time < 6) {
//   console.log("COME TO OUR TRYOUT!");
// } else {
//   console.log("bad scene");
// }

// var SAT = 3;
// var avg = 5;
// var GPA = prompt("enter gpa");
// var sport = prompt("enter sport");
// if (SAT > avg || GPA > 2.5 || sport === "football") {
//   console.log("shi chal rha hai..");
// } else {
//   console.log("Have you looked into appliance repair?");
// }

// var age = prompt("enter your age");
// var res = prompt("enter your resident");
// if (age > 65 || (age < 21 && res === "usa")) {
//   console.log("this is so great");
// }

// var i = prompt("enter a num");
//var i = 20;
// if (i === 10) {
//   console.log("i is 10");
// } else if (i == 25) {
//   console.log("i is 15");
// } else if (i == 20) {
//   console.log("i is 20");
// } else {
//   console.log("i is not present");
// }

// var num = prompt("Enter a number");
//var num = 20;
// if (num == 20) {
//   console.log("num is 20");
// } else if (num == 35) {
//   console.log("num is 35");
// } else {
//   console.log("wrong no");
// }

//Chap 15 Array:

// var arr = ["wasi", "adil", "haseeb"];
// arr.sort();
// console.log(arr);

//it will sort alphabetically by default

// var cities = [
//   "karachi",
//   "islamabad",
//   "lahore",
//   "peshawar",
//   "bhawalpur",
//   "mityari",
// ];
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);
// console.log(cities[3]);
// console.log(cities[4]);
// console.log(cities[5]);

//Chap 16 : Adding and removing elements in array

// var pets = [];
// pets[0] = "dogs";
// pets[1] = "cats";
// pets[2] = "donkey";
// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";
// pets[2] = "ant"; //it assign a new value replaced by the donkey pets[2]
// pets.pop();
// pets.push("Fox", "leapord"); //we can add multiple elements
// console.log(pets);

// var colors = ["RED", "BLUE", "GREEN", "PURPLE"];
// console.log(colors.toString()); //converts to string
// console.log(colors.join()); //converts to ,
// console.log(colors.join("-")); //converts to earth-moon-sun
// console.log(colors.join("")); //simply write without space

//Chap 17: Removing, inserting, and extracting elements

//var names = ["wasi", "daniyal", "adil", "moiz", "haseeb"];
//var final = names.shift(); //shift method removes the 1st element in an array
//var final = names.unshift("Luigi", "Robert"); //add elements in the beginning of the array
//console.log(names);

//var cars = ["mercedes", "Audi", "bmw", "pagani"];
// var finalCars = cars.push("tesla", "bentley");
//var finalCars = cars.pop();
//var finalCars = cars.shift();
//var finalCars = cars.unshift("tesla", "corolla");
//console.log(cars);

// var cars = ["mercedes", "audi", "bmw", "bentley"];
// var final = cars.splice(1, 3, "tesla", "chevrolet");
// console.log(cars);

// var stu = ["wasi", "daniyal", "adil", "haseeb", "moiz"];
// stu.splice(1, 2, "george", "franklin"); //it remove element from index 1 and remove element 2 elements and add my new elements...
// console.log(stu);

// var arr = ["foo", "bar", 10, "qux"];
//arr.splice(1, 1, "furniture");
//arr.splice(2, 1, "merces");
// console.log(arr);

// var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// myFish.splice(2, 0, "drum"); //it deletes nothing it justs add the element after 2nd index..
// console.log(myFish);

//slice method
//syntax for .slice(start, end);

// var animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2));

// var animals = ["ant", "bison", "camel", "duck", "elephant", "aligator"];
// console.log(animals.slice(2, 5));

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);
// console.log(citrus);

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2)); //camel,duck,elephant
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));

// Original Array
// var arr = [23, 56, 87, 32, 75, 13];
// console.log(arr.slice(2, 4)); //87, 32

// var Mifflin = ["Jim", "Pam", "Michael", "Dwight", "Creed", "Stanley"];
//var final = Mifflin.slice(1, 5); // it start from 1 and end with 5 means last remove
//var final = Mifflin.slice(2, 5);
//var final = Mifflin.slice(-1);
// var final = Mifflin.slice(-4, -1);
// console.log(final);

// var FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = FRUITS.slice(-3, -1);
// console.log(citrus);

// var michael = "People say I'm the best boss.";
//console.log(michael.slice(15));
//console.log(michael.slice(11, -1));
//console.log(michael.slice(-5)); //start with boss.
//console.log(michael.slice(-10, -5));

// var str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.slice(31));

/*Use string concatenation and two slice() methods to print
'JS' from 'JavaScript'.*/

// var lang = "JavaScript";
// console.log(lang.slice(0, 1) + lang.slice(4, 5)); //we get JS

// var arr = [1, 2, 3, 4, 5];
// var sliceArray = arr.slice(1, 2); //2
// arr.splice(1, 2, ...sliceArray);
// console.log(arr);

// var names = ["wasi", "daniyal", "adil", "haseeb", "osama"];
// var final = names.slice(1, 2); //daniyal
// names.splice(1, 2, ...final);
// console.log(names);

//spread operator

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var numListClone = [...num];
// console.log(numListClone);

// var parts = ["shoulders", "knees", "wrist", "ankles", "hip", "neck"];
// var lyrics = ["songs", "games", ...parts];
// console.log(lyrics);

// var odds = [1, 3, 5, 7, 9];
//var combined = [2, 4, 6, 8, ...odds];
//OR
// var combined = [...odds, 2, 4, 6, 8];
// console.log(combined);

// var rivers = ["ravi", "jhelum", "chenab"];
// var riles = ["riles", "amazon", "gizri"];
// var finalRivers = [...rivers, ...riles]; //we can also use to concatenating
// console.log(finalRivers);

// var char = ["a", ..."bc", "d"];
// console.log(char );
//'BC'string, it spreads out each individual character of the string 'BC' into individual characters.

//Chap 18: For loops of

// var citiesToCheck = prompt("ENTER YOUR CITY");
// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "HONOLULU",
// ];
// if (citiesToCheck === cleanestCities[0]) {
//   console.log("the city is at index 1");
// } else if (citiesToCheck === cleanestCities[1]) {
//   console.log("the city is at index 2");
// } else if (citiesToCheck === cleanestCities[2]) {
//   console.log("the city is at index 3");
// } else if (citiesToCheck === cleanestCities[3]) {
//   console.log("the city is at index 4");
// } else if (citiesToCheck === cleanestCities[4].toLowerCase()) {
//   console.log("the city is at index 5");
// } else {
//   console.log("not in the list");
// }//

// var citiesToCheck = prompt("ENTER YOUR CITY");
// var cleanestCities = ["karachi", "isb", "lahore", "peshawar", "bhawalpur"];
// for (var i = 0; i < cleanestCities.length; i++) {
//   if (citiesToCheck === cleanestCities[i]) {
//     console.log("yes! your city is a clean city");
//   }
// }

//in loop i stands for iteration which means process repeatation

//>= // greater than or equal
//<= // less than or equal
//> // greater than
//< // less than
//== // equals
//=== // strictly equals
// != // not equals
// !== // stricly not equals

// var inputUni = prompt("Enter your University");
// var uni = ["iba", "iqra", "cbm", "szabist", "bahria", "fast"];
// for (var i = 0; i < uni.length; i++) {
//   if (inputUni === uni[i]) {
//     console.log("yes it is recognized by HEC");
//   }
// }

// var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for (var i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// var arr = ["wasi", "daniyal", "adil", "haseeb"];
// for (var i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

//Chap 19 flags boolean array length and loopus interrupts

// var matchFound = false;
// var citiesToCheck = prompt("ENTER YOUR CITY");
// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "HONOLULU",
// ];
// for (var i = 0; i < cleanestCities.length; i++) {
//   if (citiesToCheck === cleanestCities[i]) {
//     matchFound = true;
//     console.log("yes! it is one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false) {
//   console.log("It is not in the list");
// }

// var matchFound = false;

// var citiesToCheck = prompt("ENTER YOUR CITY");
// var cleanestCities = [
//   "Cheyenne",
//   "Santa Fe",
//   "Tucson",
//   "Great Falls",
//   "HONOLULU",
// ];
// var numElements = cleanestCities.length;
// for (var i = 0; i < numElements; i++) {
//   if (citiesToCheck === cleanestCities[i]) {
//     matchFound = true;
//     console.log("yes! it is one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false) {
//   console.log("It is not in the list");
// }

//break usages

// for (var a = 0; a < 10; a++) {
//   if (a === 3) {
//     break;
//   }
//   console.log(a);
// }

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; //stop the function
//   }
//   console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;//it removes 3 from the loop and execute the whole code
//   }
//   console.log(i);
// }

//Chap 20: For Loop nested

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var finalNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     finalNames.push(firstNames[i] + lastNames[j]);
//   }
//   console.log(finalNames);
// }

//nested for loops
// for (var x = 0; x < 10; x++) {
//   for (var y = 0; y < 10; y++) {
//     console.log("x: " + x + ", y: " + y);
//   }
// }

// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// for (var a = 1; a <= 100; a = a + 10) {
//   for (var b = a; b < a + 10; b++) {
//     console.log(b);
//   }
// }

//haseeb ka sawal
// let str = "Apple,Banana,Kiwi";
// console.log(str.slice(-12, -5));

// for (var i = 0; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(j + " ");
//   }
//   document.write("</br>");
// }

// for (var i = 5; i >= 1; i--) {
//   for (var j = 0; j < i; j++) {
//     document.write(i + " ");
//   }
//   document.write("<br>");
// }

// for (var a = 5; a >= 1; a--) {
//   for (var b = a; b >= 1; b--) {
//     document.write(b + " ");
//   }
//   document.write("<br>");
// }

// for (var a = 0; a <= 5; a++) { //outer loop
//   for (var b = 1; b <= a; b++) { //inner loop
//     document.write("*" + " ");
//   }
//   document.write("</br>");
// }

//exercise will be done later

//Chap 21: Changing Case
// var citiesToCheck = prompt("Enter your city name");
// var cleanestCities = [
//   "karachi",
//   "KARACHI",
//   "islamabad",
//   "lahore",
//   "bhawalpur",
//   "hyderabad",
// ];
// for (var i = 0; i < citiesToCheck.length; i++) {
//   if (citiesToCheck.toLowerCase() === cleanestCities[i]) {
//     console.log("thats right");
//   }
// }

// var str = "HELLO WORLD FROM JS";
// console.log(str.toLowerCase());

//Chap 22 Strings: Measuring length and extracting parts

//1st word is capital if the user is enter any text
// var cityToCheck = prompt("Enter a city name");
// var firstChar = cityToCheck.slice(0, 1);
// var otherChar = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// var cappedCity = firstChar + otherChar;
// console.log(cappedCity);

//more efficient

// var footballer = prompt("Enter footballer name");
// var firstChar = footballer.toUpperCase().slice(0, 1);
// var otherWords = footballer.toLowerCase().slice(1);
// var finalWord = firstChar + otherWords;
// console.log(finalWord);

// var month = prompt("Enter a month with full spelling");
// var charInMonth = month.length;
// if (charInMonth > 3) {
//   Final = month.toUpperCase().slice(0, 3);
//   console.log(Final);
// }

// var str = prompt("Enter String with spaces");
// for (var i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 2) === "") {
//     alert("NO DOUBLE SPACES");
//     break;
//   }
// }

//Chap 23:Finding Segments

// var ages = [10, 23, 19, 20];
// var b = ages.indexOf(20);
// console.log(b);

// var names = "wasi/";
// var b = names.indexOf("i"); //start from beginning
// var c = names.lastIndexOf("/"); //start from last take string '/'
// console.log(c);
// console.log(b);

// var text = "World war ii";
// var b = text.indexOf("i");
// console.log(b);

// var text = "World War II";
// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//   text =
//     text.slice(0, firstChar) + "the sec world war" + text.slice(firstChar + 12);
//   console.log(text);
// }

// var text = "Muhammad wasi";
// var firstChar = text.indexOf("Muhammad wasi");
// if (firstChar !== -1) {
//   text =
//     text.slice(0, firstChar) +
//     "Haseeb Alam Rafique" +
//     text.slice(firstChar + 13);
//   console.log(text);
// }

// var paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// var searchTerm = "dog";
// var indexOfFirst = paragraph.indexOf(searchTerm);
// console.log("we get " + searchTerm + " from the para");

//indexO(searchValue, fromIndex);

// var str = "Hello, World!";
// console.log(str.indexOf("o", -5));

// var arr = ["daniyal", "adil", "haseeb", "moiz"];
// var position = arr.indexOf("haseeb", 1); //value, index
// console.log(position);

// var text = "To be or not to be.";
// console.log(text.lastIndexOf("be"));

//Chap # 24: Finding Charater at a Location

// var str = "Muhammad Wasi";
// console.log(str.slice(0, 1));
// console.log(str.charAt(0));

// var sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence.charAt("8"));

// var str = "Hello World";
// console.log(str.charAt(str.length - 1));

// var str = "You are still! having pain in your lower back and knees";
// for (var i = 0; i < str.length; i++) {
//   if (str.charAt(i) === "!") {
//     console.log("! mark found successfully");
//     break;
//   }
// }

// var str = "world war II";
// console.log(str.replace("world war II", "wasi"));

//replace adil with arnold without replace method
// var a = ["wasi", "Adil", "haseeb"];
// for (var b = 0; b < a.length; b++) {
//   a.splice(0, 3, "arnold");
//   console.log(a);
// }

// var a = "hello world";
// var b = a.replace("hello world", "harry porter");
// console.log(b);

// var startText = "Yes, I said no, it is, yes.";
// Replace with 'g'-global modifier
// newText = startText.replace(/yes/g, "no")
// Replace with modifiers 'g'-global and 'i'-case insensitive
// var newText = startText.replace(/yes/gi, "no");
// console.log(newText);

// var text = "World War II";
// var newText = text.replace(/World War II/g, "second world war");
// console.log(newText);

// var str = "web dev make your skills so frikin high";
// var final = str.replace(/high/g, "beautiful");
// console.log(final);

//g = global =
// var a = "muhammad wasi";
// var b = a.replace(/muhammad wasi/gi, "arnold schwarneizer");
// console.log(b);

//Chap # 26 Rounding Numbers

//Math.round it simply rounds to the closest whole number.
// console.log(
//   Math.round(0.8323932832),
//   Math.round(-5.95),
//   Math.round(1.75),
//   Math.round(3.5)
// );

//Math.floor //null gives 0 NaN

//It decrease the value to exact value like 1.05 = 1 & 5.95 to 5;
// console.log(
//     Math.floor(5.95),
//     Math.floor(5.868666655),
//     Math.floor(1.4544),
//     Math.floor(0.9999),
//   Math.floor(-45.95),
//   Math.floor(-34.34443),
//   Math.floor(1.05),
//Math.floor(160.055335);
// );

//Math.ceil forcely increase the value like 1.0999999 = 2

// console.log(Math.ceil(null));
// console.log(
//   Math.ceil(4),
//   Math.ceil(0.000001),
//   Math.ceil(0.99999),
//   Math.ceil(1.25),
//   Math.ceil(-1.99999),
//   Math.ceil(1.09999),
//   Math.ceil(7.004),
//   Math.ceil(-7.004)
// );

//console.log(Math.random());
// var bigDecimal = Math.random();
// var improvedNum = bigDecimal * 6 + 1;
// var starsOfNum = Math.floor(improvedNum);
// console.log(starsOfNum);

// var random = Math.random();
// var impNum = random * 5 + 3;
// console.log(impNum);
// var finalNum = Math.floor(impNum);
// console.log(finalNum);

//Chap # 28: Converting strings into integer and decimal

//syntax: parseInt(value, radix) //radix must be a decimal value by default it is 10;

// var age = parseInt(prompt("what is your age?"));
// console.log(age);

//console.log(parseInt(10.256));

// var str = parseInt("2018@greekforgreeks");
// console.log(str);

// var n = parseInt("1000");
// console.log(n);

//console.log(parseInt("21 7 2021"));

//radix can be b/w 2 to 36
//10 is by default value of decimal

// console.log(parseInt("100", 36));
// console.log(parseInt("100", 10));
// console.log(parseInt("100", 11));
// console.log(parseInt("11", 2));
// console.log(parseInt("20", 36));

//ParseFloat converts strings to floating point numbers like 10.9098 = 10.9098
//console.log(parseFloat("10.0999"));
// console.log(parseFloat("88.89"));
// console.log(parseFloat("34 2 2021"));
// console.log(parseFloat("   60   "));
// console.log(parseFloat("40 years old"));
// console.log(parseFloat("he was 40"));
// console.log(parseFloat("40 he was"));
// console.log(parseFloat("10.43545758934"));

//Chap 29: Converting strings to numbers, numbers to strings

// var intString = "24";
// console.log(Number(intString));

// var FloatingNum = "10.7688";
// console.log(Number(FloatingNum));

// var num = 12345;
// console.log(num.toString());

// var str = "Hello world";
// console.log(str.toString());

//Chap: 30 Controlling the length of decimals

// var num = 5.905044;
// var n = Number(num.toFixed(2));
// console.log(n);

// var a = "10.4378437";
// var b = Number(a).toFixed(2);
// console.log(b);

// var n = 10;
// var t = n.toFixed(2);
// console.log(t);

// var num = 109765;
// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
//   str = str.slice(0, str.length - 1) + "7";
// }
// num = Number(str).toFixed(2);
// console.log(num);

//Chap # 31: Getting current data & time

//new Date tells te current data and time in the device
// var rightNow = new Date();
// console.log(rightNow);

//get day
// var date = new Date();
// var day = date.getDay();
// console.log(day); //it returns friday which means '5'
//Since it gives us the num not the day name to we can do in the next step

// var dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// var currentDate = new Date();
// var day = currentDate.getDay();
// var TodayDayName = dayNames[day];
// console.log(TodayDayName);
//in this we get the day Name

//Chap # 32: Parts of the date and time

// var d = new Date();
// var currentMonth = d.getMonth();
// var dateOfMonth = d.getDate();
// var currentYear = d.getFullYear();
// var currentHour = d.getHours();
// var currMin = d.getMinutes();
// var currSec = d.getSeconds();
// var currMills = d.getMilliseconds();
// var millsSince = d.getTime();
// console.log(millsSince);
// console.log(currSec);
// console.log(currMills);
// console.log(currMin);
// console.log(currentHour);
// console.log(currentYear);
// console.log(dateOfMonth);
// console.log(currentMonth);

// get name of the month in above we get num of months in
// var mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var date = new Date();
// var month = date.getMonth();
// var monthName = mL[month];
// console.log(monthName);
//we get July

//Chap # 33: Specifying a date and time

// var today = new Date();
// var doomsDay = new Date("june 30, 2035");
// var msToday = today.getTime();
// var msDoomsDay = doomsDay.getTime();
// //now cal the difference between
// var msDiff = msDoomsDay - msToday;
// var dayDiff = msDiff / (1000 * 60 * 60 * 24);
// var dDiff = Math.floor(dayDiff);
// console.log(dDiff);

//or we can do shortend

// var today = new Date().getTime();
// var doomsDay = new Date("june 30, 2035").getTime();
// var msDiff = doomsDay - today;
// var dayDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// console.log(dayDiff);
// var d = new Date("july 21, 1983 23:25:00"); //we can specify the own time
// console.log(d);

//end

//Chap 34: Changing elements of a date and time

// var date = new Date();
// date.setFullYear(2002);
//console.log(date);
//console.log(date.getFullYear());

// var d = new Date();
// d.setMonth(11);
// console.log(d); //gives december
// console.log(d.getMonth());

// var d = new Date();
// d.setDate(15);
// console.log(d);

// var d = new Date();
// d.setDate(16)
// console.log(d);

// var d = new Date();
// d.setHours(7);
// console.log(d);

// var d = new Date();
// d.setMinutes(40);
// console.log(d);

// var d = new Date();
// d.setSeconds(20);
// console.log(d);t

// var d = new Date();
// d.setMilliseconds(16);
// console.log(d);

//to calculate age

// var enterAge = prompt("Enter your age how old are you?");
// var date = new Date();
// var year = date.getFullYear();
// function dateOfBirth(birthYear) {
//   var currentDate = new Date();
//   var currentYear = currentDate.getFullYear() - 1;
//   var age = currentYear - birthYear;
//   return age;
// }
// var calculatedAge = dateOfBirth(enterAge);
// console.log(calculatedAge);

//Chap 35:  Functions

//syntax
//function helloWorld(parameter1, parameter2) {
//code body
//}
//helloWorld(argument1, argument2) //call function and define as many as we need

// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   console.log("The time is " + theHr + " and mintues are" + theMin);
// }
// tellTime();

// function helloWorld() {
//   console.log("Hello World");
// }
// helloWorld();
// helloWorld();
// helloWorld();

// function tryName(fname, lname) {
//   console.log("hello " + fname + lname);
//   return;
// }
// tryName("muhammad", " wasi");
// tryName("Kashif", " Rahim");

// function nSum(sum1, sum2) {
//   console.log(sum1 + sum2);
// }
// nSum(1, 4);
// nSum(2, 5);

//Chap:36 Functions

// function nSum(num1, num2) {
//   return num1 + num2;
// }
// console.log(nSum(3, 6));

// function nAdd(a, b) {
//   return a + b; //return stops the execution of the function
// }
// console.log(nAdd(3, 5));

// function getReactArea(width, height) {
//   if (width > 0 && height > 0) {
//     return width * height;
//   }
//   return 0;
// }
// console.log(getReactArea(3, 5));

// function showMessage(m, string, num) {
//   console.log(m + string + num);
// }
// var month = "July";
// showMessage(month, " Muhammad wasi ", 2020);

// function greetUser(greeting) {
//   console.log(greeting);
// }
// var str = "Hello using js!";
// greetUser(str + " wasi");

// function nSquare(x) {
//   return x * x;
// }
// console.log(nSquare(3, 3));

//Chap 37: Functions passing data back from them

// function allNames(name1, name2, name3) {
//   return name1 + name2 + name3;
// }
// console.log("adil", "haseeb", "wasi");

//Chap 38: Local vs. global variables

// var a = "wasi"; //global variable
// function hello() {
//   console.log(a);
// }
// hello();
// console.log(a);

//local variable can only use in function it will not work outside the function
//global variable can only be used outside a function we can use anywhere

// var str = "mercedes"; //Global scope we can use it everywhere
// //console.log(name);

// f1();
// console.log(name);
// function f1() {
//   var name = "wasi"; //local variable
//   //or
//   //name = "wasi"; //is a a global bcoz it is not declared i var
//   console.log(name);
//   console.log(str);
// }

// var thesum;
// console.log(thesum);
// addNumbers();

// function addNumbers() {
//   var thesum = 2 + 2; //local variable
//   console.log(thesum);
//}

// var sum = 1000; //in global gives 1000
// addNumbers();
// console.log(sum);
// function addNumbers() {
//   var sum = 2 + 2; //in local gives 4
//   console.log(sum);
// }

// var name = "adil";
// f1();
// console.log(name);

// function f1() {
//   var name = "wasi";
//   console.log(name);
// }

//Chap: 39 Switch statements

//it is used to select one of many code blocks to be executed

// var score = 20;

// switch (score) {
//   case 10:
//     console.log("score value is 10");
//     break;
//   case 20:
//     console.log("score value is 20");
//     break;
//   default:
//     console.log("score value is 10 or 20");
// }

// var flower = "tulip";

// switch (flower) {
//   case "rose":
//     console.log("rose are red");
//     break;
//   case "sunFlower":
//     console.log("sunflower is yellow");
//     break;
//   case "voilet":
//     console.log("voilet are blue");
//     break;
//   default:
//     console.log("please select another flower");
// }

//this example is not work in case it gives default value

// var score = 70;

// if (score > 50) {
//   console.log("your score highest is 50");
// } else {
//   console.log("sxoe is lower then 50");
// }

/*But you can't use score > 50 as a condition for a case clause.The following example will print the default case even though score > 50: */

// var score = 70;

// switch (score) {
//   case score > 50:
//     console.log("score is higher then 50");
//     break;
//   default:
//     console.log("score is 50 or lower");
//}

//we can done this by evaulating true expression

// var score = 70;

// switch (true) {
//   case score > 50:
//     console.log("score is higher than 50");
//     break;
//   default:
//     console.log("score is 50 or lower ");
// }

// var day = 1;

// switch (day) {
//   case 0:
//     console.log("Today is monday");
//     break;
//   case 1:
//     console.log("Today is Tuesday");
//     break;
//   case 2:
//     console.log("Today is wednesday");
//     break;
//   case 3:
//     console.log("Today is thursday");
//     break;
//   case 4:
//     console.log("Today is Friday");
//     break;
//   case 5:
//     console.log("Today is Saturday");
//     break;
//   case 6:
//     console.log("Today is sunday");
//     break;
//   default:
//     console.log("Enter a valid week day");
// }

// var day = 1;
//if multiple case and same values so e can do this..
// switch (day) {
//   case 0:
//   case 1:
//   case 2:
//     console.log("Today is monday");
//     console.log("Today is monday 2");
//     break;
//   case 3:
//     console.log("Today is thursday");
//     break;
//   case 4:
//     console.log("Today is Friday");
//     break;
//   case 5:
//     console.log("Today is Saturday");
//     break;
//   case 6:
//     console.log("Today is sunday");
//     break;
//   default:
//     console.log("Enter a valid week day");
// }

// var age = 20;

// switch (true) {
//   case age >= 15 && age <= 20:
//     console.log("You are eligible");
//     break;
//   case age >= 21 && age <= 30:
//     console.log("You are not eligible");
//     break;
//   default:
//     console.log("please enter a valid age");
// }

// var dayOfWeek = "sat";

// switch (dayOfWeek) {
//   case "sat":
//   case "sun":
//     console.log("enjoy sat weekend");
//     break;
//   case "mon":
//     console.log("enjoy mon weekend");
//     break;
//   case "tue":
//     console.log("enjoy tue weekend");
//     break;
//   case "wed":
//     console.log("enjoy wed weekend");
//     break;
//   case "thu":
//     console.log("enjoy thu weekend");
//     break;
//   case "fri":
//     console.log("enjoy fri weekend");
//     break;
//   default:
//     console.log("this is a week day");
// }

//Chap: 41 while loops

//Chap : 41 while loop in js

// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// var i = 0;

// while (true) {
//   i++;
//   if (i === 5) {
//     console.log(i);
//     break;
//   }
// }

// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Chap: 42 Do while loop

//first initialization then increment then condition
// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// do {
//   // body of loop
// } while(condition)

// var myArr = [];
// var i = 10;

// do {
//   myArr.push(i);
//   i++;
//   console.log(i);
// } while (i <= 10);

//do with while loop
// var myArr = [];

// var i = 10;
// while (i <= 10) {
//   myArr.push(i);
//   i++;
//   console.log(i);
// }

//Chap #43: placing script tag
/*It can be placed in the head tag or  in the body tag 

//Chap #44: Comments in javaScript

/* When we have more then one line comment */

//when we have single line comment

//Chap # 45: Events: links

// function helloWorld(message) {
//   alert(message);
// }

// chap: 47 Events MouseOver
// function ImageChanged() {
//   var image = document.getElementById("img1");
//   image.src =
//     "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg";
// }
// function resetImage() {
//   var image = document.getElementById("img1");
//   image.src =
//     "https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg";
// }

// function checkAddress() {
//   var text = document.getElementById("email");
//   if (text.value === "") {
//     return alert("enter your address");
//   } else {
//     alert("successfully");
//   }
// }

// var myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form has been submitted");
// });

//chap: 50 setting fields

// function fillCity() {
//   var cityName;
//   var zipCode = document.getElementById("zip").value;
//   switch (zipCode) {
//     case "50601":
//       cityName = "NewYork";
//       break;
//     case "20001":
//       cityName = "michigan";
//       break;
//     case "43213":
//       cityName = "Traverse City";
//       break;
//   }
//   document.getElementById("city").value = cityName;
// }

// function fillName() {
//   var name;
//   var rollNo = document.getElementById("rollNo").value;
//   switch (rollNo) {
//     case "20405":
//       name = "moiz";
//       break;
//     case "49058":
//       name = "wasi";
//       break;
//     case "48924":
//       name = "haseeb";
//       break;
//   }
//   document.getElementById("student").value = name;
// }

// function loadMore() {
//   var loadMore =
//     "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent.";
//   document.getElementById("slowLoris").innerText = loadMore;
// }

// function showFull() {
//   var para =
//     " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quam. Cupiditate modi doloremque error quam quo ipsa odit non explicabo? sfkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkjsffsfjksfjjsfksfjksfj";
//   document.getElementById("loadmore").innerHTML = para;
// }

// function makeInvisible() {
//   var a = (document.getElementById("ugly").className = "fish");
// }

// function makeBig() {
//   var para = (document.getElementById("big").className = "large");
// }
//or we can do this way as well

// function makeBig() {
//   var para = (document.getElementById("big").style.fontSize = "2rem");
// }

// chap: 53 swapping images with
// function swapPic() {
//   var sImage = (document.getElementById("before").src =
//     "https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg");
// }

// function swapPic(eId, newPic) {
//   document.getElementById(eId).src = newPic;
// }

// function swapImage(eId, changeImage) {
//   document.getElementById(eId).src = changeImage;
// }

// function swapImage(eId, changeImage) {
//   var image = document.getElementById(eId);
//   image.src = changeImage;
// }

// function getAddress() {
//   var link = document.getElementById("link");
//   var address = link.href;
//   console.log(address);
// }

//chap 55: setting styles using js

// var a = (document.getElementById("change").style.maxWidth = "500px");

// var para = (document.getElementById("para").style.fontSize = "2rem");

// var para = (document.getElementById("para").className = "abc");

//var span = (document.getElementById("edit").classList = "big");
//or we can do with
//var span = (document.getElementById("edit").classList.add("big");

//Chap # 56: Target All elements by tag Name

// var textInPara = (document.getElementsByTagName("p")[1].innerText = "wasi");
//or we can do with
// var textInPara = document.getElementsByTagName("p");
// textInPara[1].innerText = "lorem ipsum dolor sit amet, consectetur";
//we apply fontFamily to all paragraphs
// for (var i = 0; i < textInPara.length; i++) {
//   textInPara[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }

//Chap: 57 Targeting some elements using tag names and indexOfFirst

// function colorChange() {
//   var nTable = document.getElementById("table9");
//   var nCells = nTable.getElementsByTagName("td");
//   for (var i = 0; i < nCells.length; i++) {
//     nCells[i].style.backgroundColor = "#f0c040";
//   }
// }

//Chap: 58 DOM(DOCUMENT OBJECT MODEL)
//nodes everything we can change in the document is a node...
//var para = (document.getElementById("para").innerText = "wasi");

// var element = document.getElementById("div1");
// var para = document.createElement("p");
// var node = document.createTextNode("lorem ipsum dolor sit amet");
// para.append(node);
// element.append(para);

//or we can do with

// var div = document.getElementById("div1");
// var pTag = document.createElement("p");
// var pNode = document.createTextNode(
//   "we will get the data straight from firebase!🚀"
// );
// pTag.appendChild(pNode);
// div.appendChild(pTag);

//yahoo baba example

// var newElement = document.createElement("h2");
// var newText = document.createTextNode("lorem ipsum dolor sit amet");
// newElement.appendChild(newText);

//var parent = document.getElementById("text").appendChild(newElement);

//or we can do
// var target = document.getElementById("text");
// target.insertBefore(newElement, target.childNodes[0]);

// var parent = document.createElement("h1");
// var child = document.createTextNode("Hello world from JavaScript");
// parent.appendChild(child);
// var div = document.getElementById("text");
//div.appendChild(parent);
/* insert before means we can put element acc to our position  */
// div.insertBefore(parent, div.childNodes[0]);

/* There are 3 ways to to insert adjusent methods 
1- insertAdjusentElement
2- insertAdjacentElement
3- insertAdjacentText
these 3 methods can create and append elements

There are 4 positions in dom adjusent
1- beforebegin
2- afterbegin
3- beforeend
4- afterend
*/

//1st method using insertAdjacentElement

// var newElement = document.createElement("h1");

// var newText = document.createTextNode("Hello world from js");

// newElement.appendChild(newText);

// var target = document.getElementById("test");

// target.insertAdjacentElement("afterend", newElement);

//2nd Method using insertAdjacentHTML

// var nTarget = document.getElementById("test");

// var newElement = "<h2>Hi this is wasi from clever programmer🚀</h2>";

// nTarget.insertAdjacentHTML("afterend", newElement);

//3rd Method which is same as above but the string differance

// var nTarget = document.getElementById("test");

// var newElement = "This is wasi from clever programmer";

// nTarget.insertAdjacentText("afterend", newElement);

/* Replace and Removing Childs in dom yahoo baba chap 60 in book 
There are 2 ways to remove and replace childs from
1- replaceChild() 
2- removeChild() 
*/

// var newElement = document.createElement("li");
// var newText = document.createTextNode("Guava");
// newElement.appendChild(newText);

// var nTarget = document.getElementById("list");
// var oldElement = nTarget.children[1];

// nTarget.replaceChild(newElement, oldElement);

//removeChild()
// var nTarget = document.getElementById("list");
// var oldElement = nTarget.children[2];
// nTarget.removeChild(oldElement);

//meri ek example

// var newElement = document.createElement("td");
// var newText = document.createTextNode("Arnold schwarnizer");
// newElement.appendChild(newText);

// var nTarget = document.getElementById("list");
// var oldElement = nTarget.children[0];
// console.log(oldElement);
// nTarget.replaceChild(newElement, oldElement);

//remove

// var nTarget = document.getElementById("list");
// var oldElement = nTarget.children[1];
// nTarget.removeChild(oldElement);

//cloneNode() node yahoo baba it is a copy of specific element

// var target = document.getElementById("list1").children[0];
// var copyElement = target.cloneNode(true);

//document.getElementById("list2").appendChild(copyElement);
/*or we can take div as well */
// document.getElementById("test").appendChild(copyElement);

//chap:60 of book finding childrens

// var div = document.getElementById("findpara");
// var para = div.getElementsByTagName("p");
// var content = para[0].innerHTML;
// console.log(content);

// var div = document.getElementById("ny");
// var para = div.childNodes[1];
// console.log(para);

/* DOM Traversel Methods 
The main diff b/w parentElement and parentNode is parentElement always
gives the parent element if not available then it returns "null"
ParentNode return something even if we do not have parent element it gives
us some text xyz...
*/

// var innerElement = (document.getElementById(
//   "chilc-c"
// ).parentNode.style.backgroundColor = "#f0c040");

// var innerElement = document.getElementById("main").parentNode;

// console.log(innerElement);

/* ChildNodes and Childrens Yahoo Baba
childNodes[0] gives undefined because of enter key
when i gives[1] it give me value and when i write [2] it gives me undefined
because of enter.
childNodes return text, commentsm spaces
children return text
*/

// var outerDiv = (document.getElementById(
//   "inner"
// ).children[1].style.backgroundColor = "#f0c040");
// var outerDiv = document.getElementById("inner").children[0].innerHTML;
// console.log(outerDiv);

//ChildNODES Example

// var outerDiv = document.getElementById("inner").childNodes[3].innerHTML;

// console.log(outerDiv);

/* FistChild and LastChild 
firstChild subko target kray ga bhalay wo space comment xyz kch bhi ho
firstElementChild sirf text lakr dega bilkul children aur childNodes ki tarah
*/

// var firtChild = (document.getElementById(
//   "inner"
// ).firstElementChild.style.backgroundColor = "red");

// var firtChild = document.getElementById("inner").firstElementChild;

// console.log(firtChild);

//firstchild example

// var firtChild = (document.getElementById(
//   "inner"
// ).lastElementChild.style.backgroundColor = "red");

// var firtChild = document.getElementById("inner").firstChild

// console.log(firtChild);

//lastElementChild Example

// var lastChild = (document.getElementById(
//   "inner"
// ).lastElementChild.style.backgroundColor = "red");

// var lastChild = document.getElementById("inner").lastElementChild;
// console.log(lastChild);

//lastChild

// var lastChild = document.getElementById("child-c").lastChild;
// console.log(lastChild);

/* Previous siblings and next siblings */
// var nextEleSib = (document.getElementById(
//   "child-c"
// ).previousElementSibling.style.backgroundColor = "red");
// var preEleSib = document.getElementById("child-c").previousElementSibling;
// console.log(preEleSib);

//next siblings

// var nextEleSib = (document.getElementById(
//   "child-c"
// ).nextElementSibling.style.backgroundColor = "red");
// var nextEleSib = document.getElementById("child-c").nextElementSibling;
// console.log(nextEleSib);

// var nextEleSib = (document.getElementById(
//   "child-e"
// ).nextElementSibling.style.backgroundColor = "red");
// var nextEleSib = document.getElementById("child-c").nextSibling;
// console.log(nextEleSib);

/* chap: 61 Junk artifacts and nodeType 
Return value : It returns a numeric value as according to the type of node.

1	ELEMENT_NODE
2	ATTRIBUTE_NODE
3	TEXT_NODE
4	CDATA_SECTION_NODE
5	ENTITY_REFERENCE_NODE
6	ENTITY_NODE
7	PROCESSING_INSTRUCTION_NODE
8	COMMENT_NODE
9	DOCUMENT_NODE
10	DOCUMENT_TYPE_NODE
11	DOCUMENT_FRAGMENT_NODE
12	NOTATION_NODE
*/

// var para = document.getElementById("para").nodeType;
// console.log(para);

// var nBtn = document.getElementById("btn").nodeType;
// console.log(nBtn);

// Book example

// var d = document.getElementById("humpty");
// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//   if (d.childNodes[i].nodeType === 1) {
//     pCounter++;
//   }
//   if (pCounter === 2) {
//     d.childNodes[i].innerHTML = "All his men.";
//     break;
//   }
// }

//or we can do with

// var para = document.getElementsByTagName("p");
// para[1].innerHTML = "wasi is the software developer";

//or we can do with

// var d = document.getElementById("humpty");
// var b = (d.children[2].innerHTML = "All are mens");

// chap: 62 More ways to target elements

// var nNodes = document.getElementById("div1");
// var pNode = nNodes.firstElementChild;
// var nName = pNode.nodeName;
// console.log(nName);

/* THE DOM: ATTRIBUTES 
hasAttribute returns true or false depending on the element is available or not
getAttribute returns the id name and class name 
*/

// var nTarget = document.getElementById("p1");
// var hasClass = nTarget.hasAttribute("id");
// var hasId = nTarget.getAttribute("id");
// console.log(hasId);
// console.log(hasClass);

// var div1 = document.getElementById("div1");
// var exampleAttr = div1.getAttribute("id");
// var align = div1.getAttribute("align"); //returns null
// console.log(align);
// console.log(exampleAttr);

/* w3 schools example 
setAttribute has 
*/

// var nHead = document.getElementsByTagName("h1");
// var setAttr = nHead[0].setAttribute("class", "demoClass");

// var a = document.getElementsByTagName("p");
// a[0].setAttribute("class", "wasi");
//var checkAttr = a[0].hasAttribute("class");
//var getAttr = a[0].getAttribute("class"); //returns class NAme
//console.log(checkAttr); //It returns true
// console.log(getAttr);

/* geeky shows example */

// var para = document.getElementById("para").setAttribute("style","font-size: 80px");
// or we can do with
//para.setAttribute("id", "wasi");

// var p = document.getElementById("myp");
// p.style.fontFamily = "Helvetica     ";
// // p.setAttribute("class", "secondclass");
// p.setAttribute("title", "myTitle");
// p.className = "wasi";
// console.log(p);

// var nPara = document.getElementById("p1");
// nPara.onmouseover = function () {
//   nPara.style.backgroundColor = "#f0c040";
// };

/* Chap NO 68 */
// var nDiv = document.getElementById("myDiv");
// var nPara = document.createElement("div");
// nPara.innerHTML = "Hello world using jQuery";
// nPara.style.fontSize = "80px";
// nDiv.appendChild(nPara);

//insert before

// var nDiv = document.getElementById("myDiv");
// var nPara = document.createElement("p");
// nPara.innerHTML = "Hello world using jQuery and JavaScript";
// var nTarget = document.getElementById("para");
// nDiv.insertBefore(nPara, nTarget);

//remove child

// var div = document.getElementById("div1");
// var nodeToRemove = div.childNodes[1];
// var removeChild = div.removeChild(nodeToRemove);
// console.log(removeChild);

//Chap #69: Objects

console.clear();

// var student = {
//   name: "wasi",
//   class: "saylani",
//   id: 20323
// };
// console.log(student);

// var object = {
//   myName: {
//     FirstName: "wasi",
//     LastName: "Muhammad"
//   },
//   myAge: 22,
//   class: {
//     classOne: "Saylani",
//     classTwo: "Bootcamp"
//   }
// };
// console.log(object.myName);

// var stu = {
//   name: "Wasi",
//   class: "saylani"
// };

// var key = Object.keys(stu);
// console.log(key);

/* Object kay andr jo function call hota hai ussay method kehty hain 
"this" ka keyword hamesha parent yani owner kay liye use hota hai

*/

// var stu = {
//   name: "wasi",
//   class: "saylani",
//   movies: ["dhoom", "sholay", "hum"],
//   living: {
//     city: "karachi",
//     country: "pakistan"
//   },
//   salary: function () {
//     return 25000;
//   },
//   fullName: function () {
//     return this.name + " " + this.class;
//   }
// };
// // console.log(stu.salary());
// console.log(stu.fullName());
// console.log(stu.living.city);
// console.log(stu.living.country);

/* Creating objects II Method */

// var a = new Object();

// (a.FirstName = "Muhammad"), (a.LastName = "wasi"), (a.age = 20);

// console.log(a.FirstName);
// console.log(a["LastName"]);

// var person = new Object();

// person.name = "Muhammad Wasi";
// person.age = 20;
// person.salary = 20000;

// console.log(person.name)
// console.log(person);
// console.log(person.salary);

/* ARRAY OF OBJECTS YAHOO BABA*/

// var student = [
//   { name: "John", age: 20, class: "econimic" },
//   { name: "Frank", age: 20, class: "1st class" },
//   { name: "Lark", age: 20, class: "3rd class" },
// ];
// for (var a = 0; a < student.length; a++) {
//   console.log(student[a].name + " " + student[a].age  );
// }

//delete property in object

// var person = {
//   name: "john",
//   age: 21,
//   salary: 25000,
// };
// var check = person.hasOwnProperty("name"); //check if the property is exist or not
// console.log(check);
// delete person.salary;
// console.log(person);

// var a = {
//   name: "wasi",
//   class: "saylani",
// };
// for (var property in a) {
//   console.log(property, a[property]);
// }

// var object = {
//   name: "Muhammad wasi",
//   class: "saylani",
//   id: 10,
// };
// console.log(Object.keys(object)); //it returns array Object.key

/* keys in array it returns index of array like 1,2,3 if it is array*/

// var arr = ["A", "B", "C"];
// console.log(Object.keys(arr));

//array like object
// var obj = { 0: "a", 1: "b", 2: "c" };
// console.log(Object.keys(obj));

//array like object with random key ordering
// var obj = { 100: "a", 2: "b", 500: "c" };
// console.log(Object.keys(obj)); // [2,100,500]

//net-ninja

// var obj = {
//   name: "wasi",
//   age: 20,
//   email: "wasiarain819@gmai.com",
//   location: "pakistan",
//   blogs: ["Harry porter", "JavaScript", "Python"],
// };
//console.log(obj);

// obj.name = "John Lark";
// console.log(obj.name);

// obj.age = 30;
// console.log(obj.age);

// console.log(typeof obj);

//2nd example
// var obj = {
//   name: "wasi",
//   age: 20,
//   email: "wasiarain819@gmai.com",
//   location: "pakistan",
//   blogs: ["Harry porter", "JavaScript", "Python"],
//   login: function () {
//     console.log("user logged in successfully");
//   },
//   logout: function () {
//     console.log("user logged out");
//   },
// };

// obj.login();
// obj.logout();

//this property in Objects

// var person = {
//   name: "wasi",
//   class: "saylani",
//   age: 20,
//   fullName: function () {
//     return this.name + " " + this.class + " " + this.age;
//   },
// };
// console.log(person.fullName());

// var obj = {
//   name: "wasi",
//   age: 20,
//   email: "wasiarain819@gmai.com",
//   location: "pakistan",
//   blogs: ["Harry porter", "JavaScript", "Python"],
//   login() {
//     console.log("user logged in successfully");
//   },
//   logout() {
//     console.log("user logged out");
//   },
//   logBlogs() {
//     // console.log(this.blogs);
//     console.log(this);
//   },
// };

// obj.logBlogs();

//object literals

// var blogs = [
//   { title: "Harry porter", likes: 30 },
//   { title: "JavaScript", likes: 50 },
// ];
// console.log(blogs);

// var obj = {
//   name: "wasi",
//   age: 20,
//   email: "wasiarain819@gmai.com",
//   location: "pakistan",
//   blogs: [
//     { title: "Harry porter", likes: 30 },
//     { title: "JavaScript", likes: 50 },
//   ],
//   login() {
//     console.log("user logged in successfully");
//   },
//   logout() {
//     console.log("user logged out");
//   },
//   logBlogs() {
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// obj.logBlogs();

// var obj = new Object();

// obj.name = "wasi";
// obj.class = "saylani";
// obj.arr = ["javaScript", "Php", "Python", "Ruby"];
// obj.blogs = function () {
//   console.log("this is a function in an object");
// };
// obj.blogs();

// console.log(obj.hasOwnProperty("name"))

//chap 71 Objects Methods

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6, 7, 8],
//   calculateAnnual(percentIfDisc) {
//     var bestPrice = plan1.price;
//     var currentDate = new Date();
//     var thisMonth = currentDate.getMonth();
//     console.log(thisMonth);
//     for (var i = 0; i < plan1.discountMonths.length; i++) {
//       if (plan1.discountMonths[i] === thisMonth) {
//         bestPrice = plan1.price * percentIfDisc;
//         break;
//       }
//     }
//     return bestPrice * 12;
//   },
// };
// var annualPrice = plan1.calculateAnnual(0.85);
// console.log(annualPrice);

//lets try that
// var plan2 = {
//   name: "Modern",
//   price: 5.0,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [4, 5, 6, 7, 8, 9],
//   CalculateAnnual(percentIfDisc) {
//     var bestPrice = this.price;
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth();
//     for (var i = 0; i < this.discountMonths.length; i++) {
//       if (this.discountMonths[i] === currentMonth) {
//         this.price * percentIfDisc;
//         break;
//       }
//       return bestPrice * 12;
//     }
//   },
// };
// var annualPrice = plan2.CalculateAnnual(0.85);
// console.log(annualPrice);

//Chap # 72 Objects Constructors

// function Student(name, depart, section, rollNo) {
//   this.name = name;
//   (this.class = depart), (this.section = section), (this.rollNo = rollNo);
// }

// var Student1 = new Student("Muhammad wasi", "bs cs", "B", 20405);
// var Student2 = new Student("Muhammad Haris", "bs se", "C", 32456);
// var Student3 = new Student("Muhammad Adil", "bba", "D", 27446);
// console.log(Student1);
// console.log(Student2);
// console.log(Student3);

// function GFS(lift, parking, electricity, water, mosque) {
//   this.lift = lift;
//   this.parking = parking;
//   this.electricity = electricity;
//   (this.water = water), (this.mosque = mosque);
//   this.security = function () {
//     return console.log(this.lift + " " + this.parking);
//   };
// }

// var GFS1 = new GFS("iqra", "valley", "chay-electric", "h20", "Rahamia");
// console.log(GFS1);

//book example

// function Plan(name, price, space, transfer, pages, discountMonths) {
//   (this.name = name),
//     (this.price = price),
//     (this.space = space),
//     (this.transfer = transfer),
//     (this.pages = pages),
//     (this.discountMonths = discountMonths);
//   this.calcAnnual = function (percentIfDiscount) {
//     var bestPrice = this.price;
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth();
//     for (var i = 0; i < this.discountMonths.length; i++) {
//       if (discountMonths[i] === currentMonth) {
//         bestPrice = this.price * percentIfDiscount;
//         break;
//       }
//       return bestPrice * 12;
//     }
//   };
// }

// var plan1 = new Plan("basic", 30, 100, 1000, 10, [6, 7, 8]);
// var calcAnnual = plan1.calcAnnual(0.85);
// console.log(calcAnnual);

//code with harry

// var car = {
//   name: "Maruti 300",
//   topSpeed: 89,
//   run() {
//     console.log("car is running");
//   },
// };

// function GeneralCar(name, Speed) {
//   (this.name = name),
//     (this.topSpeed = Speed),
//     (this.run = function () {
//       console.log(this.name + " is running..");
//     });
//   this.analyze = function () {
//     console.log("this is the speed of bmw", 200 - this.topSpeed);
//   };
// }
// var gCar1 = new GeneralCar("Mercedes", 30);
// var gCar2 = new GeneralCar("rolls royce", 100);
// var gCar3 = new GeneralCar("audi", 150);
// gCar3.run();
// gCar3.analyze();
// console.log(gCar2);

//geeks for geeks js

// function Mobile(modelNo, price) {
//instance member
//   (this.model = modelNo), (this.price = price);
// }
// var samsung = new Mobile("samusng", 10000);
// var Apple = new Mobile("APPLE", 3384);
// Mobile.prototype.model = "ng-400";
// console.log(samsung);

/* Answer to: "javascript prototype explained" */

/*
  The prototype object is special type of enumerable object to
  which additional properties can be attached to it which will be
  shared across all the instances of it's constructor function.

  So, use prototype property of a function in the above example
  in order to have age properties across all the objects as
  shown below:
*/

// function Student(name, age) {
//   (this.name = name),
//   (this.age = age);
// }
// var stu1 = new Student("wasi", 20);
// var stu2 = new Student("haseeb", 25);
/* It is used to check property */
// var propertyCheck = "name" in Student;
// console.log(propertyCheck);
// Student.prototype.class = "sayalni welfare";
// console.log(stu1);
// console.log(stu2);

/* Chap # 75: Objects checking for properties 
There are 3 ways to check proeprties of objects
1- hasOwnProperty()
2- in OPerator
3- comparing with undefined

*/

// var hero = {
//   name: 'John Lark'
// }
// console.log(hero.hasOwnProperty('name')); // =>true
// console.log(hero.hasOwnProperty('class')); // => false

// var hero = {
//   name: "batman"
// }
// console.log('name' in hero); // => true
// console.log('class' in hero); // => false

// var hero = {
//   name: "batman",
// };
// hero.name !== undefined; // => true
// hero.realName !== undefined; // => false

//Chap # 75 Getting and setting the URL

// window.location.href = "http://facebook.com"; // => will be redirect to the page
// var domain = window.location.hostname; // => 127.0.0.1
// var pathName = window.location.pathname; // =>index.html
// var protocol = window.location.protocol; // => http
// var assign = window.location.assign("http://facebook.com"); // =>  it will ask and then open the fb page
// console.log(assign);
// console.log(protocol);
// console.log(pathName);
// console.log(domain);

// var currentSite = window.location.hostname;
// var designation = window.location.pathname;
// var designation = "http:/" + currentSite + designation + "#humidifier";
// console.log(designation); // => 'http://home/hp/Desktop/js-new-practice/index.html#humidifier

//location objects yahoo baba

// function facebook() {
//   // location.href = "http://facebook.com";
//   //location.assign("http://google.com");
//   var a = location.replace("http://google.com"); // => it replace the historty never go back
// }

/* Browser control: Forward and reverse methods 
You can tell the browser how many steps in the history you want to take, using negative history.go(-3); history.go(2);
numbers to go back and positive numbers to go forward. The following statement is the
equivalent of pressing the Backspace key three times.
*/

// var nBack = document.getElementById("back");
// nBack.onclick = function () {
//   // history.back();
//   history.forward();
// };

//yahoo papa history objects

// var nBack = document.getElementById("back");
// nBack.onclick = function () {
//   history.back();
// };

// var nBack = document.getElementById("forward");
// nBack.onclick = function () {
//   history.forward();
// };

// var nGo = document.getElementById("go");
// nGo.onclick = function () {
//   history.go(3);
// };

// var x = document.referrer;
// console.log(x); // => it gives the complete url

//Chap # 79 window Objects

// var myWindow;
// function openWindow() {
//   myWindow = window.open(
//     "http://github.com/muhammadwasi81",
//     "_blank",
//     "width = 500px, height = 200px, left = 100px,top = 200px"
//   );
// }
// function closeWindow() {
//   myWindow.close();
// }

// var windowObjectReference;

// function openWindow() {
//   windowObjectReference = window.open(
//     "http://wasi.com",
//     "_blank",
//     "resizable,scrollbars,status"
//   );
// }
// function closeWindow() {
//   windowObjectReference.close();
// }

// function openWindow() {
//   var monkeyWindow = window.open(
//     "http://github.com/muhammadwasi81",
//     "_blank",
//     "width = 500px, height = 200px, left = 100px,top = 200px"
//   );
//   var windowContent =
//     "<h1>Capuchin monkey</h1><p>The word capuchin derives from group of friars<br>named the Order of Friars Minor Capuchin who wear<br> brown robes with large hoods covering their heads.</p>";
//   monkeyWindow.document.write(windowContent);
// }

// function openWindow() {
//   var wOpen = window.open(
//     "http://demo.com",
//     "_blank",
//     "resizable,scrollbars,status" // => it gives us scrollbar
//   );
//   var innerContent =
//     "<h1>Hello world using js</h1><img src='https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png' alt='js-image'/><br> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, fuga?</p>";
//   wOpen.document.write(innerContent);
// }

// function openWindow() {
//   var wOpen = window.open(
//     "http://demo.com",
//     "_blank",
//     "resizable,scrollbars,status" // => it gives us scrollbar
//   );
// }

//chap # 80 controlling the width and height of the window

// function openWindow() {
//   var w = window.open("", "", "width=500px,height=480px,left=100px,top=200px");
// }

//yahoo baba moveTo and moveTop()

// var myWindow;
// function openWindow() {
//   myWindow = window.open("", "", "width=200px,height=100px");
//   myWindow.document.write("<p>This is my window</p>");
// }

// function moveWindow() {
//   // myWindow.moveTo(500, 100); //left and top
//   myWindow.moveBy(250, 250); //top and then left
//   myWindow.focus(); // = set focus to new window
// }

//chap 81 Testing for popup blockers

// var popup = window.open(
//   null,
//   "",
//   "width=100px,height=100px,left=24,top=24,right=24,scrollbars,resizable"
// );
// if (popup === null || popup === undefined) {
//   console.log(
//     'Please disable your pop-up blocker and click the "Open" link again'
//   );
// } else {
//   popup.close();
// }

// Chap #81 form validation

// function checkValidation() {
//   var a = document.getElementById("lastname");
//   if (a.value === "") {
//     return alert("enter your name");
//   } else {
//     alert("successfully");
//   }
// }

// function checkForSelection() {
//   var select = document.getElementById("states");
//   if (select.selectedIndex === 0) {
//     return alert("please select a state");
//   } else {
//     alert("successfully");
//   }
// }

// function validateRadios() {
//   var radio = document.getElementsByName("r1");
//   for (var i = 0; i < radio.length; i++) {
//     if (radio[i].checked) {
//       return alert("success");
//     }
//   }
//   return alert("Please select radio");
// }

// function validateZipCode() {
//   var zipCode = document.getElementById("zipcode").value;
//   if (zipCode.length < 5) {
//     return alert("please enter a valid zip code");
//   }
//   for (var i = 0; i <= 4; i++) {
//     var thisChar = parseInt(zipCode[i]);
//     if (isNaN(thisChar)) {
//       return alert("please enter only numbers");
//     }
//   }
// }

//random task factorial of a number
// function factorial(n) {
//   if (n === 1) {
//     return true; // => bcoz factorial of 1! is = 1
//   } else {
//     return n * factorial(n - 1); // => factorial formula
//   }
// }
// console.log(factorial(4));

//Chap # 86 Form validation

// function validateEmail() {
//   var addressIsLegal = true;
//   var enteredEmail = document.getElementById("email").value;
//   if (enteredEmail.indexOf(" ") !== -1) {
//     alert("No spaces are allowed");
//     addressIsLegal = false;
//   }
//   if (
//     enteredEmail.indexOf("@") < 1 ||
//     enteredEmail.indexOf("@") > enteredEmail.length
//   ) {
//     addressIsLegal = false;
//   }
//   if (addressIsLegal === false) {
//     alert("please enter correct email address");
//     return false;
//   } else {
//     return alert("That's right");
//   }
// }

// function validateEmail() {
//   var addressIsLegal = true;
//   var email = document.getElementById("email").value;
//   if (email.indexOf(" ") !== -1) {
//     alert("No spaces are allowed in email address");
//     addressIsLegal = false;
//   }
//   if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
//     alert("please enter a valid email address");
//     addressIsLegal = false;
//   }
//   if (
//     email.indexOf(".") - email.indexOf("@") < 2 ||
//     email.indexOf(".") - email.length > 3
//   ) {
//     addressIsLegal = false;
//   } else {
//     return alert("thats right");
//   }
//   if (addressIsLegal === false) {
//     alert("There is a mistake");
//     return false;
//   }
// }

// function milliSec(x) {
//   if (isNaN(x)) {
//     return "not a number";
//   } else {
//     return x * 1000;
//   }
// }
// console.log(milliSec(9));

// console.log(isNaN("9")); // => false
// console.log(isNaN("wasi")); // => true

//Chap # 87 Exceptions: try and catch

//this is coming frm a server as response

// let a = "wasi";
// a = undefined;
// if (a !== undefined) {
//   throw new Error("This is undefined");
// } else {
//   console.log("This is undefined");
// }

// try {
//   console.log("we are inside try block");
//   //functionWASI();
// } catch (error) {
//   //console.log("Are you Okay? error");
//   //console.log(error.name);
//   console.log(error.message);
// } finally {
//   console.log("Finally we will run this"); // => it will always run either run
// }

// Types of error in try catch block:
// EvalError : error in eval() function
// RangeError: a number "out of range occurred"
// Reference Error
// TypeError
// SyntaxError
// URIError

//JS TUTORIAL, "TRY...CATCH"

// try {
//   console.log("Start of Try runs");
//   // ... no error here
//   console.log('End of try runs');
// } catch (error) {
//   console.log("Catch is ignored beacuse there is no error");
// }

//An example with error:

// try {
//   console.log("start of try runs");
//   lalallala; // => error has occurred
//   console.log("end of try");
// } catch (error) {
//   console.log("error has occured"); // => Then catch runs
// }

// try {
//   {{{{{{{{{{{{
// } catch (err) {
//   alert("The engine can't understand this code, it's invalid");
// }

//If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

// try {
//   setTimeout(() => {
//     noSuchVariable; // => script will die here
//   }, 1000);
// } catch (error) {
//   console.log(error.message);
// }

//To catch an exception inside a scheduled function, try...catch must be inside that function:

// setTimeout(() => {
//   try {
//     noSuchVariable; // => try...catch handles the error!
//   } catch (error) {
//   console.log("error is caught here");
//     console.log(error.message);
//   }
// }, 1000);

// try {
//   lalala; // error, variable is not defined!
// } catch (err) {
//   alert(err.name); // ReferenceError
//   alert(err.message); // lalala is not defined
//   alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

//   // Can also show an error as a whole
//   // The error is converted to string as "name: message"
//   alert(err); // ReferenceError: lalala is not defined
// }

/* Let’s explore a real-life use case of try...catch. 
As we already know, JavaScript supports the JSON.parse(str) method to read JSON-encoded values.*/

// let json = '{"name":"John", "age": 30}'; //data from server

// let user = JSON.parse(json); // =>convert the text representation to JS OBJEct

// console.log(user.name);
// console.log(user.age);

// If json is malformed, JSON.parse generates an error, so the script “dies”.

// let json = '{"age": "30"}';
// try {
//   let user = JSON.parse(json); // => error occurs does not work
//   console.log(user.name);
// } catch (error) {
//   console.log(error.message);
// }

//Throw Error

// let error = new Error("Things happen o _O");
// console.log(error.message); // =>things happen o_o

// try {
//   JSON.parse("{bad json o _O}");
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// let json = '{"age": 30}'; //incomplete data

// try {
//   let user = JSON.parse(json); // => no error

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); //(*);
//   }
//   console.log(user.name);
// } catch (error) {
//   console.log("JSON ERROR: " + error.message);
// }

// let json = '{ "age": 30 }'; // incomplete data
// try {
//   user = JSON.parse(json); // => user is not defined
// } catch (error) {
//   console.log("json error");
// }

//Usually, we can check the error type using the instanceof operator:

// try {
//   user = {
//     /*...*/
//   };
// } catch (error) {
//   if (error instanceof Error) {
//     console.log("refrence error"); // => refrence error for excessing an undefined variable
//   }
// }

//In the code below, we use rethrowing so that catch only handles SyntaxError:

// let json = '{"age": 30}';

// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }
//   blabla(); //unexpected error

//   console.log(user.name);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log("JSON ERROR: " + error.message);
//   } else {
//     throw error; // => rethrow(*);
//   }
// }

// => finally execute always if user say no to it will run try & finally otherwise it will try ,catch, finally
// try {
//   alert("try");
//   if (confirm("Make an error")) BAD_CODE();
// } catch (error) {
//   alert("catch");
// } finally {
//   alert("finally");
// }

// returns the integer part of a number by removing any fractional digits.
//console.log(Math.trunc(13.137878787878));

// function f() {
//   try {
//     alert("start");
//     throw new Error("an error");
//   } catch (error) {
//     if ("error cannot control") {
//       throw error;
//     }
//   } finally {
//     alert("cleanup");
//   }
// }
// f();

// function checkPassword() {
//   try {
//     var pass = document.getElementById("pass");
//     if (pass.length < 8) {
//       throw "please enter a right password";
//     }
//     if (pass.indexOf(" ") !== -1) {
//       throw "no spaces in the password, please";
//     }
//     var numSome = false;
//     for (var i = 0; i < pass.length; i++) {
//       if (isNaN(pass(i, i + 1)) === false) {
//         numSome = true;
//         break;
//       }
//     }
//     if (numSome === false) {
//       throw "include at least 1 number";
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

//scrolling events in js

// var popUp = document.getElementById("popup");
// popUp.addEventListener("click", function () {
//   alert("event has been clicked");
// });

// => or we can do this alright

// popUp.onclick = function () {
//   alert("hello world");
// };

//it show the value of how much page scroll

// window.addEventListener("scroll", function () {
//   document.getElementById("showScroll").innerHTML = window.pageYOffset + "px";
// });

// window.addEventListener("mouseover", function () {
//   var colorChange = document.getElementById("color");
//   colorChange.innerHTML = "successfully changed color";
//   colorChange.style.color = "lime"; // => change color on mouse hover
// });

// window.addEventListener("click", function () {
//   var para = document.getElementById("demo");
//   para.style.display = "none";
// });

//===================== THE END ==============================//
