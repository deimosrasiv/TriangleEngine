class Mesh {

    constructor(canvas) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

        this.vertices = [];
        this.triangles = [];

        this.resize();

    }

    resize() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.build();

    }

    build() {

        this.vertices = [];
        this.triangles = [];

        const size = CONFIG.triangleSize;

        const cols = Math.ceil(this.canvas.width / size) + 2;
        const rows = Math.ceil(this.canvas.height / size) + 2;

        // Crear vértices

        for (let y = 0; y < rows; y++) {

            for (let x = 0; x < cols; x++) {

                const px =
                    x * size +
                    (Math.random() - 0.5) * CONFIG.randomness;

                const py =
                    y * size +
                    (Math.random() - 0.5) * CONFIG.randomness;

                this.vertices.push(
                    new Vertex(px, py)
                );

            }

        }

        // Crear triángulos

        for (let y = 0; y < rows - 1; y++) {

            for (let x = 0; x < cols - 1; x++) {

                const i = y * cols + x;

                const p1 = this.vertices[i];
                const p2 = this.vertices[i + 1];
                const p3 = this.vertices[i + cols];
                const p4 = this.vertices[i + cols + 1];

                if (Math.random() > 0.5) {

                    this.triangles.push(
                        new Triangle(p1, p2, p3)
                    );

                    this.triangles.push(
                        new Triangle(p2, p4, p3)
                    );

                }
                else {

                    this.triangles.push(
                        new Triangle(p1, p2, p4)
                    );

                    this.triangles.push(
                        new Triangle(p1, p4, p3)
                    );

                }

            }

        }

    }

    update(time) {

        for (const vertex of this.vertices) {

            vertex.update(time);

        }

    }


    
}