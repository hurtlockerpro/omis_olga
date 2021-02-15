"use strict";
exports.__esModule = true;
var x1 = 10;
var str = "Hello TypeScript";
var decimal = 6;
var sentence = "Hello, my name is " + str + ".\n\nI'll be " + (10 + 1) + " years old next month.";
var list1 = [1, 2, "3", "text", true];
var list = [1, 2, 3];
var list2 = ["1", "2", "3"];
var x2;
x2 = ["hello", 10]; // OK
// NaN
// undefined
// null
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
})(Month || (Month = {}));
var m = Month.January;
var Color1 = {
    Red: 1,
    Green: 2,
    Blue: function (x, y) { 1; }
};
function multiply() {
    return 1;
}
function multiply2() {
}
function multiply3() {
}
var employee = {
    id: 1,
    firstname: 'Vladimir',
    getFullName: function (lastname) {
        return this.firstname + ' ' + lastname;
    }
};
console.log('id: ', employee.id);
console.log('firstname: ', employee.firstname);
console.log('fullname: ', employee.getFullName('Kjahrenov'));
var User = /** @class */ (function () {
    function User() {
        this.id = 10;
    }
    User.prototype.getFullName = function (lastname) {
        return '';
    };
    ;
    return User;
}());
var firstname = '';
var clsUser = new User();
//clsUser.
var chalk = require('chalk');
var log = console.log;
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// Nest styles of the same type even (color, underline, background)
log(chalk.green('I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'));
// ES2015 template literal
log("\nCPU: " + chalk.red('90%') + "\nRAM: " + chalk.green('40%') + "\nDISK: " + chalk.yellow('70%') + "\n");
// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
// 
// MY MODULE IMPORT 
//
var myclass_1 = require("./myclass");
var mydiv = new myclass_1.Colors('red', '#189E25');
console.log(mydiv.showDiv());
