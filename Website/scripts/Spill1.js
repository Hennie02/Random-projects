const  questionBox = document.querySelectorAll('.question-box')

questionBox.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('strike');
    });
});