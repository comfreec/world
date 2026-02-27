# 🌍 세계 국기 마스터

재미있게 세계 국기를 배우는 교육용 게임 앱

## 📱 주요 기능

### 🎯 국기 퀴즈
- 3가지 게임 모드: 일반, 타임어택(60초), 서바이벌(3번 실수)
- 4가지 난이도: 쉬움(10문제), 보통(20문제), 어려움(30문제), 도전(50문제)
- 선택형 및 입력형 모드 지원
- 음성 안내 및 효과음

### 🧠 메모리 게임
- 2인 대전 모드
- 16쌍의 국기 카드 매칭
- 최고 기록 저장
- 완벽 클리어 추적

### 📚 학습 모드
- 195개 국가의 국기 탐색
- 즐겨찾기 기능
- 검색 기능
- 대륙별 필터링

### 🏆 성취 시스템
- 27개의 다양한 업적
- 정답 수, 연속 정답, 게임 모드별 업적
- 시간대별 플레이 업적 (아침, 밤)
- 연속 플레이 일수 추적

### 📊 통계 추적
- 게임별 최고 점수
- 총 정답 수 및 게임 수
- 학습한 국가 수
- 연속 정답 기록
- 시간대별 플레이 통계

## 🛠️ 기술 스택

- HTML5, CSS3, JavaScript (Vanilla)
- Progressive Web App (PWA)
- Service Worker (오프라인 지원)
- LocalStorage (데이터 저장)
- Web Speech API (음성 안내)
- Web Audio API (효과음)

## 📦 설치 및 실행

### 로컬 개발
```bash
# 저장소 클론
git clone https://github.com/comfreec/world.git

# 디렉토리 이동
cd world

# 로컬 서버 실행 (예: Python)
python -m http.server 8000

# 브라우저에서 열기
# http://localhost:8000
```

### GitHub Pages 배포
이 프로젝트는 GitHub Pages를 통해 자동 배포됩니다.
- Master 브랜치: 개발 버전
- gh-pages 브랜치: 배포 버전

## 🎨 아이콘 생성

`icon-generator.html` 파일을 브라우저에서 열어 앱 아이콘을 생성할 수 있습니다.
- 192x192 아이콘
- 512x512 아이콘

## 📱 PWA 설치

1. 브라우저에서 앱 접속
2. "홈 화면에 추가" 버튼 클릭
3. 설치 완료 후 독립 앱처럼 사용

## ⚙️ 설정

- 음성 안내 on/off
- 효과음 on/off
- 음성 속도 조절 (기본 1.3배속)

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

## 🙏 크레딧

- 국기 이미지: [FlagCDN](https://flagcdn.com/)
- 국가 데이터: ISO 3166-1 alpha-2

## 📞 문의

문제가 발생하거나 제안사항이 있으시면 GitHub Issues를 통해 알려주세요.

---

Made with ❤️ for learning world flags
