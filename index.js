// Import stylesheets
import './style.css';

const userData = {
  uid: 'Am7w5e8sUpQx6kF5v',
  name: 'peter parker',
  email: 'peter.parker@marvel.com',
  address: '15th street, Queens, New York city',
};

Object.freeze(userData);
// userData.age = 30;  //Cannot add property age, object is not extensible
// userData.uid = "AM123"; //Cannot assign to read only property 'uid' of object '#<Object>'
// delete userData.email; // Cannot delete property 'email' of #<Object>

console.log(userData);
/*
{
  uid: "Am7w5e8sUpQx6kF5v", 
  name: "peter parker", 
  email: "peter.parker@marvel.com", 
  address: "15th street, Queens, New York city"
}
*/

//Checking if an object is frozen
const obj = {
  x: 5,
};

console.log(Object.isFrozen(obj)); //false
console.log(Object.isFrozen(userData)); //true

//How to thaw/defrost a frozen object in Javascript?
// ***************************************************

//the only way this could be done is, by cloning the object
const pizza = {
  name: 'Peri Peri',
  Topping: 'Prawn',
};

Object.freeze(pizza);
// pizza.name = "Hawaiian"; //Cannot assign to read only property 'name' of object '#<Object>'

//now cloning the 'pizza'
const myPizza = JSON.parse(JSON.stringify(pizza));
myPizza.name = 'Hawaiian'; //modify a property
myPizza.price = 33;

delete myPizza.Topping;
console.log(myPizza); //{name: "Hawaiian", price: 33}

// Note 1: In strict mode, it will NOT fail silently and throw an Error instead
('use strict');
Object.freeze(myPizza);
// myPizza.name = 'Pepperoni'; //Error: Cannot assign to read only property 'name' of object '#<Object>'

// Note 2: If your object has methods, then JSON.stringify approach will NOT get them. You can read more about properly cloning the objects in these three questions.

// https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript

//Shallow Copy (ES6)
let assignP = Object.assign({}, pizza);
console.log(assignP); //{name: "Peri Peri", Topping: "Prawn"}

//Spread Syntax
let restP = { ...pizza };
console.log(restP); //{name: "Peri Peri", Topping: "Prawn"}

let clone = structuredClone(pizza);
console.log('Structure clone: ', clone); //Structure clone:
// Structure clone: {name: "Peri Peri", Topping: "Prawn"}

// The Object.seal() Method
// *****************************

const myUser = {
  uid: 'Bm7w5e8sUpQx6kF5x',
  name: 'Andrew Torres',
  email: 'andrew.torres@seal.com',
  address: '4th street, Long Beach, Los Angeles',
};

//seal the object 'myUser'
Object.seal(myUser);
// myUser.age = 33; //Cannot add property age, object is not extensible

myUser.uid = 'xxxxxxx';
// delete myUser.email; //Error: Cannot delete property 'email' of #<Object>

console.log(myUser);
/*
{
    uid: "xxxxxxx",   // ** Updated uid **
    name: "Andrew Torres", 
    email: "andrew.torres@seal.com", 
    address: "4th street, Long Beach, Los Angeles"
}
*/
