
function addPopEffect(element) {
    element.style.transform = "scale(1.05)";
    element.style.transition = "transform 0.2s ease";
}

function removePopEffect(element) {
    element.style.transform = "scale(1)";
}

const spillElements = document.querySelectorAll('.spill-nr');
spillElements.forEach((item) => {
    item.addEventListener('mouseover', () => addPopEffect(item));
    item.addEventListener('mouseleave', () => removePopEffect(item));
});
