//Write code that adds an 'area' method to the Rectangle class' prototype

class Rectangle {         //Rectangle class
  constructor(h, w) {     //constructor(height, width)
    this.h = h;
    this.w = w;
  }
}

Rectangle.prototype.area = function() { //Rectangele class ına area methodu ekledik
  return this.h * this.w;
};

//Create a Square class that inherits from Rectangle and implement its class constructor

class Square extends Rectangle {    //Rectangle classından Square classına kalıtım aldık (bu sayede Square classının Rectangle classından farklı bir şekilde çalışmasını sağladık) (Rectangle superclass, Square subclass.)
  constructor(w) {
    super(w, w);    // super classının constructorını çağırdık (super classının constructorının içinde this.h ve this.w değişkenleri tanımlanmıştır)
  }
}
area = new Square(6); // area is 36 (6 * 6) 

