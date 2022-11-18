/*
    1. Работ с графикой на стороне клиента.
    1.1. Работа з изображениями на стороне клиента!
    1.2. Пример изменения изображения при нажатии!
    1.3. Кэширование изображений!
    1.4. Кэширование изображений! Приер(Ненавязчивая смена изображения)
    1.5. Создание гистограммы(диаграммы), с помощью JS!
        - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 4 - Работ с графикой на стороне клиента!
    1.6. Анимация через JS!
        - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 4 - Работ с графикой на стороне клиента!
    
    2. Формы SVG.
    2.1. Фигуры SVG.
    2.2. Фильтры SVG.
        - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 4 - Работ с графикой на стороне клиента!

    3. Gradients, градиенты - плавный переход из одного цвета в другой!

    4. Canvas!
    4.1. Простой пример Canvas, отрисовка линий lineTo().
    4.2. Прорисовка прямоугольника (x,y,width,height) x,y - Начало координат.
    4.3. Пример отрисовки фигур с разными стилями
    4.4. clearRect - очистка прямоугольной области от контента.
    4.5. Кривые линии (Кривая безье) с помощью одной управляющей точкой.
    4.6. Кривые линии (Кривая безье) с помощью двух точок.
    4.7. Отрисовка круга (полукруга)!
    4.8. Добавляем в Canvas изображения, как часть общего рисунка!
    4.9. Метод createPattern - повторяет указанный элемент (в примере картинку) по указанному направлению
    4.10 Добавления текста как изображения
    4.11 Добавления тени тексту!
    4.12 Оптикаемость!

    5. Canvas Трансформация!

// ______1.Работ с графикой на стороне клиента. ____________________________________!!!!!
/*



//1.1. Работа с изображениями на стороне клиента!
/*
    Преимущества
    • Объем кода на клиенте меньше, чем само изображение;
    • Не нагружается процессор сервера;
    • Согласовывается с архитектурой AJAX;
*/

//Работа с изображениями
window.onload = function() {
    let img1 = document.getElementById("logoImg"); // получение по id.
    let img2 = document.images.logo; // получение по name (первый способ).
    let img3 = document.images[0]; // получение по name (второй способ).
    let img4 = document.logo; // если name уникальный для всего документа.

    alert(img1 + ", " + img2 + ", " + img3 + ", " + img4);
}
/* HTML
    <img id="logoImg" name="logo" src="images/logo.png" alt="CyberBionic Systematics" />
*/ 

//1.2. Пример изменения изображения при нажатии!
window.addEventListener("load", function() {
    let flag;
    document.getElementById("changeBtn").addEventListener("click", function() {
        if (flag) {
            //смена изображения, приводит к обращению на сервер если изображение не загружено и не закешировано
            document.getElementById("imgBtn").src = "images/button.jpg";
        } else {
            document.getElementById("imgBtn").src = "images/button-hover.jpg";
        }
        flag = !flag;
    });

})
/* HTML
    <img id="imgBtn" src="images/button.jpg" alt="Button" />
    <button id="changeBtn">Change</button>
*/



//1.3. Кэширование изображений!
let images = []

