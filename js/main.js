const canvas = document.getElementById("canvas");

const mesh = new Mesh(canvas);
const renderer = new Renderer(canvas);
const light = new Light(canvas);
const mouse = new Mouse(canvas, light);

function render(time) {

    requestAnimationFrame(render);

    time *= 0.001;

    mouse.update();

    mesh.update(time);

    renderer.draw(mesh, light);

}

requestAnimationFrame(render);

window.addEventListener("resize", () => {

    mesh.resize();
    light.resize();

});