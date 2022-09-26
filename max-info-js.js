/*
    1. Навигация по DOM элементам
    2. Изменение DOM дерева
	3. Событие часть 1!
		3.1. Пример обработчика событий №1!
		3.2. Пример обработчика событий №2!
		3.3. Пример обработчика событий №3(Самий актуальний)!
		3.4. Пример №4 использование метода onclick() и форм input!
		3.5. Пример №5 использование метода 'addEventListener'!
		3.6. Пример №6 использование метода 'addEventListener' более подробно!
		3.7. Пример №7 удаляем обработчик на событие click!
		3.8. Пример №8 при событии 'onclick', добавляем новый объект!
		3.9. Пример №9 всем кнопкам через forEach, добавляем метод!
	4. Событие часть 2!
		4.1. Выполнения кода JS, после загрузки hyml, css страницы!
		4.2. Выполнения кода JS, после загрузки всей страницы вместе с изображениями, таблицами и т.д.!
		4.3. Event – интерфейс!
		4.4. Пример использования события mouseover, mouseout, mousemove!
		4.5. Пример использования события click, mousedown, mouseup!
		4.6. Пример использования события на нажатия клавиш Shift, Alt!, Ctrl, Meta!
		4.7. Отслеживание других клавиш на клавиатуре (keydown, keyup)!
		4.8. Перемещение елемента div!
		4.9. Пример перемещения блока div клавишами вверх, вниз, вправо, влево (типа змейка)!
    5. Событие часть 3!
        5.1. 
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










// ______3. Событие часть 1____________________________________!!!!!
/*
Событие – это сигнал, который сообщает о наступлении определенного состояния некоторого объекта.
Обработчик события – функция, которая запускается в случае возникновения события.
*/
/*
	click - нажатие левой клавиши мыши
	contextmenu - нажатие правой клавиши мыши
	keydown - клавиша на клавиатуре зажата
	keyup - клавиша на клавиатуре отпущена
	submit - пользователь отправил форму (нажал на кнопку submit для form)
	mouseout - курсор вышел за пределы элемента
	mouseover - курсор вошел в область элемента
	mousedown - зажата клавиша мыши
	mouseup - отпущена клавиша мыши 
	mousemove - курсор перемещается по элементу
*/



//Пример обработчика событий №1!
/*
    onclick - атрибут, через который задается обработчик события click
    В качестве значения данного атрибута используется JavaScrip код, который выполнится, при возникновении события

    <div onclick="alert('Сработал обработчик события');
                  console.log('Hello Eugene');
                  let box = document.querySelector('div');
                  box.style.backgroundColor='green'; ">
        Click me
    </div>
*/



//Пример обработчика событий №2!
/*	HTML
    <div onclick="showMessage()">
        Click me
    </div>
*/
function showMessage() {
    alert('Сработал обработчик события, вынесенный в функцию');
}



//Пример обработчика событий №3(Самий актуальний)!
/*	HTML
    <div id="my-div">
        Click me
    </div>
*/
let div = document.querySelector("#my-div");
// Избегайте использования атрибутов для обработки событий.
// Ненавязчивый JavaScript код, который устанавливает обработчики через свойства или метод addEventListener
// проще сопровождать.
div.onclick = showMessage;

function showMessage() {
    alert('Сработал обработчик события, установленный через свойство');
}
//________________Или________________!!!
div.onclick = function () {
    alert('Сработал обработчик события, установленный через свойство');
}



//Пример №4 использование метода onclick() и форм input!
/*	HTML
 	Операнд 1: <input id="input1" type="text"> <br />
    Операнд 2: <input id="input2" type="text"> <br />

    <button id="add-btn">+</button>
    <button id="rem-btn">-</button>
    <button id="mul-btn">*</button>
    <button id="div-btn">/</button>
*/


// получение элементов input
// для получения введенного значения используется свойство value
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

// получение кнопок
let addBtn = document.querySelector("#add-btn");
let remBtn = document.querySelector("#rem-btn");
let mulBtn = document.querySelector("#mul-btn");
let divBtn = document.querySelector("#div-btn");

// Установка обработчиков на событие click по кнопкам
addBtn.onclick = add;
remBtn.onclick = rem;
mulBtn.onclick = mul;
divBtn.onclick = div;

function add() {
    // для избегания конкатенации преобразовываем значение поля ввода в число
    alert(Number(input1.value) + Number(input2.value));
}

function rem() {
    alert(input1.value - input2.value);
}

function mul() {
    alert(input1.value * input2.value);
}

function div() {
    alert(input1.value / input2.value);
}




//Пример №5 использование метода 'addEventListener'!
/* HTML
	<button id="my-btn">Click Me!</button>
*/
let btn = document.querySelector("#my-btn");
// addEventListener - функция для установки обработчика события
// первый параметр - имя события без приставки on
// второй параметр - функция обработчик
btn.addEventListener("click", handler);
function handler() {
    alert("Обработчик события click, установленный с помощью addEventListener");
}

