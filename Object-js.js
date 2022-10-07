/*
    1. Функции конструкторы
    1.1. Объекты
    1.2. Функция-фабрика
    1.3. Функция-конструктор
    1.4. Прототип
    1.5. for-in
    1.6. prototype-write
    1.7. 1.7 instanceof - ключевое слово, которое проверят наличие в цепочке прототипов

	2. Классы
	2.1. Определение класса (class declaration).
	2.2. Альтернативный способ определения классов
	2.3. getter - синтаксис, связывающий свойство объекта с методом
	2.4. setter - синтаксис, связывающий свойство объекта с функцией
	2.5  Еще один пример использование getter и setter.
	2.6  Public свойства!
	2.7  Private '#' свойства!
	2.8  Пример использование классов(Игра), описана в уроке "4. JavaScript Базовый - Lesson 7 - Classes"
	

	3.   Шаблонизатор - библиотека, использьзующая html шаблоны для генерации конечных html страниц.
		 Примеры популярных шаблонизаторов - handlebars.js, mustache.js, doT, pug.
	3.1	 Пример использования mustache.js №1 (примери в ввидео уроке!)

	4. Классы, наследования
	4.1. Наследования через прототипи!
	4.2. Создание простого наслежования классов!
	4.3. Наслежования классов з конструктором и методов super()!
	4.4. Super-method, super()
	4.5. Определения статических полей и методов.
	4.6.Сортировать объекты по параметру с помощью метода .sort()
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







// ______2. Классы____________________________________!!!!!
/*
	Класс – шаблон для создания объекта. Содержит данные и методы, которые должны эти данные обрабатывать.
	Для определения класса используется ключевое слово class. 
*/

/*
	Конструктор класса не может быть вызван без ключевого слова new.
	Определения классов не поддерживают поднятие (hoisting).
			// в отличие от функций, классы не поддерживают hoisting
        	// Использовать класс можно только после его определения
	Методы класса нельзя перечислить, например, через for…in.
	Классы всегда используют use strict.
	Классы поддерживают открытые и закрытые поля, а также getter и setter.
*/

// ______2.1 Определение класса (class declaration).____________________________________!!!!!

// Определение класса (class declaration)
class Rect {

	//Можно добавить значения свойств в класс, которые будут доступны у всех екземплярах(обьектах) класса!
	//width = 10;
	//height = 20;

    // конструктор - инициализирует экземпляр класса Rect, представляет обычную функцию- конструктор
    constructor(width, height) {
        this.width = width;     // свойство width
        this.height = height;
    }

    // метод, будет добавлен в прототип Rect.prototype
    getArea() {
        return this.height * this.width;
    }

    getPerimeter() {
        return this.height * 2 + this.width * 2;
    }
}

let r1 = new Rect(10, 20);
let r2 = new Rect(15, 9);

console.log(r1.width);
console.log("r1 area " + r1.getArea());
console.log("r1 perimeter " + r1.getPerimeter());

console.log("r2 area " + r2.getArea());
console.log("r2 perimeter " + r2.getPerimeter());

console.log(typeof Rect);   //function
console.log(typeof r1);     //object



// ______2.2 Альтернативный способ определения классов.____________________________________!!!!!
// Не требует идентификатора (имени) класса и может использоваться для того, чтобы передать определение класса как параметра
// например, в параметре функции. 
let Rect = class {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.height * this.width;
    }

    getPerimeter() {
        return this.height * 2 + this.width * 2;
    }
}

let r1 = new Rect(10, 20);
let r2 = new Rect(15, 9);

console.log("r1 area " + r1.getArea());
console.log("r1 perimeter " + r1.getPerimeter());

console.log("r2 area " + r2.getArea());
console.log("r2 perimeter " + r2.getPerimeter());


// ______2.3 getter - синтаксис, связывающий свойство объекта с методом.____________________________________!!!!!
class Rect {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // getter - синтаксис, связывающий свойство объекта с методом
    // при обращении obj.width будет вызвана функция get width()
    get width() {
        console.log("get width()");
        return this._width;
    }

    get height() {
        console.log("get height()");
        return this._height;
    }

    get area() {
        console.log("get area()");
        return this.height * this.width; // использование getter
    }
}

let r1 = new Rect(10, 20);

