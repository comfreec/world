// Google AdMob 광고 설정
// 실제 배포 시 테스트 ID를 실제 광고 ID로 교체하세요

const AdsConfig = {
    // 광고 활성화 여부
    enabled: true,
    
    // 테스트 모드 (개발 중에는 true, 배포 시 false)
    testMode: false,
    
    // 광고 제외 이메일 목록 (이 계정들은 광고 표시 안 함)
    excludedEmails: [
        'comfreec1@gmail.com'
    ],
    
    // 테스트 기기 ID 목록 (이 기기들은 테스트 광고만 표시)
    testDevices: [
        'EMULATOR', // 에뮬레이터
        // 실제 기기 ID를 여기에 추가하세요
        // 예: '33BE2250B43518CCDA7DE426D04EE231'
    ],
    
    // AdMob 앱 ID (Android)
    appId: 'ca-app-pub-9439499784149900~7601172581', // 실제 앱 ID
    
    // 광고 단위 ID
    ads: {
        // 배너 광고 (하단 고정)
        banner: {
            android: 'ca-app-pub-9439499784149900/6718172037', // 실제 배너 광고 ID
            ios: 'ca-app-pub-3940256099942544/2934735716' // 테스트 ID (iOS용은 나중에 교체)
        },
        
        // 전면 광고 (게임 종료 시)
        interstitial: {
            android: 'ca-app-pub-9439499784149900/9232654733', // 실제 전면 광고 ID
            ios: 'ca-app-pub-3940256099942544/4411468910' // 테스트 ID (iOS용은 나중에 교체)
        },
        
        // 보상형 광고 (힌트, 추가 생명)
        rewarded: {
            android: 'ca-app-pub-3940256099942544/5224354917', // 테스트 ID
            ios: 'ca-app-pub-3940256099942544/1712485313' // 테스트 ID
        }
    },
    
    // 광고 표시 빈도 설정
    frequency: {
        // 전면 광고: 게임 N회마다 표시
        interstitialEveryNGames: 3,
        
        // 배너 광고: 항상 표시
        bannerAlwaysShow: true
    },
    
    // 광고 표시 위치
    position: {
        banner: 'bottom', // 'top' 또는 'bottom'
    }
};

// 광고 관리 클래스
class AdManager {
    constructor() {
        this.initialized = false;
        this.bannerLoaded = false;
        this.interstitialLoaded = false;
        this.rewardedLoaded = false;
        this.gamesPlayed = 0;
        this.lastInterstitialTime = 0;
    }
    
    // 광고 초기화
    async init() {
        if (!AdsConfig.enabled) {
            console.log('광고가 비활성화되어 있습니다.');
            return;
        }
        
        // 제외된 이메일 확인
        if (await this.isExcludedUser()) {
            console.log('광고 제외 사용자입니다.');
            AdsConfig.enabled = false;
            return;
        }
        
        // 웹 환경에서는 Google AdSense 사용
        if (this.isWebEnvironment()) {
            this.initWebAds();
        } else {
            // 네이티브 앱에서는 AdMob 사용
            this.initMobileAds();
        }
        
        this.initialized = true;
        console.log('광고 초기화 완료');
    }
    
    // 제외된 사용자인지 확인
    async isExcludedUser() {
        // Android 기기의 Google 계정 확인 (하드코딩)
        // comfreec1@gmail.com 계정으로 로그인된 기기는 광고 표시 안 함
        
        // 간단한 방법: localStorage에 한 번만 체크 후 저장
        const checkedBefore = localStorage.getItem('adCheckDone');
        if (!checkedBefore) {
            // 첫 실행 시 자동으로 제외 이메일 설정
            localStorage.setItem('userEmail', 'comfreec1@gmail.com');
            localStorage.setItem('adCheckDone', 'true');
        }
        
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail && AdsConfig.excludedEmails.includes(userEmail.toLowerCase())) {
            return true;
        }
        
