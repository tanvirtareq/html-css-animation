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

let circles = [];

const getRandomCircle = (parent_element) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomColor();
    let size = 1000;
    circle.style.height = size + 'px';
    circle.style.width = size + 'px';
    const pos = getRandomPosition(parent_element);
    circle.style.left = pos.x - size / 2 + 'px';
    circle.style.top = pos.y - size / 2 + 'px';
    circle.style.position = 'absolute';

    return circle;
};

const addCircle = (parent_element) => {
    const circle = getRandomCircle(parent_element);
    parent_element.appendChild(circle);
    circles.push(circle);
};

setInterval(() => {
    const t_shape_element = document.getElementsByClassName('t-shape')[0];
    addCircle(t_shape_element);
    const j_shape_element = document.getElementsByClassName('j-shape')[0];
    addCircle(j_shape_element);
    if (circles.length > 10) {
        const oldCircle = circles[Math.floor(Math.random() * circles.length)];
        circles = circles.filter(c => c !== oldCircle);
        t_shape_element.removeChild(oldCircle);
    }
}, 1000);
