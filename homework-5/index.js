// ===== 9.1 Класс: базовый синтаксис =====

// Task #1: Перепишите класс
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();



// ===== 9.2 Наследование классов =====

// Task #2: Ошибка создания экземпляра класса
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // без вызова super — ReferenceError
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name); // Белый кролик



// Task #3: Улучшенные часы
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: "h:m:s",
  precision: 500,
});

lowResolutionClock.start();



// ===== 9.3 Статические свойства и методы =====

// Task #4: Класс расширяет объект?
class Rabbit extends Object {
  constructor(name) {
    super(); // при наследовании нужно вызвать родительский конструктор
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty("name")); // true



// ===== 9.6 Проверка класса: "instanceof" =====

// Task #5: Странный instanceof
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true
// instanceof проверяет цепочку прототипов, а не функцию-конструктор:
// a.__proto__ === B.prototype, поэтому результат true