console.log("width " + r1.width); // при обращении к свойству width происходит вызов getter с 21 строки
console.log("height " + r1.height);
console.log("area " + r1.area);



// ______2.4 setter - синтаксис, связывающий свойство объекта с функцией.____________________________________!!!!!
class Rect {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    // setter - синтаксис, связывающий свойство объекта с функцией
    // setter вызывается во время присвоения значения свойству
    // присваиваемое значение попадает в качестве значения параметра setter


    set width(value) {          //setter - синтаксис, связывающий свойство объекта с функцией
        this._width = value;
    }

    get height() {              //getter - синтаксис, связывающий свойство объекта с методом
        return this._height;
    }

    set height(value) {         //setter - синтаксис, связывающий свойство объекта с функцией
        this._height = value;
    }

    get area() {                //getter - синтаксис, связывающий свойство объекта с методом
        return this.height * this.width; // использование getter
    }
}

let r1 = new Rect(10, 20); // изначальные значения высоты и ширины 10 и 20 

//setter = присаиваем!
r1.height = 30; // через свойства height меняем высоту (вызывается setter на 34 строке)
r1.width = 30; // через свойства width меняем высоту (вызывается setter на 26 строке)

//getter = визиваем!
console.log("width " + r1.width); 
console.log("height " + r1.height);
console.log("area " + r1.area);



// ______2.5 Еще один пример использование getter и setter.____________________________________!!!!!
class Rect {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        if (this._width === undefined) {
            this._width = 0;
        }

        return this._width;
    }

    set width(value) {
        if (value < 0) {
            alert("Значение для width не может быть меньше 0");
        } else {
            this._width = value;
        }
    }

    get height() {
        if (this._height === undefined) {
            this._height = 0;
        }

        return this._height;
    }

    set height(value) {
        if (value < 0) {
            alert("Значение для height не может быть меньше 0");
        } else {
            this._height = value;
        }
    }

    get area() {
        return this.height * this.width; // использование getter
    }
}

let r1 = new Rect(10, 20); 

r1._height = -10; // ошибка, значение не изменяется
r1.width = 30; 

console.log("width " + r1.width);
console.log("height " + r1.height);
console.log("area " + r1.area);


// ______2.6 Public свойства!.____________________________________!!!!!
class Rect {
    height = 0; // открытое поле (открытое - можно использовать за пределами класса)
    width = 0;

    getArea() {
        return this.height * this.width; 
    }
}

let r = new Rect();
r.height = 10; // меняем значение открытому полю
r.width = 20;

console.log(r.getArea());


// ______2.7 Private '#' свойства!.____________________________________!!!!!
class User {
    #name = ""; // закрытое поле (закрытое - можно использовать только в классе)

    constructor(name) {
        this.#name = name; // закрытое поле можно поменять в теле класса
    }

    getName() {
        return this.#name; // значение закрытого поля можно прочесть в поле класса
    }
}

let u = new User("Dmitriy");
u.#name = "TEST"; // закрытое поле нельзя изменить за пределами класса
console.log(u.getName());



//______2.8  Пример использование классов(Игра), описана в уроке "4. JavaScript Базовый - Lesson 7 - Classes".____________________________________!!!!!



/*______3.  Шаблонизатор - библиотека, использьзующая html шаблоны для генерации конечных html страниц.
		 Примеры популярных шаблонизаторов - handlebars.js, mustache.js, doT, pug.
*/
/*_____	3.1	 Пример использования mustache.js №1*/

/*	HTML
 	<button>Click me!</button>
    <div id="target"></div>
*/
   	
    // HTML разметка в теге script не выполняется
    // Атрибут type="x-tmpl-mustache" нужен, чтобы браузер не воспринимал содержимое как JS код
/*
    <script id="template" type="x-tmpl-mustache">
        Hello {{name}}!
    </script>
*/
    // альтернативный вариант с использованием элемента template -->
/*
    <template id="template">
        Hello {{name}}!
    </template> -->
*/  

    //<script src="mustache.min.js"></script> //Подключения библиоетеки
    //<script>
        document.querySelector("button").addEventListener("click", renderHello); //При клике на "button", используем renderHello()
        
        function renderHello() {
        	//Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки
            let template = document.querySelector("#template").innerHTML; //берем скрипт #template и 
            let rendered = Mustache.render(template, { name: "Dmitriy" }); //{{name}} = Dmitriy!
            document.getElementById("target").innerHTML = rendered;
        }
    //</script>





