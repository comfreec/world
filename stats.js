// 통계 로드 및 표시
function loadAndDisplayStats() {
    // 퀴즈 게임 통계
    const quizHighScore = localStorage.getItem('quizHighScore') || 0;
    document.getElementById('quizHighScore').textContent = quizHighScore;
    
    // 메모리 게임 통계
    const player1High = localStorage.getItem('memoryPlayer1HighScore') || 0;
    const player2High = localStorage.getItem('memoryPlayer2HighScore') || 0;
    document.getElementById('player1High').textContent = player1High + '쌍';
    document.getElementById('player2High').textContent = player2High + '쌍';
    
    // 전체 통계
    const stats = loadStats();
    document.getElementById('quizCorrect').textContent = stats.totalCorrect || 0;
    document.getElementById('maxStreak').textContent = stats.maxStreak || 0;
    document.getElementById('totalGames').textContent = stats.totalGames || 0;
    document.getElementById('countriesLearned').textContent = stats.countriesLearned || 0;
    document.getElementById('perfectGames').textContent = stats.memoryPerfect || 0;
    
    // 최고 속도
    if (stats.fastestMemoryTime && stats.fastestMemoryTime > 0) {
        const minutes = Math.floor(stats.fastestMemoryTime / 60);
        const seconds = stats.fastestMemoryTime % 60;
        const timeStr = minutes > 0 ? minutes + '분 ' + seconds + '초' : seconds + '초';
        document.getElementById('fastestTime').textContent = timeStr;
    } else {
        document.getElementById('fastestTime').textContent = '-';
    }
    
    // 획득한 성취 수
    const unlocked = loadAchievements();
    document.getElementById('achievementsUnlocked').textContent = unlocked.length + ' / ' + achievements.length;
}

// 모든 데이터 초기화
function resetAllData() {
    const confirmed = confirm('정말로 모든 데이터를 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다:\n- 모든 게임 기록\n- 최고 점수\n- 획득한 성취\n- 학습한 국가 정보');
    
    if (confirmed) {
        const doubleConfirm = confirm('마지막 확인입니다.\n정말로 삭제하시겠습니까?');
        
        if (doubleConfirm) {
            // 모든 localStorage 데이터 삭제
            localStorage.removeItem('quizHighScore');
            localStorage.removeItem('memoryPlayer1HighScore');
            localStorage.removeItem('memoryPlayer2HighScore');
            localStorage.removeItem('gameStats');
            localStorage.removeItem('unlockedAchievements');
            localStorage.removeItem('soundEnabled');
            localStorage.removeItem('voiceEnabled');
            localStorage.removeItem('memorySoundEnabled');
            localStorage.removeItem('memoryVoiceEnabled');
            
            alert('✅ 모든 데이터가 삭제되었습니다.');
            
            // 페이지 새로고침
            location.reload();
        }
    }
}

// 페이지 로드 시 통계 표시
window.addEventListener('load', function() {
    loadAndDisplayStats();
});
