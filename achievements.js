// 성취 목록
const achievements = [
    {
        id: 'first_win',
        name: '첫 승리',
        description: '첫 번째 정답을 맞춰보세요',
        icon: '🎯',
        condition: (stats) => stats.totalCorrect >= 1
    },
    {
        id: 'ten_wins',
        name: '초보 학습자',
        description: '10개의 정답을 맞춰보세요',
        icon: '⭐',
        condition: (stats) => stats.totalCorrect >= 10
    },
    {
        id: 'fifty_wins',
        name: '국기 마스터',
        description: '50개의 정답을 맞춰보세요',
        icon: '🏆',
        condition: (stats) => stats.totalCorrect >= 50
    },
    {
        id: 'hundred_wins',
        name: '국기 전문가',
        description: '100개의 정답을 맞춰보세요',
        icon: '👑',
        condition: (stats) => stats.totalCorrect >= 100
    },
    {
        id: 'perfect_game',
        name: '완벽한 게임',
        description: '한 게임에서 10문제 연속 정답',
        icon: '💯',
        condition: (stats) => stats.maxStreak >= 10
    },
    {
        id: 'speed_master',
        name: '스피드 마스터',
        description: '메모리 게임을 30초 안에 완료',
        icon: '⚡',
        condition: (stats) => stats.fastestMemoryTime > 0 && stats.fastestMemoryTime <= 30
    },
    {
        id: 'memory_champion',
        name: '메모리 챔피언',
        description: '메모리 게임에서 16쌍 모두 맞추기',
        icon: '🧠',
        condition: (stats) => stats.memoryPerfect >= 1
    },
    {
        id: 'quiz_champion',
        name: '퀴즈 챔피언',
        description: '퀴즈 게임에서 20점 이상 획득',
        icon: '🎓',
        condition: (stats) => stats.quizHighScore >= 20
    },
    {
        id: 'dedicated_player',
        name: '열정적인 플레이어',
        description: '총 50게임 플레이',
        icon: '🔥',
        condition: (stats) => stats.totalGames >= 50
    },
    {
        id: 'world_explorer',
        name: '세계 탐험가',
        description: '100개 이상의 국가 학습',
        icon: '🌍',
        condition: (stats) => stats.countriesLearned >= 100
    }
];

// 통계 데이터 구조
function getDefaultStats() {
    return {
        totalCorrect: 0,
        totalGames: 0,
        maxStreak: 0,
        quizHighScore: 0,
        memoryPerfect: 0,
        fastestMemoryTime: 0,
        countriesLearned: 0
    };
}

// 통계 로드
function loadStats() {
    const saved = localStorage.getItem('gameStats');
    if (saved) {
        return JSON.parse(saved);
    }
    return getDefaultStats();
}

// 통계 저장
function saveStats(stats) {
    localStorage.setItem('gameStats', JSON.stringify(stats));
}

// 획득한 성취 로드
function loadAchievements() {
    const saved = localStorage.getItem('unlockedAchievements');
    if (saved) {
        return JSON.parse(saved);
    }
    return [];
}

// 획득한 성취 저장
function saveAchievements(unlocked) {
    localStorage.setItem('unlockedAchievements', JSON.stringify(unlocked));
}

// 성취 확인 및 알림
function checkAchievements(stats) {
    const unlocked = loadAchievements();
    const newAchievements = [];
    
    achievements.forEach(achievement => {
        if (!unlocked.includes(achievement.id) && achievement.condition(stats)) {
            unlocked.push(achievement.id);
            newAchievements.push(achievement);
        }
    });
    
    if (newAchievements.length > 0) {
        saveAchievements(unlocked);
        showAchievementNotification(newAchievements);
    }
    
    return newAchievements;
}

// 성취 알림 표시
function showAchievementNotification(newAchievements) {
    newAchievements.forEach((achievement, index) => {
        setTimeout(() => {
            const notification = document.createElement('div');
            notification.className = 'achievement-notification';
            notification.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <div class="achievement-title">성취 달성!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                </div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 4000);
        }, index * 500);
    });
}

// 통계 업데이트 헬퍼 함수
function updateStats(updates) {
    const stats = loadStats();
    Object.assign(stats, updates);
    saveStats(stats);
    checkAchievements(stats);
    return stats;
}
