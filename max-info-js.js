/*
    1. Навигация по DOM элементам
    2. Изменение DOM дерева


*/

















// ______1. Навигация по DOM элементам____________________________________!!!!! 
// DOM - Document Object Model


// document - позволяет получить доступ к DOM дереву
// querySelector - производит поиск по DOM дереву и возвращает первый элемент, подходящий под CSS селектор, указанный в параметрах
    let paragraph = document.querySelector("#first");   // находим элемент с id="first"
    paragraph.style.border = "2px solid red";           // меняем стили для элемента, задавая для свойства border значение 2 "px solid red"
    paragraph.style.width = "200px";
    paragraph.style.backgroundColor = "green";
//или
paragraph.style.cssText = "border: 2px solid red; width: 200px;";

// a[href='https://itvdn.com'] - находим элемент a с атрибутом href со значением https://itvdn.com
let link = document.querySelector("a[href='https://itvdn.com']");
link.style.border = "2px solid red";

// .my-list - находим первый элемент с атрибутом class="my-list"
let unorderedList = document.querySelector(".my-list");
unorderedList.style.border = "2px solid green";

// article - находим первый элемент article в документе
let article = document.querySelector("article");
article.style.border = "2px solid blue";




// !_________Для многих элементов HTML!
// querySelectorAll возвращает коллекцию(массив) элементов, подходящих под CSS селектор
// querySelectorAll("li") - находим все элементы li
let listItems = document.querySelectorAll("li");
//Для создание полноценного массива с возможностью использовать все методы массива!
let listArr = Array.from(listItems);
for (const item of listItems) {
    item.style.margin = "2px";
    item.style.border = "1px solid red";
}

//еще пример
let listItem = document.querySelector("#my-list-1"); // поиск элемента с id my-list-1
let selected = listItem.querySelectorAll(".selected"); // поиск элементов с классом selected в элементе, найденном ранее

// данный пример демонстрирует, что метод querySelector возвращает элемент DOM, по которому можно производить повторно
// поиск с помощью методов querySelector или querySelectorAll
// в данном случае, такой же результат можно было достигнуть, выполнив одну строку
let selected = document.querySelectorAll("#my-list-1 .selected");

for (const item of selected) {
    item.style.border = "1px solid red";
}


// поиск по id (возвращается один элемент DOM)
let paragraph = document.getElementById("first");
paragraph.style.border = "2px solid red";

// поиск по атрибуту name (возвращается коллекция элементов DOM)
let radioButtons = document.getElementsByName("answer");
for (const button of radioButtons) {
    button.checked = !button.checked; // меняем значение checked на противоположное
}

// поиск по имени тега (возвращается коллекция элементов DOM)
let listItems = document.getElementsByTagName("li");
for (const item of listItems) {
    item.style.margin = "2px";
    item.style.border = "2px solid green";
}

// поиск по css классу (возвращается коллекция элементов DOM)
let lists = document.getElementsByClassName("my-list");
for (const list of lists) {
    list.style.border = "2px solid blue";
}

//Добавления элементов, простой пример!
let ul = document.querySelector("ul");
console.log(ul);    //5 элементов списка!
//Свойство интерфейса innerHTML устанавливает или получает HTML или XML разметку дочерних элементов!
ul.innerHTML += "<li>Hello Eugene!</li>";
console.log(ul);    //6 элементов списка!, добавили 6й елемент '<li>Hello Eugene!</li>'


// closest - выполняет поиск ближайшего родительского элемента, соответствующего CSS селектору
// Если родительский элемент не найден возвращает null
let btn = document.querySelector("#closeBtn");
let closestBlock = btn.closest(".block");
closestBlock.style.border = "2px solid red";

// более короткий вариант с цепочкой вызовов функций
let block = document.querySelector("#closeBtn").closest(".block");
block.style.border = "2px solid red";

// так как для элемента #closeBtn нет родительского элемента с классом foo - результат вызова closest null
let element = document.querySelector("#closeBtn").closest(".foo");
console.log(element);




// BOM - Browser Object Model,объектная модель документа, которая строится на основе HTML кода.
//Каждый HTML тег, атрибут, текст, комментарий являются объектами в DOM дереве, к которым можно получить доступ с помощью JavaScript кода.

//html = <p><i>Hello</i> world</p>
let node = document.querySelector("p");

console.log("nodeType = " + node.nodeType);         // тип узла                     //nodeType = 1
console.log("innerHTML = " + node.innerHTML);       // содержимое узла как HTML     //innerHTML = <i>Hello</i> world
console.log("outerHTML = " + node.outerHTML);       // содержимое узла и сам узел   //outerHTML = <p><i>Hello</i> world</p>
console.log("textContent = " + node.textContent);   // содержимое узла как текст    //textContent = Hello world
console.log("hidden = " + node.hidden);             // видимость узла               //hidden = false



