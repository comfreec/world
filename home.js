// 저장된 데이터 로드
function loadHomeData() {
    // 퀴즈 게임 최고 점수
    const quizHighScore = localStorage.getItem('quizHighScore') || 0;
    document.getElementById('quizHighScore').textContent = `최고 점수: ${quizHighScore}`;
    
    // 메모리 게임 최고 점수
    const player1High = localStorage.getItem('memoryPlayer1HighScore') || 0;
    const player2High = localStorage.getItem('memoryPlayer2HighScore') || 0;
    document.getElementById('memoryPlayer1').textContent = `아빠 최고: ${player1High}`;
    document.getElementById('memoryPlayer2').textContent = `쭈니 최고: ${player2High}`;
    
    // 전체 통계
    const stats = loadStats();
    document.getElementById('totalGames').textContent = stats.totalGames;
    document.getElementById('totalScore').textContent = stats.totalCorrect;
    
    // 성취 표시
    displayAchievements();
}

// 성취 표시
function displayAchievements() {
    const unlocked = loadAchievements();
    const achievementsList = document.getElementById('achievementsList');
    
    achievementsList.innerHTML = achievements.map(achievement => {
        const isUnlocked = unlocked.includes(achievement.id);
        return `
            <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-card-icon">${achievement.icon}</div>
                <div class="achievement-card-name">${achievement.name}</div>
                <div class="achievement-card-desc">${achievement.description}</div>
                ${isUnlocked ? '<div class="achievement-badge">✓</div>' : ''}
            </div>
        `;
    }).join('');
}

// 설정 열기
function openSettings() {
    alert('설정 기능은 각 게임 내에서 사용할 수 있습니다.');
}

// 전체화면 요청
function requestFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

// 페이지 로드 시
window.addEventListener('load', function() {
    loadHomeData();
    
    // 첫 클릭 시 전체화면
    document.body.addEventListener('click', function() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            requestFullscreen();
        }
    }, { once: true });
});