        return false;
    }
    
    // 웹 환경 확인
    isWebEnvironment() {
        return !window.cordova && !window.AdMob;
    }
    
    // 웹 광고 초기화 (Google AdSense)
    initWebAds() {
        // AdSense 스크립트 로드
        if (!document.querySelector('script[src*="adsbygoogle"]')) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            script.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX'); // 실제 AdSense ID로 교체
            document.head.appendChild(script);
        }
    }
    
    // 모바일 광고 초기화 (AdMob)
    initMobileAds() {
        if (window.AdMob) {
            window.AdMob.initialize({
                appId: AdsConfig.appId,
                testDeviceIds: AdsConfig.testDevices || []
            });
        }
    }
    
    // 배너 광고 표시
    showBanner() {
        if (!AdsConfig.enabled || !AdsConfig.frequency.bannerAlwaysShow) return;
        
        if (this.isWebEnvironment()) {
            this.showWebBanner();
        } else {
            this.showMobileBanner();
        }
    }
    
    // 웹 배너 광고
    showWebBanner() {
        const bannerId = 'ad-banner-container';
        let container = document.getElementById(bannerId);
        
        if (!container) {
            container = document.createElement('div');
            container.id = bannerId;
            container.style.cssText = `
                position: fixed;
                ${AdsConfig.position.banner}: 0;
                left: 0;
                width: 100%;
                background: #f0f0f0;
                z-index: 9999;
                text-align: center;
                padding: 10px 0;
                box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            `;
            
            // 광고 플레이스홀더 (실제 AdSense 코드로 교체)
            container.innerHTML = `
                <div style="max-width: 728px; margin: 0 auto;">
                    <!-- AdSense 광고 코드 여기에 삽입 -->
                    <ins class="adsbygoogle"
                         style="display:inline-block;width:728px;height:90px"
                         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                         data-ad-slot="XXXXXXXXXX"></ins>
                </div>
            `;
            
            document.body.appendChild(container);
            
            // AdSense 광고 활성화
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.log('AdSense 로드 대기 중...');
            }
        }
        
        container.style.display = 'block';
        this.adjustContentForBanner();
    }
    
    // 모바일 배너 광고
    showMobileBanner() {
        if (!window.AdMob) return;
        
        const platform = this.getPlatform();
        const adId = AdsConfig.ads.banner[platform];
        
        window.AdMob.showBanner({
            adId: adId,
            position: AdsConfig.position.banner === 'top' ? 
                window.AdMob.AD_POSITION.TOP_CENTER : 
                window.AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
        });
        
        this.bannerLoaded = true;
    }
    
    // 배너 광고 숨기기
    hideBanner() {
        if (this.isWebEnvironment()) {
            const container = document.getElementById('ad-banner-container');
            if (container) {
                container.style.display = 'none';
            }
        } else if (window.AdMob) {
            window.AdMob.hideBanner();
        }
    }
    
    // 전면 광고 표시
    async showInterstitial() {
        if (!AdsConfig.enabled) return;
        
        this.gamesPlayed++;
        
        // 빈도 체크
        if (this.gamesPlayed % AdsConfig.frequency.interstitialEveryNGames !== 0) {
            return;
        }
        
        // 최소 시간 간격 체크 (30초)
        const now = Date.now();
        if (now - this.lastInterstitialTime < 30000) {
            return;
        }
        
        if (this.isWebEnvironment()) {
            // 웹에서는 전면 광고 대신 모달 광고 표시
            this.showWebInterstitial();
        } else {
            await this.showMobileInterstitial();
        }
        
        this.lastInterstitialTime = now;
    }
    
    // 웹 전면 광고 (모달)
    showWebInterstitial() {
        const modal = document.createElement('div');
        modal.id = 'ad-interstitial-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 15px; max-width: 90%; max-height: 90%; overflow: auto; position: relative;">
                <button onclick="this.closest('#ad-interstitial-modal').remove()" 
                        style="position: absolute; top: 10px; right: 10px; background: #667eea; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-size: 18px;">
                    ✕
                </button>
                <div style="text-align: center; padding: 20px;">
                    <!-- AdSense 광고 코드 -->
                    <ins class="adsbygoogle"
                         style="display:inline-block;width:300px;height:250px"
                         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                         data-ad-slot="XXXXXXXXXX"></ins>
                </div>
                <p style="text-align: center; color: #666; margin-top: 15px;">
                    광고를 보고 무료로 앱을 이용하세요 😊
                </p>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // AdSense 광고 활성화
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log('AdSense 로드 대기 중...');
        }
        
        // 5초 후 자동 닫기
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 5000);
    }
    
    // 모바일 전면 광고
    async showMobileInterstitial() {
        if (!window.AdMob) return;
        
        const platform = this.getPlatform();
        const adId = AdsConfig.ads.interstitial[platform];
        
        try {
            await window.AdMob.prepareInterstitial({
                adId: adId
            });
            
            await window.AdMob.showInterstitial();
            this.interstitialLoaded = true;
        } catch (error) {
            console.log('전면 광고 표시 실패:', error);
        }
    }
    
    // 보상형 광고 표시
    async showRewarded(onReward) {
        if (!AdsConfig.enabled) {
            // 광고가 비활성화되어 있으면 바로 보상 지급
            if (onReward) onReward();
            return;
        }
        
        if (this.isWebEnvironment()) {
            // 웹에서는 간단한 확인 후 보상
            if (confirm('광고를 시청하시겠습니까?\n(실제 앱에서는 광고가 표시됩니다)')) {
                if (onReward) onReward();
            }
        } else {
            await this.showMobileRewarded(onReward);
        }
    }
    
    // 모바일 보상형 광고
    async showMobileRewarded(onReward) {
        if (!window.AdMob) return;
        
        const platform = this.getPlatform();
        const adId = AdsConfig.ads.rewarded[platform];
        
        try {
            await window.AdMob.prepareRewardVideo({
                adId: adId
            });
            
            // 보상 이벤트 리스너
            document.addEventListener('admob.rewardvideo.events.REWARD', () => {
                if (onReward) onReward();
            }, { once: true });
            
            await window.AdMob.showRewardVideo();
            this.rewardedLoaded = true;
        } catch (error) {
            console.log('보상형 광고 표시 실패:', error);
        }
    }
    
    // 플랫폼 확인
    getPlatform() {
        if (/(android)/i.test(navigator.userAgent)) {
            return 'android';
        } else if (/(iphone|ipad|ipod)/i.test(navigator.userAgent)) {
            return 'ios';
        }
        return 'android'; // 기본값
    }
    
    // 배너 광고를 위한 컨텐츠 여백 조정
    adjustContentForBanner() {
        const container = document.querySelector('.container');
        if (container && AdsConfig.position.banner === 'bottom') {
            container.style.paddingBottom = '110px';
        }
    }
    
    // 광고 제거 (프리미엄 버전)
    removeAds() {
        AdsConfig.enabled = false;
        this.hideBanner();
        localStorage.setItem('adsRemoved', 'true');
        console.log('광고가 제거되었습니다.');
    }
    
    // 광고 제거 상태 확인
    checkAdsRemoved() {
        const removed = localStorage.getItem('adsRemoved');
        if (removed === 'true') {
            AdsConfig.enabled = false;
        }
    }
}

// 전역 광고 관리자 인스턴스
const adManager = new AdManager();

// 페이지 로드 시 광고 초기화
window.addEventListener('load', () => {
    adManager.checkAdsRemoved();
    adManager.init();
});
