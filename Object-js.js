/*
    1. Функции конструкторы
    1.1. Объекты
    1.2. Функция-фабрика
    1.3. Функция-конструктор
    1.4. Прототип
    1.5. for-in
    1.6. prototype-write
    1.7. 1.7 instanceof - ключевое слово, которое проверят наличие в цепочке прототипов
*/









// ______1. Функции конструкторы____________________________________!!!!!
/*
	Объект - совокупность связанных данных и функциональных возможностей. Объекты содержат
	свойства и методы.
	Свойства - состояние объекта, значения любого типа.
	Методы - поведение объекта, функция, выполняющая какую-либо операцию.
*/

// ______1.1 Объекты____________________________________!!!!! 
//Простой пример
/*	HTML
    <div id="placeholder"></div>
*/



let car = {
    image: "audi-a6-250.jpg",
    manufacturer: "Audi",
    model: "A6",
    year: "2011",
    VIN: "ABCD1234567890XYZ",

    showStats: function (element) {
        //Метод, insertAdjacentHTML - позволяет добавить текст как HTML разметку
        element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
        element.insertAdjacentHTML("beforeend", `Производитель: ${this.manufacturer}<br />`);
        element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
        element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
        element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
    }
};

let placeholder = document.querySelector("#placeholder");
car.showStats(placeholder);



// ______1.2 Функция-фабрика____________________________________!!!!! 
// Один из способов избавиться от дублирования кода при создании объектов - использование функций-фабрик

// Такая реализация избавляет от дублирования кода, но не эффективна с точки зрения управления памятью.
// Все объекты, которые создаст функция createCar будут содержать свою копию showStats метода, хотя поведение
// метода не изменяется от объекта к объекту и правильно использовать одну копию методов для всех автомобилей.
/* 
    <div class="car-info" id="placeholder1"></div>
    <div class="car-info" id="placeholder2"></div>
    <div class="car-info" id="placeholder3"></div>
*/
function createCar(image, manufacturer, model, year, VIN) {
    return {
        image: image,
        manufacturer: manufacturer,
        model: model,
        year: year,
        VIN: VIN,

        showStats: function (element) {
            element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
            element.insertAdjacentHTML("beforeend", `Производитель: <b>${this.manufacturer}</b><br />`);
            element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
            element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
            element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
        }
    };
}

let car1 = createCar("audi-a6-250.jpg", "Audi", "A6", 2011, "ABCD1234567890XYZ");
let car2 = createCar("jaguar-x-type-250.jpg", "Jaguar", "X-Type", 2008, "DCAF0987654321XYZ");
let car3 = createCar("porsche-carrera-911-250.jpg", "Porsce", "Carrera 911", 2011, "EFGH0987654321XYZ");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

car1.showStats(placeholder1);
car2.showStats(placeholder2);
car3.showStats(placeholder3);


// ______1.3 Функция-конструктор____________________________________!!!!!
/*	HTML
	<div class="car-info" id="placeholder1"></div>
	<div class="car-info" id="placeholder2"></div>
	<div class="car-info" id="placeholder3"></div>
*/


// Функция-Конструктор - функция для создания и инициализации объектов с одинаковой структурой.
// От обычной функции функция конструктор отличается:
//  - по соглашению имя функции начинается с заглавной буквы (Pascal casing)
//  - в теле функции ключевое слово this (контекст функции) представляет новый пустой объект и задача 
//    функции этому пустому объекту задать свойства и методы
//  - функция должна вызываться с ключевым словом new, иначе контекст будет глобальным объектом или
//    undefined в случае strict mode

// Функция конструктор может рассматриваться как аналог классов в строго типизированных языках программирования

// Когда функция конструктор заканчивает работу, неявно возвращается значение контекста как результат функции.
// Можно представить, что выполняется return this; в конце конструктора.

function Car(image, manufacturer, model, year, VIN) {
    this.image = image;
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.VIN = VIN;

    this.showStats = function (element) {
        element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
        element.insertAdjacentHTML("beforeend", `Производитель: ${this.manufacturer}<br />`);
        element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
        element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
        element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
    };
}

// При вызове конструктора нужно использовать ключевое слово new
// Ключевое слово new создает новый объект и устанавливает его в качестве контекста вызываемой функции.

let car1 = new Car("audi-a6-250.jpg", "Audi", "A6", 2011, "ABCD1234567890XYZ");
let car2 = new Car("jaguar-x-type-250.jpg", "Jaguar", "X-Type", 2008, "DCAF0987654321XYZ");
let car3 = new Car("porsche-carrera-911-250.jpg", "Porsce", "Carrera 911", 2011, "EFGH0987654321XYZ");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

car1.showStats(placeholder1);
car2.showStats(placeholder2);
car3.showStats(placeholder3);


// ______1.4 Прототип____________________________________!!!!!
/*
	Прототип – объект, который предоставляет методы и свойства, наследуемые другими объектами. 
	В ECMAScript 2015 синтаксис работы упрощен благодаря введению ключевого слова class.
	Каждая функция связана со своим прототипом. Доступ к прототипу происходит через свойство prototype функции.
*/

