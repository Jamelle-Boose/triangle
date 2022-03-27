export class Triangle {
  constructor(...sides) {
    this.sides = sides
    this.isTriangle = this.isTriangle()
  }

  isTriangle() {
    const [a, b, c] = this.sides
    return a + b > c && a + c > b && b + c > a
  }

  get isEquilateral() {
    const [a, b, c] = this.sides
    return this.isTriangle && a == b && b == c
  }

  get isScalene() {
    const [a, b, c] = this.sides
    return this.isTriangle && a != b && b != c && a != c
  }

  get isIsosceles() {
    if (this.isScalene) return false

    const [a, b, c] = this.sides
    return 2 * Math.max(a, b, c) < a + b + c
  }
}
