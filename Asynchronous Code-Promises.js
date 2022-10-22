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