function preload() {
    //console.log(arguments);
    for (let i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
//или стрелочной функцией
let preload = (...args) => {
    console.log(args);
    for (let i = 0; i < preload.args.length; i++) {
        images[i] = new Image()
        images[i].src = preload.args[i]
    }
}


preload(
    "images/frame1.jpg",
    "images/frame2.jpg",
    "images/frame3.jpg",
    "images/frame4.jpg",
    "images/frame5.jpg"
)


//1.4. Кэширование изображений! Приер(Ненавязчивая смена изображения)
window.onload = function () {
    addRollover("btn", "images/button-hover.jpg");
}

function addRollover(id, path) {
    let e = document.getElementById(id);

    // если элемент не img пропускаем, завершаем функцию.
    if (e.tagName.toLowerCase() != "img") return;

    (new Image()).src = path; //создается object Image c cвойством src = path
    let basePath = e.src;

    e.addEventListener("mouseover", function () { this.src = path; })    //при mouseover одна картинка
    e.addEventListener("mouseout", function () { this.src = basePath; }) //при mouseout вторая картинка
}

/*  HTML
    <img id="btn" src="images/button.jpg" />
*/  


/* 1.5. Создание гистограммы(диаграммы), с помощью JS!
    - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 4 - Работ с графикой на стороне клиента!
*/
/*  HTML
    <div id="chartContainer"></div>
*/
window.addEventListener("load", function() {
    let chart = createBarChart([30, 6, 88, 10, 2, 45, 100, 150],
        600,
        300,
        "green");

    let container = document.getElementById("chartContainer");
    container.append(chart);
});

//функция createBarChart()
function createBarChart(data, width, height, color) {

    // создаем контейнер для диаграммы
    let chart = document.createElement("div");
    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.position = "relative";
    chart.style.margin = "20px";
    
    // находим максимальное значение в массиве данных
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    // создаем отдельный элемент диаграммы
    for (let i = 0; i < data.length; i++) {
        let bar = document.createElement("div");

        let text = document.createElement("div");
        text.innerHTML = data[i] + "$";
        text.style.width = barWidth - 4 + "px";
        text.style.position = "absolute";
        text.style.top = "-18px";
        
        bar.style.height = data[i] * scale + "px";
        bar.style.width = barWidth - 4 + "px";

        bar.style.position = "absolute";
        bar.style.margin = "4px";
        bar.style.bottom = "0px";
        bar.style.left = barWidth * i + "px";

        bar.style.backgroundColor = color;

        bar.append(text);
        chart.append(bar);
    }

    return chart;
}


/* 1.6. Анимация через JS!
    - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 4 - Работ с графикой на стороне клиента!
*/





// ______2. Формы SVG. ____________________________________!!!!!
//2. Фигуры SVG.
/*
    <!--прямоугольник-->
    <svg style="width:500px; height:200px; display:block;">
        <rect width="300" 
            height="100"
            style="fill: rgb(0,0,255); stroke-width: 1; stroke: rgb(0,0,0)" />
    </svg>

    <!--круг-->
    <svg style="width:500px; height:200px; display:block;">
        <circle cx="100" 
            cy="50" 
            r="40" 
            stroke="black"
            stroke-width="2" fill="red" />
    </svg>

    <!--эллипс-->
    <svg style="width:500px; height:200px; display:block;">
        <ellipse cx="300" 
            cy="80" 
            rx="15" 
            ry="50"
            style="fill: yellow; stroke: purple; stroke-width: 2" />
    </svg>

    <!--Линия-->
    <svg style="width:500px; height:200px; display:block;">
        <line x1="0" 
            y1="0" 
            x2="200" 
            y2="200"
            style="stroke: rgb(255,0,0); stroke-width: 2" />
    </svg>
*/


/*
    2.2. Фильтры SVG.
        - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 4 - Работ с графикой на стороне клиента! 
*/


// ______2. 3. Gradients, градиенты - плавный переход из одного цвета в другой____________________________________!!!!!
/*
   <svg>
        <defs>
            <linearGradient id="grad1" 
                x1="0%" y1="0%" 
                x2="100%" y2="0%">

                <stop offset="0%" 
                    style="stop-color: rgb(255,255,0); stop-opacity: 1" />

                <stop offset="100%" 
                    style="stop-color: rgb(255,0,0); stop-opacity: 1" />

            </linearGradient>
        </defs>

        <ellipse cx="200" 
            cy="70" 
            rx="85" 
            ry="55" 
            fill="url(#grad1)" />
    </svg>
*/


// ______4. Canvas. ____________________________________!!!!!
/*
    Canvas — API для двумерного рисования, добавленный в HTML5, позволяющий рисовать объекты в разметке страницы. 
    Если необходимо прямо в браузере без использования плагинов, вроде Flash или Java. 
    Canvas (холст) дает возможность использовать прямоугольную область на экране, 
    для прорисовки линий, фигур, изображений, текста.

    Canvas ведёт отсчёт от левого верхнего угла с осью у, которая ведёт вниз

    <canvas id="c"><canvas>
*/
//4.1. Простой пример Canvas, отрисовка линий lineTo().
window.addEventListener("load", init, false);

function init() {
 
    // получение элемента и его графического контекста.
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    /* ИЗНАЧАЛЬНАЯ ТОЧКА ОТРИСОВКИ CANVAS X=100; Y=100;!
        // переносим графический контекст вправо и вниз.
        context.translate(100, 100);
    */

    // начало пути
    context.beginPath();
    //Переход в точку с координатами (100,100)
    context.moveTo(100, 100);   //Начинаем с x,y
    context.lineTo(200, 100);   //Переходим к x,y
    context.lineTo(200, 200);   //Переходим к x,y
    context.lineTo(100, 200);   //Переходим к x,y
    //Замыкаем путь
    context.closePath();

    /* Восстанавливаем прежнее состояние контекста. CANVAS X=0; Y=0;!
        context.restore();
    */
}

/* CSS
    canvas {
        border: 3px solid black;
    }
*/

/* HTML
    <canvas id="canvas" height="300" width="300">
        Ваш браузер не поддерживает элемент <i>Canvas</i>
    </canvas>
*/


//4.2. Прорисовка прямоугольника (x,y,width,height) x,y - Начало координат.
window.addEventListener("load", init, false);
function init() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    //Прорисовка прямоугольника (x,y,width,height) x,y - Начало координат
    context.fillStyle = "blue";
    context.fillRect(100, 100, 400, 400);               
}


//4.3. Пример отрисовки фигур с разными стилями
window.addEventListener("load", init, false);

function init() {

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    //Заливка области
    context.save();
    context.translate(150, 150);
    context.fillStyle = "blue";
    context.strokeStyle = "red";
    context.lineWidth = 4;
    //Закрашенный прямоугольник
    context.fillRect(0, 0, 150, 50);
    context.strokeRect(0, 60, 150, 50);
    //Меняем цвет рамки и заливки
    context.fillStyle = "green";
    context.strokeStyle = "yellow";
    context.strokeRect(0, 120, 150, 50);
    context.fillRect(0, 180, 150, 50);
    context.restore();
}
/* CSS
    canvas {
        border: 3px solid black;
    }
*/
/* HTML
    <canvas id="canvas" height="600" width="600">
        Ваш браузер не поддерживает элемент <i>Canvas</i>
    </canvas>
*/


//4.4. clearRect - очистка прямоугольной области от контента.
window.addEventListener("load", init, false);
function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(100, 100, 50, 50);
    // очистка прямоугольной области от контента.
    context.clearRect(135, 135, 35, 35);
    context.clearRect(135, 80, 35, 35);
    context.clearRect(80, 80, 35, 35);
    context.clearRect(80, 135, 35, 35);
    context.strokeStyle = "red";
    context.strokeRect(75,75, 100,100)
}

