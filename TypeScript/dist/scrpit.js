/*  TypeScript – типизированное надмножество языка JavaScript, компилируется в чистый JavaScript.
    https://www.typescriptlang.org/

    npm install -g typescript
    tsc helloworld.ts //компиляция файлу 'helloworld.ts'
    tsc -w helloworld.ts //автокомпиляция файлу 'helloworld.ts'

    tsc -w --outFi le res.js app.ts exemp.ts //компиляция 2х файлов .ts в один файл res.js
    tsc -w app.ts --outdir dist //коспиляция js файлв в папку dist

    Для роботи з примерами пишем команди в разных командних строках:
    - lite-server   //запуск сервера
    - tsc -w         //отслеживать изменения кода

    1. Tsconfig.json
    2. Простой пример!
    3. Переменные (строгая типизация)
    4. Типи даних
    5. Array(массивы)
    6. Кортеж - упорядоченный набор фиксированной длины.
    7. enum - перечисление, тип данных, который позволяет набору целочисленных значений присвоить имена.
    8. Тип данных any.
    9. Тип данных void
    10. Type assertion - утверждение типов


    11. Функции TypeSctipt
    12. Значения функции: обязательное и по умолчанию
    13. Rest параметри (параметр функции в начале имени которого используется ... является rest параметром)
    14. this - контекст функции. This - переменная, которая устанавливается при запуске функции.
    15. arrow (стрелочние) function - специальный синтаксис определения функций
    16. Перегрузка функций

    17. Классы
    17.1. Конструктор - Код который сразу запускается при инициализации объекта!
    17.2 Модификаторы доступа (public, private, protected)!
    17.3 Eeadonly - с помощью ключевого слова readonly можно создать поля только на чтение.
    17.4 Короткая запись создание конструктора!
    17.5. accessors (getter, setter).
    17.6. static (Статическое свойство. Общее для всех экземпляров).

    18. Наследование
    18.1. .super вызов метода родительского класса.
    18.2. Абстрактные классы (Класс от которого можно только наследоваться, создать экземпляр нельзя).

    19. Интерфейсы
    19.1. Интерфейсы, примеры!
    19.2. readonly - свойство может быть установленно только в момент создания объекта!
    19.3. Интерфейс описывает сигнатуру функции!
    19.4. implements - ключевое слово для реализации интерфейса в классе!


*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ______1. Tsconfig.json____________________________________!!!!!
/*
Tsconfig.json – файл, который указывает на то, что текущая директория является
корнем TypeScript проекта.
При запуске tsc без указания файла для компиляции будут использоваться настройки
из файла tsconfig.json

Болле подробно описано в уроке "1. Введение. Переменные и функции"!
{
    "compilerOptions": {
        "module": "commonjs",       //Как будут генерироваться модули
        "noImplicitAny": true,      //Нельзя использовать any
        "removeComments": true,     //Удалять комментарии
        "sourceMap": true,          //Создать map файлы для отладки
        "outDir": "dist"
    },
}
*.

// ______2. Простой пример____________________________________!!!!!
/*
    <head>
        <title>Hello World App</title>
        <script src="app.js"></script>
    </head>
*/
var Message = /** @class */ (function () {
    function Message(text) {
        this.messageText = text;
    }
    Message.prototype.showAlert = function () {
        alert(this.messageText);
    };
    return Message;
}());
var test = new Message("Hello world");
test.showAlert();
//Остановился на 40хв
// ______3. Переменные (строгая типизация)_________________!!!!!
// Определение переменной с именем message1 и значением Hello без явного указания типа
var message1 = "Hello!";
// Определение переменной с именем message2 типа string и присвоение переменной значения Hello!
var message2 = "Hello!";
// Тоже что и let но созданное значение нельзя изменить.
var message3 = "Hello!";
//message3 = "world"; //[ts] Cannot assign to 'message3' because it is a constant or a read-only property
//Час 1.10
// ______4. Типи даних_________________!!!!!
// Boolean
var isDone = false;
//isDone = 1; // [ts] - type '1' is not assignable to type 'boolean'
//  Number
var a1_decimal = 10;
// String
var firstName = "Ivan";
var age = 25;
var messageTemplate = "Hello, my name is " + firstName + " I'm " + age + " years old."; // template string
var messageConcat = "Hello, my name is " + firstName + " I'm " + age + " years old."; // concatenation
var strAndNum1 = 10;
//any
var someValue = "Hello world"; // string
someValue = false; // boolean
someValue = 100; // number
console.log(someValue); // 100
// тип данных void - тип данных указывающий на отсутствие какого-либо значения.
// используется для того чтобы при определении функция явно указать на отсутствие возвращаемого значения.
function myProcedure() {
    alert("hello");
}
// ______5. Array(массивы)_________________!!!!!
var year; // массив строковых значений
year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// [ts] type ('string | number)[] is not assignable to type string[]
//year = [1, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var strAndNum2; //String или Number 
var list = [1, 2, 3]; // определение числового массива и его инициализация
for (var i = 0; i < list.length; i++) {
    console.log(list[i]); //1,2,3
}
var values = [-1, -2, -3]; // создание массива используя generic тип данных Array
for (var i = 0; i < values.length; i++) {
    console.log(values[i]); //-1, -2, -3
}
// ______6. Кортеж - упорядоченный набор фиксированной длины._________________!!!!!
var x; // определение кортежа
x = ["Hello", 10]; // инициализация кортежа
console.log(x); // (2) ["Hello", 10]
console.log(x[0]); // Hello
console.log(x[1]); // 10
var y = [1, "hello", "world"]; // кортеж на три значения.
console.log(y[2]);
//y[0].substr(1); // [ts] Propery substr does not exist on type 'number'
// ______7. enum - перечисление, тип данных, который позволяет набору целочисленных значений присвоить имена._________________!!!!!
// enum - перечисление, тип данных, который позволяет набору целочисленных значений присвоить имена.
// по умолчанию перечисления нумеруют свои элементы начиная с 0
// Red = 0, Green = 1, Blue = 2
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
console.log(c1); //1
// каждому элементу перечисления явно устанавливается значение
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Error"] = 5] = "Error";
    Status[Status["Rejected"] = 10] = "Rejected";
})(Status || (Status = {}));
var c2 = Status.Success;
console.log(c2); //1
// так как первому элементу явно установлено значение 2, все последующие будут продолжать нумерацию с 2
// Circle = 2, Triangle = 3, Square = 4
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 2] = "Circle";
    Shape[Shape["Triangle"] = 3] = "Triangle";
    Shape[Shape["Square"] = 4] = "Square";
})(Shape || (Shape = {}));
var c3 = Shape.Square;
console.log(c3); //4
var c4 = Status[1]; // обращаясь к перечислению через индексатор и указывая целочисленное значение можно получить строковое представление этого значения
console.log(c4); //Success
// ______8. Тип данных any._________________!!!!!
// При создании переменой тип которой не известен во время написания приложения можно использовать
// тип данных any. Такой тип удобно применять в ситуациях, когда значение вводиться пользователем или 
// получается в результате работы другой библиотеки. Такой тип данных не проходит проверку во время компиляции.
var someValue = "Hello world"; // string
someValue = false; // boolean
someValue = 100; // number
console.log(someValue); // 100
someValue.toFixed(); // ok //Метод toFixed() форматирует число, используя запись с фиксированной запятой.
someValue = "test";
someValue.toFixed(); // Ошибка на этапе выполнения - TypeError: someValue.toFixed is not a Function
// ______9. Тип данных void._________________!!!!!
// тип данных void - тип данных указывающий на отсутствие какого-либо значения.
// используется для того чтобы при определении функция явно указать на отсутствие возвращаемого значения.
function myProcedure() {
    alert("hello");
}
// тип void можно использовать для определения переменных, но такой переменной можно присвоить только значение undefined или null
var someVoidVal = undefined;
var u = undefined; // переменная типа undefined
var n = null; // переменная типа null
// по умолчанию значения null и undefined могут быть присвоены любому другому типу данных
// при опции компилятора --strictNullChecks null и undefined могут быть использованы для инициализации типов void или null и undefined соответственно
var testNumber = undefined;
// ______10. Type assertion - утверждение типов _________________!!!!!
// Type assertion - утверждение типов, это операция, которая напоминает приведение типов в других языках программирования.
// С помощью утверждения типов можно подсказать компилятору, конкретный тип с которым мы сейчас работаем. 
var someData = "Hello world";
var strLength1 = someData.length; // утверждение, что значение someData является типом string использование синтаксиса "angle-bracket"
var strLength2 = someData.length; // // утверждение, что значение someData является типом string использование синтаксиса "as"
// ______11. Функции TypeSctipt _________________!!!!!
// обычная функция
function add1(x, y) {
    return x + y;
}
var result1 = add1(1, 2);
console.log(result1);
// типизированная функция. Принимает два аргумента типа number и возвращает значение типа number
function add2(x, y) {
    return x + y;
}
var result2 = add2(10, 20);
//let result2: number = add2(10); // ожидается два параметра
//let result2: number = add2(10, "text"); // второй аргумент должен быть числовым
//let result2: string = add2(10, 20); // результат работы функции не может быть присвоен строковой переменной
console.log(result2);
// при создании переменной можно указать тип данных определяющий сигнатуру функции.
// параметры => возвращаемый тип
var myAdd; // принимает два параметра типа number возвращает значение number
var myProc; // переменной может быть присвоена функция, которая ничего не принимает и не возвращает значений
function myAddDeclaration(x, y) {
    return x + y;
}
myAdd = myAddDeclaration;
console.log(myAdd(10, 20)); // вызов функции
myProc = function () {
    console.log("Hello world");
};
myProc(); // вызов функции
// ______12. Значения функции: обязательное и по умолчанию _________________!!!!!
// В TypeScript все параметры функции являются обязательными.
// но если после имени параметра указать символ ? параметр становиться опциональным, и если при вызове его не предоставить
// значение этого параметра будет undefined 
// Опциональные параметры могут быть только последними параметрами в списке параметров метода.
// optional parameters
function getFullName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var fullNmae1 = getFullName("Ivan", "Ivanov");
var fullNmae2 = getFullName("Ivan");
console.log(fullNmae1); //Ivan Ivanov
console.log(fullNmae2); //Ivan
// Параметры со значением по умолчанию - параметры метода, для которых в объявлении функции присвоено значение,
// которое будет использоваться если функция будет вызвана без указания значения для данного параметра или 
// если в качестве значение будет передано undefined
// default-iniatialize parametes
function getDisplayName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Ivanov"; }
    return "Display Name: " + firstName + " " + lastName;
}
var fullNmae3 = getDisplayName("Ivan", "Ivanov");
var fullNmae4 = getDisplayName("Ivan");
var fullNmae5 = getDisplayName("Ivan", undefined); // идентичен предыдущему вызову
console.log(fullNmae3); //Display Name: Ivan Ivanov
console.log(fullNmae4); //Display Name: Ivan Ivanov
console.log(fullNmae5); //Display Name: Ivan Ivanov
// ______13. Rest параметри (параметр функции в начале имени которого используется ... является rest параметром)________!!!!!
// параметр функции в начале имени которого используется ... является rest параметром.
// rest параметр - это набор опциональных параметров. При вызове такого метода, количество параметров не ограничивается.
// тип данной функции - (message:string, ...names: string[]) => void
function printValue(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// вызов функции с rest параметрами
printValue("sample 1");
printValue("sample 2", "1", "2");
printValue("sample 3", "1", "2", "abc");
// ______14. this - контекст функции. This - переменная, которая устанавливается при запуске функции.________!!!!!
// this - контекст функции. This - переменная, которая устанавливается при запуске функции.
function test1() {
    console.log(this);
}
test1(); // global object
var someObj = {
    name: 'test',
    testMeth: test1
};
someObj.testMeth(); // someObj
var someInstance = new test1(); // new instance
// Установка контекста вызываемой функции
function test2(x, y) {
    console.log(x + y);
    console.log(this);
}
var someTestObj = {
    name: "test object"
};
//Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
test2.call(someTestObj, 10, 20); // Установка контекста, вариант 1              //30 {name: 'test object'}
//Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива
test2.apply(someTestObj, [30, 40]); // установка контекста, вариант 2           //70 {name: 'test object'}
//Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. 
//В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
var newFunc = test2.bind(someTestObj, 50); // установка контекста, вариант 3    //110 {name: 'test object'}
newFunc(60);
//15. ______arrow (стрелочние) function - специальный синтаксис определения функций____________________________!
// arrow function - специальный синтаксис определения функций
// в переменной increment находиться функция, которая принимает один параметр и возвращает его значение увеличиное на 1.
var increment = function (x) { return x + 1; };
var incrementArrow1 = function (x) { return x + 1; };
var incrementArrow2 = function (x) { return x + 1; };
var incrementArrow3 = function (x) { return x + 1; };
function showMessage(message) {
    if (typeof message == "number") {
        switch (message) {
            case 1:
                {
                    console.log("Hello world");
                }
                break;
            case 2:
                {
                    console.log("Привет мир");
                }
                break;
        }
    }
    else if (typeof message == "string") {
        console.log(message);
    }
}
showMessage(1);
showMessage("test");
// showMessage(true); // compile error
//17. _______Классы__Простой пример_______________________________!
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.print = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return User;
}());
var user1 = new User(); // создаем экземпляр класса User вызывая конструктор и инициализируем переменную user1
user1.firstName = "Ivan"; // присвоение значения свойству firstName на экземпляре user1
user1.lastName = "Ivanov";
var user2 = new User(); // создаем экземпляр класса User вызывая конструктор и инициализируем переменную user2
user2.firstName = "John"; // присвоение значения свойству firstName на экземпляре user2
user2.lastName = "Doe";
user1.print(); // вызов метода print на экземпляре user1
user2.print(); // вызов метода print на экземпляре user2
//17.1. _______Конструктор - Код который сразу запускается при инициализации объекта!_______________________________!
/*
    Конструктор – специальный метод, который используется для инициализации экземпляра.
    В теле класса конструктор создается с помощью ключевого слова constructor.
    При создании экземпляра класса для вызова конструктора необходимо использовать ключевое слово new.
*/
//Простой пример!
var MyClass1 = /** @class */ (function () {
    // определение конструктора для инициализации класса
    function MyClass1() {
        console.log("Работает конструктор класса MyClass1");
        this.value = "Hello world";
    }
    return MyClass1;
}());
console.log("Создание экземпляра класса MyClass1");
var temp = new MyClass1(); // вызов конструктора, определенного на строке 5
console.log(temp.value);
//Еще пример
var Student = /** @class */ (function () {
    function Student(c_firstName, c_age) {
        this.firstName = c_firstName;
        this.age = c_age;
    }
    Student.prototype.print = function () {
        console.log("Student - " + this.firstName + ", age - " + this.age + " years.");
    };
    return Student;
}());
var student1 = new Student("Ivan", 25); // вызов конструктора с передачей значений
var student2 = new Student("John", 24);
student1.print();
student2.print();
//___________17.2 Модификаторы доступа (public, private, protected)!!_______________________________!
/*
    public, private, protected – ключевые слова, модификаторы доступа. С их помощью определяется видимость членов класса.

    public – видимый для всех (в классе и за пределами класса);
    private – видимый только в пределах класса (за пределами класса доступ отсутствует);
    protected – видимый в пределах класса и в классах наследниках (за пределами класса и классов наследниках доступ отсутствует).

    Все члены классов без модификатора доступа, по умолчанию используют модификатор доступа public
*/
var Employee = /** @class */ (function () {
    function Employee(name, position) {
        this.name = name;
        this.position = position;
        this.company = "ITVDN";
    }
    Employee.prototype.printToConsole = function () {
        console.log("Employee " + this.name + ", position - " + this.position + ", company - " + this.company);
    };
    return Employee;
}());
var emp1 = new Employee("Ivan", "Developer");
emp1.name = "John";
emp1.position = "Team Lead";
//emp1.company = "..."; // [ts] Property 'company' is private and only accessible within class 'Employee'
emp1.printToConsole();
//___________17.3 Eeadonly - с помощью ключевого слова readonly можно создать поля только на чтение!
// Такое поле может быть инициализировано в момент его создания или в конструкторе 
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.numberOfLegs = 4;
        this.name = name;
    }
    return Dog;
}());
var dog = new Dog("Sharik");
console.log(dog.name);
console.log(dog.numberOfLegs);
//dog.numberOfLegs = 5; // [ts] cannot assign to 'numberOfLags' because it is a constant or read-only property
//dog.name = "";_______________________________!
//___________17.4 Короткая запись создание конструктора______________!
var Person = /** @class */ (function () {
    // Если при определении параметров в конструкторе указать для них модификаторы доступа
    // Эти параметры автоматически станут полями класса с соответствующим уровнем доступа
    // и значениями, которые будут установлены при вызове конструктора.
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log(this.name + " " + this.age);
    };
    return Person;
}());
var person = new Person("Jhon", 25);
person.print();
person.name = "111"; // поле public
//person.age = 111; // поле private
//___________17.5. accessors (getter, setter)_______________________!
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    // метод для получения значения закрытого свойства
    Rectangle.prototype.getWidth = function () {
        return this._width;
    };
    // метод для установки значения закрытому свойству
    Rectangle.prototype.setWidth = function (value) {
        if (value <= 0) {
            this._width = 1;
        }
        else {
            this._width = value;
        }
    };
    Object.defineProperty(Rectangle.prototype, "height", {
        // accessors - механизм, который позволяет перехватить обращение к члену объекта на запись или чтение.
        // getter 
        get: function () {
            return this._height;
        },
        // setter
        set: function (value) {
            if (value <= 0) {
                this._height = 1;
            }
            else {
                this._height = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.calculateArea = function () {
        return this._width * this._height;
    };
    return Rectangle;
}());
var rect1 = new Rectangle();
rect1.setWidth(100); // установка ширины с помощью метода
rect1.height = (-20); // установка высоты с помощью setter. Запускается метод set на строке 28, значение 20 передается в качестве параметра
console.log(rect1.getWidth()); // чтение значение закрытого свойства с помощью метода
console.log(rect1.height); // чтение значение закрытого свойства с помощью аксесора. Тут вызывается метод get со строки 23
var rectArea = rect1.calculateArea();
console.log(rectArea);
//___________17.6. static (Статическое свойство. Общее для всех экземпляров)_______________________!
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var Grid = /** @class */ (function () {
    function Grid() {
        this.points = [];
    }
    Grid.prototype.add = function (point) {
        this.points.push(point);
    };
    Grid.prototype.buildGrid = function () {
        for (var i = 0; i < this.points.length; i++) {
            console.log(this.points[i]);
        }
    };
    Grid.origin = { x: 0, y: 0 }; // Статическое свойство. Общее для всех экземпляров
    return Grid;
}());
var grid1 = new Grid();
grid1.add(Grid.origin);
grid1.add(new Point(1, 2));
grid1.add(new Point(10, 20));
grid1.add(new Point(12, 24));
grid1.buildGrid();
/*
    {x: 0, y: 0}
    Point {x: 1, y: 2}
    Point {x: 10, y: 20}
    Point {x: 12, y: 24}
*/
var grid2 = new Grid();
grid2.add(Grid.origin);
grid2.add(new Point(6, 2));
grid2.add(new Point(7, 2));
grid2.add(new Point(1, 24));
grid2.buildGrid();
/*
    {x: 0, y: 0}
    Point {x: 6, y: 2}
    Point {x: 7, y: 2}
    Point {x: 1, y: 24}
*/
//___________18. Наследование_______________________!
/*
    Наследование - механизм создания класса посредством расширения уже существующего класса.
    extends – ключевое слово, которое определяет какой класс будет базовым (родительским) для текущего.
    Класс наследник получает от родителя свойства и методы
*/
var Base = /** @class */ (function () {
    function Base() {
        this.value1 = "private value 1";
        this.value2 = "public value 2";
        this.value3 = "protected value 3";
    }
    // constructor(v1, v2, v3) {
    //     this.value1 = v1;
    //     this.value2 = v2;
    //     this.value3 = v3;
    // }
    Base.prototype.method1 = function () {
        console.log("private method 1 call.");
    };
    Base.prototype.method2 = function () {
        console.log("public method 2 call.");
    };
    //Модификатор protected определяет поля и методы, которые из вне класса видны только в классах-наследниках:
    Base.prototype.method3 = function () {
        console.log("protected method 3 call.");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.call(this) || this;
        //если в классе что наследуется нету конструктора метод super() не обезятелен!
        //super("v1","v2","v3");
        console.log("public property = " + _this.value2);
        console.log("protected property = " + _this.value3);
        // this.method1(); // метод private, скрыт  
        _this.method2(); // public - открыт для всех  
        _this.method3(); // protected - доступен, так как данный класс является наследником
        return _this;
    }
    return Derived;
}(Base));
var derived1 = new Derived();
// доступен только метод method2, так как он public. Остальные методы не доступны так как данный код находится за пределами класса
derived1.method2();
console.log(derived1.value2);
//___________18.1. .super вызов метода родительского класса_______________________!
// Более подробно описано в видеоуроке "TypeScript - 2. Классы и интерфейсы"
// базовый тип данных
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.getInfo = function () {
        return "This is " + this.name + ".";
    };
    return Shape;
}());
// производный тип данных
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(width, height) {
        var _this = _super.call(this, "Rectangle") || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rect.prototype.getInfo = function () {
        var baseInfo = _super.prototype.getInfo.call(this); // вызов метода родительского класса
        return baseInfo + " Height = " + this.height + ", Width = " + this.width;
    };
    return Rect;
}(Shape));
//.......полная часть кода описано в видеоуроке "TypeScript - 2. Классы и интерфейсы"
//___________18.2. Абстрактные классы (Класс от которого можно только наследоваться, создать экземпляр нельзя)._______________________!
/*
    Абстрактный класс - это класс, который может выступать только в роли базового класса. Создать экземпляр абстрактного класса не получится.
    Абстрактный метод - это метод, который не имеет реализации в текущем классе но обязательно должен быть реализован в производном классе.
    Абстрактные методы могут создаваться только в абстрактных классах.
*/
// abstract - ключевое слово, которое позволяет создавать абстрактные методы и абстрактные классы.
// абстрактный класс - это класс, который может выступать только в роли базового класса. Создать экземпляр абстрактного класса не получится.
// абстрактный метод - это метод, который не имеет реализации в текущем классе но обязательно должен быть реализован в производном классе.
// абстрактные методы могут создаваться только в абстрактных классах.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    //abstract prop:string; // абстрактное свойство
    Animal.prototype.move = function () {
        console.log(this.name + " передвигается");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, "Кот") || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Мяу-Мяу");
    };
    return Cat;
}(Animal));
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        return _super.call(this, "Корова") || this;
    }
    Cow.prototype.makeSound = function () {
        console.log("Му-у-у-у");
    };
    return Cow;
}(Animal));
var murzik = new Cat();
murzik.makeSound();
murzik.move();
var burenka = new Cow();
burenka.makeSound();
burenka.move();
// функция printValue2 принимает параметр типа NamedValue
// в качестве параметра можно передать экземпляр класса, который реализовал интерфейс
// или объект, который по своей структуре подходит под указанный интерфейс. Использовать приведение типов как в большинстве других языков не нужно
function printValue2(obj) {
    console.log(obj.name);
}
var myObj3 = { value: 10, name: "World" };
printValue2(myObj3); // myObj1 имеет свойство name
var myObj4 = { data: 10, param: "Hello" };
function drawRectangle(rect) {
    if (rect.name) {
        console.log("Name - " + rect.name);
    }
    console.log(rect.width + "*" + rect.height);
}
var rectangle1 = {
    name: "Rectangle 1",
    width: 100,
    height: 75
};
var rectangle2 = {
    width: 55,
    height: 33
};
var rectangle3 = {
    name: "Rectangle 3",
    width: 100
};
drawRectangle(rectangle1);
drawRectangle(rectangle2);
var point = { x: 10, y: 20 };
var myArray1 = function (value) {
    return false;
};
// имена параметров не обязательно должны совпадать с именами в интерфейсе
var myArray2 = function (data) {
    return false;
};
// implements - ключевое слово для реализации интерфейса в классе
// если члены интерфейса не будут определены в классе компилятор выдаст ошибку
var DailyReport = /** @class */ (function () {
    function DailyReport() {
        this.name = "Daily Report";
    }
    DailyReport.prototype.build = function () {
        return "some daili report data";
    };
    return DailyReport;
}());
var WeaklyReport = /** @class */ (function () {
    function WeaklyReport() {
        this.name = "Weakly Report";
    }
    WeaklyReport.prototype.build = function () {
        return "some weakly report data";
    };
    return WeaklyReport;
}());
console.log(new DailyReport().build());
console.log(new WeaklyReport().build());
