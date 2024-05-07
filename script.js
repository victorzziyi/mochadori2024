function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('current-time').innerText = timeString;
}

// 페이지 로드 시 현재 시간 업데이트
window.onload = function() {
    updateTime();
    // 1초마다 현재 시간 업데이트
    setInterval(updateTime, 1000);
};
