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



//3. Gradients, градиенты - плавный переход из одного цвета в другой!
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