//Пример №6 использование метода 'addEventListener' более подробно!
/* HTML
 	Операнд 1: <input id="input1" type="text"> <br />
    Операнд 2: <input id="input2" type="text"> <br />

    <button id="add-btn">+</button>
    <button id="rem-btn">-</button>
    <button id="mul-btn">*</button>
    <button id="div-btn">/</button>
*/
let input1 = document.querySelector("#input1");
let input3 = document.querySelector("#input2");

let addBtn = document.querySelector("#add-btn");
let remBtn = document.querySelector("#rem-btn");
let mulBtn = document.querySelector("#mul-btn");
let divBtn = document.querySelector("#div-btn");

addBtn.addEventListener("click", function () {
    alert(Number(input1.value) + Number(input2.value));
});
remBtn.addEventListener("click", function () {
    alert(input1.value - input2.value);
});
mulBtn.addEventListener("click", function () {
    alert(input1.value * input2.value);
});
divBtn.addEventListener("click", function () {
    alert(input1.value / input2.value);
});



//Пример №7 удаляем обработчик на событие click!
/* HTML
	<button id="testBtn">Click me</button>
	<button id="removeHandlerBtn">Удалить обработчик события</button>
*/

let testBtn = document.querySelector("#testBtn");
let removeHandlerBtn = document.querySelector("#removeHandlerBtn");

function handler() {
    alert("Обработчик события");
}

testBtn.addEventListener("click", handler); // устанавливаем обработчик на событие click

removeHandlerBtn.addEventListener("click", function () {
    testBtn.removeEventListener("click", handler); // удаляем обработчик на событие click
});


//Пример №8 при событии 'onclick', добавляем новый объект!
let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let taskList = document.querySelector(".task-list");


//1. При нажатии на Button '#add-task-btn', вызываем функцию 'addTaskHandler()'
addTaskButton.addEventListener("click", addTaskHandler);

//3. createTask(taskNameInput.value) = функция принимает значения из value
function createTask(text) {
    let div = document.createElement("div");
    div.classList.add("task");

    let input = document.createElement("input");
    input.type = "checkbox";

    let p = document.createElement("p");
    p.innerText = text;

    div.append(input);
    div.append(p);

    return div;
}

//2. В которой создаем новый 'div', из функции 'createTask()' и добавляем в 'taskList'
function addTaskHandler() {
    let newTask = createTask(taskNameInput.value);
    taskList.append(newTask);
}



//Пример №9 всем кнопкам через forEach, добавляем метод!
// находим все кнопки
let buttons = document.querySelectorAll("button");
// устанавливаем для всех кнопок одну и ту же функцию (clickHandler) в качестве обработчика события click
buttons.forEach(btn => {
    btn.addEventListener("click", clickHandler);
});

function clickHandler() {
    alert(this.textContent); // this - указывает на ту кнопку, для которой обрабатывается в данный момент событие.
}









// ______4. Событие часть 2____________________________________!!!!!
//4.1. Выполнения кода JS, после загрузки страницы!

// DOMContentLoaded - браузер загрузил разметку и построил DOM дерево, 
// но внешние ресурсы, например картинки, могут еще загружаться. 
document.addEventListener("DOMContentLoaded", function () {
    let div = document.querySelector("#testDiv")
    let img = document.querySelector("#testImg")
   
    console.log(div.textContent);
    console.log(getComputedStyle(img).width); // 0px -так как внешние ресурсы еще не загружены размер картинки неизвестен
});



//4.2. Выполнения кода JS, после загрузки всей страницы вместе с изображениями, таблицами и т.д.!
// load - HTML и внешние ресурсы загружены. 
// Данное событие срабатывает на объекте window, DOMContentLoaded - на document
// Для большинства задач, достаточно события DOMContentLoaded
window.addEventListener("load", function () {
    let div = document.querySelector("#testDiv")
    let img = document.querySelector("#testImg")

    console.log(div.textContent);
    console.log(getComputedStyle(img).width);
});


/*
	Возникшее в DOM событие представляется объектом, которому можно получить доступ через параметр метода обработчика.
	Event – интерфейс, который представляет событие возникшее в DOM. (Под интерфейсом подразумевается набор свойств и методов).
*/



//4.3. Event – интерфейс!
/*	HTML
    <button id="testBtn">Click me</button>
*/
document.querySelector("#testBtn").addEventListener("click", handler);

// Обработчик события может принимать параметр, в который, в случае возникновения события,
// будет записываться объект события с дополнительной информацией.
function handler(e) {
    console.log(e);
}



