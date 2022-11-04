/*
    1. Микроданные "schema.org".
    1.1. Простой пример!
    1.2. Углубленный пример, вариант №1!
    1.3. вариант №2 с помощью JS, более удобен!
    1.4. Пользовательские атрибуты данных!


    2. Инструмент 'DragAndDrop'(перемещения элементов), описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 2 - Микроданные, Геолокация, Drag&Drop"!
    

    3. Геолокация. Источники Информации
*/




// ______1.Микроданные. ____________________________________!!!!!
/*
	Микроданные – это спецификация HTML5 которая позволяет хранить внутри разметки дополнительные данные 
	со смысловой нагрузкой, позволяющие предоставить более богатую информацию о странице для поисковых машин.

	schema.org –словари микродата!!!(слова,свойства - для описание разных объектов)
*/


//1.1. Простой пример!
/*
	MicroData - способ семантически размечать сведенья о разнообразных сущностях на веб страницах.

	Атрибут itemscope применяется для определения области действия микро­данных — набора пар «имя/значение».

	Значения атрибута itemprop устанав­ливают имена свойств и связанную с ними информацию, в данном случае содержимое тегов span. 
	http://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5 - микроданные на Википедии 

/*
    <p itemscope>
        <span itemprop="inovator">Стив Джобс</span> <br>
        <span itemprop="company">Компания Apple</span>
        <span itemprop="year">1976</span>
    </p>
*/
    
/*
    http://www.google.com/webmasters/tools/richsnippets - инструмент проверки структуры данных
    Перейдите по указанной выше ссылке и скопируйте HTML код текущей страницы в поле ввода инструмента проверки.    
*/



//1.2. Углубленный пример, вариант №1!
/*

	<!-- schema.org — Официальный сайт словаря семантической разметки -->
	<!-- itemtype="http://schema.org/Person" - указывает что section содержит информацию о человеке -->
	<section itemscope itemtype="http://schema.org/Person">
		<div class="block">
			<!-- itemprop="name" - указывает что, это не просто h1, а элемент в котором находиться имя человека-->
			<h1 itemprop="name">Стивен Хокинг</h1>
			<img  itemprop="image" src="img/Stiven.jpg">
			<!-- itemtype="http://schema.org/Organization" - Элемент содержит данные о организации -->
			<p itemprop="affiliation" itemscope itemtype="http://schema.org/Organization">
       	   		<span itemprop="name">Кембриджский университет</span>,
       	   		<span itemprop="url">http://www.cam.ac.uk/</span>
       		</p>
       		<!-- itemprop="description" - указывает описание -->
       	 	<p itemprop="description">
        		Английский физик-теоретик и популяризатор науки. Изучал теорию возникновения мира в результате Большого взрыва, а 	также теорию чёрных дыр. Высказал гипотезу, что чёрные дыры малой массы теряют энергию, испуская излучение Хокинга 	по своему горизонту событий, и, в конце концов, «умирают»
        	</p>
			<p itemprop="birthDate">Дата рождения: 8 января 1942</p>
			<p itemprop="deathDate">Дата смерти: 14 марта 2018</p>
			<a itemprop="url" href="http://www.hawking.org.uk/">http://www.hawking.org.uk/</a>
		</div>
		<!-- На сайте schema.org есть огоромная коллекция описывающих атрибутов-->
	</section>
*/

//1.3 Углубленный пример, вариант №2 с помощью JS!
/*
	<script type="application/ld+json">
		{
			"@content": "http://schema.org",
			"@type": "Person",
			"name": "Стивен Хокинг",
			"image": "img/Stiven.jpg",
			"affiliation": {
				"@type": "Organization",
				"name": "Кембриджский университет",
				"url": "http://www.cam.ac.uk/"
			},
			"description": "Английский физик-теоретик и популяризатор науки.",
			"url": "http://www.cam.ac.uk/"
		}
	</script>
*/


//1.4. Пользовательские атрибуты данных!
/*
	Data-name – Создание пользовательского атрибута где Data- это префикс а name уникальное имя.
	Data атрибуты могут принимать любую строку.

	Пример создания пользовательского атрибута:
	data-link = “google.com”
	data-validation-email = “введите правильный email”

	Обращение к атрибутам данных через JavaScript:

	1)  let v = e.getAttribute("data-link");		2)  let v = e.dataset.link; 
		e.setAttribute("data-link","new val");		    e.dataset.link = "new value";

*/

/*	HTML
	<h1>Гараж автомобилей</h1>
	 <ul>
	    <!-- data-* универсальный атрибут, позволяет добавить пользовательские данные к любым DOM элементам-->
	    <li data-year="1996" data-соlог="белый" data-engine="VR6">Cabrio</li>
	    <li data-year="1993" data-color="фиолетовый" data-engine="VR6">Corrado</li>
	    <li data-year="2008" data-color="красный" data-engine="2.0T">Eos</li>
	    <li data-year="2003" data-color="синий" data-engine="W8">Passat</li>
	</ul>
	<p id="res"></p>
*/
let res = document.querySelector("#res");
let liList = document.querySelectorAll("li");
for(let i = 0; i < liList.length; i++){
    liList[i].onclick = function(){
        console.log(this.dataset)
        //хранятся название и параметры всех атрибутов! 'DOMStringMap {year: '1996', соlог: 'белый', engine: 'VR6'}'
        res.innerHTML =`Год выпуска - ${this.dataset.year} <br>
        Цвет - ${this.dataset.color} <br>
        Двигатель - ${this.dataset.engine}
        `
    }
}




// ______2.DragAndDrop. ____________________________________!!!!!


// ______2.Геолокация. Источники Информации. ____________________________________!!!!