class Vector2 {

    constructor(x = 0, y = 0) {

        this.x = x;
        this.y = y;

    }

    copy() {

        return new Vector2(this.x, this.y);

    }

    set(x, y) {

        this.x = x;
        this.y = y;

    }

    add(v) {

        this.x += v.x;
        this.y += v.y;

    }

    subtract(v) {

        this.x -= v.x;
        this.y -= v.y;

    }

    multiply(s) {

        this.x *= s;
        this.y *= s;

    }

    distance(v) {

        return Math.hypot(
            this.x - v.x,
            this.y - v.y
        );

    }

}