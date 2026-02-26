// 전 세계 국가 데이터 (대륙 정보 포함)
var allCountries = [
    // 아시아
    { name: '대한민국', code: 'KR', continent: 'asia' }, { name: '일본', code: 'JP', continent: 'asia' }, 
    { name: '중국', code: 'CN', continent: 'asia' }, { name: '인도', code: 'IN', continent: 'asia' },
    { name: '태국', code: 'TH', continent: 'asia' }, { name: '베트남', code: 'VN', continent: 'asia' }, 
    { name: '싱가포르', code: 'SG', continent: 'asia' }, { name: '말레이시아', code: 'MY', continent: 'asia' }, 
    { name: '인도네시아', code: 'ID', continent: 'asia' }, { name: '필리핀', code: 'PH', continent: 'asia' },
    { name: '터키', code: 'TR', continent: 'asia' }, { name: '사우디아라비아', code: 'SA', continent: 'asia' },
    { name: '이란', code: 'IR', continent: 'asia' }, { name: '이라크', code: 'IQ', continent: 'asia' },
    { name: '이스라엘', code: 'IL', continent: 'asia' }, { name: '파키스탄', code: 'PK', continent: 'asia' },
    { name: '아프가니스탄', code: 'AF', continent: 'asia' }, { name: '방글라데시', code: 'BD', continent: 'asia' },
    { name: '캄보디아', code: 'KH', continent: 'asia' }, { name: '라오스', code: 'LA', continent: 'asia' },
    { name: '미얀마', code: 'MM', continent: 'asia' }, { name: '네팔', code: 'NP', continent: 'asia' },
    { name: '몽골', code: 'MN', continent: 'asia' }, { name: '북한', code: 'KP', continent: 'asia' },
    { name: '카자흐스탄', code: 'KZ', continent: 'asia' }, { name: '우즈베키스탄', code: 'UZ', continent: 'asia' },
    
    // 유럽
    { name: '영국', code: 'GB', continent: 'europe' }, { name: '프랑스', code: 'FR', continent: 'europe' },
    { name: '독일', code: 'DE', continent: 'europe' }, { name: '이탈리아', code: 'IT', continent: 'europe' },
    { name: '스페인', code: 'ES', continent: 'europe' }, { name: '네덜란드', code: 'NL', continent: 'europe' },
    { name: '스웨덴', code: 'SE', continent: 'europe' }, { name: '노르웨이', code: 'NO', continent: 'europe' },
    { name: '덴마크', code: 'DK', continent: 'europe' }, { name: '핀란드', code: 'FI', continent: 'europe' },
    { name: '폴란드', code: 'PL', continent: 'europe' }, { name: '스위스', code: 'CH', continent: 'europe' },
    { name: '오스트리아', code: 'AT', continent: 'europe' }, { name: '벨기에', code: 'BE', continent: 'europe' },
    { name: '포르투갈', code: 'PT', continent: 'europe' }, { name: '그리스', code: 'GR', continent: 'europe' },
    { name: '아일랜드', code: 'IE', continent: 'europe' }, { name: '체코', code: 'CZ', continent: 'europe' },
    { name: '헝가리', code: 'HU', continent: 'europe' }, { name: '루마니아', code: 'RO', continent: 'europe' },
    { name: '우크라이나', code: 'UA', continent: 'europe' }, { name: '러시아', code: 'RU', continent: 'europe' },
    { name: '크로아티아', code: 'HR', continent: 'europe' }, { name: '세르비아', code: 'RS', continent: 'europe' },
    { name: '불가리아', code: 'BG', continent: 'europe' }, { name: '슬로바키아', code: 'SK', continent: 'europe' },
    
    // 아메리카
    { name: '미국', code: 'US', continent: 'america' }, { name: '캐나다', code: 'CA', continent: 'america' },
    { name: '브라질', code: 'BR', continent: 'america' }, { name: '멕시코', code: 'MX', continent: 'america' },
    { name: '아르헨티나', code: 'AR', continent: 'america' }, { name: '칠레', code: 'CL', continent: 'america' },
    { name: '콜롬비아', code: 'CO', continent: 'america' }, { name: '페루', code: 'PE', continent: 'america' },
    { name: '베네수엘라', code: 'VE', continent: 'america' }, { name: '에콰도르', code: 'EC', continent: 'america' },
    { name: '볼리비아', code: 'BO', continent: 'america' }, { name: '파라과이', code: 'PY', continent: 'america' },
    { name: '우루과이', code: 'UY', continent: 'america' }, { name: '쿠바', code: 'CU', continent: 'america' },
    { name: '자메이카', code: 'JM', continent: 'america' }, { name: '코스타리카', code: 'CR', continent: 'america' },
    { name: '파나마', code: 'PA', continent: 'america' }, { name: '과테말라', code: 'GT', continent: 'america' },
    
    // 아프리카
    { name: '이집트', code: 'EG', continent: 'africa' }, { name: '남아프리카공화국', code: 'ZA', continent: 'africa' },
    { name: '나이지리아', code: 'NG', continent: 'africa' }, { name: '케냐', code: 'KE', continent: 'africa' },
    { name: '에티오피아', code: 'ET', continent: 'africa' }, { name: '가나', code: 'GH', continent: 'africa' },
    { name: '모로코', code: 'MA', continent: 'africa' }, { name: '알제리', code: 'DZ', continent: 'africa' },
    { name: '튀니지', code: 'TN', continent: 'africa' }, { name: '리비아', code: 'LY', continent: 'africa' },
    { name: '세네갈', code: 'SN', continent: 'africa' }, { name: '카메룬', code: 'CM', continent: 'africa' },
    { name: '탄자니아', code: 'TZ', continent: 'africa' }, { name: '우간다', code: 'UG', continent: 'africa' },
    { name: '앙골라', code: 'AO', continent: 'africa' }, { name: '모잠비크', code: 'MZ', continent: 'africa' },
    
    // 오세아니아
    { name: '호주', code: 'AU', continent: 'oceania' }, { name: '뉴질랜드', code: 'NZ', continent: 'oceania' },
    { name: '피지', code: 'FJ', continent: 'oceania' }, { name: '파푸아뉴기니', code: 'PG', continent: 'oceania' },
    { name: '사모아', code: 'WS', continent: 'oceania' }, { name: '통가', code: 'TO', continent: 'oceania' }
];

