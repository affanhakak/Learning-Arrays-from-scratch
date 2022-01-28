// lets learn arrays from scratch


// Arrays are data structures that allow us to save more than one value in a single structure.

// empty array
let students = [];

// we can save multiple strings in an array of strings
let students = [
  "john",
  "paul",
  "raheem",
];

// we can save numbers in an array of numbers
let numbers = [1, 2, 3, 4];

// we can save combo of numbers, strings and boolean
let studentInfo = [
  "john",
  1,
  "paul",
  2,
  "raheem",
  3,
  true,
  false,
  null,
  undefined,
];

//Arrays have length and that can be accessed by array.length
let arr = [1, 2, 3]; // arr.length = 3 also [].length = 0, which means length of an empty array , that will always be zero

// we can get data out of arrays, thats where index of arrays step in. the indexing of array starts from 0
let arr = ["a", "b", 1, 2];
//index of a is 0
//index of b is 1
//index of 2 is 3
// indexing is done as arr[0] which will be "a" similarly arr[3] will be 2
//example
let fruits = [
  "apple",
  "orange",
  "banana",
];
fruits.length = 3; // *(length = index+1)*
fruits[0] = "apple";
fruits[1] = "orange";
fruits[2] = "banana";
fruits[5] = undefined; // ... because item at index 5 doesnt exist
let vegetables = ["raddish", "oniono"]; // spelling at index 1 should be onion so that can be done
vegtables[1] = "onion";
//therefore updated array will be ["raddish", "onion"]

//Array Methods
//push: add to end
let kids = ["baby", "poppy"];
kids.push("timmy");
kids = ["baby", "poppy", "timmy"]; //which is updated kids array
//pop: remove from end
kids.pop();
kids = ["baby", "poppy"]; //.. so pop doesnt require any arguements as it removes the last element
//shift: remove from start
kids.shift();
kids = ["poppy"]; //.. so shift doesnt require any arguements as it removes first element
//unshift: add to start
kids.unshift("jimmy");
kids = ["jimmy", "poppy"]; // which is updated kids array
//concat: to merge arrays
let blinders = [
    "thomas",
    "arthur",
    "johnny",
    "finch",
  ];
  let lotteryNumbers = [1, 2, 3, 4];
  blinders.concat(lotteryNumbers) = [
    "thomas",
    "arthur",
    "johnny",
    "finch",
    1,
    2,
    3,
    4,
  ]; // note that blinders or lotteryNumbers array wont be updated, they are exactly the same 
//we can also do reverse
lotteryNumbers.concat(blinders) = [
    1,
    2,
    3,
    4,
    "thomas",
    "arthur",
    "johnny",
    "finch", 
  ];
//includes: looks for a value, it is a boolean value, it returns true or false
const array = [1,2,3];
array.includes(2) // will return true
array.includes(5) // will return false
// reverse
let arr = [1,2];
arr.reverse();
arr = [2,1];
//slice: copies a part of an array
let colors = ["red", "green", "orange" , "yellow" , "blue" , "indigo" , "white" ];
colors.slice()
colors = ["red", "green", "orange" , "yellow" , "blue" , "indigo" , "white" ];
colors.slice(3); // goes from index of 3 to the very end
colors = ["yellow" , "blue" , "indigo" , "white" ];
colors.slice(1,3); // goes from index of 1 to index of 2. doesnt include 3
colors = ["blue" , "indigo"];
colors.slice(-1); // gives us last color only
colors = ["indigo"];
//splice: removes or replaces itemsin an array
let partyGuys = ["john", "pop", "neil", "andy", "shaun", "albert", "rocky"];
partyGuys.splice(5,1); // index of 5 is removed that is albert
partyGuys = ["john", "pop", "neil", "andy", "shaun", "rocky"];
partyGuys.splice(1,0,"albert");
partyGuys =["john", "albert", "pop", "neil", "andy", "shaun", "rocky"];
partyGuys.splice(3,0,"pip","shetty");
partyGuys =["john", "albert", "pop", "pip","shetty", "neil", "andy", "shaun", "rocky"]

//sort: to sort an array (check mdn for sort and other array methods)

//equity testing
"hi" === "hi" // returns true
["hi",1] === ["hi",1] // returns false
[1] === [1] // returns false
// returns false because the reference isnt same they arent pointing to a same thing
let nums = [1,2,3];
let numsAgain = nums;
// now any change I reflect in either of them will reflect in other one because now they are refering to a same thing
nums === numsAgain // returns true

// arrays and const (note with const we cant re-assign, with let we can)
let num =1;
num += 1;
// this is valid
const PI = 3.14159;
PI += 1;
// this is not valid as const cant be reassigned
//const can be and is used with arrays unless the array is reassigned
const arr = [1,2,3];
arr.push(4);
arr = [1,2,3,4]; // this is valid
const array = [1,2,3];
array = [4,5] // this is not valid so error will be thrown

//nested arrays
const eatables =[
    ["pizza", "burger", "sandwich"],
    ["cheese", "chicken", "mutton"],
    ["Dominos", "Burger-King", "Vankies"]
];
//accessing items inside nested arrays
eatables [1][1] = "chicken" // ist array, ist item
eatables[0][0] = "pizza" // zeroth array, zeroth item 
eatables [2][2] = "vankies" // second array, second item

//flattening an array
const eatables =[
    ["pizza", "burger", "sandwich"],
    ["cheese", "chicken", "mutton"],
    ["Dominos", "Burger-King", "Vankies"]
];
eatables.flat();
eatables = ["pizza", "burger", "sandwich", "cheese", "chicken", "mutton", "Dominos", "Burger-King", "Vankies"]



