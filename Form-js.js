/*
    1. Формы и элементы управления!
    1.1. Пример формы!
    1.2. Обращения к элементам формы!
    1.3. Перебор всех елементов формы!
    1.4. Робота з датоюю в форме!
    1.5. Робота з 'radio' и 'checkbox' в форме!
    1.6. Робота з випадающим списком в форме!
    1.7. Более подробные примеры использования формы описаны в уроке "4. JavaScript Базовый - Lesson 11 - Forms and Controls")

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