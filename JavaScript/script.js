//Selects all the btns for elements
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	// const question = accordion.querySelector('.question');
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
