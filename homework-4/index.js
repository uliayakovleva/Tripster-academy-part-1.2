// ===== 6.1 Рекурсия и стек =====

// Task #1: Вычислить сумму чисел до данного
// С использованием цикла
function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Через рекурсию
function sumToRecursion(n) {
  if (n == 1) return 1;
  return n + sumToRecursion(n - 1);
}

// С использованием формулы арифметической прогрессии
function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToLoop(100)); // 5050
console.log(sumToRecursion(100)); // 5050
console.log(sumToFormula(100)); // 5050
// Самый быстрый вариант — формула. Самый медленный — рекурсия.
// sumTo(100000) через рекурсию вызовет ошибку переполнения стека.



// Task #2: Вычислить факториал
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(5)); // 120



// Task #3: Числа Фибоначчи
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757



// Task #4: Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// С использованием цикла
function printListLoop(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

// Через рекурсию
function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}

printListLoop(list); // 1 2 3 4
printListRecursion(list); // 1 2 3 4



// Task #5: Вывод односвязного списка в обратном порядке
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Через рекурсию
function printReverseListRecursion(list) {
  if (list.next) {
    printReverseListRecursion(list.next);
  }

  console.log(list.value);
}

// С использованием цикла
function printReverseListLoop(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseListRecursion(list); // 4 3 2 1
printReverseListLoop(list); // 4 3 2 1



// ===== 6.3 Область видимости переменных, замыкание =====

// Task #6: Учитывает ли функция последние изменения?
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // Hi, Pete



// Task #7: Какие переменные доступны?
function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

let work = makeWorker();

work(); // Pete — берётся из лексического окружения, где функция была создана



// Task #8: Независимы ли счётчики?
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1



// Task #9: Объект счётчика
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1



// Task #10: Функция в if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // ReferenceError: sayHi is not defined
// Функция объявлена внутри блока if и видна только внутри него



// Task #11: Сумма с помощью замыканий
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4



// Task #12: Видна ли переменная?
let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization

  let x = 2;
}

func(); // ReferenceError



// Task #13: Фильтрация с помощью функции
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // [ 3, 4, 5, 6 ]
console.log(arr.filter(inArray([1, 2, 10]))); // [ 1, 2 ]



// Task #14: Сортировать по полю
function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
];

console.log(users.sort(byField("name")).map((u) => u.name)); // [ 'Анна', 'Иван', 'Пётр' ]
console.log(users.sort(byField("age")).map((u) => u.name)); // [ 'Пётр', 'Анна', 'Иван' ]



// Task #15: Армия функций
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[1](); // 1
army[2](); // 2
// В исходном варианте с while каждая функция выводила 10,
// т.к. все они ссылались на одну и ту же переменную i
