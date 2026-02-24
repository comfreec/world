// 전 세계 국가 데이터 (ISO 3166-1 alpha-2)
const countries = [
    { name: '아프가니스탄', code: 'AF' },
    { name: '알바니아', code: 'AL' },
    { name: '알제리', code: 'DZ' },
    { name: '안도라', code: 'AD' },
    { name: '앙골라', code: 'AO' },
    { name: '앤티가 바부다', code: 'AG' },
    { name: '아르헨티나', code: 'AR' },
    { name: '아르메니아', code: 'AM' },
    { name: '호주', code: 'AU' },
    { name: '오스트리아', code: 'AT' },
    { name: '아제르바이잔', code: 'AZ' },
    { name: '바하마', code: 'BS' },
    { name: '바레인', code: 'BH' },
    { name: '방글라데시', code: 'BD' },
    { name: '바베이도스', code: 'BB' },
    { name: '벨라루스', code: 'BY' },
    { name: '벨기에', code: 'BE' },
    { name: '벨리즈', code: 'BZ' },
    { name: '베냉', code: 'BJ' },
    { name: '부탄', code: 'BT' },
    { name: '볼리비아', code: 'BO' },
    { name: '보스니아 헤르체고비나', code: 'BA' },
    { name: '보츠와나', code: 'BW' },
    { name: '브라질', code: 'BR' },
    { name: '브루나이', code: 'BN' },
    { name: '불가리아', code: 'BG' },
    { name: '부르키나파소', code: 'BF' },
    { name: '부룬디', code: 'BI' },
    { name: '캄보디아', code: 'KH' },
    { name: '카메룬', code: 'CM' },
    { name: '캐나다', code: 'CA' },
    { name: '카보베르데', code: 'CV' },
    { name: '중앙아프리카공화국', code: 'CF' },
    { name: '차드', code: 'TD' },
    { name: '칠레', code: 'CL' },
    { name: '중국', code: 'CN' },
    { name: '콜롬비아', code: 'CO' },
    { name: '코모로', code: 'KM' },
    { name: '콩고', code: 'CG' },
    { name: '콩고민주공화국', code: 'CD' },
    { name: '코스타리카', code: 'CR' },
    { name: '크로아티아', code: 'HR' },
    { name: '쿠바', code: 'CU' },
    { name: '키프로스', code: 'CY' },
    { name: '체코', code: 'CZ' },
    { name: '덴마크', code: 'DK' },
    { name: '지부티', code: 'DJ' },
    { name: '도미니카', code: 'DM' },
    { name: '도미니카공화국', code: 'DO' },
    { name: '에콰도르', code: 'EC' },
    { name: '이집트', code: 'EG' },
    { name: '엘살바도르', code: 'SV' },
    { name: '적도기니', code: 'GQ' },
    { name: '에리트레아', code: 'ER' },
    { name: '에스토니아', code: 'EE' },
    { name: '에스와티니', code: 'SZ' },
    { name: '에티오피아', code: 'ET' },
    { name: '피지', code: 'FJ' },
    { name: '핀란드', code: 'FI' },
    { name: '프랑스', code: 'FR' },
    { name: '가봉', code: 'GA' },
    { name: '감비아', code: 'GM' },
    { name: '조지아', code: 'GE' },
    { name: '독일', code: 'DE' },
    { name: '가나', code: 'GH' },
    { name: '그리스', code: 'GR' },
    { name: '그레나다', code: 'GD' },
    { name: '과테말라', code: 'GT' },
    { name: '기니', code: 'GN' },
    { name: '기니비사우', code: 'GW' },
    { name: '가이아나', code: 'GY' },
    { name: '아이티', code: 'HT' },
    { name: '온두라스', code: 'HN' },
    { name: '헝가리', code: 'HU' },
    { name: '아이슬란드', code: 'IS' },
    { name: '인도', code: 'IN' },
    { name: '인도네시아', code: 'ID' },
    { name: '이란', code: 'IR' },
    { name: '이라크', code: 'IQ' },
    { name: '아일랜드', code: 'IE' },
    { name: '이스라엘', code: 'IL' },
    { name: '이탈리아', code: 'IT' },
    { name: '코트디부아르', code: 'CI' },
    { name: '자메이카', code: 'JM' },
    { name: '일본', code: 'JP' },
    { name: '요르단', code: 'JO' },
    { name: '카자흐스탄', code: 'KZ' },
    { name: '케냐', code: 'KE' },
    { name: '키리바시', code: 'KI' },
    { name: '북한', code: 'KP' },
    { name: '대한민국', code: 'KR' },
    { name: '쿠웨이트', code: 'KW' },
    { name: '키르기스스탄', code: 'KG' },
    { name: '라오스', code: 'LA' },
    { name: '라트비아', code: 'LV' },
    { name: '레바논', code: 'LB' },
    { name: '레소토', code: 'LS' },
    { name: '라이베리아', code: 'LR' },
    { name: '리비아', code: 'LY' },
    { name: '리히텐슈타인', code: 'LI' },
    { name: '리투아니아', code: 'LT' },
    { name: '룩셈부르크', code: 'LU' },
    { name: '마다가스카르', code: 'MG' },
    { name: '말라위', code: 'MW' },
    { name: '말레이시아', code: 'MY' },
    { name: '몰디브', code: 'MV' },
    { name: '말리', code: 'ML' },
    { name: '몰타', code: 'MT' },
    { name: '마셜제도', code: 'MH' },
    { name: '모리타니', code: 'MR' },
    { name: '모리셔스', code: 'MU' },
    { name: '멕시코', code: 'MX' },
    { name: '미크로네시아', code: 'FM' },
    { name: '몰도바', code: 'MD' },
    { name: '모나코', code: 'MC' },
    { name: '몽골', code: 'MN' },
    { name: '몬테네그로', code: 'ME' },
    { name: '모로코', code: 'MA' },
    { name: '모잠비크', code: 'MZ' },
    { name: '미얀마', code: 'MM' },
    { name: '나미비아', code: 'NA' },
    { name: '나우루', code: 'NR' },
    { name: '네팔', code: 'NP' },
    { name: '네덜란드', code: 'NL' },
    { name: '뉴질랜드', code: 'NZ' },
    { name: '니카라과', code: 'NI' },
    { name: '니제르', code: 'NE' },
    { name: '나이지리아', code: 'NG' },
    { name: '북마케도니아', code: 'MK' },
    { name: '노르웨이', code: 'NO' },
    { name: '오만', code: 'OM' },
    { name: '파키스탄', code: 'PK' },
    { name: '팔라우', code: 'PW' },
    { name: '팔레스타인', code: 'PS' },
    { name: '파나마', code: 'PA' },
    { name: '파푸아뉴기니', code: 'PG' },
    { name: '파라과이', code: 'PY' },
    { name: '페루', code: 'PE' },
    { name: '필리핀', code: 'PH' },
    { name: '폴란드', code: 'PL' },
    { name: '포르투갈', code: 'PT' },
    { name: '카타르', code: 'QA' },
    { name: '루마니아', code: 'RO' },
    { name: '러시아', code: 'RU' },
    { name: '르완다', code: 'RW' },
    { name: '세인트키츠 네비스', code: 'KN' },
    { name: '세인트루시아', code: 'LC' },
    { name: '세인트빈센트 그레나딘', code: 'VC' },
    { name: '사모아', code: 'WS' },
    { name: '산마리노', code: 'SM' },
    { name: '상투메 프린시페', code: 'ST' },
    { name: '사우디아라비아', code: 'SA' },
    { name: '세네갈', code: 'SN' },
    { name: '세르비아', code: 'RS' },
    { name: '세이셸', code: 'SC' },
    { name: '시에라리온', code: 'SL' },
    { name: '싱가포르', code: 'SG' },
    { name: '슬로바키아', code: 'SK' },
    { name: '슬로베니아', code: 'SI' },
    { name: '솔로몬제도', code: 'SB' },
    { name: '소말리아', code: 'SO' },
    { name: '남아프리카공화국', code: 'ZA' },
    { name: '남수단', code: 'SS' },
    { name: '스페인', code: 'ES' },
    { name: '스리랑카', code: 'LK' },
    { name: '수단', code: 'SD' },
    { name: '수리남', code: 'SR' },
    { name: '스웨덴', code: 'SE' },
    { name: '스위스', code: 'CH' },
    { name: '시리아', code: 'SY' },
    { name: '타지키스탄', code: 'TJ' },
    { name: '탄자니아', code: 'TZ' },
    { name: '태국', code: 'TH' },
    { name: '동티모르', code: 'TL' },
    { name: '토고', code: 'TG' },
    { name: '통가', code: 'TO' },
    { name: '트리니다드 토바고', code: 'TT' },
    { name: '튀니지', code: 'TN' },
    { name: '터키', code: 'TR' },
    { name: '투르크메니스탄', code: 'TM' },
    { name: '투발루', code: 'TV' },
    { name: '우간다', code: 'UG' },
    { name: '우크라이나', code: 'UA' },
    { name: '아랍에미리트', code: 'AE' },
    { name: '영국', code: 'GB' },
    { name: '미국', code: 'US' },
    { name: '우루과이', code: 'UY' },
    { name: '우즈베키스탄', code: 'UZ' },
    { name: '바누아투', code: 'VU' },
    { name: '바티칸', code: 'VA' },
    { name: '베네수엘라', code: 'VE' },
    { name: '베트남', code: 'VN' },
    { name: '예멘', code: 'YE' },
    { name: '잠비아', code: 'ZM' },
    { name: '짐바브웨', code: 'ZW' }
];

