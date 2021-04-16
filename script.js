const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progressBar = document.getElementById("progress");

let indexCurrentActive = 1;

nextButton.addEventListener("click", () => {
  indexCurrentActive++;
  circles.forEach((circle, index) => {
    if (index < indexCurrentActive) {
      circle.classList.add("active");
    }
  });
  updateButtons();
  updateProgressBar();
});

prevButton.addEventListener("click", () => {
  indexCurrentActive--;
  circles.forEach((circle, index) => {
    if (index >= indexCurrentActive) {
      circle.classList.remove("active");
    }
  });

  updateButtons();
  updateProgressBar();
});

function updateButtons() {
  const STATUS_DISABLED = {
    PREV: indexCurrentActive === 1,
    NEXT: indexCurrentActive === circles.length,
  };
  prevButton.disabled = STATUS_DISABLED.PREV;
  nextButton.disabled = STATUS_DISABLED.NEXT;
}

function updateProgressBar() {
  const currentProgress = `${
    ((indexCurrentActive - 1) / (circles.length - 1)) * 100
  }%`;
  console.log({
    currentProgress,
    indexCurrentActive,
    circles: circles.length - 1,
  });
  progressBar.style.width = currentProgress;
}
