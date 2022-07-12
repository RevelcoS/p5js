class Star {
    constructor(x, y, r, shades, shadesR) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.shades = shades;
        this.shadesR = shadesR;
    }

    display() {
        beginShape()
        let angle1, angle2;
        const deltaAngle = 360 / this.shades
        for (let i = 0; i < this.shades; i++) {
            angle1 = 90 + deltaAngle * i;
            angle2 = angle1 + deltaAngle / 2
            angle1 = radians(angle1)
            angle2 = radians(angle2)

            vertex(this.x + this.r * cos(angle1), this.y - this.r * sin(angle1))
            vertex(this.x + this.shadesR * cos(angle2), this.y - this.shadesR * sin(angle2))
        }
        endShape(CLOSE)
    }
}