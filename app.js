//Task 1
// class Shape {
//     constructor(a,b,c){
//         this.a = a
//         this.b = b
//         this.c = c
//     }

//     rectPer(){
//     console.log("Perimeter of rectangle = "+(this.a+this.b)*2)
// }
//     rectArea(){
//     console.log("Area of rectangle = "+this.a*this.b)
// }
//     triangPer(){
//     console.log("Perimeter of triangular = "+(this.a+this.b+this.c))
// }
//     triangArea(){
//     console.log("Area of triangular = "+ Math.floor(this.a*(Math.sqrt(Math.pow(this.b,2)-(Math.pow(this.a,2)/4))/2)))
// }
// }


// class Triangular extends Shape{
//     triangGeom(){
//         super.triangPer()
//         super.triangArea()
//     }
// }
// let triang = new Triangular(10,30,20)
// triang.triangGeom()


// class Rectangle extends Shape{
//     rectGeom(){
//         super.rectPer()
//         super.rectArea()
//     }
// }
// let rect = new Rectangle(20,30)
// rect.rectGeom()

//Task 2

class Calculate {
    constructor(a,b){
        this.a = a||1
        this.b = b||5
        this.c;
    }

    plus(n){
       this.n = n||1
       this.c = this.a
       this.c+=1*this.n
       console.log('Plus: '+this.c)
    }

    minus(n){
        this.n = n||1
        this.c = this.b
        this.c-=1*this.n
        console.log('Minus: '+this.c)
    }

    current(){
        console.log('Current: '+this.c)
    }

}
let calc = new Calculate()
    calc.plus()
    calc.minus()
    calc.current()
