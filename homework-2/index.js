// Task #1: Привет, object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user); // { surname: 'Smith' }



// Task #2: Проверка на пустоту

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false



// Task #3: Объекты-константы?

const user = {
  name: "John",
};

user.name = "Pete";

console.log(user.name); // Pete



// Task #4: Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); // 390



// Task #5: Умножаем все числовые свойства на 2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);
// { width: 400, height: 600, title: 'My menu' }
