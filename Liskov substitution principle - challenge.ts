class Rectangle {
    public setWidth(width) {
        this.width = width;
    }
    public setHeight(height) {
        this.height = height;
    }
    public getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

let rectangle = new Rectangle();
rectangle.setWidth(100);
rectangle.setHeight(50);
console.log(rectangle.getArea()); // 5000

let square = new Square();
square.setWidth(100);
square.setHeight(50); // !!!
console.log(rectangle.getArea()); // 2500
