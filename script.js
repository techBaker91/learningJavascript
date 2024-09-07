<!DOCTYPE html>
<html>
<head>
	<script>
	function myFunction() {
	  document.getElementById("demo1").innerHTML = "Paragraph changed.";
	}
	</script>
</head>
<style>
	#container {
		width: 400px;
		height: 400px;
		position: relative;
		background: black;
	}
	#animate {
		width: 50px;
		height: 50px;
		position: absolute;
		background-color: green;
	}
</style>
<!--Below is the necessary link to use Ploty for various graphs and charts-->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<body>

<script>
	/* Syntax for JavaScript
Varibles are declared with var, let, and const

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

//arrow function
let myFunction = (a, b) => a * b;

const objectName = {
  keyName: "valueName",
  keyName1: "valueName1",
  methodName : function() {
    return this.keyName + " " + this.keyName1;
  }
};

const array_name = [item1, item2, ...]; 

if (condition) {
  //  block of code to be executed if the condition is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition is false
}

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} 

//loop for in
for (key in object) {
  // code block to be executed
}

//loop for of
for (variable of iterable) {
  // code block to be executed
}

//while loop
while (condition) {
  // code block to be executed
}

//do while loop
do {
  // code block to be executed
}
while (condition);

// Create a Set
const letters = new Set(["a","b","c"]);

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

class ClassName {
  constructor() { ... }
}

Syntax for creating an XMLHttpRequest object:
variable = new XMLHttpRequest();


	*/
</script>

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo0').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo0"></p>

<h2>JavaScript in Body</h2>

<p id="demo"></p>

	<script>
	document.getElementById("demo").innerHTML = "My First JavaScript";
	</script>

<h2>Demo JavaScript in Head</h2>

<p id="demo1">A Paragraph</p>
<button type="button" onclick="myFunction()">Click Me</button>

<p>First issue ran into between these buttons. Remembered from other coding that the "ids" and "functions" needed to be distiguished </p>

<h2>Demo JavaScript in Body</h2>

<p id="demo2">A Paragraph.</p>

<button type="button" onclick="myFunction0()">Try it</button>

<script>
function myFunction0() {
  document.getElementById("demo2").innerHTML = "Paragraph changed.";
}
</script>

<p>Never call document.write after the document has finished loading.
It will overwrite the whole document.</p>
<script>
document.write(5 + 6);
</script>

<p>Code to execute window alert, "window.alert()" in script tags</p>

<script>
window.alert("IS IT WORKING CAAAAAAAAAAAAARL?");
</script>
<script>
window.alert("Coding BAKER Was Here");
</script>

<h2>The window.print() Method</h2>

<p>Click the button to print the current page.</p>

<button onclick="window.print()">PRINT PAGE . . do it</button>

<p>JavaScript statements are separated by semicolons.</p>
<p id="demo3"></p>

<script>
let a, b, c;
a = 300;
b = 33;
c = a + b;
document.getElementById("demo3").innerHTML = c;
</script>
<p> Check the code for this</p>
<p id="demo4"></p>

<script>
let d, e, f;  //could not use a b and c because they were used above
d = 425; e = 352; f = d + e;
document.getElementById("demo4").innerHTML = f;
</script>

<h2>JavaScript Statements</h2>

<p>JavaScript code blocks are written between { and }</p>

<button type="button" onclick="myFunction1()">Click Me!</button>

<p id="demo5"></p>
<p id="demo6"></p>

<script>
function myFunction1() {
  document.getElementById("demo5").innerHTML = "Hello Dolly!";
  document.getElementById("demo6").innerHTML = "How are you?";
}
</script>
<p>The above strings are output by two Javascript Statements inside of one function</p>

<h2>JavaScript const</h2>

<p>Declaring a constant object does NOT make the objects properties unchangeable:</p>

<p id="demo7"></p>
<p id="demo8"></p>
<p id="demo9"></p>
<p id="demo10"></p>
<p id="demo11"></p>

<script>
// Create an object:
const car = {type:"Mclaren", model:"765LT", color:"orange"};

// Change a property:
car.color = "lime green"

// Add a property:
car.owner = "Josh"

// Display the property:
document.getElementById("demo7").innerHTML = "My buddy " + car.owner
document.getElementById("demo8").innerHTML = "drives a " + car.type;
document.getElementById("demo9").innerHTML = car.model + ", sexiest car EVA";
document.getElementById("demo10").innerHTML = "It's a gorgeous " + car.color + "!!"
document.getElementById("demo11").innerHTML = "I can't believe " + car.type + " made this Monolisa!"
</script>