var countries = [];
var cards = [];
var flippedCards = [];
var matchedPairs = 0;
var attempts = 0;
var timer = 0;
var timerInterval = null;
var canFlip = true;
var currentPlayer = 1;
var player1Score = 0;
var player2Score = 0;
var player1HighScore = 0;
var player2HighScore = 0;
var soundEnabled = true;
var voiceEnabled = true;
var pairsCount = 16; // 기본 난이도: 16쌍 (32장) - 어려움
var selectedContinent = 'all'; // 선택된 대륙: all, asia, europe, america, africa, oceania

// LocalStorage에서 데이터 로드
function loadMemoryGameData() {
    var saved1 = localStorage.getItem('memoryPlayer1HighScore');
    var saved2 = localStorage.getItem('memoryPlayer2HighScore');
    if (saved1) player1HighScore = parseInt(saved1);
    if (saved2) player2HighScore = parseInt(saved2);
    
    var savedSound = localStorage.getItem('memorySoundEnabled');
    if (savedSound !== null) {
        soundEnabled = savedSound === 'true';
    }
    
    var savedVoice = localStorage.getItem('memoryVoiceEnabled');
    if (savedVoice !== null) {
        voiceEnabled = savedVoice === 'true';
    }
}

// LocalStorage에 데이터 저장
function saveMemoryGameData() {
    if (player1Score > player1HighScore) {
        player1HighScore = player1Score;
        localStorage.setItem('memoryPlayer1HighScore', player1HighScore.toString());
    }
    if (player2Score > player2HighScore) {
        player2HighScore = player2Score;
        localStorage.setItem('memoryPlayer2HighScore', player2HighScore.toString());
    }
    
    // 통계 업데이트
    if (typeof loadStats === 'function') {
        var stats = loadStats();
        stats.totalGames = (stats.totalGames || 0) + 1;
        stats.totalCorrect = (stats.totalCorrect || 0) + matchedPairs;
        
        // 완벽한 게임 체크 (16쌍 모두 맞춤)
        if (matchedPairs === 16) {
            stats.memoryPerfect = (stats.memoryPerfect || 0) + 1;
        }
        
        // 최고 속도 기록
        if (stats.fastestMemoryTime === 0 || timer < stats.fastestMemoryTime) {
            stats.fastestMemoryTime = timer;
        }
        
        // 학습한 국가 수 업데이트
        var learnedSet = new Set(stats.learnedCountries || []);
        for (var i = 0; i < countries.length; i++) {
            learnedSet.add(countries[i].code);
        }
        stats.learnedCountries = Array.from(learnedSet);
        stats.countriesLearned = stats.learnedCountries.length;
        
        saveStats(stats);
        checkAchievements(stats);
    }
}