//4.5. Кривые линии (Кривая безье) с помощью одной управляющей точкой.
window.addEventListener("load", init, false);

function init() {

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    // первая точка
    context.moveTo(0, 300);

    context.quadraticCurveTo( /*управляющая точка*/ 350, 450, /*вторая точка*/ 600, 300);

    context.lineWidth = 10;
    context.strokeStyle = "orange";
    context.stroke();

}

//4.6. Кривые линии (Кривая безье) с помощью двух точок.
window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = 'red';
    context.beginPath();
    // первая точка
    context.moveTo(10, 30);
    context.bezierCurveTo( /*управляющая точка 1*/ 50, 90, /*управляющая точка 2*/ 159, -30, /*вторая точка*/ 200, 30);
    context.lineTo(200, 190);
    context.bezierCurveTo( /*управляющая точка 1*/ 50, -100, /*управляющая точка 2*/ 159, 330, /*вторая точка*/ 10, 190);
    context.closePath();
    context.fill();
}

//4.7. Отрисовка круга (полукруга)!
window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "green";
    //arc(x,y,radius,startAgle,endAngle,clockwise)
    //Метод arc() принимает 6 аргументов:
    //x, y - центр рисования дуги
    //radius -радиус
    //startAngle -начальный угол окружности в радианах
    //endAngle - конечный угол окружности в радианах
    //clockwise - направление прорисовки. false - по часовой стрелке

    //context.arc(100, 100, 50, 0, 360*Math.PI/180, false);
    context.arc(100, 100, 50, 0, Math.PI, false);
    context.closePath();
    context.fill();
}

