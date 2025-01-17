//Selects all the btns for elements
const btns = document.querySelectorAll('.accordionItem');

btns.forEach((accordion) => {
	// const question = accordion.querySelector('.question');
	const pointer = accordion.querySelector('.pointerHero');
	const answer = accordion.querySelector('answer');

	// if (pointer && answer) {
	pointer.addEventListener('click', () => {
		answer.classList.toggle('hidden');

		// Toggles the plus (+) and the minus (-)

		const icon = pointer.querySelector('img');
		if (answer.classList.contains('hidden')) {
			icon.src = './assets/images/icon-plus.svg';
		} else {
			icon.src = './assets/images/icon-minus.svg';
		}

		// Close open answers

		question.forEach((otherAccordion) => {
			if (otherAccordion !== accordion) {
				const otherAnswer = otherAccordion.querySelector('.answer');
				const otherIcon = otherAccordion.querySelector('.pointerHero img');

				if (!otherAnswer.classList.contains('hidden')) {
					otherAnswer.classList.add('hidden');
					otherIcon.src = './assets/images/icon-plus.svg';
				}
			}
		});
	});
	// }
});
