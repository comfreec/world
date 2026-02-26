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
    document.getElementById('settingsModal').classList.add('show');
}

// 설정 닫기
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeSettingsBtn');
    const modal = document.getElementById('settingsModal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});

// 점수 공유하기
function shareScore() {
    const stats = loadStats();
    const quizHighScore = localStorage.getItem('quizHighScore') || 0;
    const player1High = localStorage.getItem('memoryPlayer1HighScore') || 0;
    const player2High = localStorage.getItem('memoryPlayer2HighScore') || 0;
    
    const shareText = `🌍 쭈니 국기 게임 🌍\n\n` +
        `📊 내 기록:\n` +
        `퀴즈 최고점수: ${quizHighScore}점\n` +
        `메모리 게임: 아빠 ${player1High}쌍 / 쭈니 ${player2High}쌍\n` +
        `총 게임 수: ${stats.totalGames}회\n` +
        `총 정답 수: ${stats.totalCorrect}개\n\n` +
        `함께 국기를 배워요! 🎯`;
    
    if (navigator.share) {
        navigator.share({
            title: '쭈니 국기 게임',
            text: shareText,
            url: window.location.origin
        }).then(() => {
            console.log('공유 성공');
        }).catch((error) => {
            console.log('공유 취소:', error);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

// 공유 API가 없을 때 대체 방법
function fallbackShare(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text + '\n' + window.location.origin).then(() => {
            alert('점수가 클립보드에 복사되었습니다!\n친구들에게 공유해보세요 😊');
        }).catch(() => {
            showShareModal(text);
        });
    } else {
        showShareModal(text);
    }
}

// 공유 모달 표시
function showShareModal(text) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 400px;
        width: 90%;
    `;
    
    content.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #667eea;">내 점수 공유하기</h3>
        <textarea readonly style="width: 100%; height: 150px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-family: inherit; resize: none;">${text}\n${window.location.origin}</textarea>
        <button onclick="this.parentElement.parentElement.remove()" style="width: 100%; margin-top: 15px; padding: 12px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">닫기</button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
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
    
    // 로딩 화면 숨기기
    setTimeout(function() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(function() {
                loadingScreen.remove();
            }, 500);
        }
    }, 500);
    
    // 첫 클릭 시 전체화면
    document.body.addEventListener('click', function() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            requestFullscreen();
        }
    }, { once: true });
});