<h1>JavaScript Functions</h1>

<p>Call a function which performs a calculation and returns the result:</p>

<p id="demo12"></p>

<script>
let x = myFunction2(4, 3);
document.getElementById("demo12").innerHTML = x;

function myFunction2(a, b) {
  return a * b;
}
</script>

<p>Invoke (call) a function that converts from Fahrenheit to Celsius:</p>
<p id="demo13"></p>

<script>
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius(100);// the 100 is the fahrenheit being converted to celsius
document.getElementById("demo13").innerHTML = value;//As you see from the example above, toCelsius(100) refers to the function object, and toCelsius(f) refers to the function result.
</script>

<p>Using a function as a variable:</p>

<p id="demo14"></p>

<script>
let text = "The temperature is " + toCelsius1(77) + " Celsius.";
document.getElementById("demo14").innerHTML = text;

function toCelsius1(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 
</script>

// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
<br><br>
// Create an Object<br>
const person = {<br>
  firstName: "John",<br>
  lastName: "Doe",<br>
  age: 50,<br>
  eyeColor: "blue"<br>
};
<br><br>
// Create an Object<br>
const person = {};<br>
<br><br>
// Add Properties<br>
person.firstName = "John";<br>
person.lastName = "Doe";<br>
person.age = 50;<br>
person.eyeColor = "blue";<br>

<h2>Object Methods</h2>
<p>A method is a function definition stored as a property value.</p>

<p id="demo15"></p>

<script>
const person = {
  firstName: "Josh",
  lastName: "Anderson",
  id: 5566,
  fullName: function() { //function is fine because it only has scope of this object
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("demo15").innerHTML = person.fullName();
</script>

<h1 id="demo16"></h1>//id can be used in various HTML elements

<script>
// Create an Object
const person1 = {
  firstName: "Madison",
  lastName: "Baker",
  id: 5566,
};

// Add a Method
person1.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

// Display Object Data
document.getElementById("demo16").innerHTML =
"My sister is " + person1.name(); 
</script>

<h1>JavaScript Objects Using for Loop</h1>
<h2>Display Properties</h2>

<p id="demo17"></p>

<script>
// Create an Object
const person2 = {
  name: "Johnson",
  age: 33,
  city: "New York"
};

// Build a Text
let text2 = "";
for (let x in person2) {
  text2 += person2[x] + " ";
};

// Display the Text
document.getElementById("demo17").innerHTML = text2;
</script>

<p id="demo18"></p>

<script>
const person3 = {
  name: "Jennifer",
  age: 32,
  city: "Utah"
};

// Create an Array
const myArray = Object.values(person3);

// Display the Array
document.getElementById("demo18").innerHTML = myArray;
</script>

<h1>JavaScript Object Constructors</h1>

<p id="demo19"></p>

<script>
// Constructor Function for vehicle objects
function Vehicle(brand, model, color, year) {
  this.brandName = brand;
  this.modelName = model;
  this.carColor = color;
  this.carYear = year;
}

// Create a vehcile object
const favCar = new Vehicle("Mclaren", "765LT", "Lime Green", 2022);

// Display vehcile
document.getElementById("demo19").innerHTML =
"My favorite car is " + favCar.modelName + "."; 
</script>

<p id="demo20"></p>

<script>
	const herFavCar = new Vehicle("Mclaren", "720s", "Black", 2018);

document.getElementById("demo20").innerHTML =
"Her favorite car is " + herFavCar.modelName + ". The color of hers is " + herFavCar.carColor + "." + " It is also made by " + herFavCar.brandName + "." + " Mine is a " + favCar.carYear + " Hers is a " + herFavCar.carYear + ".";
</script>

<h1>JavaScript Object Constructors</h1>

<p id="demo21"></p>
<p id="demo22"></p>

<script>

// Constructor function for Person objects
function Vehicle1(color, kRating, type, distance) {
  this.bulbColor = color;
  this.intensity = kRating;
  this.bulbType = type;
  this.beamDistance = distance;
  this.bulbManufacturer = "Sylvania";
}

// Create 2 Person objects
const myFather = new Vehicle1("purple", "8000", "HID", "300ft");
const myMother = new Vehicle1("white", "5000", "Halogen", "350ft");

// Display nationality
document.getElementById("demo21").innerHTML =
"My fathers headlight bulb is " + myFather.bulbManufacturer + ". My mothers is " + myMother.bulbManufacturer; 

document.getElementById("demo22").innerHTML =
"My fathers headligh bulb is " + myFather.bulbType + ". " + "My mothers is " + myMother.bulbType;
</script>

<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<p>Difference between using id and "document.getElementById()" and "this" each followed with ".innerHTML=" using "Date()"</p>

<button onclick="document.getElementById('demo23').innerHTML=Date()">The time is?</button>

<p id="demo23"></p>

<h2>The onclick Attribute</h2>

<button onclick="this.innerHTML=Date()">Time again? Reference this code!</button>

<h2>The onclick Attribute</h2>

<p>Click the button to display the date.</p>
<button onclick="displayDate()">What time is it?</button>

<script>
function displayDate() {
  document.getElementById("demo24").innerHTML = Date();
}
</script>

<p id="demo24"></p>

<h1>JavaScript String</h1>
<h2>The concat() Method</h2>

<p>The concat() method joins two or more strings:</p>

<p id="demo25"></p>

<script>
let text10 = "Hello";
let text20 = "World!";
let text30 = text10.concat(" ",text20);
document.getElementById("demo25").innerHTML = text30;
</script>


<h1>JavaScript String Methods</h1>
<p>Replace "Microsoft" with "W3Schools" in the paragraph below:</p>

<button onclick="myFunctionmahn()">Try it</button>

<p id="demo26">Please visit Microsoft!</p>

<script>
function myFunctionmahn() {
  let text = document.getElementById("demo26").innerHTML;
  document.getElementById("demo26").innerHTML =
  text.replace("Microsoft","W3Schools");
}
</script>

<h1>JavaScript Template String</h1>
<p>Templates allow variables in strings:</p>

<p id="demo27"></p>

<p>Templates are not supported in Internet Explorer.</p>

<script>
	let firstName1 = "Carl";
	let lastName1 = "Ellsworth";

	let text5 = `Welcome ${firstName1}, ${lastName1}!`;

	document.getElementById("demo27").innerHTML = text5;
</script>

<p id="demo28"></p>

<script>
	let header = "Template Strings";
	let tags = ["templat strings", "javascript", "es6"];

	let html = `<h2>${header}</h2><ul>`;

	for (const x of tags) {
		html += `<li>${x}</li>`;
	}

	html += `</u>`;
	document.getElementById("demo28").innerHTML = html;
</script>

<h1>JavaScript Arrays</h1>
<h2>The forEach() Method</h2>

<p>Call a function for each array element</p>

<p id="demo29"></p>

<script>
	const fruits = ["banana", "Orange", "Apple", "Mango"];

	let text18 = "<ul>";
	fruits.forEach(myFunctionDude);
	text += "</ul>";

	document.getElementById("demo29").innerHTML = text18;

	function myFunctionDude(value) {
		text18 += "<li>" + value + "</li>";
	}
</script>

<h2>The push method appends a new element to an array.</h2>

<button onclick="myFunctionFruit()">Try This One</button>

<p id="demo30"></p>

<script>
	function myFunctionFruit() {
		fruits.push("Lemon");
		document.getElementById("demo30").innerHTML = fruits;
	}
</script>
<br><br>


<h1>NESTED JavaScript Objects and Arrays.</h1>

<p id="demo31"></p>

<script>
	let xx = "";
	const myObj = {
		name: "John",
		age: 30,
		cars: [
			{make:"Ford", models:["Fiesta", "Focus", "Mustang"]},
			{make:"BMW", models:["320", "X3", "335ix"]},
			{make:"Mclaren", models:["765LT", "720s", "P1", "F1"]}
			]
	}

	for (let ii in myObj.cars) {
		xx += "<h2>" + myObj.cars[ii].make + "</h2>";
		for (let jj in myObj.cars[ii].models) {
			xx += "<li>" + myObj.cars[ii].models[jj] + "</li>" + "<br>";
		}
	}

document.getElementById("demo31").innerHTML = "<ul>" + xx + "</ul>";

</script>
<br><br>


<h2>The () ? : Ternary Operator</h2>

<p>Input your age and click the button:</p>

<input id="age" value="18" />

<button onclick="myFunctionFam()">Well Can Ya?</button>

<p id="demo32"></p>

<script>
	function myFunctionFam() {
		let voteable;
		let age = document.getElementById("age").value;
		if (isNaN(age)) {
			voteable = "Input is not a number.";
		} else {
			voteable = (age < 18) ? "Too young":"Old enough";
		}
		document.getElementById("demo32").innerHTML = voteable + " to vote.";
	}
</script>
<br><br>

<h2>JavaScript switch</h2>

<h3 id="demo33"></h3>
<h3 id="demo34"></h3>
<h3 id="demo35"></h3>

<script>
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo33").innerHTML = "Today is " + day + " dudes!";
</script>

<script>
	let weekPos;
	switch (new Date().getDay()) {
	case 5:
		weekPos = "Let's paaaaarty";
		break;
	case 6:
		weekPos = "Let's get some work done";
		break;
	case 0:
		weekPos = "Day of worship";
		break;
	default: //default does not have to be last in the switch block
		weekPos = "Wish it twas the weekend";
	}
	document.getElementById("demo34").innerHTML = weekPos;
</script>

<script>
	let weekDesc;
	switch (new Date().getDay()) {
	case 1:
	case 2:
	case 3:
	case 4:
		weekDesc = "This day whomps";
		break;
	case 5:
	case 6:
		weekDesc = "Let's get stuff done!";
		break;
	case 0:
		weekDesc = "Study Scriptures";
	}
	document.getElementById("demo35").innerHTML = weekDesc;
</script>

<h3>JavaScript For In Loop</h3>
<p>The for in statement loops through the properties of an object:</p>

<p id="demo36"></p>

<script>
	const bestCar = {
		brand:"Mclaren",
		model:"765LT",
		engine:"4.0L V8 Twin Turbo",
		weight:"2,709lbs",
		hp:"755bhp",
		torque:"590lbft",
		acceleration:"0-60 in 2.8s",
		top_speed:"205mph"
	};

	let txt = "";
	for (let x in bestCar) {
		txt += bestCar[x] + " ";
	}

	document.getElementById("demo36").innerHTML = "My favourite car is a " + txt;
</script>

<h3>JavaScript For Of Loop</h3>
<p>The for of statement loops through the values of an iterable object.</p><br>

<p id="demo37"></p>

<script>
	let sexiest = "MCLAREN";

	let words = "";
	for (let x of sexiest) {
		words += x + "<br><br>";
	}

	document.getElementById("demo37").innerHTML = words;
</script> 

<h3>JavaScript Continue Statement In Loops</h3>

<p> A loop which will skip the step where i = 3.</p>

<p id="demo38"></p>

<script>
	let numbers = "";
		for (let i = 0; i <= 15; i++) {
			if (i === 3) {
				continue;
			}
			numbers += "The digits are " + i + "<br>";
		}
		document.getElementById("demo38").innerHTML = numbers;
</script>

<h2>JavaScript Break</h2>

<p id="demo39"></p>

<script>
	const fourWheels = ["BMW", "Volvo", "Saab", "Ferrari"];
	let automobiles = "";

	list: { // to <-Label JavaScript statements you precede the statements with a label name and a colon
		automobiles += fourWheels[0] + "<br>"; //statement
		automobiles += fourWheels[1] + "<br>"; //statement
		break list;
		automobiles += fourWheels[2] + "<br>"; //statement
		automobiles += fourWheels[3] + "<br>"; //statement
	} 

	document.getElementById("demo39").innerHTML = automobiles;
</script>

<h1>JavaScript Sets</h1>
<h2>The add() Method</h2>

<p> The add() method adds values to a set:</p>

<p id="demo40"></p>
<p id="demo41"></p>

<script>
	//Creat a Set
	const transportation = new Set();
	//Set() can also be populated with an array: new Set(["this","that","yaknow"]);
	//It can also be populated with predetermined varibles

	//Add Values to the Set
	transportation.add("car"); //the add() Method
	transportation.add("truck");
	transportation.add("van");
	transportation.add("utility");

	let setOutPut = "";
	for (const x of transportation) {
		setOutPut += x + "<br>";
	}//Iterate set values using "for of" loop. Can also us forEach() or values()

answer = transportation.has("prius");//check set for a given value using the setOrMapName.has() method

	// Display the Size
	document.getElementById("demo40").innerHTML = "This set has " + transportation.size + " values." +
	"It contains a prius, yes? " + answer;
	document.getElementById("demo41").innerHTML = setOutPut;
</script>

<h1>JavaScript Maps</h1>
<h2>The new Map Method()</h2>

<p id="demo42"></p>
<p id="demo43"></p>

<script>
	// Create a Map
	const newCars = new Map([
		["Huracon", 200000], // key:value pairs
		["P1", 1000000],
		["Supra", 85000]
		]);

//Map() can also be populated with an array: new Map([["this", 100],["that", 200],["yaknow", 300]]);

	let numb = newCars.get("Supra"); //the get() method gets the value of a key in a Map
	let lambo = newCars.get("Huracon");
	document.getElementById("demo42").innerHTML = "A used Supra goes for " + numb + " dollars!?" +
	" I'd sooner spend " + lambo + " on a Huracon.";

	document.getElementById("demo43").innerHTML = "There are " + newCars.size + " elements in this Map.";
	//The Map.delete() method removes a Map element.
	//The Map.clear() method removes all elements from a Map.
	//Sets and Maps share methods
</script>

<h2>The Map.groupBy() Method</h2>

<p id="demo44"></p>

<script>
	//Could be used as really simple inventory system
	//Create an Array
	const carParts = [
			{name:"turbo", quantityOnHand:300}, //Have an input update quantities for functioning inventory
			{name:"catBackExhaust", quantityOnHand:500},
			{name:"ECU", quantityOnHand:200},
			{name:"coiloverKit", quantityOnHand:150}
		];

	// Callback function to select low volumes
	function myLowStock({ quantityOnHand }) {
		return quantityOnHand > 200 ? "Full" : "Place Order";
	}

	//Group by full and place order
	const newOrder = Map.groupBy(carParts, myLowStock);

	//Display Results
	let currentStock = "Inventory full: <br>";
	for (let x of newOrder.get("Full")) {
		currentStock += "<li>" + x.name + " " + x.quantityOnHand + "</li>";
	}
	currentStock += "<br>These parts are low: <br>";
	for (let x of newOrder.get("Place Order")) {
		currentStock += "<li>" + x.name + " " + x.quantityOnHand + "</li>";
	}
	document.getElementById("demo44").innerHTML = "<ul>" + currentStock + "</ul>";

	console.log(newOrder.get("ok"));
</script>

<h1>JavaScrip Operators</h1>
<h2>The void Operator</h2>

<p><p>
	<a href="javascript:void(0);">Useless Link</a>
</p>

<p>
	<a href="javascript:void(document.body.style.backgroundColor='blue');">
		Click me to change the background color of body to blue.
	</a>
</p>

<h2>JavaScript try catch</h2>

<p>Please input a number betweeen 5 and 10:</p>

<input id="demo45" type="text">
<button type="button" onClick="myValidation()">Test Input</button>
<p id="p01"></p>

<script>

// Short HTML <input id="demo" type="number" min="5" max="10" step="1">

	function myValidation() {
		const message = document.getElementById("p01");
		message.innerHTML = "";
		let x = document.getElementById("demo45").value;
		try {
			if(x.trim() == "") throw "empty";
			if(isNaN(x)) throw "not a number";
			x = Number(x);
			if(x < 5) throw "too low";
			if(x > 10) throw "too high";
		}
		catch(err) {
			message.innerHTML = "Input is " + err;
		}
  //finally {
  //Block of code to be executed regardless of the try / catch result
  //} 
	}
</script>

<h1>JavaScript Function bind()</h1>

<p>This example creates 2 objects (person and member).</p>
<p>The member object borrows the fullname method from person:</p>

<p id="demo46"></p>

<script>
	const person7 = {
		firstName:"John",
		lastName:"Doe",
		fullName: function() {
			return this.firstName + " " + this.lastName;
		}
	}

	const member = {
		firstName:"Hege",
		lastName:"Nilsen",
	}

	let fullName = person7.fullName.bind(member);

	document.getElementById("demo46").innerHTML = fullName();
</script>

<h1>JavaScript Class Methods</h1>
<p>How to define and use a Class method.</p>

<p id="demo47"></p>

<script>
	class Car {
		constructor(name, year) {
			this.name = name;
			this.year = year;
		}
		age() {
			const date = new Date();
			return date.getFullYear() - this.year;			
		}
	}

	const myCar = new Car("Dodge", 2006);
	document.getElementById("demo47").innerHTML =
	"My car is " + myCar.age() + " years old.";
</script>

<h2>JavaScript Functions</h2>
<p>This example calls the fullName method of person, using it on person1:
The second example uses apply.</p>

<p id="demo48"></p>
<p id="demo49"></p>

<script>
	const person6 = {
		fullName: function(city, country) {
			return this.firstName + " " + this.lastName + "," + city + "," + country;
		}
	}

	const person4 = {
		firstName:"Stepahnie",
		lastName:"Anderson"
	}

	const person5 = {
		firstName:"Joshua",
		lastName:"Anderson"
	}
//call() method takes arguments serperately
//apply() method takes arguments as an array
document.getElementById("demo48").innerHTML = person6.fullName.call(person4, "Oslo", "Norway");
document.getElementById("demo49").innerHTML = person6.fullName.apply(person5, ["Ogden", "USA"]);
</script>

<h2>JavaScript Class Inheritance</h2>

<p>Use the "extends" keyword to inherit all methods from another class.</p>
<p>Use the "super" method to call teh parents constructor function.</p>

<p id="demo50"></p>

<script>
	class Carz {
		constructor(brand) {
			this.carname = brand;
		}
		present() {
			return 'I have a ' + this.carname;
		}
	}

	class Model extends Carz {
		constructor(brand, mod) {
			super(brand);
			this.model = mod;
		}
		show() {
			return this.present() + ', it is a ' + this.model;
		}
	}

	const myCar0 = new Model("Koeniggsegg", "One:1");
	document.getElementById("demo50").innerHTML = myCar0.show();
</script>

<h1>JavaScript Promise Object</h1>
<h2>The then() Metod</h2>

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

<h1 id="demo51"></h1>

<script>
const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo51").innerHTML = value;
});
</script>

<h2>JavaScript HTML DOM</h2>

<div id="main">
	<p>Finding HTML Elements by Tag Name</p>
	<p>This example demonstrates the <b>getElementByTagName</b> method.</p>
</div>

<p id="demo52"></p>

<script>
	const g = document.getElementById("main");
	const h = g.getElementsByTagName("p");

	document.getElementById("demo52").innerHTML =
	'The first Paragraph (index 0) inside "main" is: ' + h[0].innerHTML + "<br>" +
	'The second paragraph (index1) inside "main" is: ' + h[1].innerHTML;
	//could also use class="nameHere" on html elements instead of an id="nameHere"
</script>

<p>Changing the HTML style:</p>

<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>

<script>
	document.getElementById("p2").style.color = "blue";
	document.getElementById("p2").style.fontFamily = "Arial";
	document.getElementById("p2").style.fontSize = "larger";
</script>

<button type="button"
onclick="document.getElementById('p2').style.color = 'green'">Change My Color</button>
<button type="button"
onclick="document.getElementById('p2').style.fontSize = 'smaller'">Shrink This</button>

<h2>My first animation! Literally :)</h2>

