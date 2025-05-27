const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('score');
const scoreText = document.getElementById('score-text');

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const answers = {
    question1: 'a',
    question2: 'a',
    question3: 'c',
    question4: 'c',
    question5: 'b'
  };

  let score = 0;

  document.querySelectorAll('label').forEach(label => {
    label.style.color = '#0e0d0d';
  });

  for (let question in answers) {
    const correct = answers[question];
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    const options = document.querySelectorAll(`input[name="${question}"]`);

    options.forEach(opt => {
      const lbl = document.querySelector(`label[for="${opt.id}"]`);
      if (lbl) lbl.style.color = '#0e0d0d';
    });

    if (selected) {
      const label = document.querySelector(`label[for="${selected.id}"]`);
      if (selected.value === correct) {
        score++;
        label.style.color = 'green';
      } else {
        label.style.color = 'red';
      }
    }
  }

  scoreText.textContent = `You scored ${score}/5`;
  resultDiv.style.display = 'block';

  setTimeout(() => {
    window.location.reload();
  }, 5000);
});
