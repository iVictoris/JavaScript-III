/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global - the top most execution context, window for web, global for nodejs
* 2. Implicit Binding - this refers to whatever is left of the dot, ie obj.methodName, `this` refers to obj
* 3. New Binding - when making objects with functions, this refers to that object, arrow functions don't work to bind objects as expected
* 4. Explicit binding - tell the object that `this` refers to by using .apply, .call
*
* write out a code example of each explanation above
*/

const {log} = console;

// Principle 1

// code example for Window Binding
log(this)

// Principle 2

// code example for Implicit Binding
const obj = {
  greet: 'Hello',
  greeting: function() {
    return `${this.greet} the this used in this template string refers to obj`
  }
}

log(obj.greeting());

// Principle 3

// code example for New Binding
function Example(attr) {
  this.attr = attr;
}

const example = new Example('1');
console.log(example.attr);

// Principle 4

// code example for Explicit Binding
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getBirthYear = function() {
  const year = new Date().getFullYear();
  return `${this.name} was born on or around ${year - this.age}`;
}

const alex = new Person('Alex', 29);
const alexa = new Person('Alexa', 55);

log(alex.getBirthYear())
log(alexa.name);

log(alex.getBirthYear.apply(alexa))
