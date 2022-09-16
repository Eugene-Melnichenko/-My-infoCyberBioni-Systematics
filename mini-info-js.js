/*
    1. Приобразование типов
    2. Логические структуры
    3. Циклы
    4. Массивы
    5. Функция
    6. Обьекты
    7. Проверка через цикл на правильность ввода значений!

*/




'use strict';
//Сторигий редим кода JS

// let message = "Hello Eugene";
// console.log(message);
// console.log(typeof message); //Тип даних


let x = 10;
let y = 20;
console.log (`${x} > ${y} = ${+ x > y}`);
console.log (`${x} < ${y} = ${+ x > y}`);
console.log (`${x} <= ${y} = ${+ x <= y}`);
console.log (`${x} >= ${y} = ${+ x >= y}`);
console.log (`${x} == ${y} = ${+ x == y}`);
console.log (`${x} != ${y} = ${+ x != y}`);

//Math.random() * 101 = случайное значение от 0 до 100
//Math.floor = округлянт число!
let randomValue = Math.floor(Math.random() * 101); 

//Рандомное число в диапазоне!
let max = 1000;
let min = 500;

console.log(Math.floor(Math.random()*(max - min +1)) + min);





//______Простой пример_______________________________________________!!!!!!!!!!!!
let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {          //При нажатии на элемент H1 'click'
    h1.innerText = "Hello Eugene Melnichenko :)";   //Меняем текст H1
    let hr = document.createElement("hr");          //Создаем Елемент <hr>
    h1.after(hr)                                    //Вставляем после H1, елемент </hr>
    //Добавляем до H1 стили
    h1.style.backgroundColor = "#8c8cf6";
    h1.style.padding = "15px";
})





//prompt
let firstName = prompt("Введите имя", "...")
console.log(`Имя... ${firstName}`)





//______1. Приобразование типов_______________________________________________!!!!!!!!!!!!
// false - Число 0, пустая строка "", null, undefiend и Nan;
// true - Все остальные значения;

//confirm - функция для отображения модального окна с текстом и двумя кнопками - ok(true) и Cancel(false);
//Math.abs() - Метод Math.abs() возвращает абсолютное значение числа. то есть
//Math.abs('-1');     // 1
//Math.abs(-2);       // 2


// (&&) - и
// (||) - или
// (!) - не
// isNan(x) - проверка на число!! isNan(x)=false; !isNan(x)=true;

let value = "100"; 						//тип данных string
let newValue1 = +"100"; 				//преопразование в number
let newValue2 = Number(value); 			//преопразование в number
let newValue3 = Boolean(value); 		//преопразование в boolean
let newValue4 = String(newValue2); 		//преопразование в string
let newValue4 = newValue2.toString()	//Альтернативный способ преопразование в string
console.log(typeof newValue4);			//показать тип елемента

parseInt //возвращает целое число
parseFloat //возвращает не целое число '123.2323'










//______2. Логические структуры_______________________________________________!!!!!!!!!!!!
let response = prompt("Сколько будет 2 + 3?");
if (response == 5) {
	alert("Правильный ответ");
}
else {
	alert("Неправильный ответ");
}


let totalPrice = 2000;
let isFreeShipping = totalPrice > 1000;
if(isFreeShipping) //иногда в условии используется только одна переменная!
{
	alert("Доставка будет бесплатной.");
}


//SWITCH
// switch - условная конструкция, заменяющая несколько конструкций if
// Эта конструкция позволяет выполнить блок кода после выполнения точного сравнения результата выражения с несколькими вариантами

// switch (ВЫРАЖЕНИЕ)
// {
//     case ЗНАЧЕНИЕ_1:
//         // инструкции, когда ВЫРАЖЕНИЕ == ЗНАЧЕНИЕ_1
//         break;
//     case ЗНАЧЕНИЕ_2:
//         // инструкции, когда ВЫРАЖЕНИЕ == ЗНАЧЕНИЕ_2
//         break;
//     default:
//         // инструкции для всех остальных результатов
//         break;
// }

let dayNumber = prompt("Введите номер дня недели:");

