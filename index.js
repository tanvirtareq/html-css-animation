const button = document.querySelector(".submit-btn");
const textarea = document.querySelector(".text-area");

// Function to encode text (Base64)
function encodeText(text) {
  return btoa(unescape(encodeURIComponent(text))); // handles Unicode properly
}

// Function to decode text
function decodeText(encoded) {
  return decodeURIComponent(escape(atob(encoded)));
}

button.addEventListener("click", () => {
  const text = textarea.value.trim();
  if (!text) {
    alert("Please type something!");
    return;
  }

  const code = encodeText(text);
  window.location.href = `display.html?code=${code}`;
});
