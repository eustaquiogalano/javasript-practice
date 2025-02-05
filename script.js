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

function createfighter(name, weight) {
    const kgs = weight;

    const introduce = () => `I am ${name}, weighing ${90}kgs` ;

    return { name, kgs, greet: introduce};
}

// created a fighter using factory function
const khabib = createfighter("Khabib", 90);
console.table( khabib );  // display the khabib object fighter 

function createSon(name, weight) {
    const son = createfighter(name, weight);

    const increaseWeight = () => ++kyo.kgs;
    return Object.assign({}, son, { increaseWeight });
}

const kyo = createSon("Kyo", 55);
kyo.increaseWeight();
kyo.increaseWeight();
kyo.kgs = kyo.increaseWeight();

console.table(kyo);