let score = 0;
let totalQuestions = 0;
let currentCountry = null;
let usedCountries = [];
let correctCount = 0; // 연속 정답 카운트
let isInputMode = false; // 입력 모드 여부

// 효과음 생성 (Web Audio API 사용)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playCorrectSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 523.25; // C5
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
    
    // 두 번째 음
    setTimeout(() => {
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        
        osc2.frequency.value = 659.25; // E5
        osc2.type = 'sine';
        
        gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        osc2.start(audioContext.currentTime);
        osc2.stop(audioContext.currentTime + 0.5);
    }, 100);
}

function playWrongSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 200;
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// DOM 요소
const flagElement = document.getElementById('flag');
const optionButtons = [
    document.getElementById('option1'),
    document.getElementById('option2'),
    document.getElementById('option3'),
    document.getElementById('option4')
];
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const choiceModeBtn = document.getElementById('choiceMode');
const inputModeBtn = document.getElementById('inputMode');
const choiceArea = document.getElementById('choiceArea');
const inputArea = document.getElementById('inputArea');
const countryInput = document.getElementById('countryInput');
const submitBtn = document.getElementById('submitBtn');
const drawingCanvas = document.getElementById('drawingCanvas');
const clearBtn = document.getElementById('clearBtn');

// 캔버스 설정
const ctx = drawingCanvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hasDrawing = false; // 캔버스에 그림이 있는지 체크