<p><button onclick="myMove()">Click Me</button></p>

<div id ="container">
	<div id ="animate"></div>
</div>

<script>
	function myMove() {
		let id = null;
		const elem = document.getElementById("animate");
		let pos = 0;
		clearInterval(id);
		id = setInterval(frame, 5);
		function frame() {
			if (pos == 350) {
				clearInterval(id);
			} else {
				pos++;
				elem.style.top = pos + "px";
				elem.style.left = pos + "px";
			}
		}
	}
</script>

<h2>The onmousedown Attribute</h2>

<div onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#D94A38;width:90px;height:20px;padding:40px;">
Click Me</div>

<script>
	function mDown(obj) {
		obj.style.backgroundColor = "#1ec5e55";
		obj.innerHTML = "Let Go!"
	}

	function mUp(obj) {
		obj.style.backgroundColor="#D94A38";
		obj.innerHTML="finally";
	}
</script><br>

<div onmouseover="mOver(this)" onmouseout="mOut(this)"
style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
Hey you!</div>

<script>
	function mOver(obj) {
		obj.innerHTML = "haha"
	}

	function mOut(obj) {
		obj.innerHTML = "Thats a good boy"
	}
</script>

<h2>JavaScript addEventListener()</h2>

<p>This example uses the addEventListener() method to add many events on the same button.</p>