//4.8. Добавляем в Canvas изображения, как часть общего рисунка!
window.addEventListener("load", init, false);
function init() {        
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let logo = new Image();                        
    logo.onload = function () {
    context.drawImage(logo, 5, 5);
};
logo.src = "canvas.jpg";



//4.9. Метод createPattern - повторяет указанный элемент (в примере картинку) по указанному направлению
window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let item = new Image();
    item.src = "lamp.jpg";
    item.onload = function() {
        //Метод createPattern - повторяет указанный элемент по указанному направлению
        context.fillStyle = context.createPattern(item, 'repeat');
        context.fillRect(0, 0, 350, 150);
    }
}

//4.9. Линия градиента (смены цвета)!
window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    // Создание объекта градиента и указание начальной и конечной точки оси градиента.
    let gradient = context.createLinearGradient(0, 0, 270, 0);
    // Добавление цвета и смещения позиции остановки цвета.
    gradient.addColorStop(0, "Black");
    gradient.addColorStop(0.35, "Blue");
    gradient.addColorStop(0.8, "LightBlue");
    gradient.addColorStop(1, "White");
    // Установка объекта градиента в качестве цвета заливки контекста.
    context.fillStyle = gradient;
    context.fillRect(0, 0, 300, 300);
}

//Или...!
window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    // Создание объекта градиента и указание начальной и конечной точки оси градиента.
    let gradient = context.createLinearGradient(0, 0, 270, 0);
    // Добавление цвета и смещения позиции остановки цвета.
    gradient.addColorStop(0, "Black");
    gradient.addColorStop(0.35, "Black")
    gradient.addColorStop(0.35, "Blue")
    gradient.addColorStop(0.7, "Blue");
    gradient.addColorStop(0.7, "green");
    gradient.addColorStop(1, "green");
    // Установка объекта градиента в качестве цвета заливки контекста.
    context.fillStyle = gradient;
    context.fillRect(0, 0, 300, 300);
}


//4.10 Добавления текста как изображения
 window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(0, 200);
    context.lineTo(300, 200);
    context.stroke();
    // настройка шрифта
    context.font = "bold 24px Segoe UI";
    //тип отображения шрифта:
    //top, bottom, middle,hanging, alphabetic
    context.textBaseline = "alphabetic";
    let text = "CANVAS text"
    let text2 = "My first ";
    //Получение размера текста
    let w = context.measureText(text);
    //Заполняем канвас текстом
    //текст, х,у(координаты)
    context.fillText(text, (context.canvas.width - w.width) / 2, 198);
    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(0, 100);
    context.lineTo(300, 100);
    context.stroke();
    let w2 = context.measureText(text2);
    context.fillText(text2, (context.canvas.width - w2.width) / 2, 98);
}


//4.11 Добавления тени тексту!
window.addEventListener("load", init, false);
function init() {
    let canvas = document.getElementById('canvas');           
    let context = canvas.getContext('2d');
    context.font = "bold 40px Segoe UI";
    context.fillStyle = "Orange";
    context.textBaseline = "alphabetic";
    //Цвет тени
    context.shadowColor = "rgba(255, 0, 0, 0.5)";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    //Степень размытия
    context.shadowBlur = 5;
    let text = "My first CANVAS text";
    let w = context.measureText(text);
    context.fillText(text, (context.canvas.width - w.width) / 2, 100);
} 

//4.12 Оптикаемость
window.addEventListener("load", init, false);
function init() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d")
    context.fillStyle = 'red';
    //Задаем альфа-канал для элемента. Значения от 0 до 1.
    context.globalAlpha = 1;
    context.fillRect(50, 50, 50, 50);
    context.globalAlpha = 0.5;
    context.fillStyle = 'orange';
    context.fillRect(25, 25, 50, 50);          
}




// ______5. Canvas Трансформация(изменения контекста которое влияет на изображения). ____________________________________!!!!!
//Примери использования описано в уроке HTML5&CSS3 Advanced (продвинутий) - 5. Canvas.
