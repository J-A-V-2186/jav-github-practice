document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("main");
  console.log(content);
  setTimeout(() => {
    content.classList.add("visible");
  }, 100);
});
const score = localStorage.getItem("quizScore");
const gradeDiv = document.querySelector(".grade");
const gradePercentage = document.querySelector(".grade__percentage");
const gradeLetter = document.querySelector(".grade__leter");
console.log(score);
gradeDiv.textContent = `${score}/10`;
gradePercentage.textContent = `${(score / 10) * 100}%`;

score === 10 ? (gradeLetter.textContent = "A") : null;
score === 8 ? (gradeLetter.textContent = "B") : null;
score === 7 ? (gradeLetter.textContent = "C") : null;
score === 6 ? (gradeLetter.textContent = "D") : null;
score <= 5 ? (gradeLetter.textContent = "E") : null;