var gameBoard = document.getElementById('gameBoard');
var player1ScoreEl = document.getElementById('player1Score');
var player2ScoreEl = document.getElementById('player2Score');
var attemptsEl = document.getElementById('attempts');
var currentPlayerEl = document.getElementById('currentPlayer');
var restartBtn = document.getElementById('restartBtn');
var winModal = document.getElementById('winModal');
var winMessage = document.getElementById('winMessage');
var playAgainBtn = document.getElementById('playAgainBtn');

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function initGame() {
    loadMemoryGameData(); // 저장된 데이터 로드
    
    // 대륙 필터 적용
    var filteredCountries = selectedContinent === 'all' 
        ? allCountries.slice() 
        : allCountries.filter(function(c) { return c.continent === selectedContinent; });
    
    shuffleArray(filteredCountries);
    countries = filteredCountries.slice(0, pairsCount); // 난이도에 따라 쌍 개수 조정
    
    cards = [];
    for (var i = 0; i < countries.length; i++) {
        cards.push({ name: countries[i].name, code: countries[i].code, id: Math.random() });
        cards.push({ name: countries[i].name, code: countries[i].code, id: Math.random() });
    }
    
    shuffleArray(cards);
    
    flippedCards = [];
    matchedPairs = 0;
    attempts = 0;
    timer = 0;
    canFlip = true;
    currentPlayer = 1;
    player1Score = 0;
    player2Score = 0;
    
    updateUI();
    renderCards();
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        timer++;
        updateTimer();
    }, 1000);
    
    winModal.classList.remove('show');
}

function renderCards() {
    gameBoard.innerHTML = '';
    
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.setAttribute('data-index', i);
        
        cardEl.innerHTML = '<div class="card-front">🌍</div><div class="card-back"><img src="https://flagcdn.com/w160/' + card.code.toLowerCase() + '.png" alt="' + card.name + '"><div class="country-name">' + card.name + '</div></div>';
        
        (function(index) {
            cardEl.addEventListener('click', function() {
                flipCard(index);
            });
        })(i);
        
        gameBoard.appendChild(cardEl);
    }
}

function flipCard(index) {
    if (!canFlip) return;
    
    var cardEl = gameBoard.children[index];
    var card = cards[index];
    
    if (cardEl.classList.contains('matched')) {
        speakCountryName(card.name, 1.0);
        return;
    }
    
    if (cardEl.classList.contains('flipped')) {
        return;
    }
    
    cardEl.classList.add('flipped');
    flippedCards.push({ index: index, card: card, element: cardEl });
    
    speakCountryName(card.name, 1.3);
    
    if (flippedCards.length === 2) {
        canFlip = false;
        attempts++;
        updateUI();
        
        setTimeout(function() {
            checkMatch();
        }, 1000);
    }
}

function checkMatch() {
    var first = flippedCards[0];
    var second = flippedCards[1];
    
    if (first.card.code === second.card.code) {
        first.element.classList.add('matched');
        second.element.classList.add('matched');
        matchedPairs++;
        
        if (currentPlayer === 1) {
            player1Score++;
        } else {
            player2Score++;
        }
        
        updateUI();
        playCorrectSound();
        
        if (matchedPairs === countries.length) {
            setTimeout(function() {
                endGame();
            }, 500);
        }
    } else {
        first.element.classList.remove('flipped');
        second.element.classList.remove('flipped');
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateUI();
    }
    
    flippedCards = [];
    canFlip = true;
}

