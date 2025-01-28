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
function Jesus(holiness, power) {
    this.holiness = 100;
    this.power = 100;
}

Jesus.prototype.blessPeople = function () {
    return "God is with us.";
}

function Person(name, religion) {
    this.name = name;
    this.religion = religion;
}

Person.prototype.sayHello = function () {
    return `Hello fellow christians, I'm ${this.name}`;
}

Object.setPrototypeOf(Person.prototype, Jesus.prototype);  // inherit the prototype method from Jesus object

const me = new Person("Kyo", "Christian");  // create new Person object 
console.log(me);  // display the person me created 
console.log( me.sayHello() ); // Person's own prototype
console.log( me.blessPeople() ); // Person's inherited prototype

const wife = new Person("random", "Christian");  // another Person object created 
console.table( wife );
console.log( wife.sayHello() );
console.log( wife.blessPeople() );