//______________________Пример использование 'innerHTML' №1
//html = Результат: <span id="output"></span>

let x = prompt("Введите первое число");
let y = prompt("Введите второе число");
let result;
let outputDiv = document.querySelector("#output");

if (y != 0) {
    result = x / y;
    outputDiv.innerHTML = `<b>${result}</b>`;
}
else
{
    outputDiv.innerHTML = `<b style="color:red">Деление на 0</b>`
}

//______________________Пример использование 'innerHTML' №2
while(true)
{
    let value = prompt("Введите значение или exit для выхода");
    if(value == "exit") break;
    // Используя += мы добавляем к существующему контенту новые значения
    document.querySelector("#output").innerHTML += value + "<br />";
}

//______________________Пример использование 'outerHTML' №1
//html = <p id="test">Lorem ipsum dolor sit amet.....</p>
    let node = document.querySelector("#test");
    node.outerHTML = "<div>Hello world</div>";  //заменяет елемент <p id="test">..</p> на <div>Hello world</div>



//______________________Пример использование 'textContent' №1, работает также как и innerHTML!
//html = Результат: <span id="output"></span>
    let x = prompt("Введите первое число");
    let y = prompt("Введите второе число");
    let result;
    let outputDiv = document.querySelector("#output");

    if (y != 0) {
        result = x / y;
        outputDiv.textContent = `<b>${result}</b>`;
    }
    else
    {
        outputDiv.textContent = `<b style="color:red">Деление на 0</b>`
    }


//______________________Пример использование innerHTML №1!
//html =  Введенные значения: <div id="output"></div>
    let products = [
        {
            name:"Item1",
            price:1000,
            discount:"10%"
        },
        {
            name:"Item2",
            price:2000,
            discount:"15%"
        },
        ......
    ]

    let output = document.querySelector("#output")
    //В елемент 'id="output"', через цикл добавляем элементы(блоки div), с данными которые берутся с объекта products = []!
    for(let prod of products){
        output.innerHTML += `
            <div class="box">
                <h1>Название: ${prod.name}</h1>
                <p>Цена - ${prod.price}</p>
                <p>Скидка - ${prod.discount}</p>
            </div>
        `
    }


//______________________Пример использование 'parentElement', 'nextElementSibling', 'previousElementSibling'!
//html =  Введенные значения: <div id="output"></div>
    let e = document.querySelector("#elem");
    
    e.parentElement.style.border = "1px solid red";                 //parentElement = родительский элемент
    e.nextElementSibling.style.border = "1px solid green";          //nextElementSibling = следующий элемент
    e.previousElementSibling.style.border = "1px solid blue";       //previousElementSibling = предыдущий елемент

    for (const node of e.children) { // children - только дочерние узлы-элементы
        node.style.border = "1px solid orange";
    }


    let elemId = prompt("Введите ID элемента (elem1, elem2, elem3)");
    let elem = document.querySelector("#"+elemId);
    for (const child of elem.children) {
        child.style.border = "1px solid red";
    }



//______________________Пример использование 'querySelector' №1!
    let elemId = prompt("Введите ID элемента (elem1, elem2, elem3)");   //Вводим '#id'!
    let elem = document.querySelector("#"+elemId);                      //Присваиваем '#id' стили!
    for (const child of elem.children) {
        child.style.border = "1px solid red";
    }

//______________________Еще пример!
// Получаем каждый второй td из группы соседних td расположенных в таблице с id statsTable
// https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child
    let examsScoreColumn = document.querySelectorAll("#statsTable td:nth-child(2)");        //Ищем каждый второй элемент td таблицы '#statsTable'!
    for (const td of examsScoreColumn) {
                           //td.следующий элемент.первый дочерний элемент!
        let passedExamIcon = td.nextElementSibling.firstElementChild;
        //Берем контекст тега td и ставим условия!
        if (td.textContent > 700) {
            passedExamIcon.hidden = false;  //спрятать картинку!
        }
        else {
            passedExamIcon.hidden = true;  //показать картинку!
        }

        //Более короткий вариант кода, заменяющий блок if/else
        passedExamIcon.hidden = td.textContent < 700;
    }










// ______2. Изменение DOM дерева____________________________________!!!!! 
document.createElement(тэг);   //создание нового элемента, указанного в параметрах.
documetn.createTextNode(текс); //создание текстового узла.


//Пример 1. создание узлов
let divElement = document.createElement("div");         // 1.1. создание HTML элемента <div></div>
let divText = document.createTextNode("Hello world");   // 1.2. создание текстового узла "Hello world"

