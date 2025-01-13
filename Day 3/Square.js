import R from "./Rectangle.js"

export default class Square extends R{
    constructor(side){
        super(side , side)
    }
    // area(){
    //     return this.side * this.side
    // }
    // perimeter(){
    //     return this.side * 4
    // } 
}