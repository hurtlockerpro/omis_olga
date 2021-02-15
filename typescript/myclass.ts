import { hex } from "chalk";

export class Colors{
    private name:string;
    private hexcode:string;

    constructor(name:string, hexcode:string){
        this.name = name
        this.hexcode = hexcode
    }

    showDiv():string{
        return `<div style="background-color:
        ${this.hexcode};"></div>`
    }
}