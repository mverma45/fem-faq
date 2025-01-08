const btns = document.querySelectorAll('.heroTitle');

btns.forEach((item) => {
	const question = item.querySelector('question');
	const answer = item.querySelector('answer');

	question.addEventListener('click', () => {
		answer.classList.toggle('hidden');
	});
});