// созданные узлы не будут видимы пользователю, пока не станут частью DOM, который в данный момент отображает страница.

// добавление созданных узлов на страницу
divElement.append(divText);       // 1.3. в тег <div></div>(divElement), добавляем текст(divText) Метод append добавляет узел как последний дочерний узел.
document.body.append(divElement); // 1.4. добавляем divElement в структуру html документа! append(добавляем как, последний дочерний узел)!

//Примеры вставки!
//before    = перед родительским элементом!
//prepend   = внутри родительского элемента, вначале!
//append    = внутри родительского элемента, в конце!
//after     = после родительского элемента!


//Пример 2. Использование before, prepend, append, after.
/*  CSS
    <style>
        .inserted-div {
            background-color: lightblue;
            border: 1px solid brown;
            padding: 2px;
            margin: 2px;
        }

        #container {
            border: 3px solid green;
        }
    </style>
*/
/*  HTML
    <div id="container">
        <p>Element 1</p>
        <p>Element 2</p>
        <p>Element 3</p>
        <p>Element 4</p>
        <p>Element 5</p>
    </div>
*/

let div1 = document.createElement("div");
div1.textContent = "Hello world 1";
div1.className = "inserted-div";

let div2 = document.createElement("div");
div2.textContent = "Hello world 2";
div2.className = "inserted-div";

let div3 = document.createElement("div");
div3.textContent = "Hello world 3";
div3.className = "inserted-div";

let div4 = document.createElement("div");
div4.textContent = "Hello world 4";
div4.className = "inserted-div";

let container = document.querySelector("#container");

container.before(div1); // вставить перед указанным элементом (prev sibling)
container.prepend(div2); // вставить как первый дочерний элемент
container.append(div3); // вставить как последний дочерний элемент
container.after(div4); // вставить после указанного элмента (next siling)

//Можно использовать несколько значений
container.append(div3, div1, div2, div4); // вставить как последний дочерний элемент



//Метод, insertAdjacentHTML - позволяет добавить текст как HTML разметку
//HTML <div id="element">Div Element</div>

let div = document.querySelector("#element");
        
div.insertAdjacentHTML("beforebegin", "<p>Insertd before</p>"); // insertAdjacentHTML позволяет добавить текст как HTML разметку
div.after("<p>Insertd after</p>"); // методы append/prepend/before/after строковые значения добавляют как текст, а не как HTML разметку

// возможные значения для первого аргумента метода insertAdjacentHTML
// beforebegin - перед открывающим элементом
// afterbegin - после открывающего элемента
// beforeend - перед закрывающим элементом
// afterend - после закрывающего элемента



//Удаления элемента пример №1!
/*  HTML
    <ul>
        <li>Item 01</li>
        <li>Item 02</li>
        <li id="marked">Item 03</li>
    </ul>
*/
let lastListItem = document.querySelector("#marked");
lastListItem.remove(); // удаление элемента '<li>Item 03</li>' из DOM!


//Удаления элемента пример №2!
/*HTML
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
</ul>
*/
//Удаляет значения где числа непарные!
let li1 = document.querySelectorAll("li");
console.log(li1);

for(let li of li1){
    li.style.background = "green"
    if(+li.textContent % 2 == 0) {
        li.remove();
    }
}

/*  ВЫРЕЗАТЬ ЭЛЕМЕНТ!
    если в DOM дерево вставить элемент, который уже находится в другой части дерева, 
    то этот элемент будет удален со старого места расположения и добавлен в новое!
*/
/*  HTML
    <ul id="list">
        <li id="item">item 01</li>
        <li>item 02</li>
        <li>item 03</li>
        <li>item 04</li>
        <li>item 05</li>
    </ul>
*/

let listitem = document.querySelector("#item");         //Берем первый элемент '#item'
let unorderedList = document.querySelector("#list");    //Берем список '#list'

//Перший елемент '#item' вставляем в конце '.append' списка '#list'а., то есть вырезать элемент!
unorderedList.append(listitem); 




//Клонировать элемент!
/*HTML
    <article title="1">
        <h1 title="2">Заголовок статьи</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </article>
*/
let articleNode = document.querySelector("article");

let shallowCopy = articleNode.cloneNode(false); // false - создание поверхностной копии
let deepCopy = articleNode.cloneNode(true); // true - создание глубокой копии

document.body.append(shallowCopy);
/*HTML поверхностна копия - создание копии без копирования дочерних элементов
    <article title="1">

    </article>
*/
document.body.append(deepCopy);
/*HTML глубокая копия - создание копии элемента со всеми атрибутами и дочерними элементами
    <article title="1">
        <h1 title="2">Заголовок статьи</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </article>
*/



