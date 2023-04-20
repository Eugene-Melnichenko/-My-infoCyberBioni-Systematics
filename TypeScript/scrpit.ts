/*  TypeScript – типизированное надмножество языка JavaScript, компилируется в чистый JavaScript.
    https://www.typescriptlang.org/

    npm install -g typescript
    tsc helloworld.ts //компиляция файлу 'helloworld.ts'
    tsc -w helloworld.ts //автокомпиляция файлу 'helloworld.ts'

    tsc -w --outFi le res.js app.ts exemp.ts //компиляция 2х файлов .ts в один файл res.js
    tsc -w app.ts --outdir dist //коспиляция js файлв в папку dist

    Для роботи з примерами пишем команди в разных командних строках:
    - lite-server   //запуск сервера
    - tsc-w         //отслеживать изменения кода

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
*/



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
class Message {
    messageText: string;

    constructor(text) {
        this.messageText = text;
    }

    showAlert() {
        alert(this.messageText);
    }
}

let test = new Message("Hello world");
test.showAlert();

//Остановился на 40хв


// ______3. Переменные (строгая типизация)_________________!!!!!
// Определение переменной с именем message1 и значением Hello без явного указания типа
let message1 = "Hello!";
// Определение переменной с именем message2 типа string и присвоение переменной значения Hello!
let message2: string = "Hello!";
// Тоже что и let но созданное значение нельзя изменить.
const message3: string = "Hello!";
//message3 = "world"; //[ts] Cannot assign to 'message3' because it is a constant or a read-only property

//Час 1.10


// ______4. Типи даних_________________!!!!!
// Boolean
let isDone: boolean = false;
//isDone = 1; // [ts] - type '1' is not assignable to type 'boolean'

//  Number
let a1_decimal: number = 10;
// String
let firstName: string = "Ivan";
let age: number = 25;
let messageTemplate: string = `Hello, my name is ${firstName} I'm ${age} years old.` // template string
let messageConcat: string = "Hello, my name is " + firstName + " I'm " + age + " years old." // concatenation

let strAndNum1: string | number = 10;

//any
let someValue: any = "Hello world"; // string
someValue = false; // boolean
someValue = 100; // number
console.log(someValue); // 100

// тип данных void - тип данных указывающий на отсутствие какого-либо значения.
// используется для того чтобы при определении функция явно указать на отсутствие возвращаемого значения.
function myProcedure() : void {
    alert("hello");
}




// ______5. Array(массивы)_________________!!!!!
let year: string[]; // массив строковых значений
year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// [ts] type ('string | number)[] is not assignable to type string[]
//year = [1, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let strAndNum2: (string | number); //String или Number 

let list: number[] = [1, 2, 3]; // определение числового массива и его инициализация
for(let i = 0; i < list.length; i++) {
    console.log(list[i]);   //1,2,3
}

let values: Array<number> = [-1, -2, -3]; // создание массива используя generic тип данных Array
for(let i = 0; i < values.length; i++) {
    console.log(values[i]); //-1, -2, -3
}

// ______6. Кортеж - упорядоченный набор фиксированной длины._________________!!!!!
let x: [string, number]; // определение кортежа
x = ["Hello", 10]; // инициализация кортежа

console.log(x); // (2) ["Hello", 10]
console.log(x[0]); // Hello
console.log(x[1]); // 10

let y: [number, string, string] = [1, "hello", "world"]; // кортеж на три значения.
console.log(y[2]);

//y[0].substr(1); // [ts] Propery substr does not exist on type 'number'






// ______7. enum - перечисление, тип данных, который позволяет набору целочисленных значений присвоить имена._________________!!!!!
// enum - перечисление, тип данных, который позволяет набору целочисленных значений присвоить имена.
// по умолчанию перечисления нумеруют свои элементы начиная с 0
// Red = 0, Green = 1, Blue = 2
enum Color { Red, Green, Blue }
let c1: Color = Color.Green;
console.log(c1); //1

// каждому элементу перечисления явно устанавливается значение
enum Status { Success = 1, Error = 5, Rejected = 10}
let c2: Status = Status.Success;
console.log(c2); //1

// так как первому элементу явно установлено значение 2, все последующие будут продолжать нумерацию с 2
// Circle = 2, Triangle = 3, Square = 4
enum Shape { Circle = 2, Triangle, Square }
let c3: Shape = Shape.Square;
console.log(c3); //4

let c4: string = Status[1]; // обращаясь к перечислению через индексатор и указывая целочисленное значение можно получить строковое представление этого значения
console.log(c4); //Success




// ______8. Тип данных any._________________!!!!!
// При создании переменой тип которой не известен во время написания приложения можно использовать
// тип данных any. Такой тип удобно применять в ситуациях, когда значение вводиться пользователем или 
// получается в результате работы другой библиотеки. Такой тип данных не проходит проверку во время компиляции.

let someValue: any = "Hello world"; // string
someValue = false; // boolean
someValue = 100; // number
console.log(someValue); // 100

someValue.toFixed(); // ok //Метод toFixed() форматирует число, используя запись с фиксированной запятой.
someValue = "test";
someValue.toFixed(); // Ошибка на этапе выполнения - TypeError: someValue.toFixed is not a Function



// ______9. Тип данных void._________________!!!!!
// тип данных void - тип данных указывающий на отсутствие какого-либо значения.
// используется для того чтобы при определении функция явно указать на отсутствие возвращаемого значения.
function myProcedure() : void {
    alert("hello");
}
// тип void можно использовать для определения переменных, но такой переменной можно присвоить только значение undefined или null
let someVoidVal: void = undefined;