function speakCountryName(countryName, rate) {
    if (!voiceEnabled) return;
    
    try {
        if ('speechSynthesis' in window) {
            var utterance = new SpeechSynthesisUtterance(countryName);
            utterance.lang = 'ko-KR';
            utterance.rate = rate || 0.9;
            utterance.pitch = 1;
            utterance.volume = 10;
            window.speechSynthesis.speak(utterance);
        }
    } catch(e) {
        console.log('음성 재생 실패:', e);
    }
}

function playCorrectSound() {
    if (!soundEnabled) return;
    
    try {
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        var osc = audioContext.createOscillator();
        var gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.value = 523.25;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        osc.start(audioContext.currentTime);
        osc.stop(audioContext.currentTime + 0.3);
    } catch(e) {}
}

function playWrongSound() {
    if (!soundEnabled) return;
    
    try {
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        var osc = audioContext.createOscillator();
        var gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);
        osc.frequency.value = 200;
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        osc.start(audioContext.currentTime);
        osc.stop(audioContext.currentTime + 0.3);
    } catch(e) {}
}

function updateUI() {
    player1ScoreEl.textContent = player1Score;
    player2ScoreEl.textContent = player2Score;
    attemptsEl.textContent = attempts;
    currentPlayerEl.textContent = currentPlayer === 1 ? '아빠 차례' : '쭈니 차례';
    currentPlayerEl.className = 'current-player player' + currentPlayer + '-turn';
}

function updateTimer() {
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
}

function endGame() {
    clearInterval(timerInterval);
    saveMemoryGameData(); // 게임 데이터 저장
    
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
    var timeStr = minutes > 0 ? minutes + '분 ' + seconds + '초' : seconds + '초';
    
    var winner = '';
    var isNewRecord1 = player1Score === player1HighScore && player1Score > 0;
    var isNewRecord2 = player2Score === player2HighScore && player2Score > 0;
    
    if (player1Score > player2Score) {
        winner = '🏆 아빠 승리! 🏆';
    } else if (player2Score > player1Score) {
        winner = '🏆 쭈니 승리! 🏆';
    } else {
        winner = '🤝 무승부! 🤝';
    }
    
    winMessage.innerHTML = '<div style="font-size:1.8em;margin-bottom:20px;">' + winner + '</div>' +
        '<div style="font-size:1.2em;margin-bottom:10px;">아빠: ' + player1Score + '쌍 ' + 
        (isNewRecord1 ? '<span style="color:#28a745;">🎉 신기록!</span>' : '(최고: ' + player1HighScore + ')') + '</div>' +
        '<div style="font-size:1.2em;margin-bottom:10px;">쭈니: ' + player2Score + '쌍 ' + 
        (isNewRecord2 ? '<span style="color:#28a745;">🎉 신기록!</span>' : '(최고: ' + player2HighScore + ')') + '</div>' +
        '<div style="margin-top:15px;">시간: ' + timeStr + '</div>' +
        '<div>시도 횟수: ' + attempts + '회</div>' +
        '<button onclick="shareMemoryScore()" style="margin-top: 20px; padding: 12px 24px; background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1em; font-weight: bold;">📤 점수 공유하기</button>';
    
    winModal.classList.add('show');
}

// 메모리 게임 점수 공유
function shareMemoryScore() {
    var minutes = Math.floor(timer / 60);
    var seconds = timer % 60;
    var timeStr = minutes > 0 ? minutes + '분 ' + seconds + '초' : seconds + '초';
    
    var winner = '';
    if (player1Score > player2Score) {
        winner = '아빠 승리!';
    } else if (player2Score > player1Score) {
        winner = '쭈니 승리!';
    } else {
        winner = '무승부!';
    }
    
    var shareText = '🌍 쭈니 국기 메모리 게임 🧠\n\n' +
        winner + '\n' +
        '아빠: ' + player1Score + '쌍 (최고: ' + player1HighScore + ')\n' +
        '쭈니: ' + player2Score + '쌍 (최고: ' + player2HighScore + ')\n' +
        '시간: ' + timeStr + '\n' +
        '시도: ' + attempts + '회\n\n' +
        '함께 국기를 배워요!';
    
    if (navigator.share) {
        navigator.share({
            title: '쭈니 국기 메모리 게임',
            text: shareText,
            url: window.location.origin + '/memory-game/'
        }).catch(function() {});
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText + '\n' + window.location.origin + '/memory-game/').then(function() {
            alert('점수가 클립보드에 복사되었습니다! 📋');
        });
    }
}

