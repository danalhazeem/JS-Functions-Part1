/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  console.log("danah alhazeem");
}
printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthyear) {
  let age = 2024 - birthyear;
  console.log(age);
}
printAge(2000);

/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */
function printAgeAndName(birthyear, name) {
  let age = 2024 - birthyear;
  console.log(`hello ${name} you are ${age}`);
}
printAgeAndName(2000, "danah");

/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`Merhaba ${name}`);
  }
}
printHello("danah", "es");

/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
printMax(5, 9);
