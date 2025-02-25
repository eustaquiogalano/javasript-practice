// const myObject = {
//     variable: "var",
// };

// const variable = 'property';

// myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

//  // this is equivalent to myObject['property'] and returns 'Value!'


// console.log( myObject.variable )

// function Book (title, author, pages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
//     this.info = function() {
//         return `The ${this.title}, written by ${this.author}, has ${this.pages} pages, read already: ${this.isRead}`;       
//     };
// }

// const atomicHabits = new Book("Atomic Habits", "James Clear", 320, "yes");
// console.log(atomicHabits.info());

// // prototype
// console.log( Object.getPrototypeOf(atomicHabits) );

// console.log( atomicHabits );


//  Prototypal Inheritance
// function Jesus(holiness, power) {
//     this.holiness = 100;
//     this.power = 100;
// }

// Jesus.prototype.blessPeople = function () {
//     return "God is with us.";
// }

// function Person(name, religion) {
//     this.name = name;
//     this.religion = religion;
// }

// Person.prototype.sayHello = function () {
//     return `Hello fellow christians, I'm ${this.name}`;
// }

// Object.setPrototypeOf(Person.prototype, Jesus.prototype);  // inherit the prototype method from Jesus object

// const me = new Person("Kyo", "Christian");  // create new Person object 
// console.log(me);  // display the person me created 
// console.log( me.sayHello() ); // Person's own prototype
// console.log( me.blessPeople() ); // Person's inherited prototype

// const wife = new Person("random", "Christian");  // another Person object created 
// console.table( wife );
// console.log( wife.sayHello() );
// console.log( wife.blessPeople() );


// let head = {
//     glasses: 1,
//     masked: true,
// };

// let table = {
//     pen: 3,
//     __proto__: head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };

// console.log( pockets.masked );
// console.log( pockets.pen + 5 );


// fighter constructor 

// function Fighter(name, country) {
//     this.name = name;
//     this.country = country;

//     // initial stats and attack damage 
//     this. punch = 10;
//     this.kick = 20;
//     this.health = 100;

//     // initial self introduction
//     this.info = function() {
//         console.log( `I am ${this.name}, from ${this.country}` );
//     }
// }

// khabib's father
// const abdulmanap = {
//     training: 5,
// };

// // fighter creation for main event
// const mcgregor = new Fighter("McGregor", "Ireland");  // with the use of constructor 
// const khabib = { // with the use of object literal
//     name: "Khabib",
//     country: "Russia",
//     punch: 10,
//     kick: 20,
//     health: 100,
//     __proto__: abdulmanap,

//     info: function() {
//         console.log( `I am ${this.name}, from ${this.country}` );

//     }
// };

// // fighter's self introduction
// mcgregor.info();  
// khabib.info();

// // khabib's father trained him and inherited some power 
// khabib.punch += khabib.training;  // +5 punch power
// khabib.kick += khabib.training;  // +5 kick power  

// console.table( khabib );



// Factory Function

// function createfighter(name, weight) {
//     const kgs = weight;

//     const introduce = () => `I am ${name}, weighing ${90}kgs` ;

//     return { name, kgs, greet: introduce};
// }

// // created a fighter using factory function
// const khabib = createfighter("Khabib", 90);
// console.table( khabib );  // display the khabib object fighter 

// function createSon(name, weight) {
//     const son = createfighter(name, weight);

//     const increaseWeight = () => ++kyo.kgs;
//     return Object.assign({}, son, { increaseWeight });
// }

// const kyo = createSon("Kyo", 55);
// kyo.increaseWeight();
// kyo.increaseWeight();
// kyo.kgs = kyo.increaseWeight();

// console.table(kyo);



// Immediately Invoked Function Expression (IIFE)

// create function then invoked right after creating the function
// Regular function and Arrow function works
// (function() {
//     alert("hello");
// })();


// // complex example
// const operate = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { addition: add, sub, mul, div };
// })();

// console.log( operate );
// console.log( operate.addition(1, 11) );
// console.log( operate.mul(5, 5) );


// CLOSURES
// examples

// function outerFn() {
//     const outerVar = "Im outer var";

//     return function() {
//         const innerVar = "Im inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }
// }

// const clos = outerFn();

// console.log( clos() );  // I was able to access "outerVar" because of closure

