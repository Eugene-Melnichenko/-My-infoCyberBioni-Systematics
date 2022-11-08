/*
    1. WebWorker.
    1.1. Простой пример!
	1.2. Простой таймера, через фоновий поток!
	1.3. Калькулятор через фоновий поток!
	1.4. Объяснение расчета числа фибоначчи через фоновий поток
	описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 3 - WebWorker. Audio, Video"!
	1.5. Пример запроса в фоновом потоке описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 3 - WebWorker. Audio, Video"!


    2. Audio.
    2.1. Audio простой пример!
    2.2. Создание своего аудио проигрывателя!

    3. Video.
    3.1. Отображения видео, простой пример!
    3.2. Видео как background - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 3 - WebWorker. Audio, Video"!
    3.3. Создание собственого плеера - описано в уроке "5. HTML5&CSS3 Advanced (продвинутий) - Lesson 3 - WebWorker. Audio, Video"!
*/




// ______1.WebWorker. ____________________________________!!!!!
/*
	Web Workers – технология, предоставляющая средство для запуска скриптов в фоновом потоке.
	Поток Worker'а может выполнять задачи без вмешательства в пользовательский интерфейс. К тому же, они могут осуществлять ввод/вывод, используя XMLHttpRequest.
	При передаче сообщений между Worker и основным потоком – данные копируются, а не делятся.
	

	РostMessage() – метод, для передачи сообщений между Worker и главным потоком.
	Onmessage – событие, срабатывающее при получении данных.
	Data – объект, содержащий информацию про передачу данных. 
	termitane() – метод для остановки работы Worker, и освобождение ресурсов.

	Worker имеет доступ к: 
	1. Объекту navigator. 
	2. Объекту location (только чтение). 
	3. Методу importScripts() для доступа к файлам сценариев в том же домене. 
	4. Объектам JavaScript, такие как Object, Array, Date, Math, String. 
	5. Объекту XMLHttpRequest. 
	6. Методам setTimeout() и setInterval().
*/


//1.1. Простой пример!
//Создание потока (Web Worker) в index.html
/*	HTML
	<body>
	    <div>Ответ потока: <span id="output">...</span></div>
	</body>
*/

		if (window.Worker) {
		    //Создание нового экземпляра Worker
		    let worker = new Worker("worker1.js"); //!!__________Указуем имя файла фонового потока!
		    // Отправка данных потоку.
		    // Когда воркер получит сообщение в нем произойдет message
		    worker.postMessage('Hello world');
		    // Привязка обработчика на событие message, которое будет возникать в случае если поток присылает данные.
		    worker.addEventListener("message", function (e) {
		        document.getElementById("output").innerHTML = e.data;
		    }, true);
		}

//Фоновий поток. В файле worker1.js
//Получив сообщение после "onmessage" события поток делает ответ.
	onmessage = function (e) {
	    console.log(e.data)
	    // Устанавливаем задержку времени на расчет
	    setTimeout(function () {
	    // Отправка данных основному потоку. На странице будет вызвано событие message
	    postMessage(e.data);
	     },2000)
	}





//1.2. Простой таймера, через фоновий поток!
/*	HTML
	<body>
	    <p>Count numbers: <output id="result"></output></p>
	    <button id="start">Запустить Worker</button>
	    <button id="stop">Остановить Worker</button>
	</body>
*/

//index.html
window.addEventListener("load", function () {
    let worker;
    document.getElementById("start").onclick = function () {
        if (window.Worker)  {
            if (typeof (worker) == "undefined") {
                worker = new Worker("worker2.js"); //!!!_________Фоновий поток в worker2.js____!
            }
            console.log("Запуск работы Worker")
            worker.onmessage = function (e) {
                document.getElementById("result").innerHTML = e.data;
            };
        }
        else {
            document.getElementById("result").innerHTML = "К сожалению Ваш брауезер не поддерживает технологию WebWorker";
        }
    }
    document.getElementById("stop").onclick = function () {
        //termitane()- метод, который останавливает работу Worker и освобождает ресурс потока от работы
        worker.terminate();
        console.log("Остановка работы Worker и прекращение работы счетчика");
        worker = undefined;
    }
}, false)

//"worker2.js";
let i = 0;
function timedCount() {
    i++;
    postMessage(i);
    setTimeout("timedCount()", 500);
}
timedCount();



//1.3. Простой таймера, через фоновий поток!
/* HTML
    <h1>Пример расчета значения в потоке</h1>

    <form border="1">
        <div>
            <label for="number1">Число 1: </label>
            <input type="text" id="number1" value="0">
        </div>
        <div>
            <label for="number2">Число 2: </label>
            <input type="text" id="number2" value="0">
        </div>
    </form>
    <p>Результат: 0</p>
*/
// в Index HTML
window.onload = function () {
    if (window.Worker) {
        //Вызов конструктора Worker()
        let worker = new Worker("worker3.js"); //!!!_________Фоновий поток в worker3.js____!
        let first = document.querySelector('#number1');
        let second = document.querySelector('#number2');
        let result = document.querySelector('p');
        //СОБИТИЯ onchange 
        first.onchange = function () {
            //отправка данных на Worker в ввиде массива
            worker.postMessage([first.value, second.value]);
            console.log('Сообщение отправлено');
        };

        second.onchange = function () {
            worker.postMessage([first.value, second.value]);
            console.log('Сообщение отправлено');
        };

        worker.onmessage = function (e) {
            result.textContent = e.data;
            console.log('Сообщение получено');
        };
    }
}