<button id="myBtn">Fun Button</button>

<p id="demo53"></p>

<script>
	var o = document.getElementById("myBtn");
	o.addEventListener("mouseover", myFunction3);
	o.addEventListener("click", myFunction4);
	o.addEventListener("mouseout", myFunction5);

	function myFunction3() {
		document.getElementById("demo53").innerHTML += "Moused Over!<br>";
	}

	function myFunction4() {
		document.getElementById("demo53").innerHTML += "Clicked!<br>";
	}

	function myFunction5() {
		document.getElementById("demo53").innerHTML += "Moused Out!<br>";
	}
</script>

<p id="demo54"></p>

<script>
	document.getElementById("demo54").innerHTML = "Screen width is " + screen.width;
</script>

<h3>JavaScript Confirm Box</h3>

<button onclick="myFunction6()">Try It</button>

<p id="demo55"></p>

<script>
	function myFunction6() {
		var txt;
		if (confirm("press a button!")) {
			txt = "You pressed OK!";
		} else {
			txt = "You pressed Cancel!";
		}
		document.getElementById("demo55").innerHTML = txt;
	}
</script>

<h3>JavaScript Timing</h3>

<p>A script on this page starts this clock:</p>

<p id="demo56"></p>

<script>
	setInterval(myTimer, 1000);

	function myTimer() {
		const d = new Date();
		document.getElementById("demo56").innerHTML = d.toLocaleTimeString();
	}
