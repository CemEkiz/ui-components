'use strict';

const accs = document.querySelectorAll('.accordion');
// const panels = document.querySelectorAll('.panel');

accs.forEach((acc) => {
	acc.addEventListener('click', function () {
		// panels.forEach((panel) => {
		// 	panel.classList.toggle('hidden');
		// });
		const panel = this.nextElementSibling;
		panel.classList.toggle('hidden');
	});
});

console.log(accs);