//worker3.js
onmessage = function (e) {
    console.log('Получено сообщение от основного потока');
    let workerResult = 'Результат: ' + (e.data[0] * e.data[1]);
    console.log('Отправка сообщения в основной поток');
    postMessage(workerResult);
}


// ______2.Audio. ____________________________________!!!!!
/*
	<audio> -элемент для отображения аудио файла на странице 
	Pause() – остановка.
	Play() – воспроизведение.
	СurrentTime – текущее время.
	Volume – уровень звука.
	Source – элемент для помещения самого файла аудиодорожки.
*/




//2.1. Audio простой пример!
/*
    <pre>
        autoplay - Звук начинает играть сразу после загрузки страницы.
        controls - Добавляет панель управления к аудиофайлу.
        loop - Повторяет воспроизведение звука с начала после его завершения.
        preload - Используется для загрузки файла вместе с загрузкой веб-страницы.
        src - Указывает путь к воспроизводимому файлу.
        muted -Логический атрибут, который указывает, будет ли изначально заглушено воспроизведение. По умолчанию false.
        volume - Громкость воспроизведения, в диапазоне от  0.0 (самая тихая) до 1.0 (самая громкая).
    </pre>
    <p>Прослушать песню:</p>
    <audio autoplay style="width:700px" controls>
        <source src="audio/aria.mp3">
        <!--Firefox не проигрывает mp3 файлы, и играет OGG-файлы вместо этого.-->
        <source src="audio/aria.ogg" type="audio/ogg; codecs=vorbis">
        Тег audio не поддерживается вашим браузером.
    </audio>
*/




//2.2. Создание своего аудио проигрывателя!
window.onload = function () {
    let $ = function (id) {
        return document.getElementById(id);
    }
    
    let check;
    let audio = $("player");
    
    $("play").onclick = function () {
        audio.play();
        //Длительность ауидо в секундах
        console.log(audio.duration);

        check = setInterval(checkAudioDuraction, 200);
    }
    $("pause").onclick = function () {
        audio.pause()
        clearInterval(check);
    }

    function checkAudioDuraction(){
        //текущее время аудиодорожки
        if (audio.currentTime > 5) {
            audio.pause();
            alert("Вы прослушали пробную версию. Для того, чтобы прослушать всю дорожку - зарегистрируйтесь")
            $("play").setAttribute("disabled","disabled")
            $("muteOn").setAttribute("disabled", "disabled")
            $("muteOff").setAttribute("disabled", "disabled")
        }
        clearInterval(check);
    }

    $("muteOn").onclick = function () {
        audio.volume+=0.1
    }
    $("muteOff").onclick = function () {
        audio.volume -=0.1
    }
    
}
/*
<body>
    <p>Загрузилась песня группы Ария - "Потерянный Рай"</p>
    <audio id="player">
        <source src="audio/aria.mp3" />
    </audio>
    <div>
        <button id="play">Воспроизведение</button>
        <button id="pause">Пауза</button>
        <button id="muteOn">Громкость +</button>
        <button id="muteOff">Громкость -</button>
    </div> 
</body>
*/



// ______3.Video. ____________________________________!!!!!
//3.1. Отображения видео, простой пример!
/*	HTML
    <!--autoplay - логический атрибут, если true - то видео начнет воспроизводится автоматически,
        после загрузки страницы
        controls - браузер отобразит элементы управления, чтобы позволить пользователю
        управлять воспроизведением видео, регулировать громкость, осуществлять перемотку,
        а также ставить на паузу и возобновление воспроизведение.
        muted - атрибут, который определяет значение по умолчания для звуковой дорожки,
        если атрибут указан, то аудио дорожка воспроизводиться не будет.
        poster - URL-адрес, указывающий на постер, который будет использован,
        пока загружается видео или пока пользователь не нажмет на кнопку воспроизведения.
        Если этот атрибут не указан, ничего не отображается до тех пор,
        пока не будет доступен первый кадр
        playbackRate - свойство, указывающее уровень скорости воспроизведения.-->


    <video width="600" height="400" poster="img/poster.png" controls>
        <source src="video/vsvideo.mp4" type="video/mp4">
        <source src="video/vsvideo.ogg" type="video/ogg">
        <source src="video/vsvideo.webm" type="video/webm">
        Ваш браузер не поддерживает Video HTML5
    </video>
    <p>
        <button id="towards">Увеличить скорость воспроизведения</button>
        <button id="backwards">Уменьшить скорость вопроизведения</button>
    </p>
*/
let video = document.querySelector("video");
let towards = document.querySelector("#towards")
let backwards = document.querySelector("#backwards");
towards.onclick = function () {
    video.playbackRate += 0.1

}
backwards.onclick = function () {
    video.playbackRate -= 0.1

}