//Selects all the btns for elements
const btns = document.querySelectorAll('.question');

btns.forEach((question) => {
	const pointer = question.querySelector('.pointerHero');
	const answer = question.nextElementSibling;

	pointer.addEventListener('click', () => {
		answer.classList.toggle('hidden');

		// Toggles the plus (+) and the minus (-)

		const icon = pointer.querySelector('img');
		if (answer.classList.contains('hidden')) {
			icon.src = './assets/images/icon-plus.svg';
		} else {
			icon.src = './assets/images/icon-minus.svg';
		}
	});
});
