var a;
a = 10;
b = 11;
var c = 12;
console.log(a)
console.log(b)
console.log(c)
a = 13; //Reassign a new value of type number to a.
console.log(a); //Prints out 13.
a = "Another value which is a string"; //Reassign a new value of type string to a.
console.log(a); //Prints out Another value which is a string.
a = true; //Reassign a new value of type boolean - i.e. true or false.
console.log(a); //Prints out true.

var d;

a = null;

a = 10; //Assign variable a the value of 10
b = 20; //Assign variable b the value of 20
c = a + b; //Add value in a and b and put the result in variable c.
console.log(c); //This should print out 30
console.log(b - a); //Subtract a value from b value; displays 10 in console.
console.log(b/a); //Divide b value by a value; displays 2 in console.
console.log(a*b); //Multiply a value by b value; displays 200 in console.
console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console.
console.log(a**2); //a value raised to power 2; displays 100 in console.
a++; //Increment a value.
console.log(a); //Displays 11 in console.
b--; //Increment b value.
console.log(b); //Displays 19 in console.

firstName = "Chika";
lastName = "Nwogu";
fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName
console.log(fullName); //This should output the full name Pius Onobhayedo.

a = 10;
a < 11; //Returns true
console.log(a < 11); //Displays true in console
var test = a > 20; //Declares a variable named test and gives it the value of false.
console.log(test); //Displays false in console
a >= 10; //Returns true
a <= 20; //Returns true
a == 10; //Returns true
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"

a = 1;
b = 2;
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3.
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true.
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true.
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

5 << 1; //Equivalent of 5 * 2
5 <<2; //Equivalent of 5 * 4
5 <<3; //Equivalent of 5 * 8
40 >> 1; //Equivalent of 40 / 2
40 >>2; //Equivalent of 40 / 4
40 >>3; //Equivalent of 40 / 8

var minimumVotingAge = 18;
var age = 17;
if (age < minimumVotingAge){
console.log("Not eligible to vote");
}else{
console.log("Eligible to vote");
}

var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
        default:
    console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist")
} //The switch statement prints out Sunday

//By direct declaration
function addTwoNumbersA(number1, number2){
    return number1 + number2; //Add the two numbers passed when function is called
}
    //By expression
var addTwoNumbersB = function(number1, number2){
    return number1 + number2;
}
console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50).
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).

//Define a function that receives a number to be squared
function square(number){
    number = number**2;
    return number;
}
var number = 20; //Declare variable that holds number to be squared
var numberSquared = square(number); //Pass number (by value) to the square() function
console.log(numberSquared); //The function returns 400
console.log(number); //The value of number variable outside the function remains 20

function multiplier(){
    var product = 1;
    for (var x=1; x < arguments.length; x++){
    product = product * arguments[x];
    }
    return product;
    }
    console.log(multiplier(10,30,10));//Prints 300 to the console

var accumulatedTotal = 0; //Declare and initialize a global variable.
//Declare function named sum that expects two parameters named number1 and number2.
function sum(number1, number2){
    //The variables named total, number1 and number2 below are function scope variables.
    //They are not visible from outside the function.
    var total = number1 + number2;
    //Update the global variable named accumulatedTotal.
    //Even though not declared within the function, it is visible.
    accumulatedTotal = accumulatedTotal + total;
    return total;
}
console.log(sum(2,3)); //Call sum() function and print to console the total returned.
console.log(sum(10,20)); //Call sum() function and print to console the total returned.
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35

var vehicles = ["car","lorry","trailer"];
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ]
//Declare a variable named basket and assign an empty array literal.
var basket = [ ];
console.log(basket); //Prints out the array literal [ ]

//Declare a variable named myExpressions and assign an array literal which contains expressions.
var myExpressions = ["car", 2+3, 10, true]; //The second element includes a plus operation
console.log(myExpressions); //Prints out [ 'car', 5, 10, true]
console.log(myExpressions[0]); //Prints out 'car'
console.log(myExpressions[1]); //Prints out 5
console.log(myExpressions[2]); //Prints out 10
console.log(myExpressions[3]); //Prints out true
myExpressions[3] = false; //Change the expression at position 3.
console.log(myExpressions[3]); //Prints out fals

function Person(firstName, lastName, height, weight){
    //Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ return this.firstName + " " + this.lastName}
}

var person1 = new Person("Pius", "Onobhayedo",1.72, 80);
var person2 = new Person("Mary", "Joseph", 1.7, 70)
console.log (person1.firstName); //Prints out Pius
console.log (person1.getFullName()); //Prints out Pius Onobhayedo
console.log (person2.firstName); //Prints out Mary
console.log (person2.getFullName()); //Prints out Mary Joseph

Person.prototype.complexion = "dark brown";

person1.complexion = "light brown"; //Specify complexion value for object instance, person1.
console.log(person1.complexion); //Prints out light brown.
console.log(person2.complexion); //Prints out the default value for complexion i.e. dark brown.

Person.prototype.getComplexion = function ( ){
    return this.complexion
}
Person.prototype.setComplexion = function (complexion){
    this.complexion = complexion;
}
person1.setComplexion('chocolate'); //Use the method just added to blueprint person
console.log(person1.getComplexion( )); //Prints out black.

var today = new Date();
console.log(today);

var re = new RegExp('xyz'); //'xyz' is the pattern to be matched.

var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
//Simply check if pattern is in searchString using test() method.
console.log(re.test(searchString)); 

var personJSON1 = '{ \
    "firstName":"Chika", \
    "lastName": "Nwogu", \
    "complexion": "brown", \
    "heightInMeters": 1.7,\
    "programmer" : true, \
    "olympicMedal" : null \
}'

var personJSON2 =' { \
    "names":{ \
    "firstName":"Chika", \
    "lastName": "Nwogu" \
    }, \
    "complexion": "brown", \
    "heightInMeters": 1.7, \
    "programmer" : true, \
    "olympicMedal" : null \
} '

var p1Object = JSON.parse(personJSON1);
console.log(p1Object);
//Convert JSON string named 
var p2Object = JSON.parse(personJSON2);
console.log(p2Object);

var x = 'Let us search this text for Chika. If Chika is found, …';
var regex = /Chika/gi; //All occurences of Pius independent of case
var y = x.replace(regex,'John'); //Replaces any match found with 'John'
console.log(y); // This should output the string 'Let us search this text for John. If John is found, …'
console.log(x); // This remains 'Let us search this text for pius. If Pius is found, …'

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
//log each element in the forEach loop
languages.forEach(function(element) {
console.log(element); //This should output each element successively.
});

languages.forEach(function(language, index) {
var output = index+1 + '. ' + language;
console.log(output);
});