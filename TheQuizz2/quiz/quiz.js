document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".row");
  setTimeout(() => {
    content.classList.add("visible");
  }, 100);
});

const correctAns = ["a", "b", "d", "a", "c", "d", "a", "c", "a", "d"];
function grabData() {
  let q = document.querySelectorAll(".question");
  let ans = [];
  for (let i = 1; i <= q.length; i++) {
    let data = document.querySelector(`input[name="q${i}"]:checked`);
    console.log(data);
    if (data) {
      ans.push(data.value);
      console.log(data.value);
    } else {
      console.log(`No answer selected for question ${i}`);
    }
  }

  console.log("Collected Answers:", ans);

  let score = 0;
  for (let i = 0; i < q.length; i++) {
    if (ans[i] == correctAns[i]) {
      score++;
    }
  }
  console.log(score);
  // Store the score in localStorage
  localStorage.setItem("quizScore", score);
}

//Example of triggering `grabData` on form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  grabData();

  const mainContent = document.querySelector(".main");
  mainContent.classList.add("fade-out");

  setTimeout(function () {
    window.location.href = "/TheQuizz2/score/score.html";
  }, 500);
});
