interface ShapeAreaInterface {
  getArea(): number;
}

class Triangle implements ShapeAreaInterface {
  public base: number;
  public height: number;
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }
  public getArea() {
    return this.base * this.height * 0.5
  }
}

class Rectangle implements ShapeAreaInterface {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  public getArea() {
    return this.width * this.height;
  }
}

class Circle implements ShapeAreaInterface {
public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  public getArea() {
    return this.radius * this.radius * 3.14;
  }
}

function computeAreasOfShapes(
  shapes: Shape[]
) {
  return shapes.reduce(
    (computedArea, shape) => {
      return computedArea + shape.getArea();
    },
    0
  );
}
