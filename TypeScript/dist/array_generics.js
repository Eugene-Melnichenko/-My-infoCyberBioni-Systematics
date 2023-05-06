"use strict";
/*  TypeScript – типизированное надмножество языка JavaScript, компилируется в чистый JavaScript.

    Для роботи з примерами пишем команди в разных командних строках:
    - lite-server   //запуск сервера
    - tsc -w         //отслеживать изменения кода

    1. forEach - обход всех элементов массива и запуск определенной функции для значения каждого элемента.
    2. map - обходит все элементы массива и возвращает новый массив со значениями, которые вернула указанная функция.
    3. filter - возвращает новый массив состоящий из элементов отобраных функцией.
    4. every - функция вовращает true если все элементы удовлетворяют условие.
       some - функция вовращает true если хотя бы один элемент удовлетворяет условие.
    
    5. Метод reduce(callback, initialValue) применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.

    6.  [... ]
        Spread operator - добавляем элементы массива в конец массива.
        Object spread - свойства объекта point2D добавляются к свойствам объекта point3D

    7. "for ... in" - обход по свойствам объекта (в данном случае индексы массива)
        "for ... of" - обход значений массива

    8. Generics, пройто пример.
    9. Generics Class, пройто пример (Более подробно описано в уроке "TypeScript - 3. Generics").


    10. Пространства имен
    11. Модули

*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.UrlValidator = exports.CreditCardValidator = void 0;
//_____________1. forEach - обход всех элементов массива и запуск определенной функции для значения каждого элемента.____________!
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
// forEach - обход всех элементов массива и запуск определенной функции для значения каждого элемента.
array1.forEach(function (value) { return sum += value; });
console.log("sum " + sum);
/* или
    array1.forEach(function(elem){
        sum += elem;
    });
*/
// увеличение каждого элемена массива на 1
array1.forEach(function (value, index, array) {
    array[index] = value + 1;
    //number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
});
console.log(array1);
//_____________2. map - обходит все элементы массива и возвращает новый массив со значениями, которые вернула указанная функция.____________!
var array2 = [1, 2, 3, 4, 5];
var array3 = array2.map(function (value) {
    return value * value;
});
console.log(array2); //[1, 2, 3, 4, 5]
console.log(array3); //[1, 4, 9, 16, 25]
//_____________3. filter - возвращает новый массив состоящий из элементов отобраных функцией.____________!
var array4 = [1, 2, 3, 4, 5, 6];
var array5 = array4.filter(function (value) { return value % 2 == 0; }); // получить все четные элементы
console.log(array4); //[1, 2, 3, 4, 5, 6]
console.log(array5); //[2, 4, 6]
/*________________4. every - функция вовращает true если все элементы удовлетворяют условие.
                     some - функция вовращает true если хотя бы один элемент удовлетворяет условие. ____*/
var data1 = [1, 2, 3, 4, 5, 6];
var data2 = [11, 21, 31, 41];
var data3 = [1, 3, 5, 7, 9];
var data4 = [1, 3, 5, 7, 8, 9];
var res1 = data1.every(function (value) { return value > 10; });
var res2 = data2.every(function (value) { return value > 10; });
var res3 = data3.some(function (value) { return value % 2 == 0; });
var res4 = data4.some(function (value) { return value % 2 == 0; });
console.log(res1); //false
console.log(res2); //true
console.log(res3); //false
console.log(res4); //true
/*_________5. Метод reduce(callback, initialValue) применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению._____*/
// callback
// Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
// ее аргументы
//      previousValue
//          Значение, возвращённое предыдущим выполнением функции callback, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
//      currentValue
//          Текущий обрабатываемый элемент массива.
//      currentIndex
//          Индекс текущего обрабатываемого элемента массива.
//      array
// 	        Массив, для которого была вызвана функция reduce.
//
// initialValue
// Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.
var values = [10, 2, 3, 4, 5, 6];
var total = values.reduce(function (prev, current) {
    console.log("prev " + prev + " current " + current);
    return prev + current;
}, 0);
/*
    prev 0 current 10
    prev 10 current 2
    prev 12 current 3
    prev 15 current 4
    prev 19 current 5
    prev 24 current 6
*/
console.log(total); //30
/*_____ 6. [... ]
        Spread operator - добавляем элементы массива в конец массива.
        Object spread - свойства объекта point2D добавляются к свойствам объекта point3D____________*/
