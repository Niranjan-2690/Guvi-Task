class Circle {
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }

    getCircle() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Creating instances of Circle class
const circle1 = new Circle();
console.log(`Circle 1: ${circle1.getCircle()}`);

const circle2 = new Circle(2.5);
console.log(`Circle 2: ${circle2.getCircle()}`);

const circle3 = new Circle(3.0, 'blue');
console.log(`Circle 3: ${circle3.getCircle()}`);
console.log(`Circle 3: Area = ${circle3.getArea()}, Circumference = ${circle3.getCircumference()}`);
