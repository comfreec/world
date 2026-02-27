# TWA (Trusted Web Activity) 빌드 가이드

## 📱 Android 앱 빌드하기

### 사전 준비사항

1. **Java JDK 설치** (버전 11 이상)
   - [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) 또는
   - [OpenJDK](https://adoptium.net/) 다운로드

2. **Android SDK 설치**
   - [Android Studio](https://developer.android.com/studio) 설치 (권장)
   - 또는 [Command Line Tools](https://developer.android.com/studio#command-tools)만 설치

3. **환경 변수 설정**
   ```bash
   # Windows (PowerShell)
   $env:JAVA_HOME = "C:\Program Files\Java\jdk-11"
   $env:ANDROID_HOME = "C:\Users\[사용자명]\AppData\Local\Android\Sdk"
   
   # macOS/Linux
   export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
   export ANDROID_HOME=$HOME/Library/Android/sdk
   ```

### 1단계: Bubblewrap 초기화

```bash
# 프로젝트 디렉토리에서 실행
bubblewrap init --manifest https://comfreec.github.io/world/manifest.json
```

대화형 프롬프트에서 다음 정보를 입력:
- **Package ID**: `com.flagmaster.world`
- **App Name**: `세계 국기 마스터`
- **Launcher Name**: `국기마스터`
- **Display Mode**: `standalone`
- **Status Bar Color**: `#667eea`
- **Start URL**: `/world/`

### 2단계: 서명 키 생성

```bash
# 키스토어 생성
keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -keysize 2048 -validity 10000

# 입력 정보:
# - 비밀번호: [안전한 비밀번호 입력]
# - 이름: [개발자 이름]
# - 조직: [조직명 또는 개인]
# - 도시/지역: [도시명]
# - 국가 코드: KR
```

⚠️ **중요**: `android.keystore` 파일과 비밀번호를 안전하게 보관하세요!

### 3단계: 디지털 자산 링크 설정

1. `.well-known/assetlinks.json` 파일 생성:

```bash
# SHA-256 지문 확인
keytool -list -v -keystore android.keystore -alias android
```

2. GitHub Pages에 assetlinks.json 배포:

프로젝트 루트에 `.well-known` 폴더 생성 후 `assetlinks.json` 파일 추가:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.flagmaster.world",
    "sha256_cert_fingerprints": [
      "[여기에 SHA-256 지문 입력]"
    ]
  }
}]
```

3. GitHub Pages 설정에서 `.well-known` 폴더 접근 허용

### 4단계: APK 빌드

```bash
# 디버그 빌드 (테스트용)
bubblewrap build

# 릴리즈 빌드 (배포용)
bubblewrap build --release
```

빌드된 파일 위치:
- 디버그: `./app-debug.apk`
- 릴리즈: `./app-release.apk`

### 5단계: AAB 빌드 (Play Store용)

```bash
# Android App Bundle 생성
bubblewrap build --release

# AAB 파일 위치
# ./app-release.aab
```

### 6단계: 테스트

```bash
# Android 기기에 설치 (USB 디버깅 활성화 필요)
adb install app-debug.apk

# 또는 APK 파일을 기기로 전송하여 직접 설치
```

## 🚀 Play Store 배포

### 1. Play Console 준비

1. [Google Play Console](https://play.google.com/console) 접속
2. 개발자 계정 생성 (25달러 일회성 등록비)
3. 새 앱 만들기

### 2. 앱 정보 입력

- **앱 이름**: 세계 국기 마스터
- **짧은 설명**: 재미있게 세계 195개 국가의 국기를 배우는 교육용 게임
- **전체 설명**: `STORE_DESCRIPTION.md` 참고
- **카테고리**: 교육
- **연령 등급**: 전체 이용가

### 3. 스크린샷 업로드

최소 요구사항:
- 휴대전화: 2개 이상 (최대 8개)
- 7인치 태블릿: 선택사항
- 10인치 태블릿: 선택사항

권장 크기:
- 휴대전화: 1080 x 1920 (16:9)
- 태블릿: 1200 x 1920

### 4. 앱 아이콘 및 그래픽

- **앱 아이콘**: 512 x 512 (이미 준비됨: `icon-512.png`)
- **기능 그래픽**: 1024 x 500 (필수)

### 5. AAB 업로드

1. Play Console > 프로덕션 > 새 버전 만들기
2. `app-release.aab` 파일 업로드
3. 버전 정보 입력:
   - 버전 이름: 1.0.0
   - 버전 코드: 1
   - 출시 노트: "첫 번째 릴리즈"

### 6. 콘텐츠 등급

1. 설문지 작성
2. 교육용 게임으로 분류
3. 폭력성, 선정성 없음 확인

### 7. 개인정보처리방침

- URL: `https://comfreec.github.io/world/privacy.html`

### 8. 검토 제출

모든 정보 입력 후 "검토 제출" 클릭
- 검토 기간: 보통 1-3일
- 승인 후 자동 배포

## 🔧 문제 해결

### Java 버전 오류
```bash
# Java 버전 확인
java -version

# JAVA_HOME 확인
echo $JAVA_HOME  # macOS/Linux
echo $env:JAVA_HOME  # Windows PowerShell
```

### Android SDK 오류
```bash
# SDK 경로 확인
echo $ANDROID_HOME  # macOS/Linux
echo $env:ANDROID_HOME  # Windows PowerShell

# SDK 도구 설치
sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
```

### 서명 오류
- 키스토어 파일 경로 확인
- 비밀번호 정확히 입력
- alias 이름 확인

### 디지털 자산 링크 오류
- SHA-256 지문 정확히 복사
- assetlinks.json 파일 형식 확인
- HTTPS로 접근 가능한지 확인

## 📚 참고 자료

- [Bubblewrap 공식 문서](https://github.com/GoogleChromeLabs/bubblewrap)
- [TWA 가이드](https://developer.chrome.com/docs/android/trusted-web-activity/)
- [Play Console 도움말](https://support.google.com/googleplay/android-developer)
- [디지털 자산 링크](https://developers.google.com/digital-asset-links)

## 💡 팁

1. **테스트 먼저**: 디버그 APK로 충분히 테스트 후 릴리즈 빌드
2. **키스토어 백업**: 키스토어 파일을 안전한 곳에 백업
3. **버전 관리**: 업데이트 시 버전 코드를 증가시켜야 함
4. **스크린샷**: 실제 기기에서 촬영한 고품질 이미지 사용
5. **설명 최적화**: 키워드를 자연스럽게 포함

---

문제가 발생하면 GitHub Issues에 문의하세요!
