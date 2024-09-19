let timer;
let timeRemaining; // in seconds
let isPaused = false;

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

function startTimer() {
    if (timer) clearInterval(timer);

    const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
    const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;
    
    timeRemaining = minutes * 60 + seconds;

    if (timeRemaining <= 0) return;

    timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            document.getElementById('timer').textContent = "00:00";
            return;
        }
        
        if (!isPaused) {
            timeRemaining--;
            updateDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true;
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timer').textContent = "00:00";
    isPaused = false;
}

function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