/* HTML
    <div class="car-info" id="placeholder1"></div>
    <div class="car-info" id="placeholder2"></div>
    <div class="car-info" id="placeholder3"></div>
*/

function Car(image, manufacturer, model, year, VIN) {
    this.image = image;
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.VIN = VIN;
}

// Каждая функция в JavaScript связана со своим прототипом - пустым объектом.
// Доступ к прототипу можно получить через свойство prototype на функции.
// Контекст функции (this) находящейся в прототипе, - объект, на котором функция будет изначально вызываться, а не сам прототип.
Car.prototype.showStats = function (element) {
    element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
    element.insertAdjacentHTML("beforeend", `Производитель: ${this.manufacturer}<br />`);
    element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
    element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
    element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
};

// При использовании ключевого слова new после создания нового экземпляра для этого экземпляра устанавливается прототип.
// Прототип устанавливается из конструктора, который используется после ключевого слова new.
let car1 = new Car("audi-a6-250.jpg", "Audi", "A6", 2011, "ABCD1234567890XYZ");
let car2 = new Car("jaguar-x-type-250.jpg", "Jaguar", "X-Type", 2008, "DCAF0987654321XYZ");
let car3 = new Car("porsche-carrera-911-250.jpg", "Porsce", "Carrera 911", 2011, "EFGH0987654321XYZ");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

// Когда на экземпляре вызывается метод или происходит обращение к свойству
// и данной конструкции нет в самом экземпляре, то происходит обращение к прототипу
// и вызываемая конструкция ищется в прототипе.
// Метода showStats нет в car1, car2 или car3, но данный код выполняется корректно,
// так как после проверки наличия метода в экземпляре интерпретатор перейдет в прототип и попробует
// найти метод там.

// все три объекта используют один метод showStats, который находится в прототипе.
car1.showStats(placeholder1);
car2.showStats(placeholder2);
car3.showStats(placeholder3);

console.log(car1.toString());



// ______1.5 for-in____________________________________!!!!!
//Для начала посмотрим пример
function Car(model) {
    this.model = model;
}

Car.prototype.wheelsNumber = 4;

Car.prototype.showStats = function () {
    console.log(this.model);
    console.log(this.wheelsNumber);
}

let car1 = new Car("Jaguar X-Type");
let car2 = new Car("Audi A6");

car1.showStats();
// Jaguar X-Type
// 4
car2.showStats();
// Audi A6
// 4


for (const key in car1) {
    const value = car1[key];
    console.log(key + " = " + value);
}
/*
	model = Jaguar X-Type
	wheelsNumber = 4
	showStats = function () {
            console.log(this.model);
            console.log(this.wheelsNumber);
        }
*/

// obj.hasOwnProperty(prop) - метод, который проверяет, принадлежит ли свойство prop объекту obj.
console.log(car1.hasOwnProperty("model"));	//true

for (const key in car1) {
    // Работая с объектом car1 можно получить доступ к пользовательским свойствам и методам:
    // - model          на экземпляре
    // - wheelsNumber   в связанном прототипе
    // - showStats      в связанном прототипе
    // При наличии условия будет отображено свойство model, без условия будут выведены все три свойства.
    if (car1.hasOwnProperty(key)) {
        const value = car1[key];
        console.log(key + " = " + value);
        
    }
}


// ______1.6 prototype-write____________________________________!!!!!
function Car(model) {
    this.model = model;
}

Car.prototype.wheelsNumber = 4;

Car.prototype.showStats = function () {
    console.log(this.model);
    console.log(this.wheelsNumber);
}

let car1 = new Car("Jaguar X-Type");
let car2 = new Car("Audi A6");
let car3 = new Car("КамАЗ-55111");
Car.prototype.wheelsNumber = 6;
//car3.wheelsNumber = 6; // операции записи меняют только экземпляр, не затрагивая прототипа.

car1.showStats();   //Jaguar X-Type     6
car2.showStats();   //Audi A6           6
car3.showStats();   //КамАЗ-55111       6


// ______1.7 instanceof - ключевое слово, которое проверят наличие в цепочке прототипов____________________________________!!!!!
function Car(model) {
    this.model = model;
    this.wheels = 4;
}

function User(name, age) {
    this.name = name;
    this.age = age;
}

let date = new Date();
let car = new Car("Jaguar X-Type");
let user = new User("Jhon", 25);

// Функция конструктор - НЕ представляет тип данных
// созданный экземпляр через любую из функций конструктора относится к типу object
console.log(typeof date); // object
console.log(typeof car); // object
console.log(typeof user); // object

// instanceof - ключевое слово, которое проверят наличие в цепочке прототипов
// прототипа указанной функции
console.log(date instanceof Date); // true - date создан конструктором Date
console.log(car instanceof Car); // true - car создан конструктором Car
console.log(user instanceof User); // true - user создан конструктором User

console.log(user instanceof Date); // false - user не создан конструктором Date
console.log(user instanceof Car); // false - user не создан конструктором Car