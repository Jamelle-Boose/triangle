export class Triangle {
  constructor(...sides) {
    this.sides = sides
  }

  get isEquilateral() {
    return this.isTriangle && this.matchingSides == 3
  }

  get isScalene() {
    return this.isTriangle && this.matchingSides == 0
  }

  get isIsosceles() {
    if (this.isEquilateral) return true

    return this.isTriangle && this.matchingSides == 2
  }

  get isTriangle() {
    const [a, b, c] = this.sides
    return 2 * Math.max(a, b, c) < a + b + c
  }

  get matchingSides() {
    const [a, b, c] = this.sides

    if (a == b && b == c) return 3
    if (a == b || b == c || c == a) return 2
    return 0
  }
}