//Пример, создания списка путем перебора данных массива!
/*
    <p>Пользователи системы:</p>
    <ul id="usersList">
    </ul>
*/
users.forEach(user => {
    let content = `${user.name.first} ${user.name.last} (${user.email})`;
    createListItem(content);
});

function createListItem(content) {
    let li = document.createElement("li");
    li.textContent = content;
    list.append(li);
}

//Узел DOM – обычный JavaScript объект. Для DOM узлов можно задавать новые свойства и методы.
/*  HTML
    <div id="myDiv" 
         title="Hello world" 
         type="message">
    </div>
*/
let divElem = document.querySelector("div");

console.log(divElem.id);        // myDiv
console.log(divElem.title);     // Hello world
console.log(divElem.type);      // undefined - атрибут type - не стандартный атрибут для DIV
divElem.type = "Hello Eugene";
console.log(divElem.title);     //divElem.title


//Работа с DOM Элементом, объектом!
/* HTML
    <div id="div1" myAttribute="custom"></div>
    <div id="div2" myAttribute="custom"></div>
*/

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");

console.log(div1.hasAttribute("myAttribute")); // true - если атрибут с именем myAttribute есть, иначе - false
console.log(div1.getAttribute("myAttribute")); // выведет значение атрибута myAttribute

div1.setAttribute("myAttribute", "new value"); // сменит значение для атрибута myAttribute
console.log(div1.getAttribute("myAttribute")); // выведет значение атрибута myAttribute

div2.removeAttribute("myAttribute"); // удалит атрибут myAttribute для элемента div2


//Работа с атрибутами
/*  HTML
    <div data-name="My Div" data-custom-value="123"></div>
*/
let divElem = document.querySelector("div");

console.log(divElem.dataset.name); // чтение значение атрибута data-name
console.log(divElem.dataset.customValue); // чтение значение атрибута data-custom-value

divElem.dataset.name = "new"; // смена значения атрибута data-name
console.log(divElem.dataset.name);



//Робота со стилями!
/*  HTML
    <div id="second-div">
        Стили задаются через JavaScript код
    </div>
*/

//Добавления стилей!
let div = document.querySelector("#second-div");
// задание inline стилей, тоже самое, что редактирование атрибута style
div.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
div.style.border = "1px solid gray";
div.style.borderRadius = "8px";
div.style.backgroundColor = "orange";
div.style.fontWeight = "bold";
div.style.margin = "8px";
div.style.padding = "15px";


//Добавления класса
/* CSS
.message {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: orange;
    font-weight: bold;
    margin: 8px;
    padding: 15px;
}
*/
/*  HTML
    <div id="first-div" class="message">
        Стили задаются через CSS класс
    </div>

    <div id="second-div">
        Стили задаются через JavaScript код, через указание CSS класса
    </div>
*/
let div = document.querySelector("#second-div");
// задание CSS класса для элемента
div.className = "message";


//Добавления класса через .classList.add
/*
    .read {
        background-color: white;
        color: gray;
    }
*/
/* HTML
    <div id="third-div" class="message">Message 3</div>
*/

let div = document.querySelector("#third-div");
div.classList.add("read"); // добавление класса для элемента
div.classList.add("class1", "class2"); // добавление класса для элемента

//Удаления класса через .classList.remove
let messages = document.querySelectorAll(".read");

messages.forEach(div => {
    div.classList.remove("read"); // удаляем класс, если он есть
});


//.toggle удаляем класс, если он есть, добавляем класс, если его нет
let messages = document.querySelectorAll(".message");

messages.forEach(div => {
    div.classList.toggle("read"); // удаляем класс, если он есть, добавляем класс, если его нет
});


//contains, проверка наличия класса
let div = document.querySelector("#third-div");
div.classList.contains("read"); // true/false проверяет наличия класса


//Вичисления CSS СТИЛЕЙ!
/*  CSS
div {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: lightblue;
}

div::selection {
    background-color: yellow;
}
</style>
*/

/*  HTML
    <div>
        DIV
    </div>
*/
let div = document.querySelector("div");
// так как стили вычислялись браузером на основе CSS правил, а не задавались через атрибут style
// получить значения высоты и ширины элемента не получится через свойство style
console.log(`height=${div.style.height} width = ${div.style.width}`);   //height= width = 

// получение вычисленных стилей для элемента div
let computedStyles = getComputedStyle(div, null);
console.log(`height=${computedStyles.height} width = ${computedStyles.width}`); //height=100px width = 100px

// получение вычисленных стилей для псевдоэлемента div::selection
let computedStylesSelection = getComputedStyle(div, ":selection");
console.log(`background-color on hover=${computedStylesSelection.backgroundColor}`);    //background-color on hover=rgb(255, 255, 0)