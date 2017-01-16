// Intermediate Programming Quiz 1

// 1. Inside which HTML element do we put the JavaScript?
// at the bottom of the body, inside the <script src ="sdfsdfsd"></script>

// 2. Write an example of this element calling a file called main.js
// see quiz.html file

// 3. What is the correct JavaScript syntax to change the content of the HTML element below?
// <p id="demo">This is a demonstration.</p>

function numberThree() {
	document.querySelector("#demo").innerHTML = "I changed the thing"; 
}

numberThree();

// 4. True or False: You can select multiple elements on the page using document.querySelector() if you use a string containing one or more CSS selectors separated by commas



// 5. Where is the correct place to insert JavaScript in your HTML?
// at the bottom of the body

// 6. How do you write "Hello World" in an alert box?

window.alert("Hello World");

// 7. And in a console log?

console.log("Hello World");

// 8. Create a variable named Dog with a value of an object
// That object should have a name, a species, a gender, and an age

var Dog = [
	name= "Doggo",
	species= "canine",
	gender= "gender-apathetic",
	age= 3,
];


// 9. Write an example of how you would declare multiple variables using only one use of the keyword var
// Name the variables: cat, horse, and rabbit
// Set each equal to an empty object

var animals = [
	cat="",
	horse="",
	rabbit="",

];

//Write the answers to the next few questions in one function, below Question #12
// 10. Create a function, named petInfo.
// 11. It should take in a parameter called pet
// 12. It should return a sentence that (given info on a dog named Lassie) would read "Lassie is a 4-year-old, male dog." (You can assume that all animal ages will be in years, and 0 is anything less than a year old)

function petInfo (pet) {
	console.log([name] + " is a " + [age] + "-year-old, " + [gender] + " " + [species] + ".");
};

petInfo(Dog);


// 13. Now, fill in info for the cat, horse, and rabbit.

var animals = [
	{
		name: "Chairman Meow",
		species: "feline",
		gender: "gender fluid",
		age: 7,
	},
	
	{
		name:"Mr. Ed",
		species:"equine",
		gender:"male",
		age: 2,
	},

 	{
		name:"M.C. Fluffers",
		species:"rap-rabbit extraordinaire",
		gender:"female",
		age: 1,
	},
];


// 14. Now call petInfo() for each pet, so that it would return in the console

petInfo(animals[0]);

// 15. Copy petInfo() here and add in an if statement that does the following:
	// If the animal is, or is older than, 10 years old, it adds the following to the returned statement: "Pet's age indicates need for special nutrition. Recommend food for older animals and check for rabies shots."
	// If the animal is younger than 2, it adds: "Pet's age indicates risk of not having had any shots. Ask about pet's shot history."
	// If between 2 and 9, add: "Check status of rabies shots."
	// If pet is not a rabbit and is 1 or older, add: "Check if animal has been ", then "spayed" for female and "neutered" for male

function petInfo(pet) {
	if (age>=10) {
		console.log([name] + " is a " + [age] + "-year-old, " + [gender] + " " + [species] + "." + " Pet's age indicates need for special nutrition. Recommend food for older animals and check for rabies shots.");
	}
	else if (age<2) {
		console.log([name] + " is a " + [age] + "-year-old, " + [gender] + " " + [species] + "." + " Pet's age indicates risk of not having had any shots. Ask about pet's shot history.");
	}
	else if (age>2 && age<9) {
		console.log([name] + " is a " + [age] + "-year-old, " + [gender] + " " + [species] + "." + " Check status of rabies shots.")
	};



};

petInfo();




// 16. Write a while loop that counts sheep in the console until 42. Use a var called sheep and console log something like "13 sheep. 14 sheep."Etc
function countSheep () {
n = 0;
while (n < 42) {
	n++,
	console.log(n + " sheep");
}
};

countSheep();


// 17. Explain the structure of a for loop (short answer)
// In a for loop, the for statement is followed (in parenthesis) by an expression or variable, sometimes a true or false expression, and a final expression that indicates what the loop should do after each loop. Then within curly brackets, more information is given as to what should be done until the first condition in the parenthesis is met. 


// 18. Put all the above pets into an array called clientPets

// var clientPets = [
// 	[ Dog = [
// 	name= "Doggo",
// 	species= "canine",
// 	gender= "gender-apathetic",
// 	age= 3,
// ]


// Write a function after Question #21, called rounding, that console logs each of the following:
// 19. Round a number normally
// 20. Round a number up
// 21. Round a number down

function rounding (num) {
	console.log(Math.round(num));
	console.log(Math.floor(num));
	console.log(Math.ceil(num));
}

// 22. Call that function with the number 12.75

rounding(12.75);

// 23. How would you find the highest number of the following set: 2,5,6,3

console.log(Math.max(2,5,6,3));

// 24. How would you open a NEW window to google?

window.open("http://www.google.com");

// 25. And if you wanted to navigate the CURRENT window to google?

location.assign("http://www.google.com")


