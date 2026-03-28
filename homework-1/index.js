// Task 1
console.log('Я JavaScript!');

//Task 2
let admin;
let name = "Джон";
admin = name;
console.log(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";

const BIRTHDAY = "18.04.1982";
const age = someCode(BIRTHDAY);

// Task 3
let name = "Ilya";
console.log(`hello ${1}`);          // hello 1
console.log(`hello ${"name"}`);     // hello name
console.log(`hello ${name}`);       // hello Ilya

//Task 4
let userName = "Иван";
console.log(`Привет, ${userName}!`);

//Task 5
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(c); // 2
console.log(d); // 1

let a = 2;
let x = 1 + (a *= 2);
console.log(a); // 4
console.log(x); // 5

console.log("" + 1 + 0);   // "10"
console.log("" - 1 + 0);   // -1
console.log(true + false); // 1
console.log(6 / "3");      // 2
console.log("2" * "3");    // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5);  // "$45"
console.log("4" - 2);      // 2
console.log("4px" - 2);    // NaN
console.log(" -9 " + 5);   // " -9 5"
console.log(" -9 " - 5);   // -14
console.log(null + 1);     // 1
console.log(undefined + 1);// NaN
console.log(" \t \n" - 2); // -2

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
console.log(Number(a) + Number(b));

//Task 6
console.log("5 > 4 is", 5 > 4); // true
console.log('"apple" > "pineapple" is', "apple" > "pineapple"); // false
console.log('"2" > "12" is', "2" > "12"); // true
console.log("undefined == null is", undefined == null); // true
console.log("undefined === null is", undefined === null); // false
console.log('null == "\\n0\\n" is', null == "\n0\n"); // false
console.log('null === +"\\n0\\n" is', null === +"\n0\n"); //false

//Task 7
if ("0") {
  console.log("Привет");
}
// Привет

let answer = "ECMAScript";
if (answer === "ECMAScript") {
  console.log("Верно!");
} else {
  console.log("Не знаете? ECMAScript!");
}
// Верно!

let number = -5;
if (number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log(0);
}
// -1

let a = 1;
let b = 2;
let result = (a + b < 4) ? "Мало" : "Много";
console.log(result);
// Мало

let login = "Сотрудник";
let message =
  (login === "Сотрудник") ? "Привет" :
    (login === "Директор") ? "Здравствуйте" :
      (login === "") ? "Нет логина" :
        "";

console.log(message);
// Привет

//Task 8
console.log(null || 2 || undefined); // 2
console.log(console.log(1) || 2 || console.log(3)); // 2

console.log(1 && null && 2); // null
console.log(console.log(1) && console.log(2)); // undefined

console.log(null || 2 && 3 || 4); // 3

let age = 14;
console.log(age >= 14 && age <= 90);

console.log(!(age >= 14 && age <= 90));
console.log(age < 14 || age > 90);

if (-1 || 0) console.log("first"); // first
if (-1 && 0) console.log("second"); // not executed
if (null || -1 && 1) console.log("third"); // third

let login = "Админ";
let password = "Я главный";

console.log("Кто там?");
console.log(login);

if (login === "Админ") {
  console.log("Пароль?");
  console.log(password);

  if (password === "Я главный") {
    console.log("Здравствуйте!"); // Здравствуйте!
  } else if (password === "" || password === null) {
    console.log("Отменено"); // Отменено
  } else {
    console.log("Неверный пароль"); // Неверный пароль
  }
} else if (login === "" || login === null) {
  console.log("Отменено"); // Отменено
} else {
  console.log("Я вас не знаю"); // Я вас не знаю
}

//Task 9
console.log(undefined ?? NaN ?? null ?? "" ?? " "); // NaN

let city = null;
city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";
console.log(city); // Берлин

let num1 = 10,
  num2 = 20,
  result;
result ??= (num1 ?? num2);
console.log(result); // 10

//Task 10
let i = 3;
while (i) {
  console.log(i--);
}
// 3
// 2
// 1

let i = 0;
while (++i < 5) console.log(i1);
// 1
// 2
// 3
// 4

let i = 0;
while (i++ < 5) console.log(i2);
// 1
// 2
// 3
// 4
// 5

for (let i = 0; i < 5; i++) console.log(i);
// 0
// 1
// 2
// 3
// 4

for (let i = 0; i < 5; ++i) console.log(i);
// 0
// 1
// 2
// 3
// 4

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// 2
// 4
// 6
// 8
// 10

let j = 0;
while (j < 3) {
  console.log(`number ${j}!`);
  j++;
}
// number 0!
// number 1!
// number 2!

let num = 50;
while (num <= 100 && num) {
  num = 150;
}
console.log(num); // 150

let n = 10;
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
// 2
// 3
// 5
// 7

//Task 11
let browser = "Edge";
if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}
// You've got the Edge!

let a = 2;
switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
}
// 2,3

//Task 12
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Родители разрешили?");
}
// else не обязателен

function checkAge1(age) {
  return (age > 18) ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
  return (age > 18) || confirm("Родители разрешили?");
}

function min(a, b) {
  return (a < b) ? a : b;
}
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

function pow(x, n) {
  return x ** n;
}
console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(1, 100)); // 1

//Task 13
function ask(question, yes, no) {
  if (true) yes();
  else no();
}

ask(
  "Вы согласны?",
  function () { console.log("Вы согласились."); },
  function () { console.log("Вы отменили выполнение."); }
);
// Вы согласились.


ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);
// Вы согласились.
