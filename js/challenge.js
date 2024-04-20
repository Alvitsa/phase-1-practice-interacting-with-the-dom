document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("list");
    const likesList = document.querySelector('.likes');
  
    let counterValue = parseInt(counterElement.innerText);
    let timerInterval;
  
    // Timer increment every second
    function startTimer() {
      timerInterval = setInterval(() => {
        counterValue++;
        counterElement.innerText = counterValue;
      }, 1000);
    }
  
    // Manually increment and decrement the counter
    plusButton.addEventListener("click", () => {
      counterValue++;
      counterElement.innerText = counterValue;
    });
  
    minusButton.addEventListener("click", () => {
      counterValue--;
      counterElement.innerText = counterValue;
    });
  
    // Like an individual number of the counter
    heartButton.addEventListener("click", () => {
      const like = document.createElement("li");
      like.innerText = `${counterValue} likes`;
      likesList.appendChild(like);
    });
  
    // Pause the counter
    pauseButton.addEventListener("click", pauseCounter);
  
    function pauseCounter() {
      clearInterval(timerInterval);
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.innerText = "resume";
      pauseButton.removeEventListener("click", pauseCounter);
      pauseButton.addEventListener("click", resumeCounter);
    }
  
    // Resume the counter
    function resumeCounter() {
      startTimer();
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      pauseButton.innerText = "pause";
      pauseButton.removeEventListener("click", resumeCounter);
      pauseButton.addEventListener("click", pauseCounter);
    }
  
    // Start the timer when the page loads
    startTimer();
  });