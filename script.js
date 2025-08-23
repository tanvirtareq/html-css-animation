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

const getRandomPosition = () => {
    const mainPanel = document.getElementById('main-panel');
    const x = Math.random() * (mainPanel.clientWidth - 100);
    const y = Math.random() * (mainPanel.clientHeight - 100);
    return { x, y };
};

const getRandomCircle = () => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomColor();
    circle.style.height = '1px';
    circle.style.width = '1px';
    const pos = getRandomPosition();
    circle.style.left = pos.x + 'px';
    circle.style.top = pos.y + 'px';
    circle.style.position = 'absolute';

    let count = 0;

    // const intervalId = setInterval(() => {
    //     count++;
    //     const scale = 1 + count * 0.1; // grows 10% each tick
    //     circle.style.transform = `scale(${scale})`;
    //     if (count > 10000) {
    //         clearInterval(intervalId);
    //         circle.remove();
    //     }
    // }, 10);


    return circle;
};

setInterval(() => {
    const circle = getRandomCircle();
    document.getElementById('main-panel').appendChild(circle);
}, 0.01);