// 캔버스 그리기 설정
ctx.strokeStyle = '#333';
ctx.lineWidth = 3;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// 마우스 이벤트
drawingCanvas.addEventListener('mousedown', startDrawing);
drawingCanvas.addEventListener('mousemove', draw);
drawingCanvas.addEventListener('mouseup', stopDrawing);
drawingCanvas.addEventListener('mouseout', stopDrawing);

// 터치 이벤트
drawingCanvas.addEventListener('touchstart', handleTouchStart);
drawingCanvas.addEventListener('touchmove', handleTouchMove);
drawingCanvas.addEventListener('touchend', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    const rect = drawingCanvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
}

function draw(e) {
    if (!isDrawing) return;
    
    const rect = drawingCanvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    
    lastX = currentX;
    lastY = currentY;
    hasDrawing = true; // 그림이 그려졌음을 표시
}

function stopDrawing() {
    isDrawing = false;
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = drawingCanvas.getBoundingClientRect();
    isDrawing = true;
    lastX = touch.clientX - rect.left;
    lastY = touch.clientY - rect.top;
}

function handleTouchMove(e) {
    e.preventDefault();
    if (!isDrawing) return;
    
    const touch = e.touches[0];
    const rect = drawingCanvas.getBoundingClientRect();
    const currentX = touch.clientX - rect.left;
    const currentY = touch.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    
    lastX = currentX;
    lastY = currentY;
    hasDrawing = true; // 그림이 그려졌음을 표시
}

