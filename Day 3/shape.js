export default class Shape{
    constructor(side){
        this.side = side
    }
    toString(){
        return`the area is ${this.area()} and the perimeter is ${this.perimeter()}`;
    }
    area(){
        return Math.PI * this.side * this.side
    }
    perimeter(){
        return 2*Math.PI *(this.side)
    }
}

