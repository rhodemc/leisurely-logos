// imported modules
const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle", () => {
  it("should return a string", () => {
    const newCircle = new Circle("blue", "white", "ABC");
    expect(typeof newCircle.render()).toBe("string");
    console.log(newCircle.render());
  });
});

describe("Square", () => {
  it("should return a string", () => {
    const newSquare = new Square("blue", "white", "ABC");
    expect(typeof newSquare.render()).toBe("string");
    console.log(newSquare.render());
  });
});

describe("Triangle", () => {
  it("should return a string", () => {
    const newTriangle = new Triangle("blue", "white", "ABC");
    expect(typeof newTriangle.render()).toBe("string");
    console.log(newTriangle.render());
  });
});
