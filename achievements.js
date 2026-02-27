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
        id: 'two_hundred_wins',
        name: '국기 박사',
        description: '200개의 정답을 맞춰보세요',
        icon: '🎓',
        condition: (stats) => stats.totalCorrect >= 200
    },
    {
        id: 'five_hundred_wins',
        name: '국기 전설',
        description: '500개의 정답을 맞춰보세요',
        icon: '🌟',
        condition: (stats) => stats.totalCorrect >= 500
    },
    {
        id: 'perfect_game',
        name: '완벽한 게임',
        description: '한 게임에서 10문제 연속 정답',
        icon: '💯',
        condition: (stats) => stats.maxStreak >= 10
    },
    {
        id: 'streak_master',
        name: '연속 마스터',
        description: '20문제 연속 정답',
        icon: '🔥',
        condition: (stats) => stats.maxStreak >= 20
    },
    {
        id: 'unstoppable',
        name: '멈출 수 없는',
        description: '30문제 연속 정답',
        icon: '💪',
        condition: (stats) => stats.maxStreak >= 30
    },
    {
        id: 'speed_master',
        name: '스피드 마스터',
        description: '메모리 게임을 30초 안에 완료',
        icon: '⚡',
        condition: (stats) => stats.fastestMemoryTime > 0 && stats.fastestMemoryTime <= 30
    },
    {
        id: 'lightning_fast',
        name: '번개같은 속도',
        description: '메모리 게임을 20초 안에 완료',
        icon: '⚡⚡',
        condition: (stats) => stats.fastestMemoryTime > 0 && stats.fastestMemoryTime <= 20
    },
    {
        id: 'memory_champion',
        name: '메모리 챔피언',
        description: '메모리 게임에서 16쌍 모두 맞추기',
        icon: '🧠',
        condition: (stats) => stats.memoryPerfect >= 1
    },
    {
        id: 'memory_master',
        name: '메모리 마스터',
        description: '메모리 게임 완벽 클리어 5회',
        icon: '🧠🧠',
        condition: (stats) => stats.memoryPerfect >= 5
    },
    {
        id: 'quiz_champion',
        name: '퀴즈 챔피언',
        description: '퀴즈 게임에서 20점 이상 획득',
        icon: '📝',
        condition: (stats) => stats.quizHighScore >= 20
    },
    {
        id: 'quiz_master',
        name: '퀴즈 마스터',
        description: '퀴즈 게임에서 30점 이상 획득',
        icon: '📚',
        condition: (stats) => stats.quizHighScore >= 30
    },
    {
        id: 'quiz_genius',
        name: '퀴즈 천재',
        description: '퀴즈 게임에서 50점 이상 획득',
        icon: '🎯',
        condition: (stats) => stats.quizHighScore >= 50
    },
    {
        id: 'timeattack_winner',
        name: '타임어택 승자',
        description: '타임어택 모드에서 20점 이상',
        icon: '⏱️',
        condition: (stats) => stats.timeAttackHighScore >= 20
    },
    {
        id: 'survival_expert',
        name: '서바이벌 전문가',
        description: '서바이벌 모드에서 15점 이상',
        icon: '💀',
        condition: (stats) => stats.survivalHighScore >= 15
    },
    {
        id: 'dedicated_player',
        name: '열정적인 플레이어',
        description: '총 50게임 플레이',
        icon: '🎮',
        condition: (stats) => stats.totalGames >= 50
    },
    {
        id: 'veteran_player',
        name: '베테랑 플레이어',
        description: '총 100게임 플레이',
        icon: '🎮🎮',
        condition: (stats) => stats.totalGames >= 100
    },
    {
        id: 'world_explorer',
        name: '세계 탐험가',
        description: '100개 이상의 국가 학습',
        icon: '🌍',
        condition: (stats) => stats.countriesLearned >= 100
    },
    {
        id: 'globe_trotter',
        name: '세계 일주자',
        description: '150개 이상의 국가 학습',
        icon: '🌎',
        condition: (stats) => stats.countriesLearned >= 150
    },
    {
        id: 'world_master',
        name: '세계 마스터',
        description: '모든 195개 국가 학습 완료',
        icon: '🌏',
        condition: (stats) => stats.countriesLearned >= 195
    },
    {
        id: 'early_bird',
        name: '얼리버드',
        description: '아침 6시~9시 사이에 게임 플레이',
        icon: '🌅',
        condition: (stats) => stats.morningGames >= 1
    },
    {
        id: 'night_owl',
        name: '올빼미',
        description: '밤 10시~새벽 2시 사이에 게임 플레이',
        icon: '🦉',
        condition: (stats) => stats.nightGames >= 1
    },
    {
        id: 'daily_player',
        name: '매일 플레이어',
        description: '3일 연속 플레이',
        icon: '📅',
        condition: (stats) => stats.consecutiveDays >= 3
    },
    {
        id: 'weekly_warrior',
        name: '주간 전사',
        description: '7일 연속 플레이',
        icon: '📆',
        condition: (stats) => stats.consecutiveDays >= 7
    }
];

// 통계 데이터 구조
function getDefaultStats() {
    return {
        totalCorrect: 0,
        totalGames: 0,
        maxStreak: 0,
        quizHighScore: 0,
        timeAttackHighScore: 0,
        survivalHighScore: 0,
        memoryPerfect: 0,
        fastestMemoryTime: 0,
        countriesLearned: 0,
        morningGames: 0,
        nightGames: 0,
        consecutiveDays: 0,
        lastPlayDate: null
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
    
    // 시간대별 플레이 추적
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 9) {
        stats.morningGames = (stats.morningGames || 0) + 1;
    } else if (hour >= 22 || hour < 2) {
        stats.nightGames = (stats.nightGames || 0) + 1;
    }
    
    // 연속 플레이 일수 추적
    const today = new Date().toDateString();
    if (stats.lastPlayDate !== today) {
        const lastDate = stats.lastPlayDate ? new Date(stats.lastPlayDate) : null;
        const todayDate = new Date(today);
        
        if (lastDate) {
            const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
                stats.consecutiveDays = (stats.consecutiveDays || 0) + 1;
            } else if (diffDays > 1) {
                stats.consecutiveDays = 1;
            }
        } else {
            stats.consecutiveDays = 1;
        }
        stats.lastPlayDate = today;
    }
    
    saveStats(stats);
    checkAchievements(stats);
    return stats;
}
