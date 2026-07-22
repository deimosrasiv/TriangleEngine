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

        const dx = this.targetX - this.light.x;
        const dy = this.targetY - this.light.y;

        const distance = Math.hypot(dx, dy);

        let smooth = 0.18;

        if (distance > 300) smooth = 0.35;
        else if (distance > 150) smooth = 0.28;
        else if (distance > 50) smooth = 0.22;

        this.light.x += dx * smooth;
        this.light.y += dy * smooth;

    }

}