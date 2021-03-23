const submitButton = document.querySelector('.submit');
const popup = document.querySelector('.answer__popup');
const close = document.querySelector('.close__btn');

// console.log([quizForm.q2]);
// console.log(quizForm.soal);

submitButton.addEventListener('click', () => {

    popup.classList.remove('d-none');
    popup.classList.add('d-block');

});

close.addEventListener('click', () => {
    popup.classList.remove('d-block');
    popup.classList.add('d-none');
});

