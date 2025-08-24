function fitText(panel) {
  const maxFontSize = 200; // max font size
  const minFontSize = 10; // min font size
  let fontSize = maxFontSize;
  panel.style.fontSize = fontSize + "px";

  const text = panel.innerText;

  while (
    (panel.scrollWidth > panel.clientWidth ||
      panel.scrollHeight > panel.clientHeight) &&
    fontSize > minFontSize
  ) {
    fontSize -= 1;
    panel.style.fontSize = fontSize + "px";
  }
}

function decodeText(encoded) {
  return decodeURIComponent(escape(atob(encoded)));
}

// Get the code from URL query parameter
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const container = document.getElementById("text-panel");
if (code) {
  try {
    container.textContent = decodeText(code)
    fitText(container);
  } catch (e) {
    container.textContent = "Invalid code!";
  }
}

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

addCircle(container, circles);