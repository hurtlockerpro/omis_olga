
let x1:number = 10
let str:string = "Hello TypeScript"

let decimal: number = 6;

let sentence: string = `Hello, my name is ${str}.

I'll be ${10 + 1} years old next month.`;

let list1 = [1, 2, "3", "text", true];

let list: number[] = [1, 2, 3];
let list2: string[] = ["1", "2", "3"];

let x2: [string, number];
x2 = ["hello", 10]; // OK

// NaN
// undefined
// null

enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }
  let c: Color = Color.Green;


  
  enum Month {
    January = 1,
    February = 2,
    March = 3,
  }
  let m:Month = Month.January


  let Color1 = {    
      Red:1,
    Green:2,
    Blue: (x, y) => { 1 }
  }

  function multiply():number{

    return 1
  }

  function multiply2():void{
  }

function multiply3(){
}

interface IUser{
    id:number;
    firstname:string;
    getFullName(lastname:string):string;
}

let employee:IUser = {
    id:1,
    firstname:'Vladimir',
    getFullName:function(lastname:string):string {
        return this.firstname + ' ' + lastname;
    }
}

console.log('id: ', employee.id)
console.log('firstname: ', employee.firstname)
console.log('fullname: ', employee.getFullName('Kjahrenov'))

class User implements IUser{
    public id:number = 10;
    public firstname:string;
    getFullName(lastname:string):string{
        return ''
    };
}

let firstname:string = ''
let clsUser = new User()
//clsUser.




const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
 
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
 
// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));



// 
// MY MODULE IMPORT 
//
import { Colors } from './myclass'
const mydiv = new Colors('red', '#189E25');
console.log (mydiv.showDiv())


