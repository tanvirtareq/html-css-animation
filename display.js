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

window.addEventListener("load", () => {
  document.getElementById("text-panel").classList.add("show");
});
