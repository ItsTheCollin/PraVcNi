function getBrazilDateString() {
    const now = new Date();
    const brazilOffset = -3; // Horário de Brasília (GMT-3)
    now.setHours(now.getHours() + brazilOffset - now.getTimezoneOffset() / 60);
    return now.toISOString().split('T')[0];
}

function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function showWarning() {
    document.getElementById('warning').classList.remove('hidden');
}

function checkAnswer(questionNumber, correctAnswer) {
    const userAnswer = document.getElementById(`answer-${questionNumber}`).value;
    const feedback = document.getElementById(`feedback-${questionNumber}`);
    
    if (userAnswer === correctAnswer) {
        nextScreen(`question-${questionNumber + 1}`);
    } else {
        feedback.textContent = "Que feio sua fedida errando, tenta dnv meu amor !❤️";
        feedback.classList.remove('hidden');
    }
}

function checkToday() {
    const userAnswer = document.getElementById('answer-3').value;
    const today = getBrazilDateString();
    const feedback = document.getElementById('feedback-3');

    if (userAnswer === today) {
        showResults();
    } else {
        feedback.textContent = "Que feio sua fedida errando, tenta dnv meu amor !❤️";
        feedback.classList.remove('hidden');
    }
}

function showResults() {
    const firstDate = new Date("2024-06-29T13:00:00-03:00");
    const datingStart = new Date("2024-08-13T20:20:00-03:00");
    const now = new Date();

    document.getElementById('time-since-first-date').textContent = calculateTimeDifference(firstDate, now);
    document.getElementById('time-since-dating').textContent = calculateTimeDifference(datingStart, now);
    
    nextScreen('result-screen');
}

function calculateTimeDifference(startDate, endDate) {
    const totalSeconds = Math.floor((endDate - startDate) / 1000);

    const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365));
    const months = Math.floor((totalSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
    const days = Math.floor((totalSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);

    return `${years} anos, ${months} meses, ${days} dias, ${hours} horas e ${minutes} minutos`;
}
