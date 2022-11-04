/*
    Синхронный код - код, выполняющийся последовательно, каждая операция ожидает завершение предыдущей.

    Асинхронный код – код, выполняющийся параллельно, а не последовательно. 
    В большинстве случаев асинхронное выполнение кода подразумеват выделение новых ресурсов для выполнения асинхронных вызовов – потоков.

    Варианты организации асинхронного кода:    
        - Callback (функция, обратного вызова).
        - Promise (объект, который хранит конечный результат отложенной операции.).
          Основные методы promise – then, catch, finally.
          Promise дает 3 результата:
            • Fulfilled (успешний результат ф.)!
            • Rejected (ошибка результта ф.)!
            • Pending (функция в этапе выполнения)!

        - Шаблон Observer.


    1. Асинхронный код.
    1.1. Простой пример setTimeout(function(){ }, 2000);
    1.2. Простой пример с использованием загрузки изображения!
    1.3. Более правильный пример с использованием загрузки изображения! 
    1.4. Использование Promise в асинхронном коде!
    1.5. Просто пример использование Promise в асинхронном коде!
    1.6. Просто пример использование Promise і .then(последовательный вызов)!
    //Описано в уроке "4. JavaScript Базовый - Lesson 15 - Asynchronous Code"!
    1.7.  Использовани .catch в Promise (если один из промисов завершается с ошибкой то управление переходи к ближайшему catch)!
    1.8.  Использовани .finally в Promise (срабатывает в любом случае)!
    1.9. Методи роботи з Promise(promise-api) описано в уроке "4. JavaScript Базовый - Lesson 15 - Asynchronous Code"!


    2. Сетевые запросы.
    2.1. HTTP запрос.
    2.2. HTTP ответ.
    2.3. AJAX, fetch() – современный метод для выполнения сетевого запроса в JavaScript коде.
    2.4. Простой пример.
    2.5. Запрос на получения данных JSON с помощью fetch().
    2.6. Заголовки ответа(чтение значения заголовка).
    2.7. GET запрос с установленным заголовком Accept = application/json.
    2.8. Настройка POST запроса!
    2.9. Cancel-fetch (Отмена запроса), описано в уроке "4. JavaScript Базовый - Lesson 16 - Network Requests"!

*/
// ______1.Асинхронный код. ____________________________________!!!!!



//1.1. Простой пример setTimeout(function(){ }, 2000)!
    console.log("Команда 1");
    console.log("Команда 2");

    setTimeout(function(){
        console.log("Команда 5");
        console.log("Команда 6");
    }, 2000);

    console.log("Команда 3");
    console.log("Команда 4");


//1.2 Простой пример с использованием загрузки изображения!
document.querySelector("button").addEventListener("click", function () {
    // Функция downloadImage выполняет скачивание изображений асинхронно.
    // синхронный код - каждая операция ожидает завершения предыдущей
    // асинхронный код - операция выполняется в отдельном потоке и позволяет перейти к следующему действию 
    let image1 = downloadImage("https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg");
    let image2 = downloadImage("https://images-assets.nasa.gov/image/PIA22312/PIA22312~orig.jpg");

    document.body.append(image1);
    document.body.append(image2);
});

// загружает изображение по указанному адресу
function downloadImage(url) {
    let image = new Image(500); // картинка шириной 500px
    image.src = url; // после установки значения, браузер начинает скачивание изображения
    return image;
}


//1.3 Более правильный пример с использованием загрузки изображения!
document.querySelector("button").addEventListener("click", function () {
    let url1 = "https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg";
    let url2 = "https://images-assets.nasa.gov/image/PIA22312/PIA22312~orig1.jpg";

    downloadImage(url1, function(image){ document.body.append(image) }, e => console.log(e.message));

    downloadImage(url2, image => document.body.append(image), e => console.log(e.message));
    //1. Ссылка на изображения!, 
    //2. Функция которая принимает изображения и вывод его на экран!
    //3. Принимает аргумент и выводит в консоль значения свойства message!
});

// загружает изображение по указанному адресу
function downloadImage(url, success, error) {
    let image = new Image(500);
    image.src = url;

    image.onload = function () {
        // Запускаем callback функцию success в случае успешной загрузки изображения
        console.log("Width" + image.width);
        console.log("Height" + image.height);
        if (success && typeof success == "function")
            success(image);
    };

    //если не загруженно изображения!
    image.onerror = function (e) {
        // Запускаем callback функцию error в случае не успешной загрузки изображения
        if (error && typeof error == "function")
            error(new Error("Не удалось загрузить изображение " + this.src));
    }
}




