/*
    1. Формы и элементы управления!
    1.1. Пример формы!
    1.2. Обращения к элементам формы!
    1.3. Перебор всех елементов формы!
    1.4. Робота з датоюю в форме!
    1.5. Робота з 'radio' и 'checkbox' в форме!
    1.6. Робота з випадающим списком в форме!
    1.7. Более подробные примеры использования формы описаны в уроке "4. JavaScript Базовый - Lesson 11 - Forms and Controls")!


    2. Проверка данных формы(валидация)!
    2.1. Простой пример, проверка поля на пустоту!
    2.2. Фокус, потери фокуса!
    2.3. Autofocus!
    2.4. Постоянный фокус, пока не прошла валидация!
    2.5. Примеры использования событий в форме 'input', 'change', 'cut', 'copy'
    2.6. Валидация, проверка полей через HTML описано в уроке "4. JavaScript Базовый -  Lesson 12 - Form Validation"

    3. Регулярное выражения!

    4. Cookeis.
    4.1. Простой пример, создания cookie!
    4.2. cookie-parameters!
    4.3. encodeURIComponent - метод для кодирования строки в компонент, который будет использоваться в URI
    4.4. set, get, delete Cookeis


    5. Web Storage!
    5.1. localStorage - объект, позволяющий хранить информацию в памяти браузера.
    5.2. Вывод всех ключ значения из localStorage
    5.3. Удаления из localStorage!
    5.4. Робота из 'sessionStorage', практически та же что и с 'localStorage',
         Урок "4. JavaScript Базовый -  Lesson 13 - Cookeis and Web Storage.

    6. JSON - JavaScript Object Notation (Сохранения js кода в виде строки)!
    6.1. Простой пример JSON

    7. Событие storage возникает в момент обновления localStorage
    описано в уроке "4. JavaScript Базовый -  Lesson 13 - Cookeis and Web Storage"



// ______1. Формы и элементы управления!____________________________________!!!!!
/*
    Form – тег для создания формы для обмена данными между пользователем и сервером.
    Input – элемент управления, тип которого зависит от значения атрибута type.

    document.forms[0] – получение первой формы на странице 
    document.forms.loginForm – получение формы с атрибутом name=“loginForm” 

    form.elements[0] – получение первого элемента в форме 
    form.elements.login – получение элемента формы с атрибутом name=“login” 
    form.login – получение элемента формы с атрибутом name=“login”
*/

// ______1.1 Пример формы___________________________________!!!!! 
// Тег form применяется для создания формы с элементами управления, которая будет использоваться для обмена данными 
// между пользователем и сервером.
// Элементы управления формы представляются несколькими тегами, основной из которых input.
// Атрибут action элемента form указывает на то, какой адрес на сервере будет обрабатывать данные формы.
// После нажатия на кнопку submit содержимое формы будет отправляться по адресу указанному в action.

// Данный пример иллюстрирует структуру HTML кода, но не включает серверную сторону, поэтому при нажатии на кнопку
// "Вход", будет переход на несуществующую страницу login.php


/*
    <form name="loginForm" action="http://test.com/login.php" method="POST">
        <div class="form-grop">
            <label>Логин</label>
            <input type="text" name="loginInput">
        </div>
        <div class="form-grop">
            <label>Пароль</label>
            <input type="password" name="passwordInput">
        </div>
        <div class="form-grop">
            <input type="submit" value="Вход">
        </div>
    </form>
*/




// ______1.2. Обращения к элементам формы!____________________________________!!!!!
/*
    <form name="loginForm">
        <div class="form-grop">
            <label>Логин</label>
            <input type="text" name="loginInput">
        </div>
        <div class="form-grop">
            <label>Пароль</label>
            <input type="password" name="passwordInput">
        </div>
        <div class="form-grop">
             <input type="submit" value="Вход"> <!-- Отправляет запрос на сервер, страница перегружается -->
        </div>
    </form>

    <a href="#" id="checkFormButton">Проверить форму</a> <br />
    <a href="#" id="checkValuesButton">Проверить значения элементов</a>
*/

