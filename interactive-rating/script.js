const rates = document.querySelectorAll('.rate');
const form = document.querySelector('.rating-card');
const container = document.querySelector('.container');

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

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // if userRate is'nt negative, submit and show submit-card with the selected value
  // else, do nothing
  if (userRate) {
    const html = `
      <div class="submit-card">
        <img
          src="assets/illustration-thank-you.svg"
          alt="Thank you illustration"
          class="submit-card__img" />

        <div class="submit-card__rating">
          <p>You selected ${userRate} out of 5</p>
        </div>

        <h2 class="submit-card__heading">Thank you!</h2>
        <p class="submit-card__description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    `;

    form.style.display = 'none';
    container.insertAdjacentHTML('afterbegin', html);
  } else {
    console.log('You must choose between 1 and 5');
  }
});