/*______4. Классы, наследования_____________________________________*/
/*
	Наследование – концепция объектно-ориентированных языков программирования, согласно которой один тип данных (класс), 
	может наследовать данные и функциональность другого типа данных (класса).

	Наследование способствует повторному использованию существующего кода.

	Прототипное наследование – механизм наследования, поддерживаемый в JavaScript, 
	который базируется на построении цепочки прототипов и совместном использовании функций между объектами.
	
	Ключевые слова class и extends являются синтаксическим сахаром прототипно-ориентированной модели наследования.
*/

// ______4.1 Наследования через прототипи!____________________________________!!!!!
//Пример использование наследования через прототипи, описана в уроке "4. JavaScript Базовый - Lesson 8 - Inheritance".





// ______4.2. Создание простого наслежования классов!____________________________________!!!!!
// Базовый класс Animal
class Animal {
    sleep() {
        console.log("Животное спит.");
    }

    eat() {
        console.log("Животное ест.");
    }
}

// Производный класс Dog.
// Класс Dog расширяет класс Animal.
// Класс Dog наследуется от класса Animal, это означает, что методы и свойства класса Animal будут доступны в классе
// Dog, при этом дочерний класс Dog может заместить работу методов, которые получены по наследству, а также добавить свои методы.
class Dog extends Animal {
    eat() {
        console.log("Собака ест мясо.");
    }
}

// Класс Cow расширяет класс Animal
class Cow extends Animal {
    eat() {
        console.log("Корова ест траву.");
    }
}

let a1 = new Dog();
let a2 = new Cow();

a1.eat();       //Собака ест мясо.
a1.sleep();     //Животное спит.

console.log("-------");

a2.eat();       //Корова ест траву.
a2.sleep();     //Животное спит.

console.log("-------");

let animals = [new Dog(), new Cow()];

animals.forEach(animal => {     //Собака ест мясо.
    animal.eat();               //Животное спит.
    animal.sleep();             //Корова ест траву.
});                             //Животное спит.


// ______4.3. Наслежования классов з конструктором и методов super()____________________________________!!!!!
class BaseClass {
    method1() {
        console.log("Method from BaseClass");
    }
}

class DerivedClass extends BaseClass {
    constructor(value) {
        super(); // конструктор производного класса должен всегда вызывать конструктор базового класса
        this.derivedClassProperty = value;
    }

    method2() {
        console.log("Method from DerivedClass " + this.derivedClassProperty);
    }
}

let obj1 = new BaseClass();
// Когда запускается конструктор производного класса, пустой объект не устанавливается в качестве контекста -
// эту задачу выполняет конструктор базового класса. Для того, чтобы контекст в производном классе указывал на новый создаваемый
// объект, необходимо вызвать конструктор базового класса через super().
let obj2 = new DerivedClass(10);

obj1.method1(); //Method from BaseClass

obj2.method1(); //Method from BaseClass
obj2.method2(); //Method from DerivedClass 10


//_Пример______________________________________________________________________
class BaseClass {
    constructor(name){
        this.name = name;
        console.log("Hello from base");
    }
    method1() {
        console.log("Method from BaseClass");
    }
}

class DerivedClass extends BaseClass {
    constructor(value, name) {
        super(name); // конструктор производного класса должен всегда вызывать конструктор базового класса
        this.derivedClassProperty = value;
    }

    method2() {
        console.log("Method from DerivedClass " + this.derivedClassProperty);
    }
}

let obj1 = new BaseClass("Base Name");
console.log(obj1.name);	//Base Name
console.log(`--------------------`);
let obj2 = new DerivedClass(10, "DeriveName");
console.log(obj2.name);	//DeriveName



//_Пример______________________________________________________________________
class Animal {
    // Конструктор базового класса
    constructor(name) {
        this.name = name;
    }

    sleep() {
        console.log(this.name + " спит.");
    }

    eat() {
        console.log(this.name + " ест.");
    }
}