// 캔버스 지우기
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    hasDrawing = false; // 그림이 지워졌음을 표시
});

// 게임 초기화
function initGame() {
    score = 0;
    totalQuestions = 0;
    usedCountries = [];
    correctCount = 0; // 정답 카운트 초기화
    updateScore();
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    loadQuestion();
}

// 랜덤 국가 선택
function getRandomCountry(exclude = []) {
    const available = countries.filter(c => !exclude.includes(c));
    return available[Math.floor(Math.random() * available.length)];
}

// 문제 로드
function loadQuestion() {
    // 모든 국가를 다 사용했으면 게임 종료
    if (usedCountries.length === countries.length) {
        endGame();
        return;
    }

    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';
    nextBtn.style.display = 'none';

    // 정답 국가 선택 (이미 사용한 국가는 제외하지 않음)
    currentCountry = countries[Math.floor(Math.random() * countries.length)];

    // 국기 이미지 표시
    const flagImg = document.createElement('img');
    flagImg.src = `https://flagcdn.com/w640/${currentCountry.code.toLowerCase()}.png`;
    flagImg.alt = `${currentCountry.name} 국기`;
    flagImg.onerror = function() {
        // 이미지 로드 실패 시 대체 소스 사용
        this.src = `https://flagcdn.com/${currentCountry.code.toLowerCase()}.svg`;
    };
    flagElement.innerHTML = '';
    flagElement.appendChild(flagImg);

    // 입력 모드면 선택지 생성 안 함
    if (isInputMode) {
        countryInput.value = '';
        countryInput.disabled = false;
        submitBtn.disabled = false;
        ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
        hasDrawing = false; // 그림 상태 초기화
        countryInput.focus();
        return;
    }

    // 오답 선택지 3개 생성
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
        const randomCountry = getRandomCountry([currentCountry, ...wrongOptions]);
        if (!wrongOptions.includes(randomCountry)) {
            wrongOptions.push(randomCountry);
        }
    }

    // 정답과 오답을 섞어서 배치
    const allOptions = [currentCountry, ...wrongOptions];
    shuffleArray(allOptions);

    // 버튼에 옵션 배치
    optionButtons.forEach((btn, index) => {
        btn.blur();
        btn.className = 'option-btn';
        btn.disabled = false;
        btn.removeAttribute('style');
        btn.textContent = allOptions[index].name;
        btn.onclick = () => checkAnswer(allOptions[index]);
        
        // 모바일 터치 이벤트 처리
        btn.ontouchend = (e) => {
            e.preventDefault();
            if (!btn.disabled) {
                checkAnswer(allOptions[index]);
            }
        };
    });
}

// 배열 섞기
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 같은 문제 다시 로드 (선택지 그대로 유지)
function reloadSameQuestion() {
    feedbackElement.textContent = '';
    feedbackElement.className = 'feedback';

    // 버튼 초기화 - 선택지는 그대로, 색상만 초기화
    optionButtons.forEach((btn) => {
        // 색상만 초기화 (깜빡임 없이)
        btn.className = 'option-btn';
        btn.removeAttribute('style');
        btn.disabled = false;
        btn.blur();
        
        // 클릭 이벤트 재설정 - 현재 버튼의 텍스트로 국가 찾기
        const countryName = btn.textContent;
        const country = countries.find(c => c.name === countryName);
        if (country) {
            btn.onclick = () => checkAnswer(country);
            
            // 모바일 터치 이벤트 처리
            btn.ontouchend = (e) => {
                e.preventDefault();
                if (!btn.disabled) {
                    checkAnswer(country);
                }
            };
        }
    });
}

