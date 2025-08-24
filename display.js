function decodeText(encoded) {
  return decodeURIComponent(escape(atob(encoded)));
}

// Get the code from URL query parameter
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const container = document.getElementById("text-panel");
if (code) {
  try {
    container.textContent = decodeText(code);
  } catch (e) {
    container.textContent = "Invalid code!";
  }
}
