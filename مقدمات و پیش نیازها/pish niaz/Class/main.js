class Redtongel{
    constructor(width, height){
        this.width = width;
        this.height = height
    }
}

class Domredtangel extends Redtongel{
    constructor(width, height, color){
        super(width, height)
        this.color = color
    }

    show(){
        return `<div style="width: ${this.width}px; height: ${this.height}px; background-color:${this.color};border-radius: 50%;"></div>`
    }
}

obj = new Domredtangel(200, 160, "blue")
document.querySelector('.myDiv').innerHTML = obj.show()

