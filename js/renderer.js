class Renderer {

    constructor(canvas) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

    }

    clear() {

        this.ctx.fillStyle = CONFIG.background;

        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

    }

    draw(mesh, light) {

        this.clear();

        for (const triangle of mesh.triangles) {

            const cx =
            (
                triangle.a.position.x +
                triangle.b.position.x +
                triangle.c.position.x
            ) / 3;

            const cy =
            (
                triangle.a.position.y +
                triangle.b.position.y +
                triangle.c.position.y
            ) / 3;

            const intensity =
                light.brightness(cx, cy);

            const gray =
                Math.floor(
                    25 + intensity * 80
                );

            this.ctx.beginPath();

            this.ctx.moveTo(
                triangle.a.position.x,
                triangle.a.position.y
            );

            this.ctx.lineTo(
                triangle.b.position.x,
                triangle.b.position.y
            );

            this.ctx.lineTo(
                triangle.c.position.x,
                triangle.c.position.y
            );

            this.ctx.closePath();

            this.ctx.fillStyle =
                `rgb(${gray},${gray},${gray})`;

            this.ctx.fill();

        }

    }

}