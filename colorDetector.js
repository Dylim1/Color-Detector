const colorInput = document.getElementById('colorInput');
const colorDisplay = document.getElementById('colorDisplay');

colorInput.addEventListener('input', updateColor);

function updateColor() {
    const colorCode = colorInput.value;
    colorDisplay.style.background = colorCode;
}