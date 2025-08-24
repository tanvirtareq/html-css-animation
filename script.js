const circle = document.createElement('div');
circle.classList.add('circle');
circle.classList.add('red');
document.getElementById('main-panel').appendChild(circle);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const getRandomPosition = (parent_element) => {
    const x = Math.random() * (parent_element.clientWidth - 100);
    const y = Math.random() * (parent_element.clientHeight - 100);
    return { x, y };
};

let t_shape_circles = [];
let j_shape_circles = [];

const getRandomCircle = (parent_element) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomColor();
    let size = 500;
    circle.style.height = size + 'px';
    circle.style.width = size + 'px';
    const pos = getRandomPosition(parent_element);
    circle.style.left = pos.x - size / 2 + 'px';
    circle.style.top = pos.y - size / 2 + 'px';
    circle.style.position = 'absolute';

    return circle;
};

const addCircle = (parent_element, circles) => {
    const circle = getRandomCircle(parent_element);
    parent_element.appendChild(circle);
    circles.push(circle);
};

setInterval(() => {
    const t_shape_element = document.getElementsByClassName('t-shape')[0];
    addCircle(t_shape_element, t_shape_circles);
    const j_shape_element = document.getElementsByClassName('j-shape')[0];
    addCircle(j_shape_element, j_shape_circles);

    while (t_shape_circles.length > 15) {
        const oldCircleObj = t_shape_circles.shift();
        t_shape_element.removeChild(oldCircleObj);
        oldCircleObj.element = null; // release reference for GC
        oldCircleObj.parent = null;
    }

    while (j_shape_circles.length > 15) {
        const oldCircleObj = j_shape_circles.shift();
        j_shape_element.removeChild(oldCircleObj);
        oldCircleObj.element = null; // release reference for GC
        oldCircleObj.parent = null;
    }
}, 1000);