// function greeting(greeting = '') {
//     const greet = greeting.toLocaleUpperCase();

//     return function(name) {
//         return `${greet}! ${name}`;
//     }
// }

// const hello = greeting("Hello");
// console.log( hello("Kyo") );

// const goodEvening = greeting("Good evening");
// console.log( goodEvening("Jesus") );



// PRIVATE VARIABLES in closures

// function createGame(gameName) {
//     let score = 0;

//     return function() {
//         score++;
//         return `
//         Game: ${gameName}
//         Score: ${score}`;
//     };
// }

// const basketball = createGame("Basketball");

// basketball();
// basketball();
// console.log( basketball() );


// const baseball = createGame("Baseball");

// for (let i = 0; i <= 8; i++) {
//     baseball();
//     if (i === 8) {
//         console.log( baseball() );

//     };
// }




// MODULE PATTERN

// IIFE

// const sampleModule = (function() {

//     // Primitive variable private variable
//     let increaseByFive = 5;

//     // public array
//     let number = [];

//     // private method - accessible only inside this module
//     const privateMethod = () => console.log("Inside module");


//     // public method - accessible in and outside of this module
//     const addition = (a, b) => {
//         privateMethod();  // invoke private method 

//         // each time this function gets invoke push 
//         // the current value of increaseByFive value to number array
//         number.push(increaseByFive);
//         console.log(number);

//         // return increaseByFive variable
//         return increaseByFive = increaseByFive + a + b ; 
//     };


//     // this module will return an object with public methods/functions 
//     return {
//         addition,
//         number,
//     }

// })();

// // variable plus holds the object returned from sampleModule module
// const plus = sampleModule;  

// plus.addition(1, 1);

// console.log( plus.number );

// plus.addition(1, 1);
// plus.addition(1, 1);

// console.log( plus.number );

// plus.addition(1, 1);
// console.log( plus.addition(10, 1) );



// GETTERS and SETTER

// let user = {
//     name: "Kyle",
//     surname: "Meddy",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(fName) {
//         [this.name, this.surname] = fName.split(" ");
//     }
// };

// console.log( user.fullName );

// user.fullName = "Walter Mart";

// console.log( user.fullName );
// console.log( user );

// Object.defineProperty(user, "nickname", {
//     get() {
//         return `${this.nickname}`;
//     },
//     set(alias) {
//         nickname = alias;
//     }
// });

// user.alias = "Mamba";

// console.log(user);