</script>

<script>
	//Set, retrieve and check cookie data
	function setCookie(cname,cvalue,exdays) {
	  const d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  let expires = "expires=" + d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	function getCookie(cname) {
	  let name = cname + "=";
	  let decodedCookie = decodeURIComponent(document.cookie);
	  let ca = decodedCookie.split(';');
	  for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	}
	
	function checkCookie() {
	  let user = getCookie("username");
	  if (user != "") {
		alert("Welcome again " + user);
	  } else {
		 user = prompt("Please enter your name:","");
		 if (user != "" && user != null) {
		   setCookie("username", user, 30);
		 }
	  }
	}
</script>

<h2>JavaScript Geolocation API</h2>
<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<p id="demo57"></p>

<script>
	const x3 = document.getElementById("demo57");

	function getLocation() {
		if (navigator.geoloaction) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			x3.innerHTML = "Geoloaction is not supported by this browser.";
		}
	}

	function showPosition(position) {
		x3.innerHTML = "Latitude: " + position.coords.latitude +
		"<br>Longitude: " + position.coords.longitude;
	}

	function showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				x3.innerHTML = "User denied the request for Geolocation."
				break;
			case error.POSITION_UNAVAILABLE:
				x3.innerHTML = "Location information is unavailable."
				break;
			case error.TIMEOUT: 
				x3.innerHTML = "The request to get user location timed out."
				break;
			case error.UNKNOWN_ERROR:
				x3.innerHTML = "An unknown error occured."
				break;
		}
	}
