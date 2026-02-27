# 📢 광고 설정 가이드

## 개요

이 앱은 Google AdMob을 사용하여 수익을 창출합니다. 웹 버전에서는 Google AdSense를, 네이티브 앱에서는 AdMob을 사용합니다.

## 광고 유형

### 1. 배너 광고 (Banner Ads)
- **위치**: 화면 하단 고정
- **표시 시기**: 항상 표시
- **크기**: 320x50 (모바일), 728x90 (태블릿)

### 2. 전면 광고 (Interstitial Ads)
- **표시 시기**: 게임 종료 시 (3게임마다 1회)
- **크기**: 전체 화면
- **닫기**: 5초 후 또는 사용자가 직접 닫기

### 3. 보상형 광고 (Rewarded Ads) - 선택사항
- **표시 시기**: 사용자가 힌트나 추가 생명을 원할 때
- **보상**: 힌트 1개 또는 생명 1개

## 🚀 AdMob 설정 (Android/iOS 앱)

### 1단계: AdMob 계정 생성

1. [Google AdMob](https://admob.google.com/) 접속
2. Google 계정으로 로그인
3. "시작하기" 클릭
4. 약관 동의 및 계정 정보 입력

### 2단계: 앱 등록

1. AdMob 콘솔에서 "앱" > "앱 추가" 클릭
2. 플랫폼 선택: Android 또는 iOS
3. 앱 이름 입력: "세계 국기 마스터"
4. 앱 ID 생성됨 (예: ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX)

### 3단계: 광고 단위 생성

#### 배너 광고 단위
1. "광고 단위" > "광고 단위 추가" 클릭
2. "배너" 선택
3. 광고 단위 이름: "메인 배너"
4. 광고 단위 ID 생성됨 (예: ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX)

#### 전면 광고 단위
1. "광고 단위 추가" 클릭
2. "전면 광고" 선택
3. 광고 단위 이름: "게임 종료 전면"
4. 광고 단위 ID 생성됨

#### 보상형 광고 단위 (선택사항)
1. "광고 단위 추가" 클릭
2. "보상형" 선택
3. 광고 단위 이름: "힌트 보상"
4. 보상 설정: 힌트 1개
5. 광고 단위 ID 생성됨

### 4단계: 코드에 ID 적용

`ads-config.js` 파일을 열고 테스트 ID를 실제 ID로 교체:

```javascript
const AdsConfig = {
    // 테스트 모드 OFF
    testMode: false,
    
    // 실제 앱 ID로 교체
    appId: 'ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX',
    
    ads: {
        banner: {
            android: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX', // 실제 ID
            ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX'
        },
        interstitial: {
            android: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
            ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX'
        },
        rewarded: {
            android: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
            ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX'
        }
    }
};
```

### 5단계: Cordova 플러그인 설치

TWA 프로젝트에 AdMob 플러그인 추가:

```bash
# Cordova AdMob 플러그인 설치
cordova plugin add cordova-plugin-admob-free

# 또는 더 최신 버전
cordova plugin add admob-plus-cordova
```

### 6단계: AndroidManifest.xml 수정

`platforms/android/app/src/main/AndroidManifest.xml` 파일에 추가:

```xml
<manifest>
    <application>
        <!-- AdMob 앱 ID -->
        <meta-data
            android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="ca-app-pub-XXXXXXXXXXXXXXXX~XXXXXXXXXX"/>
    </application>
</manifest>
```

## 🌐 AdSense 설정 (웹 버전)

### 1단계: AdSense 계정 생성

1. [Google AdSense](https://www.google.com/adsense/) 접속
2. Google 계정으로 로그인
3. 사이트 URL 입력: https://comfreec.github.io/world/
4. 계정 승인 대기 (보통 1-2일)

### 2단계: 광고 코드 생성

1. AdSense 콘솔에서 "광고" > "광고 단위별" 클릭
2. "디스플레이 광고" 선택
3. 광고 단위 이름 입력
4. 크기 선택:
   - 배너: 반응형 또는 728x90
   - 전면: 300x250
5. 코드 복사

### 3단계: 코드에 적용

`ads-config.js` 파일에서 AdSense 클라이언트 ID 교체:

```javascript
// initWebAds() 함수 내
script.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX'); // 실제 ID
```

광고 표시 부분에 실제 광고 슬롯 ID 입력:

```javascript
// showWebBanner() 함수 내
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // 실제 클라이언트 ID
     data-ad-slot="XXXXXXXXXX"></ins>          // 실제 슬롯 ID
```

### 4단계: ads.txt 파일 추가

GitHub Pages 루트에 `ads.txt` 파일 생성:

```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

## 📊 광고 수익 최적화

### 1. 광고 배치 전략

- **배너**: 항상 표시하되 콘텐츠를 가리지 않도록
- **전면**: 너무 자주 표시하지 않기 (3게임마다 1회)
- **보상형**: 사용자에게 가치 제공 (힌트, 추가 생명)

### 2. 사용자 경험 우선

```javascript
// 광고 빈도 조절
frequency: {
    interstitialEveryNGames: 3,  // 3게임마다 1회
    bannerAlwaysShow: true        // 배너는 항상 표시
}
```

### 3. 테스트 모드

개발 중에는 반드시 테스트 모드 사용:

```javascript
testMode: true  // 개발 중
testMode: false // 배포 시
```

⚠️ **경고**: 테스트 모드 없이 자신의 광고를 클릭하면 계정이 정지될 수 있습니다!

## 🎯 광고 정책 준수

### Google AdMob/AdSense 정책

1. **클릭 유도 금지**
   - "광고를 클릭해주세요" 같은 문구 사용 금지
   - 광고 근처에 유도 버튼 배치 금지

2. **콘텐츠 정책**
   - 폭력적, 선정적 콘텐츠 금지
   - 저작권 침해 금지
   - 아동 안전 정책 준수

3. **광고 배치**
   - 광고와 콘텐츠 명확히 구분
   - 광고 라벨 표시 (자동)
   - 실수 클릭 유도 금지

### 앱 스토어 정책

- Play Store: 광고 포함 명시
- 개인정보처리방침에 광고 사용 명시

## 💰 예상 수익

### 수익 계산 방식

```
수익 = 노출 수 × CTR × CPC
```

- **노출 수**: 광고가 표시된 횟수
- **CTR** (Click-Through Rate): 클릭률 (보통 1-3%)
- **CPC** (Cost Per Click): 클릭당 비용 (보통 $0.10-$1.00)

### 예상 수익 (월간)

| 일일 사용자 | 광고 노출 | 예상 수익 (월) |
|------------|----------|---------------|
| 100명      | 3,000회  | $10-30        |
| 1,000명    | 30,000회 | $100-300      |
| 10,000명   | 300,000회| $1,000-3,000  |

*실제 수익은 지역, 카테고리, 시즌 등에 따라 크게 달라질 수 있습니다.

## 🔧 문제 해결

### 광고가 표시되지 않음

1. **테스트 모드 확인**
   ```javascript
   testMode: true  // 개발 중에는 true
   ```

2. **광고 ID 확인**
   - 올바른 ID 입력 확인
   - 앱 ID와 광고 단위 ID 구분

3. **네트워크 연결 확인**
   - 인터넷 연결 필요
   - 방화벽 설정 확인

4. **AdMob 계정 상태**
   - 계정 승인 완료 확인
   - 정책 위반 여부 확인

### 광고 수익이 낮음

1. **광고 배치 최적화**
   - 더 눈에 띄는 위치
   - 적절한 크기

2. **사용자 참여도 향상**
   - 앱 품질 개선
   - 사용 시간 증가

3. **광고 형식 다양화**
   - 배너 + 전면 + 보상형 조합

## 📚 참고 자료

- [AdMob 시작 가이드](https://developers.google.com/admob/android/quick-start)
- [AdSense 정책](https://support.google.com/adsense/answer/48182)
- [Cordova AdMob 플러그인](https://github.com/admob-plus/admob-plus)
- [광고 최적화 가이드](https://support.google.com/admob/answer/6128738)

## 💡 팁

1. **점진적 도입**: 처음에는 배너만, 나중에 전면 광고 추가
2. **A/B 테스트**: 다양한 광고 배치 테스트
3. **사용자 피드백**: 광고가 너무 방해되는지 확인
4. **프리미엄 버전**: 광고 제거 옵션 제공 고려

---

광고 설정에 문제가 있으면 GitHub Issues에 문의하세요!
