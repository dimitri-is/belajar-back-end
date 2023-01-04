/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai nama depan Anda.
 *  - lastName: bertipe data string, dengan nilai nama belakang Anda.
 *  - age: bertipe data number, dengan nilai umur Anda.
 *  - isMarried: bertipe data boolean, dengan bebas Anda tentukan.
 */

// TODO
let fisrtName;
let lastName;
let age;
let isMarried;

firstName="Dimitri";
lastName="Irfan";
age=19;
isMarried=true;

console.log(firstName);
console.log(lastName);
console.log(age);

if(isMarried){
  console.log("Yes");
}else{
  console.log("No");
}
/**
 * Hiraukan kode di bawah ini
 */

module.exports = {
  firstName, lastName, age, isMarried,
};
/*output  >
Dimitri
Irfan
19
Yes
*/