restartBtn.addEventListener('click', initGame);
playAgainBtn.addEventListener('click', initGame);

// 전체화면 요청 함수
function requestFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

// 페이지 로드 시 전체화면 시도
window.addEventListener('load', function() {
    // 사용자 인터랙션 후 전체화면 실행
    document.body.addEventListener('click', function() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            requestFullscreen();
        }
    }, { once: true });
});

initGame();

// 난이도 선택 (콤보박스)
var difficultySelect = document.getElementById('difficultySelect');
difficultySelect.addEventListener('change', function() {
    pairsCount = parseInt(this.value);
    initGame();
});

// 설정 관련
var settingsBtn = document.getElementById('settingsBtn');
var settingsModal = document.getElementById('settingsModal');
var closeSettingsBtn = document.getElementById('closeSettingsBtn');
var soundToggle = document.getElementById('soundToggle');
var voiceToggle = document.getElementById('voiceToggle');
var selectedContinentText = document.getElementById('selectedContinentText');

// 대륙 이름 매핑
var continentNames = {
    'all': '전체',
    'asia': '아시아',
    'europe': '유럽',
    'america': '아메리카',
    'africa': '아프리카',
    'oceania': '오세아니아'
};

function saveSettings() {
    localStorage.setItem('memorySoundEnabled', soundEnabled.toString());
    localStorage.setItem('memoryVoiceEnabled', voiceEnabled.toString());
    localStorage.setItem('selectedContinent', selectedContinent);
}

// 설정 로드
function loadSettings() {
    var savedContinent = localStorage.getItem('selectedContinent');
    if (savedContinent) {
        selectedContinent = savedContinent;
        updateContinentSelection();
    }
}

// 대륙 선택 UI 업데이트
function updateContinentSelection() {
    // 모든 대륙 선택 해제
    document.querySelectorAll('.continent').forEach(function(el) {
        el.classList.remove('selected');
    });
    document.querySelectorAll('.continent-btn').forEach(function(el) {
        el.classList.remove('active');
    });
    
    // 선택된 대륙 표시
    if (selectedContinent === 'all') {
        document.querySelector('.continent-btn[data-continent="all"]').classList.add('active');
    } else {
        var continentEl = document.getElementById(selectedContinent);
        if (continentEl) {
            continentEl.classList.add('selected');
        }
    }
    
    // 선택된 대륙 텍스트 업데이트
    selectedContinentText.textContent = continentNames[selectedContinent] || '전체';
}

loadSettings();

settingsBtn.addEventListener('click', function() {
    soundToggle.checked = soundEnabled;
    voiceToggle.checked = voiceEnabled;
    updateContinentSelection();
    settingsModal.classList.add('show');
});

closeSettingsBtn.addEventListener('click', function() {
    settingsModal.classList.remove('show');
});

soundToggle.addEventListener('change', function() {
    soundEnabled = soundToggle.checked;
    saveSettings();
});

voiceToggle.addEventListener('change', function() {
    voiceEnabled = voiceToggle.checked;
    saveSettings();
});

// 세계지도 대륙 클릭 이벤트
document.querySelectorAll('.continent').forEach(function(continent) {
    continent.addEventListener('click', function() {
        selectedContinent = this.getAttribute('data-continent');
        updateContinentSelection();
        saveSettings();
        initGame(); // 게임 재시작
    });
});

// 전체 버튼 클릭 이벤트
document.querySelector('.continent-btn[data-continent="all"]').addEventListener('click', function() {
    selectedContinent = 'all';
    updateContinentSelection();
    saveSettings();
    initGame(); // 게임 재시작
});

settingsModal.addEventListener('click', function(e) {
    if (e.target === settingsModal) {
        settingsModal.classList.remove('show');
    }
});