//1.4. Использование Promise в асинхронном коде.
document.querySelector("button").addEventListener("click", function () {
    let url1 = "https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg";
    let url2 = "https://images-assets.nasa.gov/image/PIA22312/PIA22312~orig.jpg";

    // Асинхронний код через Promise, который дает 3 результата:
    // • Fulfilled (успешний результат ф.)!
    // • Rejected (ошибка результта ф.)!
    // • Pending (функция в этапе выполнения)!

    //p.then(f, r) – если p в состоянии fulfilled функция f будет вызвана. 
    //p.then(f, r) – если p в состоянии rejected функция r будет вызвана.
    //Во всех остальных случаях p в состоянии pending. 


    let promise1 = downloadImage(url1);
    promise1.then(image => document.body.append(image), e => console.log(e.message))

    let promise2 = downloadImage(url2);
    promise2.then(image => document.body.append(image), e => console.log(e.message));
});

function downloadImage(url) {
    //new Promise
    let promise = new Promise(function (resolve, reject) {
        let image = new Image(500);
        image.src = url;

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function (e) {
            reject(new Error("Не удалось загрузить изображение " + this.src));
        }
    });
    
    return promise;
}


//1.5. Просто пример использование Promise в асинхронном коде.
function promiseFunc() {
return new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve("Hello from promise");
    }, 3000);
})
}

//text == resolve
promiseFunc().then(function(text){
    console.log(text);  //Hello from promise
});


//1.6. Просто пример использование Promise і .then(последовательный вызов)
let a;
function promiseFunc() {
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            a = 50
            resolve(a);
        }, 3000);
    })
}

//text == resolve
//.then(последовательный вызов)
promiseFunc().then(function(num){ console.log(num); return num + 20}) //50
.then(function(num){ console.log(num); return num + 50})              //70
.then(function(num){ console.log(num); return num + 70})              //120
.then(function(num){ console.log(num)});                              //190


//2.1. HTTP запрос.
/*
	HTTP (HyperText Transfer Protocol) - протокол прикладного уровня передачи данных, изначально — в виде 
	гипертекстовых документов в формате HTML. В настоящее время используется для передачи произвольных данных.

	Структура HTTP запроса: 
		- Стартовая строка 
		- Заголовки 
		- Тело запроса

	Стартовая строка определяет тип сообщения.
	
	Структура стартовой строки: 
	• Метод 
	• URI
	• Версия
	
	HTTP методы (HTTP глаголы): 
	GET - запрос представления ресурса;
	POST - отправка сущности;
	PUT - изменение сущности;
	DELETE - удаление сущности; 
	CONNECT - устанавливает соединение; 
	OPTIONS - описание параметров соединения; 
	HEAD - запрос заголовков без тела;
	PATCH - частичное изменение ресурса.
*/


//2.2. HTTP ответ.
/*
	Структруа HTTP ответа:
	- Версия 
	- Код состояния 
	- Заголовки 
	- Тело ответа


	Коды состояния: 
	- 1xx информационный 
	- 2хх успех 
	- 3хх перенаправление 
	- 4хх ошибка клиента 
	- 5хх ошибка сервера

	101 – Switching Protocol 
	200 – OK
	201 – Created
	301 – Moved Permanently
	302 – Found
	400 – Bad Request
	404 – Not Found
	500 – Internal Server Error
	501 – Not Implemented
*/


//2.3. AJAX, fetch() – современный метод для выполнения сетевого запроса в JavaScript коде.

/*
	AJAX (Asynchronous JavaScript and XML) – термин, определяющий сетевой запрос, сделанный с помощью JavaScript кода.

	fetch() – современный метод для выполнения сетевого запроса в JavaScript коде.
	
	let promise = fetch(url, [options]);
	url – URL для отправки запроса 
	options – объект, описывающий дополнительные параметры: HTTP метод, заголовки и т.д.

*/

//2.4. Простой пример.
/*	CSS
    #err {
        font-size: 40px;
        color: red;
        font-family: Arial, Helvetica, sans-serif;
    }
*/

/*	HTML
    <div id="err"></div>
*/
let err = document.querySelector("#err");
let url = "https://jsonplaceholder.typicode.com/todos/10";

