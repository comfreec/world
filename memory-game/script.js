// 전 세계 국가 데이터
var allCountries = [
    { name: '대한민국', code: 'KR' }, { name: '미국', code: 'US' }, { name: '일본', code: 'JP' },
    { name: '중국', code: 'CN' }, { name: '영국', code: 'GB' }, { name: '프랑스', code: 'FR' },
    { name: '독일', code: 'DE' }, { name: '이탈리아', code: 'IT' }, { name: '스페인', code: 'ES' },
    { name: '캐나다', code: 'CA' }, { name: '호주', code: 'AU' }, { name: '브라질', code: 'BR' },
    { name: '멕시코', code: 'MX' }, { name: '러시아', code: 'RU' }, { name: '인도', code: 'IN' },
    { name: '태국', code: 'TH' }, { name: '베트남', code: 'VN' }, { name: '싱가포르', code: 'SG' },
    { name: '말레이시아', code: 'MY' }, { name: '인도네시아', code: 'ID' }, { name: '필리핀', code: 'PH' },
    { name: '터키', code: 'TR' }, { name: '사우디아라비아', code: 'SA' }, { name: '이집트', code: 'EG' },
    { name: '남아프리카공화국', code: 'ZA' }, { name: '네덜란드', code: 'NL' }, { name: '스웨덴', code: 'SE' },
    { name: '노르웨이', code: 'NO' }, { name: '덴마크', code: 'DK' }, { name: '핀란드', code: 'FI' },
    { name: '폴란드', code: 'PL' }, { name: '스위스', code: 'CH' }, { name: '오스트리아', code: 'AT' },
    { name: '벨기에', code: 'BE' }, { name: '포르투갈', code: 'PT' }, { name: '그리스', code: 'GR' },
    { name: '뉴질랜드', code: 'NZ' }, { name: '아일랜드', code: 'IE' }, { name: '체코', code: 'CZ' },
    { name: '헝가리', code: 'HU' }, { name: '루마니아', code: 'RO' }, { name: '우크라이나', code: 'UA' },
    { name: '칠레', code: 'CL' }, { name: '콜롬비아', code: 'CO' }, { name: '페루', code: 'PE' },
    { name: '아르헨티나', code: 'AR' }, { name: '이스라엘', code: 'IL' }, { name: '파키스탄', code: 'PK' },
    { name: '아프가니스탄', code: 'AF' }, { name: '알바니아', code: 'AL' }, { name: '알제리', code: 'DZ' },
    { name: '안도라', code: 'AD' }, { name: '앙골라', code: 'AO' }, { name: '아르메니아', code: 'AM' },
    { name: '아제르바이잔', code: 'AZ' }, { name: '바하마', code: 'BS' }, { name: '바레인', code: 'BH' },
    { name: '방글라데시', code: 'BD' }, { name: '바베이도스', code: 'BB' }, { name: '벨라루스', code: 'BY' },
    { name: '벨리즈', code: 'BZ' }, { name: '베냉', code: 'BJ' }, { name: '부탄', code: 'BT' },
    { name: '볼리비아', code: 'BO' }, { name: '보스니아', code: 'BA' }, { name: '보츠와나', code: 'BW' },
    { name: '브루나이', code: 'BN' }, { name: '불가리아', code: 'BG' }, { name: '부르키나파소', code: 'BF' },
    { name: '부룬디', code: 'BI' }, { name: '캄보디아', code: 'KH' }, { name: '카메룬', code: 'CM' },
    { name: '카보베르데', code: 'CV' }, { name: '중앙아프리카', code: 'CF' }, { name: '차드', code: 'TD' },
    { name: '코모로', code: 'KM' }, { name: '콩고', code: 'CG' }, { name: '코스타리카', code: 'CR' },
    { name: '크로아티아', code: 'HR' }, { name: '쿠바', code: 'CU' }, { name: '키프로스', code: 'CY' },
    { name: '지부티', code: 'DJ' }, { name: '도미니카', code: 'DM' }, { name: '도미니카공화국', code: 'DO' },
    { name: '에콰도르', code: 'EC' }, { name: '엘살바도르', code: 'SV' }, { name: '적도기니', code: 'GQ' },
    { name: '에리트레아', code: 'ER' }, { name: '에스토니아', code: 'EE' }, { name: '에티오피아', code: 'ET' },
    { name: '피지', code: 'FJ' }, { name: '가봉', code: 'GA' }, { name: '감비아', code: 'GM' },
    { name: '조지아', code: 'GE' }, { name: '가나', code: 'GH' }, { name: '그레나다', code: 'GD' },
    { name: '과테말라', code: 'GT' }, { name: '기니', code: 'GN' }, { name: '기니비사우', code: 'GW' },
    { name: '가이아나', code: 'GY' }, { name: '아이티', code: 'HT' }, { name: '온두라스', code: 'HN' },
    { name: '아이슬란드', code: 'IS' }, { name: '이란', code: 'IR' }, { name: '이라크', code: 'IQ' },
    { name: '자메이카', code: 'JM' }, { name: '요르단', code: 'JO' }, { name: '카자흐스탄', code: 'KZ' },
    { name: '케냐', code: 'KE' }, { name: '키리바시', code: 'KI' }, { name: '북한', code: 'KP' },
    { name: '코소보', code: 'XK' }, { name: '쿠웨이트', code: 'KW' }, { name: '키르기스스탄', code: 'KG' },
    { name: '라오스', code: 'LA' }, { name: '라트비아', code: 'LV' }, { name: '레바논', code: 'LB' },
    { name: '레소토', code: 'LS' }, { name: '라이베리아', code: 'LR' }, { name: '리비아', code: 'LY' },
    { name: '리히텐슈타인', code: 'LI' }, { name: '리투아니아', code: 'LT' }, { name: '룩셈부르크', code: 'LU' },
    { name: '마다가스카르', code: 'MG' }, { name: '말라위', code: 'MW' }, { name: '몰디브', code: 'MV' },
    { name: '말리', code: 'ML' }, { name: '몰타', code: 'MT' }, { name: '마셜제도', code: 'MH' },
    { name: '모리타니', code: 'MR' }, { name: '모리셔스', code: 'MU' }, { name: '미크로네시아', code: 'FM' },
    { name: '몰도바', code: 'MD' }, { name: '모나코', code: 'MC' }, { name: '몽골', code: 'MN' },
    { name: '몬테네그로', code: 'ME' }, { name: '모로코', code: 'MA' }, { name: '모잠비크', code: 'MZ' },
    { name: '미얀마', code: 'MM' }, { name: '나미비아', code: 'NA' }, { name: '나우루', code: 'NR' },
    { name: '네팔', code: 'NP' }, { name: '니카라과', code: 'NI' }, { name: '니제르', code: 'NE' },
    { name: '나이지리아', code: 'NG' }, { name: '북마케도니아', code: 'MK' }, { name: '오만', code: 'OM' },
    { name: '팔라우', code: 'PW' }, { name: '팔레스타인', code: 'PS' }, { name: '파나마', code: 'PA' },
    { name: '파푸아뉴기니', code: 'PG' }, { name: '파라과이', code: 'PY' }, { name: '카타르', code: 'QA' },
    { name: '르완다', code: 'RW' }, { name: '세인트루시아', code: 'LC' }, { name: '사모아', code: 'WS' },
    { name: '산마리노', code: 'SM' }, { name: '세네갈', code: 'SN' }, { name: '세르비아', code: 'RS' },
    { name: '세이셸', code: 'SC' }, { name: '시에라리온', code: 'SL' }, { name: '슬로바키아', code: 'SK' },
    { name: '슬로베니아', code: 'SI' }, { name: '솔로몬제도', code: 'SB' }, { name: '소말리아', code: 'SO' },
    { name: '남수단', code: 'SS' }, { name: '스리랑카', code: 'LK' }, { name: '수단', code: 'SD' },
    { name: '수리남', code: 'SR' }, { name: '시리아', code: 'SY' }, { name: '타지키스탄', code: 'TJ' },
    { name: '탄자니아', code: 'TZ' }, { name: '동티모르', code: 'TL' }, { name: '토고', code: 'TG' },
    { name: '통가', code: 'TO' }, { name: '트리니다드토바고', code: 'TT' }, { name: '튀니지', code: 'TN' },
    { name: '투르크메니스탄', code: 'TM' }, { name: '투발루', code: 'TV' }, { name: '우간다', code: 'UG' },
    { name: '아랍에미리트', code: 'AE' }, { name: '우루과이', code: 'UY' }, { name: '우즈베키스탄', code: 'UZ' },
    { name: '바누아투', code: 'VU' }, { name: '바티칸', code: 'VA' }, { name: '베네수엘라', code: 'VE' },
    { name: '예멘', code: 'YE' }, { name: '잠비아', code: 'ZM' }, { name: '짐바브웨', code: 'ZW' }
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

// LocalStorage에서 데이터 로드
function loadMemoryGameData() {
    var saved1 = localStorage.getItem('memoryPlayer1HighScore');
    var saved2 = localStorage.getItem('memoryPlayer2HighScore');
    if (saved1) player1HighScore = parseInt(saved1);
    if (saved2) player2HighScore = parseInt(saved2);
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
    
    var shuffledCountries = allCountries.slice();
    shuffleArray(shuffledCountries);
    countries = shuffledCountries.slice(0, 16);
    
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
        '<div>시도 횟수: ' + attempts + '회</div>';
    
    winModal.classList.add('show');
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
