// script.js
function displayCurrentDateTime() {
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDateTime.getDate().toString().padStart(2, '0');
    const hours = currentDateTime.getHours().toString().padStart(2, '0');
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentDateTime.getSeconds().toString().padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.getElementById('current-date-time').textContent = `${formattedDateTime}`;
}


// 페이지 로드 시 현재 날짜와 시간 표시
displayCurrentDateTime();

// 1초마다 현재 날짜와 시간 갱신
setInterval(displayCurrentDateTime, 1000);