// 답안 확인
function checkAnswer(selectedCountry) {
    // 모든 버튼 비활성화
    optionButtons.forEach(btn => {
        btn.disabled = true;
        btn.blur(); // 즉시 포커스 제거
    });

    if (selectedCountry.name === currentCountry.name) {
        // 정답
        totalQuestions++;
        score++;
        correctCount++; // 정답 카운트 증가
        updateScore();
        playCorrectSound(); // 정답 효과음
        speakCountryName(currentCountry.name); // 나라 이름 말하기
        feedbackElement.textContent = '🎉 정답입니다!';
        feedbackElement.className = 'feedback correct';
        
        // 정답 버튼 표시
        optionButtons.forEach(btn => {
            if (btn.textContent === currentCountry.name) {
                btn.className = 'option-btn correct';
            }
        });
        
        // 정답 맞춘 국가를 기록
        if (!usedCountries.includes(currentCountry)) {
            usedCountries.push(currentCountry);
        }
        
        // 50개 달성 체크
        if (correctCount === 50) {
            setTimeout(() => {
                showRewardScreen();
            }, 1000);
        } else {
            // 1초 후 자동으로 다음 문제로
            setTimeout(() => {
                loadQuestion();
            }, 1000);
        }
    } else {
        // 오답
        playWrongSound(); // 오답 효과음
        feedbackElement.textContent = `❌ 틀렸습니다! 다시 시도해보세요.`;
        feedbackElement.className = 'feedback wrong';
        
        // 선택한 버튼만 표시
        optionButtons.forEach(btn => {
            if (btn.textContent === selectedCountry.name) {
                btn.className = 'option-btn wrong';
            }
        });
        
        // 1.5초 후 같은 문제 다시 로드
        setTimeout(() => {
            reloadSameQuestion();
        }, 1500);
    }
}

// 점수 업데이트
function updateScore() {
    scoreElement.textContent = score;
    totalElement.textContent = totalQuestions;
}

// 용돈 보상 화면
function showRewardScreen() {
    flagElement.innerHTML = '<div style="font-size: 100px;">🎊</div>';
    feedbackElement.innerHTML = `
        <div style="font-size: 2em; margin-bottom: 20px;">🎉 축하합니다! 🎉</div>
        <div style="font-size: 1.5em; margin-bottom: 15px;">국기 50개 달성!</div>
        <div style="font-size: 3em; color: #28a745; font-weight: bold; margin: 20px 0;">💰 용돈 1,000원 💰</div>
        <div style="font-size: 1.2em; color: #666;">정말 잘했어요! 👏</div>
    `;
    feedbackElement.className = 'feedback';
    
    optionButtons.forEach(btn => {
        btn.style.display = 'none';
    });
    
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    restartBtn.textContent = '처음부터 다시 하기';
}

// 게임 종료
function endGame() {
    flagElement.innerHTML = '<div style="font-size: 120px;">🏆</div>';
    feedbackElement.textContent = `게임 종료! 최종 점수: ${score}/${totalQuestions}`;
    feedbackElement.className = 'feedback';
    
    optionButtons.forEach(btn => {
        btn.style.display = 'none';
    });
    
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'block';
}

// 이벤트 리스너
nextBtn.addEventListener('click', loadQuestion);
restartBtn.addEventListener('click', () => {
    optionButtons.forEach(btn => btn.style.display = 'block');
    restartBtn.textContent = '다시 시작';
    initGame();
});

// 모드 전환
choiceModeBtn.addEventListener('click', () => {
    isInputMode = false;
    choiceModeBtn.classList.add('active');
    inputModeBtn.classList.remove('active');
    choiceArea.style.display = 'block';
    inputArea.style.display = 'none';
    loadQuestion();
});

