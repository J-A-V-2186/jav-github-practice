
//webpage load fade in
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.row');
    setTimeout(() => {
        content.classList.add('visible');
    }, 100);
});
     

let fade = function () {
  const mainContent = document.getElementsByClassName("main")[0];
  mainContent.classList.add("fade-out");
  //Webpage exit fade out

  //button function
  setTimeout(function () {
    window.location.href = "/TheQuizz2/quiz/quiz.html";
  }, 500); // Match this time with the transition duration in CSS
};
document.getElementById("start-button").addEventListener("click", fade);
