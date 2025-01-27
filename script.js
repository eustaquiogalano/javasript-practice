const myObject = {
    variable: "var",
};

const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

 // this is equivalent to myObject['property'] and returns 'Value!'


console.log( myObject.variable );
