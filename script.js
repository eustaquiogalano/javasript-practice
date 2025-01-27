// const myObject = {
//     variable: "var",
// };

// const variable = 'property';

// myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

//  // this is equivalent to myObject['property'] and returns 'Value!'


// console.log( myObject.variable )

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `The ${this.title}, written by ${this.author}, has ${this.pages} pages, read already: ${this.isRead}`;       
    };
}

const atomicHabits = new Book("Atomic Habits", "James Clear", 320, "yes");
console.log(atomicHabits.info());

