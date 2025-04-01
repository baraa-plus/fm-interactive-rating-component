const componentContainer = document.querySelector('.component-container');
const thankYouContainer = document.querySelector('.thank-you');
const submitBtn = document.getElementById('submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
    componentContainer.classList.add('hidden');
    thankYouContainer.classList.remove('hidden');
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerText = rate.innerText;
    })
})
