/*  TypeScript – типизированное надмножество языка JavaScript, компилируется в чистый JavaScript.
    https://www.typescriptlang.org/

    npm install -g typescript
    tsc helloworld.ts //компиляция файлу 'helloworld.ts'
    tsc -w helloworld.ts //автокомпиляция файлу 'helloworld.ts'

    tsc -w --outFi le res.js app.ts exemp.ts //компиляция 2х файлов .ts в один файл res.js
    tsc -w app.ts --outdir dist //коспиляция js файлв в папку dist

    1. Tsconfig.json
    2. Простой пример!
*/
// ______1. Tsconfig.json____________________________________!!!!!
/*
Tsconfig.json – файл, который указывает на то, что текущая директория является
корнем TypeScript проекта.
При запуске tsc без указания файла для компиляции будут использоваться настройки
из файла tsconfig.json

Болле подробно описано в уроке "1. Введение. Переменные и функции"!
{
    "compilerOptions": {
        "module": "commonjs",       //Как будут генерироваться модули
        "noImplicitAny": true,      //Нельзя использовать any
        "removeComments": true,     //Удалять комментарии
        "sourceMap": true,          //Создать map файлы для отладки
        "outDir": "dist"
    },
}
*.
// ______2. Простой пример____________________________________!!!!!
/*
    <head>
        <title>Hello World App</title>
        <script src="app.js"></script>
    </head>
*/
var Message = /** @class */ (function () {
    function Message(text) {
        this.messageText = text;
    }
    Message.prototype.showAlert = function () {
        alert(this.messageText);
    };
    return Message;
}());
var test = new Message("Hello world");
test.showAlert();
//Остановился на 40хв
