class Light {

    constructor(canvas) {

        this.canvas = canvas;

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;

        this.radius = 450;

    }

    resize() {

        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;

    }

    brightness(x, y) {

        const dx = x - this.x;
        const dy = y - this.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        let value = 1 - (distance / this.radius);

        value = Math.max(0, value);

        return value;

    }

}