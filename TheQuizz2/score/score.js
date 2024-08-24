document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('main')
    console.log(content);
    setTimeout(() => {
        content.classList.add('visible');
    }, 100);
});
const score = localStorage.getItem("quizScore");
const gradeDiv = document.querySelector('.grade')
console.log(score);
gradeDiv.textContent = `${score} `

     
