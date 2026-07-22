class Vertex {

    constructor(x, y) {

        this.position = new Vector2(x, y);

        this.home = new Vector2(x, y);

        this.phase =
            Math.random() * Math.PI * 2;

        this.speed =
            0.20 + Math.random() * 0.35;

        this.amplitude =
            2 + Math.random() * 5;

        this.direction =
            Math.random() * Math.PI * 2;

    }

    update(time) {

        const offset =
            Math.sin(
                time * this.speed +
                this.phase
            ) * this.amplitude;

        this.position.x =
            this.home.x +
            Math.cos(this.direction) * offset;

        this.position.y =
            this.home.y +
            Math.sin(this.direction) * offset;

    }

}