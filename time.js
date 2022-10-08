/*
	1. Использование метода setTimeout()

	2. Использование метода setInterval()
	2.1. Простой пример №1
	2.2. Пример №2 "Интервал з кнопкою stop!"
	2.3. Пример "перемещающейся и меняющейся цвет блока <div> по таймеру"
	2.4. Пример "spot setTimeout()"
	2.5. 2.5. Пример ошибки в setInterval, более детально рассказано в уроке! '9. Контекст функции'

	3.0. Три примера написания своего таймера рассказано в уроке! '9. Контекст функции'
*/






//_____1. Использование метода setTimeout()!____________________________________!!!!!
function showMessage() {
    alert("Hello world");
}

// setTimeout - планирует однократный вызов функции, спустя указанный интервал времени
// первый параметр - запускаемая функция
// второй параметр - задержка в миллисекундах (1000 миллисекунд = 1 секунда)

//Способ №1
setTimeout(showMessage, 2000); // функция showMessage будет запущена через 5 секунд после выполнения данной строки

//Способ №2
setTimeout(function(){
    alert("Hello world!!!");
}, 5000); 

//Способ №3
function myFuncrion(text){
    alert(text);
}
setTimeout(myFuncrion, 7000, "Hello Eugene");

//Способ №4
document.querySelector("button").onclick = function(){
    setTimeout(myFuncrion, 2000, "Hello Kiev");
}








//_____2. Использование метода setInterval()!____________________________________!!!!!

//_____2.1. Простой пример №1_____
let i = 0;
function showMessage() {
    i++;
    console.log(i + ") Hello World")
}

// setInterval - планирует регулярный запуск функции с указанным интервалом
// первый параметр - запускаемая функция
// второй параметр - задержка в миллисекундах (1000 миллисекунд = 1 секунда)
setInterval(showMessage, 2000); // функция showMessage будет запускаться с интервалом в 2 секунды, пока не будет закрыта вкладка


//_____2.2. Пример №2 "Интервал з кнопкою stop!"_____
/* HTML
	<button>STOP</button>
*/
let i = 0;
function showMessage() {
    i++;
    console.log(i + ") Hello World")
}
// setInterval - планирует регулярный запуск функции с указанным интервалом
// первый параметр - запускаемая функция
// второй параметр - задержка в миллисекундах (1000 миллисекунд = 1 секунда)
let counter = setInterval(showMessage, 2000); // функция showMessage будет запускаться с интервалом в 2 секунды, пока не будет закрыта вкладка

document.querySelector("button").onclick = function(){
    clearInterval(counter);
}


//_____2.3. Пример "перемещающейся и меняющейся цвет блока <div> по таймеру"_____
/* CSS
    div{
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
*/
/*	HTML
    <div></div>
    <button>STOP</button>
*/

let div = document.querySelector("div");

let colors = ["red", "green", "blue", "yellow", "pink", "orange"];
let i = 0;
let j = 0;

function showMessage() {
    div.style.background = colors[i];
    div.style.marginLeft = j + "px";

    i++;
    j+=10;
    if (i > colors.length -1){
        i = 0;
    }
}
// setInterval - планирует регулярный запуск функции с указанным интервалом
// первый параметр - запускаемая функция
// второй параметр - задержка в миллисекундах (1000 миллисекунд = 1 секунда)
let counter = setInterval(showMessage, 300); // функция showMessage будет запускаться с интервалом в 2 секунды, пока не будет закрыта вкладка

document.querySelector("button").onclick = function(){
    clearInterval(counter);
}



//_____2.4. Пример "spot setTimeout()"_____
/*	HTML
    <button>STOP</button>
*/
let div = document.querySelector("div");

function myFunction(){
    window.location = "http://google.com";
    
}

let x = setTimeout(myFunction, 5000);
document.querySelector("button").onclick = function(){
    clearTimeout(x);
}



//_____2.5. Пример ошибки в setInterval, более детально рассказано в уроке! '9. Контекст функции'_____
let obj = {
    a: 10,
    calc:function(){
        console.log(this.a + 1);
    }
}

obj.calc(); //11

setInterval(obj.calc, 1000); //Nan, Nan, Nan ...