switch (dayNumber) {
    case "1":
        alert("Понедельник");
        break;
    case "2":
        alert("Вторник");
        break;
    case "3":
        alert("Среда");
        break;
    case "4":
        alert("Четверг");
        break;
    case "5":
        alert("Пятница");
        break;
    case "6":
        alert("Суббота");
        break;
    case "7":
        alert("Воскресенье");
        break;
    default:
        alert("Введено неправильное значение");
        break;


// использование тернарного оператора
let age = +prompt("Сколько Вам лет? (использование тернарного оператора)");

// переменная = условие ? значение_если_условие_истина : значение_если_условие_ложь
accessMessgae = age > 18 ? "доступ разрешен" : "нет доступа";
alert(accessMessgae);










//______3. Циклы_______________________________________________!!!!!!!!!!!!

//break; // break - остановить эту итерацию и запретить выполнение всех последующих
// continue; // continue - остановить эту итерацию и перейти к следующей

// while(условие) { /*тело цикла*/ }
// тело цикла выполняется до тех пор, пока условие истинно
// одно выполнение тела цикла называется итерацией


let i = 0;
console.log("Начало цикла");
while (i < 10) {
    i++;
    console.log("Итерация №" + i);
}
console.log("Конец цикла");


// цикл do/while работает так же, как и while, но выполняет вначале итерацию, а потом проверяет условие

let x = 0;
do {
    x++;
    console.log("Итерация №" + x);
}
while (x < 10);



// такой цикл удобно использовать, когда переменная, которая проверяется в условии, инициализируется в теле цикла
let value2;
do {
    value2 = +prompt("Введите любое значение больше 10");
}
while (value2 <= 10);
alert("Вы ввели " + value2);


// цикл for выполняется до тех пор, пока условие истинно, после каждой итерации происходит выполнение операции и повторная проверка условия
for (let i = 0; i < 10; i++) {
    console.log("iteration #" + i);
}
// цикл for может использовать уже существующую переменную, как, например, переменную x в примере ниже
let x = 0;
for (x = 0; x < 10; x++) {
    console.log("(cycle 2) iteration #" + x);
}



//Пример использования 'break', 'continue'!!!s
let sum = 0;
while (true) {
    let value = prompt("Вводите числовые значения. Для выхода введите exit.")
    if (value == "exit") {
        break; // остановить работу цикла
    }

    let convertedValue = Number(value); // преобразование value в число 
    // isNaN(convertedValue) - возвращает true, если в переменной converted находится значение NaN, иначе возвращает false
    if (isNaN(convertedValue)) {
        continue; // перейти на следующую итерацию цикла
    }
    sum += convertedValue;
}
alert("Сумма всех введенных числовых значений - " + sum);


//Цикл внутри цикла. Пример 'Табличка умножения'!
for (let x = 1; x < 10; x++) {
    console.log("Таблица умножения на " + x);
    for (let y = 1; y < 10; y++) {
        console.log(`${y}*${x} = ${x * y}`);
    }
    console.log("");
}










//______4. Массивы_______________________________________________!!!!!!!!!!!!
// массив - упорядоченная коллекция значений. 
// элемент массива - отдельное значение массива.
let array1 = [];            // создание массива с использованием литерала (чаще используется этот вариант)
let array2 = new Array();   // создание массива с использованием конструктора

let cities = ["London", "Paris", "Berlin", "Rome"]; // создание массива и заполнение массива строковыми значениями
let values = ["London", 123, true]; // массив может хранить разные типы данных

// при использовании consol.log будут отображаться все элементы массива
console.log(cities);
console.log(values);
console.log(typeof values); // object - массив, особый вид объектов
console.log(Array.isArray(array)) //true - проверка, масив ли это или нет


//_______________________________Длина массива_______________________________!!
let cities = ["London", "Paris", "Berlin", "Rome"];
console.log(cities.length); //length - свойство массива, в котором находится количество элементов массива


//_______________________________Цикл и массив_______________________________!!
let cities = ["London", "Paris", "Berlin", "Rome"];
//Запускаем цикл со счетчиком от 0 до 4 (длины массива)
for (let index = 0; index < cities.length; index++) {
    const element = cities[index]; //Обращаемся к элементу массива по индексу (значению счетчика цикла)
    console.log(element);
}

//______________________Перебор массива через for-of_________________________!!
let cities = ["London", "Paris", "Berlin", "Rome"];

// проход по значениям массива cities
// на каждой итерации в переменную city будет записываться следующее значение из массива cities
for (const city of cities) {
    console.log(city);
}   

//Методы массивов
let cities = ["London", "Paris", "Berlin", "Rome"];
// pop() - метод массива, который удаляет последний элемент массива и возвращает его
cities.pop(); // удаляем последний элемент массива и записываем его в переменную last
// push(<value>) - метод, который добавляет указанное значение в конец массива
cities.push("> Lisbon <");

// shift() - метод массива, который удаляет первый элемент массива и возвращает его
cities.shift(); // удаляем первый элемент массива и записываем его в переменную last

// unshift(<value>) - метод, который добавляет указанное значение в начало массива
cities.unshift("> Lisbon <");

// splice(start, deleteCount, items...)
// start - индекс, с которого начать удалять элементы
// deleteCount - количество элементов для удаления
// items - значения, для добавления в массив, вместо удаленных
cities.splice(2, 1); // начиная с индекса 2 удалить 1 элемент

// начиная с индекса 2 удалить 1 элемент и заменить на три значения 
cities.splice(2, 1, "[Madrid]", "[Budapest]", "[Lisbon]");

// Вставка значений без удаления, для этого используется значение 0 в качестве второго параметра 
cities.splice(1, 0, "[Athens]", "[Warsaw]");

// slice(start, end);
// slice - возвращает новый массив, в который копирует элементы с start до end (не включая end)
let characters = ["A", "B", "C", "D", "E", "F", "G"];
let arr = characters.slice(1, 4);

console.log(arr); // B, C, D
console.log(characters); // A, B, C, D, E, F, G

// concat - создает новый массив, копируя в него данные из указанных массивов
let characters = ["A", "B", "C"];
let numbers = [1, 2, 3];

let values = characters.concat(numbers);
console.log(values); // A, B, C, 1, 2, 3

// indexOf - ищет элемент с указанным значением в массиве и возвращает его индекс, или -1, если элемент не найден
let cities = ["London", "Paris", "Berlin", "Rome", "Lisbon", "Rome"];

let index;
index = cities.indexOf("Rome");
console.log(index); // 3

index = cities.indexOf("Madrid");
console.log(index); // -1 значение не найдено

// lastIndexOf - поиск справа налево 
index = cities.lastIndexOf("Rome"); // 5

// создание массива на основе строки, используя в качестве разделителя ', '  
let str = "value1, value2, value3";
let values = str.split(', ');
//values = ["value1", "value2", "value3"]


// forEach - обход всех элементов массива и запуск определенной функции для каждого элемента
var data = [1, 2, 3, 4, 5];
var sum = 0;
// получение суммы всех элементов
data.forEach(function (value) {
    sum += value;
});
// data.forEach(value => sum += value); // аналогичный код с использованием стрелочной функции
console.log(sum);


// filter - возвращает новый массив, состоящий из элементов, отобранных функцией.
var data1 = [1, 2, 3, 4, 5, 6];
var data2 = data1.filter(function (value) {
    return value % 2 == 0;
})
// var data2 = data1.filter(value => value % 2 == 0); // аналогичный код с использованием стрелочной функции

console.log(data1); //   значения
console.log(data2); //только четные значения


// map - обходит все элементы массива и возвращает новый массив со значениями, которые вернула указанная функция
var data3 = [1, 2, 3, 4, 5];
var data4 = data3.map(function (value) {
    return value * value;
});
// var data4 = data3.map(value => value * value);  // аналогичный код с использованием стрелочной функции

console.log(data3); // исходные значения
console.log(data4); // исходные значения, возведенные во вторую степень


// цепочка вызовов и стрелочные функции для максимально компактного кода
var data1 = [1, 2, 3, 4, 5, 6];
    data1
        .filter(value => value % 2 == 0)        // фильтрация массива
        .forEach(value => console.log(value));  // вывод элементов




//Еще примеры роботи з масивами!
arr = [1,2,3,4,5,6]
arr.reverse();
console.log(arr); //6,5,4,3,2,1

let str = "hello";
let strArr = str.split("");
console.log(strArr);  //["h","e","l","l","o"]

let newStr1 = strArr.join("");
console.log(newStr1); //hello

let newStr2 = strArr.join("-");
console.log(newStr2); //h-e-l-l-o


let numArr = [1,2,11,3,24,5,8,44];

numArr.sort();
console.log(numArr); //[1, 11, 2, 24, 3, 44, 5, 8]

//Сортировка массива! Сортировка пузырьком!
numArr.sort(function(a,b){
    if( a < b){
        return -1;
    } else if (a > b){
        return 1;
    } else {
        return 0;
    }
});
console.log(numArr); //[1, 2, 3, 5, 8, 11, 24, 44]







//______5. Функция_______________________________________________!!!!!!!!!!!!
// Определение функции с двумя параметрами (аргументами) - text и repeatCount 
function showMessage(text, repeatCount) {
    for (let i = 0; i < repeatCount; i++) {
        console.log(text);
    }
}

// При вызове функции showMessage, мы можем первым значением инициализировать параметр с именем text,
// а вторым значением - repeatCount
showMessage("Hello world", 1);
showMessage("Привет мир", 2);є


// Если значение для параметра repeatCount не будет предоставлено при вызове, будет использоваться значение по умолчанию - 1
function showMessage(text, repeatCount = 1) {
    for (let i = 0; i < repeatCount; i++) {
        console.log(text);
    }
}
showMessage("Hello world"); // так как нет второго значения при вызове - используется значение по умолчанию для параметра repeatCount 


//Применяем много параметров в функцию!
function finMax(...abc){
	let max = abc[0];

	for(let arg of abc){
		if(arg > max) {
			max = arg;
		}
	}
	console.log(max);
}
finMax(10,100,30,40,5,15);


// В функциях можно использовать ключевое слово return для того, чтобы вернуть значение в часть кода, которая вызывала функцю
// Инструкция return прекращает выполнение функции - любые оставшиеся инструкции в функции не выполнятся.
function sum(x, y) {
    let sumResult = x + y;
    return sumResult;

    // return x + y; // После return может следовать выражение. Результат выполнения выражения будет возвращаемым значением. 
    console.log("Код после return не выполняется."); // эта инструкция не сработает, так как return завершает работу функции
}
let result = sum(10, 20); // функция возвращает значение, которое будет записано в переменную result
console.log(result);



//Разные виды функций_____________!!!
let result;

// функция-объявление
function add(a, b) {
    let temp = a + b;
    return temp;
}
result = add(1, 2);

// именованная функция-выражение
let add1 = function add(a, b) {
    return a + b;
}
result = add1(10, 20);

// функция-выражение или анонимная функция
let add2 = function (a, b) {
    return a + b;
}
result = add2(100, 200);

// стрелочная функция (arrow fucntion)
let add3 = (a, b) => {
    return a + b;
}
//или
let add3 = (...args) => {
	console.log(args);
}
result = add3(1000, 2000);


// Рекурсия(похоже на цикл!) - вызов функции из этой же функции.
function test(counter) {
    counter--;
    console.log("part 1 - " + counter);

    if (counter != 0) {
        test(counter);
    }

    console.log("part 2 - " + counter);
}
test(3);


// В JS функции могут быть вложенными в другие функции
// Данный синтаксис позволяет "прятать" функции и создавать разные шаблоны кодирования.
// В будущих уроках, на основе данного синтаксиса, будет рассмотрено замыкание - один из приемов организации кода.
function calculate(x1, y1, x2, y2) {
    // вложенная функция, она не может использоваться за пределами calculate
    function operation(a, b) {
        let sum = a + b;
        return sum;
    }

    let data = operation(x1, x2) + operation(y1, y2);
    return data;
}

let result = calculate(1, 2, 3, 4);
console.log(result);


//Функция обратного визова 'callback'_________________________!!
// функция выполняет фильтрацию значений массива на основе логики, определенной через callback функцию fn
function myFilter(fn) {
    let data = [1, 3, 5, 7, 8, 88, 1, 53, 6, 2, 3, 1, 7, 88, 9, 16];
    let result = [];

    for (let i = 0; i < data.length; i++) {
        // запуск функции fn и передача значение data[i]
        // если функция вернет true для значения data[i], то оно будет добавлено в массив result;
        // fn - функция обратного вызова или callback функция
        // эта функция позволяет сделать myFilter максимально гибкой и увеличить возможность повторного использования 
        if (fn(data[i]) === true) {
            result.push(data[i]);
        }
    }
    return result;
}

// возвращает true, если значение x больше 10
let greaterThan10 = function (x) {
    return x > 10;
}
function equal1(x) {
    return x === 1;
}
console.log(myFilter(equal1)); // получение массива со значениями, равынми 1
// myFilter(greaterThan10) - вызываем функцию myFilter и передаем в качестве параметра функцию greaterThan10, которая будет использоваться
// как функция обратного вызова. В результате такого вызова myFilter вернет новый массив со значениями больше 10.
// При передаче функции как параметра не используются круглые скобки greaterThan10(), а только имя greaterThan10. Круглые скобки указывают
// на то, что мы запускаем функцию, а в данном случае нам необходимо передать функцию как значение, чтобы запуск произошел из myFilter, то есть
// чтобы произошел обратный вызов функции.
console.log(myFilter(greaterThan10));
// Когда callback функция используется разово и содержит небольшое количество кода, нет смысла опрделять её как отдельную функцию.
// В таких случаях часто используются анонимные функции или стрелочные функции. 
console.log(myFilter(function (x) { return x < 5; })); // использование анонимной функции
console.log(myFilter(x => x < 5)); // использование стрелочной функций







//______6. Обьекты_______________________________________________!!!!!!!!!!!!
// Объект - совокупность связанных данных и функциональных возможностей. 
// Объекты состоят из свойств. Свойство может хранить значение любого типа.
// Если в свойстве находится функция, такое свойство называется методом.
// Свойства - состояние объекта, методы - поведение объекта.

// создание пустого объекта_____!!!
// ----- свойство - значение, которое хранится в объекте
		let user = new Object();           // создание пустого объекта
		// если несуществующему свойству присвоить значение, то это свойство будет создано в объекте
		user.name = "admin";               // создание свойства name и присвоение значения admin
		user.email = "admin@example.com";  // создание свойства email и присвоение значения admin@examle.com

		console.log(user.name);
		console.log(user.email);

		user.email = "admin@itvdn.com";    // изменение значения свойства email

		console.log(user.email);

// создание объекта с двумя свойствами name и email
		let user = {
		    name: "admin",
		    email: "admin@example.com"
		};

		console.log(user.name);
		console.log(user.email);

		user.email = "admin@itvdn.com";    // изменение значение свойства email

		console.log(user.email);

// если в качестве значения свойство хранит функцию, то такое свойство называется методом
// метод - функция, которая принадлежит объекту
        let user = {
            // свойства
            name: "admin",
            email: "admin@example.com",
            // метод
            sayHello: function (name) {
                console.log("Hello! " + name);
            }
        };

        console.log(user.name); // работа со свойством
        console.log(user.email);

        user.sayHello("Eugene"); // вызов метода

 // Добавления метода!
        user.sayHello = function () {
            console.log("Hello!");
        };
        user.sayHello(); // вызов метода

// при попытке обратиться к несуществующему свойству возвращается значение undefined
        console.log(user.foo);
// удаление свойства email из объекта с именем user
        delete user.email; 
// получение доступа к свойству через имя, указанное в квадратных скобках
        user.name = "test-user";
        user["name"] = "test-user";
// получение доступа к свойству через имя, указанное в квадратных скобках
        console.log(user.name);
        console.log(user["name"]);


// Пример 1, вывод только нужного(выбранного нами свойства!)....!
		let user = {
		    name: "admin",
		    email: "admin@example.com",
		    sayHello: function () {
		        console.log("Hello!");
		    }
		};
		let propName = prompt("Значение какого свойства вывести - name, email, sayHello");
		// в итоге будет обращение к свойству user["name"], user["email"], user["sayHello"]
		alert(user[propName]);
		// console.log(user.propName); - подобное обращение бессмысленно, так как свойства propName нет в объекте user

// В объекте может находиться вложенный объект.
        // использование литералов
        let user1 = {
            name: "admin",
            email: "admin@example.com",

            // свойство address, в котором находится объект
            address: {
                city: "London",
                street: "Uxbridge Rd",
                building: "7"
            }
        };
        console.log(user1.name);
        console.log(user1.address.city);

        // использование конструктора Object
        let user2 = new Object();
        user2.name = "admin";
        user2.email = "admin@example.com";

        user2.address = new Object();
        user2.address.city = "London";
        user2.address.street = "Uxbridge Rd";
        user2.address.building = "7";

        console.log(user2.name);
        console.log(user2.address.city);

// Массив обьектов!
        // вариант 1
        let orders1 = [];
        orders1.push({ product: "produc1", price: 10 });
        orders1.push({ product: "produc2", price: 15 });
        orders1.push({ product: "produc3", price: 20 });

        // вариант 2
        let orders2 = [];
        orders2[0] = { product: "produc1", price: 10 };
        orders2[1] = { product: "produc2", price: 15 };
        orders2[2] = { product: "produc3", price: 20 };

        // вариант 3
        let orders3 = [
            { product: "produc1", price: 10 },
            { product: "produc2", price: 15 },
            { product: "produc3", price: 20 },
        ]

        // цикл на количество элементов в массиве
        for (let i = 0; i < orders3.length; ++i) {
            let order = orders3[i]; // получение одного элемента массива - объекта со свойствами product и price
            console.log(order.product);

            // console.log(orders3[i].product); // 2 вариант
        }


//Нормальний пример, использования обьектов!
  		let products = [
            {
                name: "Бумага офисная А4, 80 г/м2, 500 л",
                price: 280.25,
                ordered: 0
            },
            {
                name: "Биндеры для бумаги 51 мм",
                price: 56,
                ordered: 0
            },
            {
                name: "Ручка шариковая синяя",
                price: 12.5,
                ordered: 0
            }
        ];
        // цикл для получения количества покупаемых продуктов
        for (let index = 0; index < products.length; index++) {
            const name = products[index].name;
            const price = products[index].price;

            products[index].ordered = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
        }
        // цикл для расчета общей цены купленных продуктов
        let totalPrice = 0;
        for (let index = 0; index < products.length; index++) {
            totalPrice += products[index].price * products[index].ordered;
        }
        alert(`Сумма Вашего заказа ${totalPrice}.`);

        let isFreeShipping = totalPrice > 1000;
        if (isFreeShipping) // иногда в условии используется только одна переменная
        {
            alert("Доставка будет бесплатной.");
        }


//Контекст функции!!!
        let user1 = {
            login: "admin",
            email: "admin@example.com",

// this - контекст функции.
// Значение this меняется в зависимости от контекста использования функции
// Если функция является методом (находится в объекте) this указывает на объект, которому принадлежит функция
            showContactInfo: function () {

                // this указывает на user1 
                console.log("Мой логин " + this.login + ", мой email " + this.email);
                //console.log("Мой логин " + user1.login + ", мой email " + user1.email);
            }
        }
        user1.showContactInfo();


//Еще один апример .apply .call .bind
         let user1 = {
            login: "admin",
            email: "admin@example.com",

            showContactInfo: null
        }

        let user2 = {
            login: "user",
            email: "user@example.com",

            showContactInfo: null
        }

        function show() {
            console.log("Мой логин " + this.login + ", мой email " + this.email);
        }

//Вызов функции 'show()' в контексте объекта 'user', с помощью метода .apply или .call(если нужно принять аргумент)
        show.apply(user1); //Мой логин admin, мой email admin@example.com

//метод .bind копирует функцию!
        let newFunc = show.bind(user2);
        newFunc(); //Мой логин user, мой email user@example.com

// функция-фабрика - эта функция, которая по завершению своей работы возвращает сконфигурированный объект.
// Подобная функция может быть полезна в тех случаях, когда нужно создать несколько объектов с одинаковой структурой, но разными значениями
        function createUser(login, email) {
            return {
                login: login,
                email: email,

                showContactInfo: function () {
                    console.log("Мой логин " + this.login + ", мой email " + this.email);
                }
            }
        }

        let user1 = createUser("admin", "admin@example.com");
        let user2 = createUser("user", "user@example.com");

        user1.showContactInfo();
        user2.showContactInfo(); 


// проверка наличия свойства в объекте
        let user1 = {
            login: "admin",
            email: "admin@example.com",
            unsubscribeDate: undefined
        }
        // При попытке прочесть несуществующее свойство возвращается значение undefined
        if (user1.login) // наличие значения эквивалентно true
        {
            console.log("Свойство user1.login существует");
        }
        else {
            console.log("Свойство user1.login не найдено");
        }
        // Проверка на значение undefined не подходит в тех ситуациях, когда свойство в объекте есть, но его значение было установлено как undefined
        // Для таких ситуаций используется ключевое слово in
        if ("unsubscribeDate" in user1) {
            console.log("Свойство user1.unsubscribeDate существует");
        }
        else {
            console.log("Свойство user1.unsubscribeDate не найдено");
        }

//Для перебора свойств объекта!
        let user1 = {
            login: "admin",
            email: "admin@example.com",
            created: "15.05.2019"
        };

        // цикл for...in используется для перебора всех ключей (свойств), которые есть в объекте 
        for (const key in user1) {
            console.log(`Свойство ${key} значение ${user1[key]}`);
        }


//Ссылочные типи. Копирования данных по ссылке.
        console.log("-------Ссылочные типы-------");

        let originalUser = { login: "user", pass: "12345" };  // в переменной originalUser хранится ссылка на объект
        let copyUser = originalUser;                          // в переменную copyUser копируется ссылка из переменной originalUser на уже существующий объект

        console.log("До изменения");
        console.log("originalUser.login = " + originalUser.login); 		// originalUser.login = user
        console.log("copyUser.login = " + copyUser.login);        		// copyUser.login = user

        originalUser.login = "admin";                              
        console.log("после изменения");                            
        console.log("!!! originalUser.login = " + originalUser.login);  // originalUser.login = admin
        console.log("!!! copyUser.login = " + copyUser.login);          // copyUser.login = admin

        let copyUser2 = {...originalUser}; //Для копирования данных не по ссылке и по значению!
        console.log("после изменения 2");
        originalUser.login = "Eugene";
        console.log("!!! originalUser.login = " + originalUser.login);  //originalUser.login = Eugene
        console.log("!!! copyUser.login = " + copyUser2.login);         //copyUser.login = admin







//______7. Проверка через цикл на правильность ввода значений!______________________________________________!!!!!!!!!!!!
		do {
		    num1 = +prompt("Введите первое число");
		    if(isNaN(num1))
		        alert('Ви ввели не число!');
		} while(isNaN(num1));
		do {
		    num2 = +prompt("Введите второе число");
		    if(isNaN(num2))
		        alert('Ви ввели не число!');
		} while(isNaN(num2));
		do {
		    arithmeticOperation = prompt(`Введите арифметической операцию: \n'+' - додать \n'-' - отнять \n'/' - делить \n'*' - множить`);
		    if(arithmeticOperation == '+' || arithmeticOperation == '-' || arithmeticOperation == '/' || arithmeticOperation == '*'){
		        break;
		    } else {
		        alert('Ви ввели не арифметическую операцию!');
		    }
		} while(true);