// 설정 로드
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('appSettings') || '{}');
    
    // 기본값 설정
    const defaultSettings = {
        voiceEnabled: true,
        soundEnabled: true,
        voiceSpeed: 1.3
    };
    
    return { ...defaultSettings, ...settings };
}

// 설정 저장
function saveSettingsToStorage(settings) {
    localStorage.setItem('appSettings', JSON.stringify(settings));
}

// 페이지 로드 시 설정 불러오기
document.addEventListener('DOMContentLoaded', () => {
    const settings = loadSettings();
    
    document.getElementById('voiceToggle').checked = settings.voiceEnabled;
    document.getElementById('soundToggle').checked = settings.soundEnabled;
    document.getElementById('speedSlider').value = settings.voiceSpeed;
    document.getElementById('speedValue').textContent = settings.voiceSpeed + 'x';
    
    // 속도 슬라이더 변경 시 값 표시
    document.getElementById('speedSlider').addEventListener('input', (e) => {
        document.getElementById('speedValue').textContent = e.target.value + 'x';
    });
});

// 설정 저장 버튼
function saveSettings() {
    const settings = {
        voiceEnabled: document.getElementById('voiceToggle').checked,
        soundEnabled: document.getElementById('soundToggle').checked,
        voiceSpeed: parseFloat(document.getElementById('speedSlider').value)
    };
    
    saveSettingsToStorage(settings);
    
    // 저장 완료 알림
    alert('✅ 설정이 저장되었습니다!');
}

// 전역 함수로 설정 가져오기 (다른 페이지에서 사용)
window.getAppSettings = loadSettings;