//4.4. Пример использования события mouseover, mouseout, mousemove!
/*	HTML
    <div class="rect" id="testDiv"></div>
*/
    let div = document.querySelector("#testDiv");
    div.addEventListener("mouseover", mouseOverHanderl); // курсор попал в div
    div.addEventListener("mouseout", mouseOutHanderl); // курсор вышел за пределы div
    div.addEventListener("mousemove", mouseMoveHanderl); // курсор перемещается по div

    function mouseOutHanderl() {
        div.style.backgroundColor = "green";
    }

    function mouseOverHanderl() {
        div.style.backgroundColor = "orange";
    }

    function mouseMoveHanderl(e) {
        let message = `X:${e.clientX}; Y:${e.clientY}`;
        //  message = `X:${e.offsetX}; Y:${e.offsetY}`;
        //  message = `X:${e.layerX}; Y:${e.layerY}`;
        //  message = `X:${e.pageX}; Y:${e.pageY}`;       
        div.textContent = message;
    }




//4.5. Пример использования события click, mousedown, mouseup!
let testButton = document.querySelector("#testBtn");
let resetButton = document.querySelector("#resetBtn");
let output = document.querySelector("#output");

resetButton.addEventListener("click", function() {
    output.innerHTML = "";
})

// which нажатая клавиша на мыши
// 1 - левая
// 2 - средняя
// 3 - правая

//Когда кликнули
testButton.addEventListener("click", function(e) {
    output.innerHTML += "click which=" + e.which + "<br />";
    //output.innerHTML += "click which=" + e.button + "<br />"; //Этот вариант лучше!
});

//Когда навели
testButton.addEventListener("mousedown", function(e) {
    output.innerHTML += "mousedown which=" + e.which + "<br />";
});

//Когда убрали
testButton.addEventListener("mouseup", function(e) {
    output.innerHTML += "mouseup which=" + e.which + "<br />";
});




//4.6. Пример использования события на нажатия клавиш Shift, Alt!, Ctrl, Meta 
/*	HTML
	<div id="testDiv" class="rect"></div>
*/
let div = document.querySelector("#testDiv");
div.addEventListener("click", function (e) {
    let message = "Click с зажатой клавишей";

    if (e.shiftKey) {
        message += " Shift";
    }
    if (e.altKey) {
        message += " Alt";
    }
    if (e.ctrlKey) {
        message += " Ctrl";
    }
    if (e.metaKey) {
        message += " Meta";
    }

    div.innerHTML = message;
});






//4.7. Отслеживание других клавиш на клавиатуре (keydown, keyup)!
/*	HTML
    <div id="output"></div>
*/
let output = document.querySelector("#output");

document.addEventListener("keydown", function(e) {
    let message = `keydown (Code = ${e.code}, Key = ${e.key})`;
    output.innerHTML = message;
});

document.addEventListener("keyup", function(e) {
    let message = `keyup (Code = ${e.code}, Key = ${e.key})`;
    output.innerHTML = message;
});




//4.8. Перемещение елемента div!
/*	HTML
    <div id="testDiv" class="rect"></div>
*/

let div = document.querySelector("#testDiv");
let move = false;
let offsetX, offsetY;

// при нажатии на div запоминаем отступ от курсора до левого верхнего угла div
div.addEventListener("mousedown", function (e) {
    move = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
});

// отлеживаем движение мыши по поверхности документа и перемещаем div
// с учетом сохраненных отступов в момент нажатия левой клавиши мыши.
// div перемещается только если переменная move == true
document.addEventListener("mousemove", function (e) {
    if (move) {
        div.style.top = e.clientY - offsetY + "px";
        div.style.left = e.clientX - offsetX + "px";
    }
});

// в момент, когда клавиша отпускается прекращаем перемещение div
document.addEventListener("mouseup", function (e) {
    move = false;
});



//4.9. Пример перемещения блока div клавишами вверх, вниз, вправо, влево (типа змейка)!
/*
    #element {
        width: 100px;
        height: 100px;
        background-color: greenyellow;
        position: absolute;
    }
*/
/* <div id="element"></div> */
let div = document.querySelector("#element");
let distance = 10;

document.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowLeft":
            moveLeft(div, distance);
            break;
        case "ArrowRight":
            moveRight(div, distance);
            break;
        case "ArrowUp":
            moveUp(div, distance);
            break;
        case "ArrowDown":
            moveDown(div, distance);
            break;
    }
});

function moveUp(element, distance) {
    let top = getComputedStyle(element).top; // 10px 
    element.style.top = parseInt(top) - distance + "px";
}

function moveDown(element, distance) {
    let top = getComputedStyle(element).top;
    element.style.top = parseInt(top) + distance + "px";
}

function moveLeft(element, distance) {
    let left = getComputedStyle(element).left;
    element.style.left = parseInt(left) - distance + "px";
}

function moveRight(element, distance) {
    let left = getComputedStyle(element).left;
    element.style.left = parseInt(left) + distance + "px";
}





// ______5. Событие часть 3____________________________________!!!!!