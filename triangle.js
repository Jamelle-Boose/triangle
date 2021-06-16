//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// An equilateral triangle has all three sides the same length.
// An isosceles triangle has at least two sides the same length.
// A scalene triangle has all sides of different lengths.

export class Triangle {
  constructor(...sides) {
    this.sides = sides
  }

  get isEquilateral() {
    const notZero = this.sides.reduce((a, b) => a + b)
    const isEqual = this.sides.every(i => i === this.sides[0])

    return isEqual && notZero ? true : false
  }

  get isIsosceles() {
    let [side1, side2, side3] = this.sides
    let isTriangle =
      side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1
        ? true
        : false

    return isTriangle && side2 === side3
      ? true
      : false || (isTriangle && side1 === side2)
      ? true
      : false || (isTriangle && side1 === side3)
      ? true
      : false || (isTriangle && (side1 === side2) === side3)
      ? true
      : false
  }

  get isScalene() {
    let [side1, side2, side3] = this.sides
    let isTriangle =
      side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1
        ? true
        : false
    let isNotEqual = side1 !== side2 && side1 !== side3 && side2 !== side3

    return isTriangle && isNotEqual ? true : false
  }
}
