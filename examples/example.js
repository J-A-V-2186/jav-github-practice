document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'b',
        q2: 'a',
        q3: 'c',
        q4: 'd',
        q5: 'b',
        q6: 'a',
        q7: 'c',
        q8: 'd',
        q9: 'b',
        q10: 'a'
    };

    let score = 0;
    const formData = new FormData(event.target);
    const userAnswers = {};
    formData.forEach((value, key) => {
        userAnswers[key] = value;
    });

    for (let [question, correctAnswer] of Object.entries(correctAnswers)) {
        if (userAnswers[question] === correctAnswer) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of 10`;
});
  
const correctAnswers = {
  q1: "b",
  q2: "a",
  q3: "c",
  q4: "d",
  q5: "b",
  q6: "a",
  q7: "c",
  q8: "d",
  q9: "b",
  q10: "a",
};
let form = new  FormData(correctAnswers)
console.log(form)