// class User {
//     nickname = prompt("Name please?");
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayAge() {
//         return this.age;
//     }

//     sayName() {
//         return this.name
//     }
// }

// const walter = new User("Walter" , 34); 
// console.log( walter.sayAge() );
// console.log(walter.sayName());

// const mark = new User();
// console.log(mark.nickname);
// console.log(mark);

// function Clock({ template }) {

//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function () {
//         clearInterval(timer);
//     };

//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }

// let clock = new Clock({ template: 'h:m:s' });
// //   clock.start();


// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();


// class Sports {
//     constructor(name, numberOfPlayersPerTeam, yearOriginated) {
//         this.name = name;
//         this.numberOfPlayersPerTeam = numberOfPlayersPerTeam;
//         this.yearOriginated = yearOriginated;
//     }


// }

// function Sports(name, numberOfPlayersPerTeam, yearOriginated) {
//     this.name = name;
//     this.numberOfPlayersPerTeam = numberOfPlayersPerTeam;
//     this.yearOriginated = yearOriginated;

//     this.getInfo = function () {
//         return `${this.name} was originated way back ${this.yearOriginated}, 
//             and needed ${numberOfPlayersPerTeam} each team to play.`;
//     };
// }



// class Sports {
//     // static  belongs to the class itself instead of instances
//     static sportsCount = 0;

//     // private class field
//     #samplePrivateCount = 0;

//     // constructors gets called when creating an instance  
//     constructor(name, numberOfPlayersPerTeam, yearOriginated) {
//         this._name = name;
//         this.numberOfPlayersPerTeam = numberOfPlayersPerTeam;
//         this.yearOriginated = yearOriginated;
//         Sports.sportsCount++;
//         this.#samplePrivateCount++;
//     }

//     // method
//     getPrivateCount() {
//         return this.#samplePrivateCount;
//     }

//     // class feild
//     sampleClassFiled = `I am a public feild/property, in ${this._name}`;

//     // static  belongs to the class itself instead of instances
//     static getSportsCount() {
//         return `Registered Sports: ${Sports.sportsCount}`;
//     }

//     // method
//     getInfo() {
//         return `${this.name} was originated way back ${this.yearOriginated}, 
//             and needed ${this.numberOfPlayersPerTeam} each team to play.`;
//     }

//     // getter
//     get name() {
//         return this._name;
//     }   

//     // setter
//     set name(value) {
//         this._name = value;
//     }
// }


// const basketball = new Sports("Basketball", 5, 1891);
// console.log(basketball.sampleClassFiled);
// // console.log(basketball.getInfo());

// const voleyball = new Sports("Voleyball", 6, 1895);

// // console.log(voleyball.getInfo());
// // voleyball.name = "vBall";
// // console.log(voleyball.name);

// console.log(Sports.getSportsCount());
// console.log(voleyball.getPrivateCount());



// w3source exercise practice on Class

// 1. Person class with details
// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     personDetails() {
//         return `
// Details
// Name: ${this.name}
// Age: ${this.age}
// Country: ${this.country}
//                 `;
//     }
// }

// const mike = new Person("Mike", 23, "Philippines");
// const rui = new Person("Rui", 29, "Japan");


// console.log(mike.personDetails());
// console.log(rui.personDetails());

// 2. Rectangle class with area and parameter

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     calculateArea() {
//         return `Area: ${this.height * this.width}`;
//     }

//     calculatePerimeter() {
//         return `Perimeter: ${(this.height + this.width) * 2}`;
//     }
// }

// const sampleRectangle = new Rectangle(10, 16);

// console.log( sampleRectangle.calculateArea() );
// console.log( sampleRectangle.calculatePerimeter() );

// 3. Vehicle and Car Classes with inheritance

// class Vehicle {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     getDetails() {
//         console.log(`Brand: ${this.brand}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Year: ${this.year}`);
//     }
// }

// class Car extends Vehicle{
//     constructor(brand, model, year, numberOfDoors) {
//         super(brand, model, year);
//         this.numberOfDoors = numberOfDoors;
//     }

//     getDetails() {
//         super.getDetails();
//         console.log(`Doors: ${this.numberOfDoors}`);
        
//     }
// }

// const nissanGTR = new Car("Nissan", "GTR", 2023, 2);

// console.log(nissanGTR.getDetails());


// 4. Back account class with deposit and withdrawal
// class BackAccount {
//     constructor(accNumber, balance) {
//         this.accNumber = accNumber;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     withdraw(amount) {
//         this.balance -= amount;
//     }

//     getBalance() {
//         console.log(this.balance);
//     }
// }

// const myAccount = new BackAccount("Eustaquio", 0);
// console.log(myAccount);

// myAccount.deposit(1_000_000);
// myAccount.getBalance();

// myAccount.withdraw(120_000_000);
// myAccount.getBalance();

// console.log(myAccount);


// 5. Shape, Circle, and Triangle Classes with Area Calculation

// class Shape {
//     calculateArea() {
//         throw new Error("Must be overridden in subclass. Wag dito sa iba nalang ");
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     calculateArea() {
//         console.log(`Area: ${Math.PI * Math.pow(this.radius,2)}`);
//     }
// }

// const smallC = new Circle(5);
// smallC.calculateArea();


// class Triangle extends Shape {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     calculateArea() {
//         console.log(`Area: ${1/2 * this.base * this.height}`);
//     }
// }

// const tri = new Triangle(8, 5);
// tri.calculateArea();


// const hugis = new Shape();
// hugis.calculateArea();

// 6. Employee and Manager Classes with Salary Calculation

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        console.log(`Annual Salary: ${this.salary * 12}`);
        return this.salary * 12;
    }
}

class Manager extends Employee {
   

    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {  
        const bonus = 0.5;
        const baseSalary = super.calculateAnnualSalary();
        const bonusAmount = baseSalary * bonus;
        console.log(`Annual Salary with bonus: ${bonusAmount + baseSalary}`);
    }
}

const kyoManager = new Manager("Eustaquio Galano II", 50000, "IT");
kyoManager.calculateAnnualSalary();
console.log(kyoManager);