// Способы получения форм текущего документа
let form1 = document.forms.loginForm; // получение формы с атрибутом name=loginForm
let form2 = document.forms[0]; // получение первой формы в документе
let form3 = document.querySelector("[name=loginForm]"); // через CSS селектор

document.querySelector("#checkFormButton").addEventListener("click", function () {
    // все элементы, содержащиеся в форме, доступны через коллекцию elements на объекте формы
    for (let i = 0; i < form1.elements.length; i++) {
        const element = form1.elements[i];
        console.log(element.name + " = " + element.value);
    }
});

document.querySelector("#checkValuesButton").addEventListener("click", function () {
    // получить доступ к элементу управления можно по имени на коллекции elements объекта form
    // form.elements.<element-name>
    console.log(form1.elements.loginInput.value);
    console.log(form1.elements.passwordInput.value);

    // альтернативная, более короткая форма записи, но может повлечь ошибки, если значение name во время выполнения будет изменено
    // атрибут name элементов во время выполнения меняется крайне редко 
    // form.<element-name>
    console.log(form1.loginInput.value);
    console.log(form1.passwordInput.value);
});




// ______1.3. Перебор всех елементов формы!____________________________________!!!!!
/*
    <form>
        Текстовое поле ввода <input> <br>
        Текстовое поле ввода <input type="text"> <br>
        Поле для пароля <input type="password"> <br>
        <!-- Для полей tel, email, number, на телефоне будут отображаться дополнительные символы при отображении виртуальной клавиатуры -->
        Поле для телефона <input type="tel"> <br>
        Поле для email адреса <input type="email"> <br>
        Поле для числового значения <input type="number"> <br>
    </form>

    <button id="check">Проверить значения</button>
*/
document.querySelector("#check").addEventListener("click", function () {
    const form = document.forms[0];
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        console.log(element.type + " " + element.value);
    }
});




