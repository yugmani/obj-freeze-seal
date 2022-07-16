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
