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



//_____________1. forEach - обход всех элементов массива и запуск определенной функции для значения каждого элемента.____________!
let array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum: number = 0;

// forEach - обход всех элементов массива и запуск определенной функции для значения каждого элемента.
array1.forEach(value => sum += value);
console.log("sum " + sum);
/* или
    array1.forEach(function(elem){
        sum += elem;
    });
*/

// увеличение каждого элемена массива на 1
array1.forEach((value: number, index: number, array: number[]) => {
    array[index] = value + 1;
    //number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
})
console.log(array1);


//_____________2. map - обходит все элементы массива и возвращает новый массив со значениями, которые вернула указанная функция.____________!
let array2: number[] = [1, 2, 3, 4, 5];

let array3: number[] = array2.map(function (value) {
    return value * value;
})
console.log(array2);    //[1, 2, 3, 4, 5]
console.log(array3);    //[1, 4, 9, 16, 25]



//_____________3. filter - возвращает новый массив состоящий из элементов отобраных функцией.____________!
let array4: number[] = [1, 2, 3, 4, 5, 6];

var array5 = array4.filter(value => value % 2 == 0); // получить все четные элементы

console.log(array4);    //[1, 2, 3, 4, 5, 6]
console.log(array5);    //[2, 4, 6]



/*________________4. every - функция вовращает true если все элементы удовлетворяют условие.
                     some - функция вовращает true если хотя бы один элемент удовлетворяет условие. ____*/
let data1: number[] = [1, 2, 3, 4, 5, 6];
let data2: number[] = [11, 21, 31, 41];
let data3: number[] = [1, 3, 5, 7, 9];
let data4: number[] = [1, 3, 5, 7, 8, 9];

let res1: boolean = data1.every(value => value > 10);
let res2: boolean = data2.every(value => value > 10);
let res3: boolean = data3.some(value => value % 2 == 0);
let res4: boolean = data4.some(value => value % 2 == 0);

console.log(res1);  //false
console.log(res2);  //true
console.log(res3);  //false
console.log(res4);  //true



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

let values: number[] = [10, 2, 3, 4, 5, 6];

let total: number = values.reduce((prev, current) => {
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

let dataArray1: number[] = [1, 2, 3];
let dataArray2: number[] = [100, 200, ...dataArray1]; // spread operator - добавляем элементы массива dataArray1 в конец массива dataArray2

console.log(dataArray2);//[100, 200, 1, 2, 3]

let point2D = { x: 10, y: 20 };
let point3D = { ...point2D, z: 30 }; // object spread - свойства объекта point2D добавляются к свойствам объекта point3D

console.log(point3D);//{x: 10, y: 20, z: 30}
        
    
/*______ 7. "for ... in" - обход по свойствам объекта (в данном случае индексы массива)
         "for ... of" - обход значений массива_________________________________________ */
class User {
    constructor(public name: string, public age: number) {
    }
}

let users: User[] = [];
users[0] = new User("Jim", 20);
users[1] = new User("Ivan", 25);
users[2] = new User("Bob", 23);
users[3] = new User("David", 30);

console.log("for ... in"); // обход по свойствам объекта (в данном случае индексы массива)
for (let index in users) {
    console.log(index);
}

console.log("for ... of"); // обход значений массива
for (let value of users) {
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


function myFunc<T>(value: T): T {
    return value;
}
// функция myFunc принимает и возвращает строку. Тип данных указан явно в угловых скобках
let value1 = myFunc<string>("test");
// функция принимает и возвращает число. В данном случае используется type argument inference
// компилятор самостоятельно определят какой тип нужно использовать
let value2 = myFunc<number>(10);


/*______9. Generics Class, пройто пример (Более подробно описано в уроке "TypeScript - 3. Generics")._____________ */
class MyGenericClass<T> {
    public value: T;

    public method1(value1: T): void {
        console.log(value1);
    }

    public method2(): T {
        return this.value;
    }
}

// Экземпляр обобщенного типа, закрытого типом number
let myGenericNumber = new MyGenericClass<number>();
myGenericNumber.method1(10);            //10
myGenericNumber.value = 100;
console.log(myGenericNumber.method2()); //100


// Экземпляр обобщенного типа, закрытого типом string
let myGenericString = new MyGenericClass<string>();
myGenericString.method1("hello");       //hello
myGenericString.value = "world";
console.log(myGenericString.method2()); //world


//Более подробно описано в уроке "TypeScript - 3. Generics"
//1 година 10хв.



/*______10.Пространства имен._____________ */
//Пространство имен - механизм для группировки кода и определения отдельных областей видимости.
// Код, помещенный в пространство имен, находиться в области видимости пространства имен, а не в глобальной области видимости.
// Для того, чтобы элементы пространства имен были доступны за пределами пространства имен, необходимо использовать ключевое слово export.

// определение пространства имен с именем Sample1
namespace Sample1 {

    // класс будет доступен за пределами пространства Sample1
    export class MyClass1 {
        public message() {
            console.log("Sample1.MyClass1.message");
        }
    }

    class MyClass2 {
        public message() {
            console.log("Sample1.MyClass2.message");
        }
    }
}
namespace Sample2 {

    export class MyClass1 {
        public message() {
            console.log("Sample2.MyClass1.message");
        }
    }

    class MyClass2 {
        public message() {
            console.log("Sample2.MyClass2.message");
        }
    }
}

// следующий код находится в глобальной области видимости.
// Использование класса MyClass1 из пространства имен Sample1
let temp1 = new Sample1.MyClass1();
temp1.message();    //Sample1.MyClass1.message


let temp2 = new Sample2.MyClass1();
temp2.message();    //Sample2 .MyClass1.message



//_____________ЕЩЕ ПРИМЕР____________!
namespace Shapes {
    
    export class Circle { 
        constructor() { console.log("Circle"); }
    }
    export class Square { 
        constructor() { console.log("Square"); }
    }

    export namespace Complex {
        export class Image {
            constructor() { console.log("Image"); }
        }
        export class Animation { 
            constructor() { console.log("Animation"); }
        }
    }
}

// создание псевдонима с именем complex для пространства имен Shapes.Complex
import complex = Shapes.Complex;

let img1 = new complex.Image();
let img2 = new Shapes.Complex.Image(); // тоже что и 22 строка




/*______11. Модули.____________________________ */
/*
    Модуль - отдельный файл со своей областью видимости.
    Переменные, функции, классы и другие языковые конструкции определенные в модуле не доступные за его пределами.
    
    Файл, в котором на верхнем уровне находиться import или export является модулем.
    
    Зависимости между модулями определяются с помощью ключевого слова import.
    
    Модули импортируются с помощью загрузчиков модулей. 
    Во время выполнения загрузчик модуля ответственный за определение расположения модуля и его загрузку перед его выполнением.
    
    Загрузчики модулей - CommonJS, SystemJS, requier.j
*/

//Передаем файл 'export'
export interface Validator {
    validate(value: string): boolean;
}

export class CreditCardValidator implements Validator {
    validate(value: string): boolean {
        return false;
    }
}

export class UrlValidator implements Validator {
    validate(value: string): boolean {
        return false;
    }
}

import { Validator } from "01-validators"; // импорт интерфейса Validator из модуля 01-validators
// import { Validator, CreditCardValidator } from "01-validators"; // импорт нескольких типов 

class PhoneNumberValidator implements Validator {
    validate(value: string): boolean {
        return true;
    }
}

let phoneVal = new PhoneNumberValidator();
console.log(phoneVal.validate("000-00-00"));

//1.09 хв.!