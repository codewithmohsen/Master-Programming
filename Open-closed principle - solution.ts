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
