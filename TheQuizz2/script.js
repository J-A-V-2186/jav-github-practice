
let fade = function() {
    const mainContent = document.getElementById('main');
    mainContent.classList.add('fade-out');

    setTimeout(function() {
        window.location.href = '/TheQuizz2/quiz.html';
    }, 500); // Match this time with the transition duration in CSS
}
document.getElementById('start-button').addEventListener('click',fade );