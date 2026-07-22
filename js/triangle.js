class Triangle {

    constructor(a, b, c) {

        this.a = a;
        this.b = b;
        this.c = c;

        // gris aleatorio

        const g = Math.floor(
            45 + Math.random() * 35
        );

        this.color = `rgb(${g},${g},${g})`;

    }

}