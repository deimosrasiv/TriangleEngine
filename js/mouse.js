class Mouse {

    constructor(canvas, light) {

        this.canvas = canvas;
        this.light = light;

        this.targetX = canvas.width / 2;
        this.targetY = canvas.height / 2;

        // Factor de suavizado
        this.smooth = 0.90;

        canvas.addEventListener("mousemove", e => {

            const rect = canvas.getBoundingClientRect();

            this.targetX = e.clientX - rect.left;
            this.targetY = e.clientY - rect.top;

        });

    }

    update() {

        this.light.x += (this.targetX - this.light.x) * this.smooth;
        this.light.y += (this.targetY - this.light.y) * this.smooth;

    }

}