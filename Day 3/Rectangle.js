import S  from "./shape.js";

export default class Rectangle extends S{
    constructor(side,Aside){
        super(side)
        this.Aside = Aside
    }
    area(){
        return this.side * this.Aside
    }

    perimeter(){
        return 2*(this.side+this.Aside)
    }
}
