// ===== 5.1 Методы примитивов =====

// Task #1: Можно ли добавить свойство строке?
let str = "Привет";

str.test = 5;

console.log(str.test); // undefined



// ===== 5.2 Числа =====

// Task #2: Сумма пользовательских чисел
let a = +"1.2";
let b = +"3.4";

console.log(a + b); // 4.6



// Task #3: Почему 6.35.toFixed(1) == 6.3?
console.log(6.35.toFixed(20)); // 6.34999999999999964473
console.log(Math.round(6.35 * 10) / 10); // 6.4



// Task #4: Ввод числового значения
function readNumber(values) {
  let num;
  let i = 0;

  do {
    num = values[i++];
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

console.log(readNumber(["abc", "12a", "42"])); // 42
console.log(readNumber([null])); // null



// Task #5: Бесконечный цикл по ошибке
let i = 0;

// Цикл бесконечный: из-за потери точности i никогда не станет ровно 10
while (i != 10) {
  i += 0.2;
}



// Task #6: Случайное число от min до max
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));



// Task #7: Случайное целое число от min до max
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));



// ===== 5.3 Строки =====

// Task #8: Сделать первый символ заглавным
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася")); // Вася



// Task #9: Проверка на спам
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false



// Task #10: Усечение строки
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // Вот, что мне хотело…
console.log(truncate("Всем привет!", 20)); // Всем привет!



// Task #11: Выделить число
function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120") === 120); // true



// ===== 5.4 Массивы =====

// Task #12: Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

console.log(fruits.length); // 4 — массивы являются объектами, копируется ссылка



// Task #13: Операции с массивами
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift()); // Джаз
styles.unshift("Рэп", "Регги");

console.log(styles); // [ 'Рэп', 'Регги', 'Классика', 'Рок-н-ролл' ]



// Task #14: Вызов в контексте массива
let arr = ["a", "b"];

arr.push(function () {
  console.log(this); // [ 'a', 'b', [Function] ]
});

arr[2]();



// Task #15: Сумма введённых чисел
function sumInput(values) {
  let numbers = [];

  for (let value of values) {
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput(["1", "2", "3", "stop", "10"])); // 6



// Task #16: Подмассив наибольшей суммы
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0



// ===== 5.5 Методы массивов =====

// Task #17: Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition



// Task #18: Фильтрация по диапазону
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [ 3, 1 ]
console.log(arr); // [ 5, 3, 8, 1 ]



// Task #19: Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

console.log(arr); // [ 3, 1 ]



// Task #20: Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // [ 8, 5, 2, 1, -10 ]



// Task #21: Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr); // [ 'HTML', 'JavaScript', 'CSS' ]



// Task #22: Создать расширяемый калькулятор
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3")); // 8



// Task #23: Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

console.log(names); // [ 'Вася', 'Петя', 'Маша' ]



// Task #24: Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин



// Task #25: Отсортировать пользователей по возрасту
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя



// Task #26: Перемешайте массив
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);



// Task #27: Получить средний возраст
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // 28



// Task #28: Оставить уникальные элементы массива
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

console.log(unique(strings)); // [ 'кришна', 'харе', ':-O' ]



// Task #29: Создайте объект с ключами из массива
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);



// ===== 5.9 Object.keys, values, entries =====

// Task #30: Сумма свойств объекта
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650



// Task #31: Подсчёт количества свойств объекта
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user)); // 2



// ===== 5.10 Деструктурирующее присваивание =====

// Task #32: Деструктурирующее присваивание
let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false



// Task #33: Максимальная зарплата
function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries)); // Pete
console.log(topSalary({})); // null



// ===== 5.12 Формат JSON, метод toJSON =====

// Task #34: Преобразуйте объект в JSON, а затем обратно
let user = {
  name: "Василий Иванович",
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user2); // { name: 'Василий Иванович', age: 35 }



// Task #35: Исключить обратные ссылки
let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
// {"title":"Совещание","occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],"place":{"number":23}}