</script>

<h1>JS AJAX or Asynchronous JavaScript And XML</h1>
<h1>JSON or JavaScript Object Notation</h1><br><br>

<h2>Below are chart examples created using JS Plotly. 
	Linking the library with a script tag is necessary.</h2>

<!--Vertical bar graph example-->
<div id="myPlot" style="width:100%;max-width:700px"></div>

<script>
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);
</script>

<!--Horizontal bar graph example-->
<div id="myPlot1" style="width:100%;max-width:700px"></div>

<script>
const xArray1 = [55, 49, 44, 24, 15];
const yArray1 = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];

const data1 = [{
  x:xArray1,
  y:yArray1,
  type:"bar",
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout1 = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot1", data1, layout1);
</script>

<!--Doughnut graph example-->
<div id="myPlot2" style="width:100%;max-width:700px"></div>

<script>
const xArray2 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray2 = [55, 49, 44, 24, 15];

const layout2 = {title:"World Wide Wine Production"};

const data2 = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

Plotly.newPlot("myPlot2", data2, layout2);
</script>

<!--Line graph example-->
<div id="myPlot3" style="width:100%;max-width:700px"></div>

<script>
const xArray3 = [50,60,70,80,90,100,110,120,130,140,150];
const yArray3 = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const data3 = [{
  x: xArray3,
  y: yArray3,
  mode:"lines"
}];

// Define Layout
const layout3 = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot3", data3, layout3);
</script>

</body>
</html> 