var dataArray1 = [1, 2, 3];
var dataArray2 = __spreadArrays([100, 200], dataArray1); // spread operator - добавляем элементы массива dataArray1 в конец массива dataArray2
console.log(dataArray2); //[100, 200, 1, 2, 3]
var point2D = { x: 10, y: 20 };
var point3D = __assign(__assign({}, point2D), { z: 30 }); // object spread - свойства объекта point2D добавляются к свойствам объекта point3D
console.log(point3D); //{x: 10, y: 20, z: 30}
/*______ 7. "for ... in" - обход по свойствам объекта (в данном случае индексы массива)
         "for ... of" - обход значений массива_________________________________________ */
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var users = [];
users[0] = new User("Jim", 20);
users[1] = new User("Ivan", 25);
users[2] = new User("Bob", 23);
users[3] = new User("David", 30);
console.log("for ... in"); // обход по свойствам объекта (в данном случае индексы массива)
for (var index in users) {
    console.log(index);
}
console.log("for ... of"); // обход значений массива
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var value = users_1[_i];
    console.log(value);
}
/*______ 8. Generics_________________________________________ */
/*
    Generic (обобщенный тип или шаблон) – специальный тип данных, который позволяет создавать компоненты не
    привязываясь к конкретному типу данных, а указывать этот тип данных во время создания компонента.
*/
//_____Простой пример___!
//На строке 170 создана функция-generic эта функция принимает один параметр типа T и возвращает значение типа Т.
//T - type variable, специальный тип переменных, который используется в обобщенных типах для того чтобы хранить тип вместо значения.
// Type variable будет хранить тип данных, который предоставит пользователь функции в момент ее вызова.
function myFunc(value) {
    return value;
}
// функция myFunc принимает и возвращает строку. Тип данных указан явно в угловых скобках
var value1 = myFunc("test");
// функция принимает и возвращает число. В данном случае используется type argument inference
// компилятор самостоятельно определят какой тип нужно использовать
var value2 = myFunc(10);
/*______9. Generics Class, пройто пример (Более подробно описано в уроке "TypeScript - 3. Generics")._____________ */
var MyGenericClass = /** @class */ (function () {
    function MyGenericClass() {
    }
    MyGenericClass.prototype.method1 = function (value1) {
        console.log(value1);
    };
    MyGenericClass.prototype.method2 = function () {
        return this.value;
    };
    return MyGenericClass;
}());
// Экземпляр обобщенного типа, закрытого типом number
var myGenericNumber = new MyGenericClass();
myGenericNumber.method1(10); //10
myGenericNumber.value = 100;
console.log(myGenericNumber.method2()); //100
// Экземпляр обобщенного типа, закрытого типом string
var myGenericString = new MyGenericClass();
myGenericString.method1("hello"); //hello
myGenericString.value = "world";
console.log(myGenericString.method2()); //world
//Более подробно описано в уроке "TypeScript - 3. Generics"
//1 година 10хв.
/*______10.Пространства имен._____________ */
//Пространство имен - механизм для группировки кода и определения отдельных областей видимости.
// Код, помещенный в пространство имен, находиться в области видимости пространства имен, а не в глобальной области видимости.
// Для того, чтобы элементы пространства имен были доступны за пределами пространства имен, необходимо использовать ключевое слово export.
// определение пространства имен с именем Sample1
var Sample1;
(function (Sample1) {
    // класс будет доступен за пределами пространства Sample1
    var MyClass1 = /** @class */ (function () {
        function MyClass1() {
        }
        MyClass1.prototype.message = function () {
            console.log("Sample1.MyClass1.message");
        };
        return MyClass1;
    }());
    Sample1.MyClass1 = MyClass1;
    var MyClass2 = /** @class */ (function () {
        function MyClass2() {
        }
        MyClass2.prototype.message = function () {
            console.log("Sample1.MyClass2.message");
        };
        return MyClass2;
    }());
})(Sample1 || (Sample1 = {}));
var Sample2;
(function (Sample2) {
    var MyClass1 = /** @class */ (function () {
        function MyClass1() {
        }
        MyClass1.prototype.message = function () {
            console.log("Sample2.MyClass1.message");
        };
        return MyClass1;
    }());
    Sample2.MyClass1 = MyClass1;
    var MyClass2 = /** @class */ (function () {
        function MyClass2() {
        }
        MyClass2.prototype.message = function () {
            console.log("Sample2.MyClass2.message");
        };
        return MyClass2;
    }());
})(Sample2 || (Sample2 = {}));
// следующий код находится в глобальной области видимости.
// Использование класса MyClass1 из пространства имен Sample1
var temp1 = new Sample1.MyClass1();
temp1.message(); //Sample1.MyClass1.message
var temp2 = new Sample2.MyClass1();
temp2.message(); //Sample2 .MyClass1.message
//_____________ЕЩЕ ПРИМЕР____________!
var Shapes;
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle() {
            console.log("Circle");
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
    var Square = /** @class */ (function () {
        function Square() {
            console.log("Square");
        }
        return Square;
    }());
    Shapes.Square = Square;
    var Complex;
    (function (Complex) {
        var Image = /** @class */ (function () {
            function Image() {
                console.log("Image");
            }
            return Image;
        }());
        Complex.Image = Image;
        var Animation = /** @class */ (function () {
            function Animation() {
                console.log("Animation");
            }
            return Animation;
        }());
        Complex.Animation = Animation;
    })(Complex = Shapes.Complex || (Shapes.Complex = {}));
})(Shapes || (Shapes = {}));
// создание псевдонима с именем complex для пространства имен Shapes.Complex
var complex = Shapes.Complex;
var img1 = new complex.Image();
var img2 = new Shapes.Complex.Image(); // тоже что и 22 строка
var CreditCardValidator = /** @class */ (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.prototype.validate = function (value) {
        return false;
    };
    return CreditCardValidator;
}());
exports.CreditCardValidator = CreditCardValidator;
var UrlValidator = /** @class */ (function () {
    function UrlValidator() {
    }
    UrlValidator.prototype.validate = function (value) {
        return false;
    };
    return UrlValidator;
}());
exports.UrlValidator = UrlValidator;
// import { Validator, CreditCardValidator } from "01-validators"; // импорт нескольких типов 
var PhoneNumberValidator = /** @class */ (function () {
    function PhoneNumberValidator() {
    }
    PhoneNumberValidator.prototype.validate = function (value) {
        return true;
    };
    return PhoneNumberValidator;
}());
var phoneVal = new PhoneNumberValidator();
console.log(phoneVal.validate("000-00-00"));
//1.09 хв.!
