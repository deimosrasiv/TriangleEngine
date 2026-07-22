class Mouse {

    constructor(canvas, light) {

        this.canvas = canvas;
        this.light = light;

        this.targetX = canvas.width / 2;
        this.targetY = canvas.height / 2;

        canvas.addEventListener("mousemove", e => {

            const rect = canvas.getBoundingClientRect();

            this.targetX = e.clientX - rect.left;
            this.targetY = e.clientY - rect.top;

        });

    }

    update() {

        this.light.x +=
            (this.targetX - this.light.x) * 0.08;

        this.light.y +=
            (this.targetY - this.light.y) * 0.08;

    }

}