// fetch - отправляет HTTP запрос и возвращает promise, описывающий асинхронную операцию
// Результатом, который доступен в промис, является объект встроенного класса Respone
// https://fetch.spec.whatwg.org/#response-class

// в данном случае, при вызове fetch отправляется GET запрос

//fetch(url).then(response => {...} или....

let promise = fetch(url);
promise.then(response => {
//promise.then(function (response) {

    //console.log(response);
    //{type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/10', redirected: false, status: 200, ok: true, …}

    // promise не переходит в состояние rejected из-за статус кодов 4xx и 5xx
    if (response.ok) { // сервер прислал ответ со статус кодом 200-299
        alert("OK")
    }
    else {
        alert(response.status); // вывод статус кода, если ответ связан с ошибкой
    }

    // if(response.status = "404"){
    //     err.innerHTML = "<span>Страница не найдена!!!!!</span>"
    // }
})
.catch(error => console.log(error.message)); // обработка исключений, например, проблем с сетью



//2.5. Запрос на получения данных JSON с помощью fetch().
/*
   <button id="button1">Запрос (json)</button>
    <button id="button2">Запрос (text) </button>
    <div id="output"></div>
*/
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let output = document.querySelector("#output");
let url = "https://jsonplaceholder.typicode.com/todos/1";

// обрабатываем ответ как JSON
button1.addEventListener("click", function () {
    //fetch().then().then()
    fetch(url)
        //.then(function(response) {return response.json()})
        //или...
        .then(response => response.json())  // десериализует объект из ответа в JSON формате
        .then(json => {
            console.log(json);  //{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
            output.innerHTML = "";
            output.innerHTML += "<br>id: " + json.id;
            output.innerHTML += "<br>user id: " + json.userId;
            output.innerHTML += "<br>title: " + json.title;
            output.innerHTML += "<br>completed: " + json.completed;
        });
});

// Обрабатываем ответ как текст
button2.addEventListener("click", function () {
    fetch(url)
        .then(response => response.text())      // получение ответа как обычного текста
        .then(text => output.innerHTML = text);
});

/*
    Response предоставляет несколько методов для работы с телом ответа
    Все методы возвращают Promise с результатом, полученным из тела ответа
    response.text() - получение ответа, как обычного текста
    response.json() - получение объекта из ответа в формате JSON
    response.formData() - возвращает тело ответа в виде FormData (объектное представление полей формы)
    response.blob() - бинарные данные с типом
    response.arrayBuffer() - низкоуровневое представление бинарных данных ArrayBuffer
*/



//2.6. Заголовки ответа(чтение значения заголовка).
let request = fetch("https://jsonplaceholder.typicode.com/todos/1");

request.then(response => {
// чтение значения заголовка по имени
console.log(response.headers.get('Content-Type'));
	// application/json; charset=utf-8

	// перебор всех заголовков
	for (let header of response.headers) {
	    console.log(`${header[0]} = ${header[1]}`);
	}
	/*
	    cache-control = max-age=43200
	    content-type = application/json; charset=utf-8
	    expires = -1
	    pragma = no-cache
	*/
});



//2.7. GET запрос с установленным заголовком Accept = application/json.
//GET запрос с установленным заголовком Accept = application/json
let request = fetch("https://jsonplaceholder.typicode.com/todos/1", {
    headers: {
        Accept: 'text/plain', //Стандартний параметер заголовка!
        //Accept - какие тип данных мы можем принять!
        "ABC":123, //Свой параметер заголовка!
    }
});

request
    .then(response => response.json())
    .then(json => console.log(json));



//2.8. Настройка POST запроса!
/*
    <button>Создать задачу</button>
*/
let button = document.querySelector("button");

button.addEventListener("click", function () {
    let url = "https://jsonplaceholder.typicode.com/todos";
    let task = {
        userId: 123,
        title: "Тестовая задача",
        completed: false
    };

    fetch(url, {
        method: 'POST',             //Метод с помощью которого делаем запрос!
        body: JSON.stringify(task), //Тело запроса. Передаем task в формате JSON!
        headers: {                  //Передаем заголовки
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        //Из за того что ми используем https://jsonplaceholder.typicode.com/
        //В ответ мы получаем тот же объект, который и отправили!
        .then((response) => response.json()) // десериализует объект из ответа в JSON формате
        .then((json) => console.log(json));  //{userId: 123, title: 'Тестовая задача', completed: false, id: 201}
});


//2.9 Cancel-fetch (Отмена запроса)