// script.js
function displayCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = `현재 시간: ${formattedTime}`;
}

// 페이지 로드 시 현재 시간 표시
displayCurrentTime();

// 1초마다 현재 시간 갱신
setInterval(displayCurrentTime, 1000);
