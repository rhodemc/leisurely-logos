// parent class Shape
class Shape {
  constructor(shapeColor, textColor, logoText) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.logoText = logoText;
  }
}

// child classes
class Circle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle fill=${this.shapeColor} cx="150" cy="100" r="80" />
    <text fill="${this.textColor}" x="150" y="120" font-size="45" text-anchor="middle">${this.logoText}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect fill="${this.shapeColor}" width="200" height="200" />
    <text fill="${this.textColor}" x="100" y="115" font-size="50" text-anchor="middle">${this.logoText}</text>
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="${this.shapeColor}" points="150, 18 244, 182 56, 182" />
    <text fill="${this.textColor}" x="150" y="130" font-size="35" text-anchor="middle">${this.logoText}</text>
    </svg>`;
  }
}

// export Shape class and children
module.exports = { Circle, Square, Triangle };