class Dog extends Animal {
    // Если производный класс содержит конструктор, то перед тем, как в нем произведется первое обращение к контексту (this)
    // и до завершения тела конструктора должен быть вызван конструктор базового класса через ключевое слово super().
    // При этом, свойства для производного класса, полученные по наследству, будут содержать значения, инициализированные конструктором
    // родительского класса, вызванного через super.
    // Если в классе нет конструктора, то автоматически создается такой пустой конструктор.
    // Конструктор, который все полученные параметры передаст конструктору базового класса.
    
    // constructor(...args) {
    //     super(...args);
    // }

    eat() {
        console.log(`Собака ${this.name} ест мясо.`);
    }
}

class Cow extends Animal {
    eat() {
        console.log(`Корова ${this.name} ест траву.`);
    }
}

let a1 = new Dog("Шарик");
let a2 = new Cow("Буренка");

a1.eat();
a1.sleep();

console.log("-------");

a2.eat();
a2.sleep();

console.log("-------");

let animals = [new Dog("Шарик"), new Cow("Буренка")];

animals.forEach(animal => {
    animal.eat();
    animal.sleep();
});




// ______4.4. Super-method, super()____________________________________!!!!!
    class BaseClass {
        exemp() {
            console.log("BaseClass.Method");
        }
    }

    class DerivedClass extends BaseClass {
        exemp() {
            super.exemp(); // обращение к методу method из родительского класса, по сути обращение к прототипу функции конструктора BaseClass
            console.log("DerivedClass.Method");
        }
    }

    let instance1 = new BaseClass();
    let instance2 = new DerivedClass();

    console.log("instance1");
    instance1.exemp();
    //BaseClass.Method

    console.log("instance2");
    instance2.exemp();
    //BaseClass.Method
    //DerivedClass.Method


// ______4.5. Определения статических полей и методов.____________________________________!!!!!
/*
	static – ключевое слово для определения статических полей и методов. Статический член класса существует в одном экземпляре для всего приложения.
	Статические свойство или метод создаются в функции конструкторе, а не в каждом экземпляре.
	Для получения доступа к статическим членам, необходимо выполнять обращение через имя класса, а не через конкретный экземпляр.
*/
class MyClass {
    property1;           // свойство принадлежит экземпляру класса - у каждого экземпляра уникальное значение
    static property2;    // статическое свойство принадлежит классу (функции конструктору) - одно значение на все экземпляры
}

let m1 = new MyClass();
let m2 = new MyClass();

m1.property1 = 10;
m2.property1 = 20;

MyClass.property2 = 100; // получить доступ к статическому свойству можно через класс

console.log(m1.property1);      //10
console.log(m2.property1);      //20
console.log(MyClass.property2); //100
console.log(m2.property2);      //undefined

//____Еще пример___________________________________________!
class MyClass {
    property1;
    //static property1 = 45

    constructor(value) {
        this.property1 = value;
    }

    // метод находится в прототипе и доступен на каждом экземпляре
    method1() {
        console.log("Не статический метод " + this.property1);
    }

    // статический метод, находится в классе (принадлежит функции конструктору)
    static method2() {
        console.log("Статический метод " + this.property1); // в статическом методе this указывает на функцию конструктор
    }
}

let m1 = new MyClass(10);
let m2 = new MyClass(20);

m1.method1();       //Не статический метод 10
m2.method1();       //Не статический метод 20

MyClass.method2();  //Не статический метод undefined




//______4.6.Сортировать объекты по параметру с помощью метода .sort()____________________________________!!!!!
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    log() {
        console.log(this.name + " " + this.age);
    }

    static compare(user1, user2) {
        return user1.age - user2.age;
    }
}

let array = [
    new User("Ivan", 29),
    new User("Igor", 25),
    new User("Elena", 32),
    new User("Petr", 41),
    new User("Anna", 24),
    new User("Irina", 26),
];

// метод массива sort может принимать в качестве параметра функцию, определяющую критерии оценивания, какой объект считать большим, а какой меньшим
// функция принимает два параметра и должна возвращать числовое значение
// если числовое значение меньше 0 - это означает, что первый объект меньше, чем второй
// если значение больше чем 0 - первый объект больше чем второй
// если значение 0 - объекты равны

array.sort(User.compare);

array.forEach(user => user.log());
//Anna 24, Igor 25, Irina 26, Ivan 29, Elena 32, Petr 41