//1.4. Робота з датоюю в форме!
/*  HTML
    <form>
        тип date <input type="date" name="input1"><br>
        тип time <input type="time" name="input2"><br>
        тип week <input type="week" name="input3"><br>
    </form>

    <button id="check">Проверить значения</button>
    <p id="time"></p>
*/
document.querySelector("#check").addEventListener("click", function () {
    const form = document.forms[0];
    console.log(form.input1.value);     //2022-10-13
    console.log(form.input2.value);     //23:33
    console.log(form.input3.value);     //2022-W41

    let date = new Date(form.input1.value);
    console.log(date);  //Wed Oct 05 2022 03:00:00 GMT+0300 (Восточная Европа, летнее время)


    //вывод времени
    let time = document.querySelector("#time");
    setInterval(showTime, 1000);

    function showTime(){
        let date = new Date();
        time.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}: ${date.getMilliseconds()}`;
    }
});




//1.5. Робота з 'radio' и 'checkbox' в форме!
/*
    <form>
        Выберите валюту: <br>
        <!-- для того, чтобы элементы типа radio объединялись в группу, в которой только один элемент может быть выделенным, нужно указать общее значение для атрибута name -->
        USD<input type="radio" name="currency" value="USD" checked><br>
        UAH<input type="radio" name="currency" value="UAH"><br>
        RUB<input type="radio" name="currency" value="RUB"><br>
        Согласен с условиями использования <input type="checkbox" name="termsAccepted">
    </form>

    <button id="checkButton">Проверить значения</button>
*/
const form = document.forms[0];

let check = form.termsAccepted;                     //Берем input "Согласен с условиями использования"
let btn = document.querySelector("#checkButton");   //Берем button "Проверить значения"

check.onclick = function(){
    if(this.checked){
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

document.querySelector("#checkButton").addEventListener("click", function () {
    console.log("Согласен с условиями " + form.termsAccepted.checked);
    console.log("Выбранная валюта " + form.currency.value);
});




//1.6. Робота з випадающим списком в форме!
/* HTML
    Выберите валюту:
    <form>
        <select name="currency">
            <option value="USD">U.S. Dollar</option>
            <option value="RUB">Russian Ruble</option>
            <option value="UAH">Ukrainian Hryvnia</option>
            <option value="EUR" selected>Euro</option> <!-- данный элемент будет выбран из-за атрибута select  -->
            <option value="PLN">Polish Zloty</option>
            <option value="CHF">Swiss Franc</option>
        </select>
    </form>
    <br>
    <button id="checkButton">Проверить значения</button>
    <button id="selectButton">Поменять выбранный элемент</button>
*/
const form = document.forms[0];

document.querySelector("#checkButton").addEventListener("click", function () {
    console.log("Выбранное значение " + form.currency.value);
    console.log("Выбранный индекс "+ form.currency.selectedIndex);
});

//устанавливаем нужный нам элемент из выпадающего списка
document.querySelector("#selectButton").addEventListener("click", function () {
    //Варианты обращения к одному из элементов

    form.currency.value = "CHF";
    // form.currency.selectedIndex = 0;
    // document.querySelector("[value='USD']").selected = "true";
});



//1.7. Более подробные примеры использования формы описаны в уроке "4. JavaScript Базовый - Lesson 11 - Forms and Controls")




// ______2. Проверка данных формы(валидация)!____________________________________!!!!!
/*
    Проверка данных формы или валидация - это процесс, при котором выясняется, 
    подходят ли полученные данные для приложения, и если это не так, 
    пользователь получает информацию для устранения ошибок.
*/

//2.1. Простой пример, проверка поля на пустоту!
/* HTML
    <form action="https://itvdn.com/ru/catalog" method="GET">
        <div class="form-group">
            <label>Запрос</label>
            <input type="text" name="search">
        </div>
        <div class="form-group">
            <input type="submit" value="Поиск">
        </div>
    </form>
*/
const form = document.forms[0];
// submit - событие происходит при нажатии на кнопку submit и отправке данных формы на сервер.
form.addEventListener("submit", function (event) { 
    alert("Событие submit");

    // если поле ввода пустое - не отправляем форму
    if(form.search.value.length == 0) {
        event.preventDefault(); // отмена отправки формы
    }
});


//2.2. Фокус, потери фокуса.
/* HTML
<form>
    <form action="https://itvdn.com/ru/catalog" method="GET">
        <label>Запрос</label>
        <input type="text" name="search">
    </div>
    <div class="form-group">
        <input type="submit" value="Поиск">
    </div>
</form>
*/


const form = document.forms[0];
// focus - событие происходит, когда элемент получает фокус. Событие не всплывает. Например, при клике по элементу или при переходе
// на элемент при помощи клавиши Tab. Событие указывает на то, что пользователь готовится к вводу данных.
// Может использоваться для инициализации данных, необходимых во время ввода. 
form.search.addEventListener("focus", function () { 
    console.log("focus") 
    this.style.outline = "2px solid green";
});

// blur - событие происходит в момент потери фокуса, когда выполняется клик за пределами элемента управления, 
// или фокус получает другой элемент управления. Событие не всплывает. Событие указывает на то, что пользователь ввел данные.
// Чаще всего используется для проверки введенных пользователем данных
form.search.addEventListener("blur", function () { 
    console.log("blur") 
    this.style.outline = "none";
});

// Так как события focus и blur не поддерживают всплытие, есть дополнительные события focusin и focusout которые поддерживают
// всплытие, но обработчики для этих событий могут быть добавлены только с помощью addEventListener



//2.3. Autofocus!
/* HTML
    <form action="https://itvdn.com/ru/catalog" method="GET">
        <div class="form-group">
            <label>Запрос</label>
            <input type="text" name="search" autofocus > <!-- autofocus - устанавливает фокус на элементе управления при загрузке страницы -->
        </div>
        <div class="form-group">
            <input type="submit" value="Поиск">
        </div>
    </form>
*/
//JavaScript        
const form = document.forms[0];
form.search.focus(); // установка фокуса через JavaScript
setTimeout(function(){form.search.blue(), 3000}); //Убираем фокус через 3с.


//2.4 Постоянный фокус, пока не прошла валидация!
const form = document.forms[0];
form.search1.focus(); // установка фокуса через JavaScript
form.search1.addEventListener("blur", function(){
    if(this.value.length == 0){
        this.focus()
    }
})


//2.5. Примеры использования событий в форме 'input', 'change', 'cut', 'copy'
/* HTML  
<form>
    <div class="form-group">
        <label>Поле 1 (input)</label>
        <input type="text" name="field1">
    </div>
    <div class="form-group">
        <label>Поле 2 (change)</label>
        <input type="text" name="field2">
    </div>

    <div class="form-group">
        <label>Поле 3 (cut)</label>
        <input type="text" name="field3" value="lorem ipsum">
    </div>
    <div class="form-group">
        <label>Поле 4 (copy)</label>
        <input type="text" name="field4" value="lorem ipsum">
    </div>
    <div class="form-group">
        <label>Поле 5 (paste)</label>
        <input type="text" name="field5">
    </div>
</form>
*/
const form = document.forms[0];

form.field1.addEventListener("input", function () {
    console.log("Событие input - " + form.field1.value);
});

form.field2.addEventListener("change", function () {
    console.log("Событие change - " + form.field2.value);
});

form.field3.addEventListener("cut", function (e) {
    const selection = document.getSelection();
    console.log(`Событие cut - ${form.field3.value} (in buffer ${selection})`);
});

form.field4.addEventListener("copy", function (e) {
    //const selection = document.getSelection();
    //console.log(`Событие copy - ${form.field4.value} (in buffer ${selection})`);

    e.preventDefault();//отмена собития 'copy'
    alert("Текст нельзя копировать!");
});

form.field5.addEventListener("paste", function (e) {
    //console.log(`Событие paste - ${form.field5.value} (in buffer ${e.clipboardData.getData("text")})`);
    e.preventDefault();
    alert("В это поле текст нужно ввоить вручную!");
});


//2.6. Валидация, проверка полей через HTML описанА в уроке "4. JavaScript Базовый -  Lesson 12 - Form Validation"



//3. Регулярное выражения!
/*
<form>
    <div class="form-group">
        <label>Номер авто</label>
        <!-- 
            pattern - атрибут используется для проверки введенного значения с помощью регулярного выражения
            placeholder - текст для поля ввода, который исчезнет при вводе данных пользователем
        -->
        <input type="text" name="vehicleNumber" pattern="[а-яA-Я]{2}\d{4}[а-яА-Я]{2}" placeholder="AА0000АА" required>
    </div>
    <div class="form-group">
        <input type="submit" value="Поиск">
    </div>
</form>
*/

/*
    a - соответствует символу а
    abc - соответствует символу a, далее b, далее c

    \d - любая цифра
    \D - любой символ, не являющийся цифрой
    \w - любой символ латинского алфавита, цифры и символ нижнего подчеркивания
    \W - все символы, кроме символов латинского алфавита, цифр и символ нижнего подчеркивания
    [] - группа символов, указанных в скобках, например [abc] соответствует символу a или b или c
    [a-z] - любой символ от а до z (в нижнем регистре)
    [0-9] - любой символ от 0 до 9
    [0-9a-zA-Z] - любой символ от 0 до 9 или любой символ латинского алфавита в нижнем или верхнем регистре
    квантификаторы
    * - 0 или более раз
    + - 1 или более раз
    ? - 1 или 0 раз
    {n} - n раз
    {n,m} - от n до m раз

    \d+ - соответствует строке, состоящей из одного и более цифровых символов, например, 1, 22, 123, 7777 и т.д.
    \d{2,4} - соответствует строке, состоящей из двух, трех или четырех цифровых символов, например, 10, 88, 123, 5671 и т.д.
    [a-z]{3}\d{2} - три любых символа латинского алфавита и две любые цифры, например, abc12, rgb43
    abc\d\d\d - символы abc и три цифры, например, abc111, abc123 и т.д.
    https? - символы http и 1 или 0 символов s - http или https

    Больше о регулярных выражениях в JavaScript https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions
*/


// ______4. Cookeis!____________________________________!!!!!
/*
    Cookies - небольшой фрагмент данных, который сохраняется в браузере.
    Веб браузер отправляет эти данные каждый раз, когда выполняет запрос на сайт, с которого был получен cookie.
    Ограничение по объему данных – 4Кб.

    Чаще всего используются для: 
    - Управление состояния 
    - Персонализации 
    - Отслеживания действий


    Атрибут  - Описание 
    path     - указывает страницы, на которых будет работать данный cookie Например, ‘/’, ‘/home’, ‘/admin/user’
    max-age  - Время жизни в секундах 
    expires  - Дата, когда cookie должен быть удален., Например, 20 May 2022 05:15:05 GMT. 
    samesite - Настройка необходима для защиты от уязвимости CSRF. Не поддерживается старыми браузерами (до 2017 года). 
               Возможные значения strict, lax или none. 
    secure   - Сookie будет отправляться на сервер только по HTTPS. 
    httpOnly - Сookie используются только для HTTР запросов. Получить доступ через JS невозможно.
*/

//4.1. Простой пример, создания cookie!
document.cookie = "hello=world"; // добавление куки c именем hello и значением world
document.cookie = "test=123"; // добавление куки c именем test и значением 123
console.log(document.cookie); // чтение всех куки, относящихся к данному домену
//hello=world; test=123

console.log(typeof document.cookie) //string


document.cookie = "test=000"; // изменение значения куки с именем test
console.log(document.cookie);
//hello=world; test=000

// Chrome игнорирует установку куки из локальных файлов, но данный код будет работать корректно, когда 
// будет опубликован на сервер.
// На момент написания этих примеров, локально, работу данного кода можно проверить в других браузерах, которые
// не используют движок Chromium, например, Firefox.



//4.2. cookie-parameters!
let year = 365*24*60*60;
//document.cookie = "color=green; max-age=30; path=/;";
document.cookie = "color=green; max-age=30"+year+"; path=/;"; 

let expiresDate = new Date("05-20-2023");
document.cookie = "color=green; max-age=30"+expiresDate.toUTCString+"; path=/;"; 

// path - указывает страницы, на которых будет работать данный куки
// /catalog на страницах /catalog/folder и т.д. но на странице /home работать не будет
// / - для всех страниц

// max-age - время жизни, значения в секундах
// expires - дата, когда значение должно быть удалено, пример - значения 20 May 2022 05:15:05 GMT

// samesite - значения strict, lax или none. Настройка необходима для защиты от уязвимости CSRF
// не поддерживается старыми браузерами (до 2017 года)
// CSRF - https://ru.wikipedia.org/wiki/Межсайтовая_подделка_запроса
// Документация по samesite https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite

// secure - куки можно отправлять только по HTTPS
// httpOnly - куки используются только для HTTP запросов и не могут быть получены с помощью JS кода

document.querySelector("button").addEventListener("click", function() {
    alert(document.cookie);
});



//4.3. encodeURIComponent - метод для кодирования строки в компонент, который будет использоваться в URI
// encodeURIComponent - метод для кодирования строки в компонент, который будет использоваться в URI
// Этот метод заменяет все символы, кроме символов латинского алфавита, цифр и символов _ . ! ~ * ' ( )
// Метод используется для предотвращения некорректных запросов, например,
// строка без использования URI кодировки - https://itvdn.com/search?term=position=absolute
// строка с использованием URI кодировки - https://itvdn.com/search?term=position%3Dabsolute
// Во второй строке символ = был заменен на %3D

// Cookie значение является строкой. Для гарантирования правильного форматирования используйте
// метод encodeURIComponent при записи значений и decodeURIComponent при чтении

// кодирование
console.log("Hello world");                         //Hello world
console.log(encodeURIComponent("Hello world"));     //Hello%20world

console.log("Привет мир");                          //Привет мир
console.log(encodeURIComponent("Привет мир"));      //%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80

console.log("10=20;value=123?&;test=1;");                       //10=20;value=123?&;test=1;
console.log(encodeURIComponent("10=20;value=123?&;test=1;"));   //10%3D20%3Bvalue%3D123%3F%26%3Btest%3D1%3B

// декодирование
console.log(decodeURIComponent("10%3D20%3Bvalue%3D123%3F%26%3Btest%3D1%3B")); //10=20;value=123?&;test=1;

// пример записи значения в cookie
document.cookie = "login="+encodeURIComponent("super user"); //login=super%20user; color=green
alert(document.cookie);


//4.4. set, get, delete Cookeis
/* HTML
    <button id="writeButton">Записать</button>
    <button id="readButton">Прочитать</button>
    <button id="deleteButton">Удалить</button>
*/

//Записать
function setCookie(name, value) {
    let encodedValue = encodeURIComponent(value);
    document.cookie = `${name}=${encodedValue}`;
}

//Прочитать
function getCookie(name) {
    let cookie = document.cookie; // a=10; b=20; c=30
    let pos = cookie.indexOf(name + "=");

    // Если cookie с указанным именем найден, извлечь его значения.
    if (pos != -1) {
        let start = pos + name.length + 1;
        let end = cookie.indexOf(";", start);

        if (end == -1) {
            end = cookie.length;
        }

        // substring - вырезать значения из строки по индексам указанным в параметрах
        let value = cookie.substring(start, end);

        return decodeURIComponent(value);
    }
}
//Удалить
function deleteCookie(name) {
    document.cookie = `${name}=;max-age=0`; // для удаления cookie устанавливается max-age равный 0
}



let readBtn = document.querySelector("#readButton");        //Прочитать
let writeBtn = document.querySelector("#writeButton");      //Записать
let deleteBtn = document.querySelector("#deleteButton");    //Удалить



//Записать
writeBtn.addEventListener("click", function () {
    setCookie("myCookie", "Тестовое значение = 123!");
});

//Прочитать
readBtn.addEventListener("click", function () {
    let value = getCookie("myCookie");
    if (value)
        alert(value);
    else
        alert("Значенеи не найдено");
});
//Удалить
deleteBtn.addEventListener("click", function () {
    deleteCookie("myCookie");
});














// ______5. Web Storage!____________________________________!!!!!
/*
    Web Storage API – предоставляет доступ к инструментам сохранения ключ/значение в памяти браузера. 
    Есть два варианта хранилища – localStorage и sessionStorage. 
    Лимит на хранение данных 5+ Мб (отличается в разных браузерах).

    setItem(key, value) - сохраняет значение по ключу 
    getItem(key)        - возвращает значение по ключу 
    removeItem(key)     - удаляет запись по ключу 
    clear()             - удаляет все записи для текущего источника 
    key(index)          - возвращает имя ключа по указанному индексу 
    length              - возвращает количество ключей в хранилище


                          sessionStorage!                localStorage!
    время жизни         - Пока открыта страница         Без ограничения 
    область видимости   - Текущая страница              Все страницы источника
*/

//5.1. localStorage - объект, позволяющий хранить информацию в памяти браузера.
/*  HTML
    <form name="writeForm">
        <div class="form-group">
            <label>Ключ</label>
            <input type="text" name="keyInput" required>
        </div>
        <div class="form-group">
            <label>Значение</label>
            <input type="text" name="valueInput" required>
        </div>
        <div class="form-group">
            <input type="submit" value="Запись">
        </div>
    </form>

    <br>

    <form name="readForm">
        <div class="form-group">
            <label>Ключ</label>
            <input type="text" name="keyInput" required>
        </div>
        <div class="form-group">
            <input type="submit" value="Чтение">
        </div>
    </form>
*/
document.forms.writeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = document.forms.writeForm;

    let key = form.keyInput.value;
    let value = form.valueInput.value;

    //setItem(key, value) - сохраняет значение по ключу
    
    //1 способ записи!
    localStorage.setItem(key, value); // сохранение значения по ключу

    //2 способ записи! 
    //localStorage.myKey = "exemp!!!"; //(key = myKey; value = exemp!!!)

    //3 способ записи! 
    //localStorage["strKey"] = 777; //(key = strKey; value = 777)



    // localStorage - объект, позволяющий хранить информацию в памяти браузера.
    // Хранение информации в localStorage не имеет ограничения по времени и может быть удалена
    // с помощью JavaScript код.

    // ключ и значение, которые записываются в localstorage, должны быть строковыми

    // Источник - протокол, домен и порт
    // например, https://itvdn.com - источник
    
    // http://example.com и http:/example.com:8080 разные источники так как отличаются значением порта
    
    // Для каждого источника создается свой экземпляр хранилища. В зависимости от браузера лимит на хранилище 5 Мб.

    form.reset();
});

//// чтение значения по ключу, если ключ не найден, возвращается null
document.forms.readForm.addEventListener("submit", function (e) {
    e.preventDefault();//отмена отправки данных, отмена перезапуска

    const form = document.forms.readForm;
    let key = form.keyInput.value;

    let value = localStorage.getItem(key); // чтение значения по ключу, если ключ не найден, возвращается null
    alert(value);
});



//5.2. Вывод всех ключ значения из localStorage
for (let i = 0; i < localStorage.length; i++) { // length - количество ключей в хранилище
    let key = localStorage.key(i); // key(i) - получить имя ключа по заданной позиции
    console.log(`${key} = ${localStorage.getItem(key)}`);
}



//5.3. Удаления из localStorage!
/*
    <div class="form-group">
        <label>Ключ</label>
        <input id="keyInput" type="text">
    </div>
    <div class="form-group">
        <button id="deleteButton">Удалить</button> <button id="deleteAllButton">Удалить все</button>
    </div>
*/
let deleteButton = document.querySelector("#deleteButton");
let deleteAllButton = document.querySelector("#deleteAllButton");
let keyInput = document.querySelector("#keyInput");

//Удалить по ключю
deleteButton.addEventListener("click", function () { 
    localStorage.removeItem(keyInput.value);
});
//Удалить все
deleteAllButton.addEventListener("click", function () { 
    localStorage.clear();
});



//5.4. Робота из 'sessionStorage', практически та же что и с 'localStorage',
//     Урок "4. JavaScript Базовый -  Lesson 13 - Cookeis and Web Storage.




// ______6.  JSON - JavaScript Object Notation (Сохранения js кода в виде строки)!____________________________________!!!!!

//6.1. Простой пример JSON
// JSON - JavaScript Object Notation
// это формат обмена данными, основанный на JavaScript. Формат не зависим от языка, и может использоваться
// с разными языками программирования.

let user = {
    name: "Ivan",
    age: 25,
    email: "ivan@example.com"
};


let jsonString = JSON.stringify(user); // сохранение объекта в JSON (также этот процесс называется сериализацией)
console.log(jsonString);//{"name":"Ivan","age":25,"email":"ivan@example.com"}

localStorage.strObj = jsonString;//записали значения в localStorage

let objectFromJson = JSON.parse(jsonString); // восстановление объекта из JSON строки (десериализация)
console.log(objectFromJson);


//_____7.   Событие storage возникает в момент обновления localStorage____________________________________!!!!!
//          Описано в уроке "4. JavaScript Базовый -  Lesson 13 - Cookeis and Web Storage".
/*
    <button>CHANGE</button>
*/
let i = 0;

localStorage.exemp = "abc";
let btn = document.querySelector("button");

btn.onclick = function(){
    i++;
    localStorage.exemp = i + "new!!!"
}
// Событие storage возникает в момент обновления localStorage
// Событие не срабатывает на той же странице, на которой были внесены изменения в Storage

// Для проверки работы данного примера запустите эту страницу вместе с примером 005-local-storage.html
// (или любым другим, где происходит смена localStorage)
window.addEventListener("storage", function (e) {
    console.log(`key:${e.key}, oldValue:${e.oldValue}, newValue:${e.newValue}, url:${e.url}, storageArea:${e.storageArea}`);
});