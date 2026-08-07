const bottle = document.getElementById("whine-bottle");

let currentRotation = 0;
function spinBottle() {
    const rotateionIncrement = Math.floor(Math.random() * 360) + 720; // Random rotation between 720 and 1080 degrees
    currentRotation += rotateionIncrement;
    bottle.style.transform = `rotate(${currentRotation}deg)`;

}