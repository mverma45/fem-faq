document.addEventListener('DOMContentLoaded', () => {
	// Select all question sections
	const questions = document.querySelectorAll('.question');

	questions.forEach((question) => {
		// Select the plus/minus icon and answer section inside each question
		const toggleIcon = question.querySelector('img');
		const answer = question.querySelector('.answer');

		// Add a click event listener to each question
		question.addEventListener('click', () => {
			// Check if the clicked answer is already open
			const isOpen = !answer.classList.contains('hidden');

			// Close all answers first
			document.querySelectorAll('.answer').forEach((ans) => {
				ans.classList.add('hidden');
				ans.style.maxHeight = null;
			});

			// Reset all icons to plus
			document.querySelectorAll('.question img').forEach((img) => {
				img.src = './assets/images/icon-plus.svg';
			});

			// If the clicked answer was closed, open it
			if (!isOpen) {
				answer.classList.remove('hidden');
				answer.style.maxHeight = answer.scrollHeight + 'px'; // Smooth expansion
				toggleIcon.src = './assets/images/icon-minus.svg'; // Change icon to minus
			}
		});
	});
});