let u: undefined = undefined; // переменная типа undefined
let n: null = null; // переменная типа null

// по умолчанию значения null и undefined могут быть присвоены любому другому типу данных
// при опции компилятора --strictNullChecks null и undefined могут быть использованы для инициализации типов void или null и undefined соответственно
let testNumber: number = undefined;



// ______10. Type assertion - утверждение типов _________________!!!!!
// Type assertion - утверждение типов, это операция, которая напоминает приведение типов в других языках программирования.
// С помощью утверждения типов можно подсказать компилятору, конкретный тип с которым мы сейчас работаем. 

let someData: any = "Hello world";
let strLength1: number = (<string>someData).length; // утверждение, что значение someData является типом string использование синтаксиса "angle-bracket"
let strLength2: number = (someData as string).length; // // утверждение, что значение someData является типом string использование синтаксиса "as"



















// ______11. Функции TypeSctipt _________________!!!!!
// обычная функция
function add1(x, y) {
    return x + y;
}

let result1 = add1(1, 2);
console.log(result1);

// типизированная функция. Принимает два аргумента типа number и возвращает значение типа number
function add2(x: number, y: number) :number {
    return x + y;
}

let result2: number = add2(10, 20);
//let result2: number = add2(10); // ожидается два параметра
//let result2: number = add2(10, "text"); // второй аргумент должен быть числовым
//let result2: string = add2(10, 20); // результат работы функции не может быть присвоен строковой переменной
console.log(result2);



// при создании переменной можно указать тип данных определяющий сигнатуру функции.
// параметры => возвращаемый тип
let myAdd: (x: number, y: number) => number; // принимает два параметра типа number возвращает значение number
let myProc: () => void; // переменной может быть присвоена функция, которая ничего не принимает и не возвращает значений

function myAddDeclaration(x: number, y: number) : number {
    return x + y;
}
myAdd = myAddDeclaration;
console.log(myAdd(10, 20)); // вызов функции

myProc = function() {
    console.log("Hello world");
}
myProc(); // вызов функции



// ______12. Значения функции: обязательное и по умолчанию _________________!!!!!
// В TypeScript все параметры функции являются обязательными.
// но если после имени параметра указать символ ? параметр становиться опциональным, и если при вызове его не предоставить
// значение этого параметра будет undefined 
// Опциональные параметры могут быть только последними параметрами в списке параметров метода.

// optional parameters
function getFullName(firstName: string, lastName?: string): string { 
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}

let fullNmae1: string = getFullName("Ivan", "Ivanov");
let fullNmae2: string = getFullName("Ivan");

console.log(fullNmae1);  //Ivan Ivanov
console.log(fullNmae2);  //Ivan

// Параметры со значением по умолчанию - параметры метода, для которых в объявлении функции присвоено значение,
// которое будет использоваться если функция будет вызвана без указания значения для данного параметра или 
// если в качестве значение будет передано undefined

// default-iniatialize parametes
function getDisplayName(firstName: string, lastName: string = "Ivanov") {
    return "Display Name: " + firstName + " " + lastName;
}

let fullNmae3: string = getDisplayName("Ivan", "Ivanov");
let fullNmae4: string = getDisplayName("Ivan");
let fullNmae5: string = getDisplayName("Ivan", undefined); // идентичен предыдущему вызову

console.log(fullNmae3); //Display Name: Ivan Ivanov
console.log(fullNmae4); //Display Name: Ivan Ivanov
console.log(fullNmae5); //Display Name: Ivan Ivanov



// ______13. Rest параметри (параметр функции в начале имени которого используется ... является rest параметром)________!!!!!
// параметр функции в начале имени которого используется ... является rest параметром.
// rest параметр - это набор опциональных параметров. При вызове такого метода, количество параметров не ограничивается.
// тип данной функции - (message:string, ...names: string[]) => void
function printValue(message: string, ...names: string[]) : void {
    console.log(message);
    for(let i = 0; i < names.length; i++) {
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

let someObj = {
    name: 'test',
    testMeth: test1
};
someObj.testMeth(); // someObj

let someInstance = new test1(); // new instance

// Установка контекста вызываемой функции
function test2(x: number, y: number) {
    console.log(x + y);
    console.log(this)
}
let someTestObj = {
    name: "test object"
};
//Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
test2.call(someTestObj, 10, 20); // Установка контекста, вариант 1              //30 {name: 'test object'}
//Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива
test2.apply(someTestObj, [30, 40]); // установка контекста, вариант 2           //70 {name: 'test object'}
//Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. 
//В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
let newFunc = test2.bind(someTestObj, 50); // установка контекста, вариант 3    //110 {name: 'test object'}
newFunc(60);



//15. arrow (стрелочние) function - специальный синтаксис определения функций
// arrow function - специальный синтаксис определения функций
// в переменной increment находиться функция, которая принимает один параметр и возвращает его значение увеличиное на 1.
let increment = function (x: number) { return x + 1; }
let incrementArrow1 = (x: number) => { return x + 1; }
let incrementArrow2 = (x: number) => x + 1;
let incrementArrow3 = x => x + 1; 


//16. Перегрузка функций
function showMessage(message: string); // первая перегрузка функции, которая принимает один параметр типа string
function showMessage(message: number); // вторая перегрузка функции, которая принимает один параметр типа number
function showMessage(message: any) { // непосредственно реализация функции, не является перегрузкой

    if (typeof message == "number") {
        switch (message) {
            case 1: {
                console.log("Hello world");
            } break;
            case 2: {
                console.log("Привет мир");
            } break;
        }
    }

    else if (typeof message == "string") {
        console.log(message);
    }
}

showMessage(1);
showMessage("test");
// showMessage(true); // compile error