const rates = document.querySelectorAll('.rate');

let userRate;

rates.forEach(rate => {
  rate.addEventListener('click', function (e) {
    rates.forEach(rate => {
      rate.classList.remove('rate-selected');
    });
    rate.classList.add('rate-selected');
    userRate = rate.textContent;
  });
});
