// alert("motivation is key")
// document.write("hello septa people")
// console.log("life requires motivation")

// login code
console.log("motivation");

const name = "silvia"

// const name = "femi"

let fish;

fish = "titus"
fish = "catfish"

console.log(fish);

function dosomething() {
    console.log(name)
}

//Comment

//statement

//variable

//var
//let
//const

const church = "deeper life";

let name1 

console.log(church);


// data types

// 1. string
let sentence = "i wnt to the market";

// 2. Number;

let age = "20"
let newage = "10"

console.log(age + newage);

//concertenation

// 4. Boolean

let isfemiawake = false

// typeof

console.log(typeof (age));

//concertenation

const website = "google";
const url = "https://www." +website+ ".com"

console.log(url)

const oldname = "bayo";
const oldage = 28

console.log("i know" + oldname + "is" + oldage + "years old");

const namee =  "hassan toyin";
const address = "ikeja";
const school = "LASU";


console.log(" my name is "  + namee +  " i live at "  + address + " i attended "  +  school);

//params or argument or placeholder

function sum(x) {
    console.log(2 + x);
}

sum(5) // invoke or call

function addition(a,b) {
    console.log(a + b)
}


addition(2,2)
addition(3,2)
addition(4,2)
addition(5,2)

let sum1 = 2+2
let sum2 = 3+2
let sum3 = 4+2
let sum4 = 5+2


// Nigeria NIG

function country(country, CountryAbbreviation) {
    console.log(country + " " + CountryAbbreviation)
}

country("Nigeria","Nig")
country("Ghana","Gha")
country("London","Lon")
country("Canada","Can")
country("Paris","Par")

function sum(a, b) {
    console.log(a + b)
    console.log(a + " + " + b + " = " + (a + b)) 
}

sum(2,1)
sum(2,2)


function sub(a, b) {
    console.log(a-b)
    console.log(a + "-" + b + " = " + (a-b))
}


sub(2,1)
sub(3,2)




function multiply(a, b){
    console.log(a + " x " + b + " = " + a*b)
}

multiply(2, 1)
multiply(3, 2)





let car = {
    color: "pink",
    brand:"toyota",
    plateNumber:257825372,
    model:"corlla",
    tyrecolor:"black",
    year:2010
}


let person = {
    skinColor:"black",
    age:"15",
    name:"Toyin",
    address: {
        streetName: "umeri street",
        localGovt: "shomolu",
        state: "ogun",
    }
}

console.log(person.address.state)

let country1 = {
    yorubaFOOD:"amala",
    igboFOOD:"vegetable",
    hausaFOOD:"eba",
    Food:function() {
        console.log("delicious");
    }
}

console.log(country1);

console.log(country1.igboFOOD);

country1.igboFOOD = "okro" 

console.log(country1.igboFOOD);

//Array

let animal = ["lion", "dog", "pig"]

console.log(animal);
console.log(animal[2])

animal[2] = "cat"
console.log(animal)

let cars = ["benz", "toyota", "lexus", "bentley"]

//access an array
console.log(cars);
console.log(cars[1])

cars[1] = "porshe"
console.log(cars)

let person1 = [
    {
        gender: "female",
        agebracket: "15-20",
        school: "queen college",
        address:{
            street: "ayo street",
            city: "lagos"
        }
    },
    {
        gender: "male",
        agebracket: "15-20",
        school: "kings college",
        address:{
           street: "ayo street",
            city: "lagos"
        }
    },
    "adebayo"
]
person1[0].gender = "male"
console.log("new gender",person1);

person1[1].gender = "female"
console.log("new f",person1);

person1[0].address.city = "ogun" 
console.log("new city",person1)

person1[2] = "toyin"
console.log("new name",person1);

//console.log(person1);
//person1.city = "ogun"
//console.log(person1.city)
//person1.adebayo = "toyin"
//console.log(person1.adebayo)


//array is zero index

//conditional statements

//>,<,<=,>=,==,===,!
//> = greater than
//< = less than
// >= = greater than or equal to
// <= = less than or equal to
// == =double equal to (equals to)
// === = triple equals to (strictly equal to)
// ! = not equals to

// ll = or
// && = and

let rainfall = true
let sunshine = false



//if (condition) {
    //code to be excuted if the condition is true

//}

let Age =18;

if(age != "18") {
    console.log("yes age is greater");
} else if (Age >= 18){
    console.log("yes age");
}else{
    console.log("this condition is false")
}


//let male = malechatGROUP;
//let female = femalechatGROUP
//if (male){
   // malechatGROUP()
//}else if (female){
    //femalechatGROUP()
//}else {console.log("no")}

// true || false = true
// true || true = true
// false || false = false

// true && false = false
// true && true = true
// false && false = false


let dogBark = true;
let tobiSleepaLot = true;

if (dogBark || tobiSleepaLot){
    console.log("yes")
}else{
    console.log("nah")
}

if (dogBark && tobiSleepaLot){
    console.log("yes")
}else{
    console.log("nah")
}


// getElementById
// querySelector()
// querySelectorAll()

console.log(document)
let paragraph1 = document.getElementById("life");
//let paragraph2 = document.getElementByClass("motivation");
//let paragraph3 = document.getElementByTagName("p");

let paragraph4 = document.querySelector(".motivation")

console.log(paragraph4)

console.log(paragraph1)

//document.createElement(element)
//document.removeChild(element)
//document.appendChild(element)
//document.replaceChild(new,old)
//document.write(text)

// DOM (document object model)
//we use it to manipulate our webpage(also called document) using javascript



let people = document.getElementById("domhead");
console.log(people)



//let people1 = document.getElementByClass("septa");
//console.log(people1[1])

let textDom = document.getElementById("text")
console.log(textDom)


let divTag = document.getElementById("textNew")
let newtext = document.createElement("h1")
newtext.textContent = "septa is the best"

//let divTag = document.getElementById("textNew")
divTag.appendChild(newtext)

newtext.style.color = "white"
divTag.style.backgroundColor = "black"

let removepara = document.querySelector("#parent :nth-child(even)")
removepara.remove()

let removedom = document.getElementById("text")
removedom.remove()

// EVENT

let getButton = document.querySelector("#btn")

getButton.addEventListener("click", function () {
    alert("please slap my face")
})