inputModeBtn.addEventListener('click', () => {
    isInputMode = true;
    inputModeBtn.classList.add('active');
    choiceModeBtn.classList.remove('active');
    choiceArea.style.display = 'none';
    inputArea.style.display = 'flex';
    loadQuestion();
});

// 입력 모드 제출
submitBtn.addEventListener('click', () => {
    console.log('Submit button clicked');
    console.log('Has drawing:', hasDrawing);
    
    const userAnswer = countryInput.value.trim();
    console.log('User answer:', userAnswer);
    
    // 캔버스에 그림이 있거나 입력창에 텍스트가 있으면 진행
    if (userAnswer || hasDrawing) {
        if (userAnswer) {
            checkInputAnswer(userAnswer);
        } else {
            // 캔버스에만 그림이 있는 경우 - 입력창에 입력하라고 안내
            feedbackElement.textContent = '캔버스에 쓴 글씨를 보고 아래 입력창에 입력해주세요!';
            feedbackElement.className = 'feedback';
            feedbackElement.style.color = '#667eea';
        }
    } else {
        alert('캔버스에 글씨를 쓰거나 입력창에 국가 이름을 입력해주세요!');
    }
});

// 엔터키로 제출
countryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const userAnswer = countryInput.value.trim();
        if (userAnswer) {
            checkInputAnswer(userAnswer);
        }
    }
});

// 입력 모드 답안 확인
function checkInputAnswer(userAnswer) {
    console.log('checkInputAnswer called with:', userAnswer);
    console.log('Current country:', currentCountry);
    
    submitBtn.disabled = true;
    countryInput.disabled = true;
    
    // 정답 체크 (대소문자 무시, 공백 제거)
    const isCorrect = userAnswer.replace(/\s/g, '').toLowerCase() === 
                      currentCountry.name.replace(/\s/g, '').toLowerCase();
    
    if (isCorrect) {
        // 정답 - 2개로 카운트
        totalQuestions++;
        score++;
        correctCount += 2; // 입력 모드는 2배
        updateScore();
        playCorrectSound();
        feedbackElement.textContent = '🎉 정답입니다! (+2점)';
        feedbackElement.className = 'feedback correct';
        
        // 정답 맞춘 국가를 기록
        if (!usedCountries.includes(currentCountry)) {
            usedCountries.push(currentCountry);
        }
        
        // 50개 달성 체크
        if (correctCount >= 50) {
            setTimeout(() => {
                showRewardScreen();
            }, 1000);
        } else {
            setTimeout(() => {
                countryInput.value = '';
                countryInput.disabled = false;
                submitBtn.disabled = false;
                ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
                hasDrawing = false; // 그림 상태 초기화
                loadQuestion();
            }, 1000);
        }
    } else {
        // 오답
        playWrongSound();
        feedbackElement.textContent = `❌ 틀렸습니다! 정답은 ${currentCountry.name}입니다.`;
        feedbackElement.className = 'feedback wrong';
        
        setTimeout(() => {
            countryInput.value = '';
            countryInput.disabled = false;
            submitBtn.disabled = false;
            ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
            hasDrawing = false; // 그림 상태 초기화
            feedbackElement.textContent = '';
            feedbackElement.className = 'feedback';
        }, 2000);
    }
}

// 게임 시작
initGame();


// 나라 이름 음성으로 말하기
function speakCountryName(countryName) {
    try {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(countryName);
            utterance.lang = 'ko-KR';
            utterance.rate = 0.9;
            utterance.pitch = 1;
            utterance.volume = 1;
            window.speechSynthesis.speak(utterance);
        }
    } catch(e) {
        console.log('음성 재생 실패:', e);
    }
}

// 전체화면 버튼 이벤트
const fullscreenBtn = document.getElementById('fullscreenBtn');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function() {
        requestFullscreen();
    });
}

// 전체화면 요청 함수
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

// 페이지 로드 시 전체화면 시도
window.addEventListener('load', function() {
    // 사용자 인터랙션 후 전체화면 실행
    document.body.addEventListener('click', function() {
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            requestFullscreen();
        }
    }, { once: true });
});
