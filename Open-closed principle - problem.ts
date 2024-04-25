class Triangle {
  public base: number;
  public height: number;
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }
}

class Rectangle {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

function computeAreasOfShapes(
  shapes: Array<Rectangle | Triangle>
) {
  return shapes.reduce(
    (computedArea, shape) => {
      if (shape instanceof Rectangle) {
        return computedArea + shape.width * shape.height;
      }
      if (shape instanceof Triangle) {
        return computedArea + shape.base * shape.height * 0.5 ;
      }
    },
    0
  );
}
