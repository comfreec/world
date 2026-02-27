# 기여 가이드라인

세계 국기 마스터 프로젝트에 기여해주셔서 감사합니다! 🎉

## 🤝 기여 방법

### 1. 이슈 제보
버그를 발견하거나 새로운 기능을 제안하고 싶으시다면:
1. GitHub Issues에서 기존 이슈를 검색해주세요
2. 중복되지 않는다면 새 이슈를 생성해주세요
3. 명확한 제목과 상세한 설명을 작성해주세요

### 2. Pull Request
코드 기여를 원하신다면:
1. 저장소를 Fork 해주세요
2. 새로운 브랜치를 생성해주세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋해주세요 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push 해주세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성해주세요

## 📝 코딩 스타일

### JavaScript
- ES6+ 문법 사용
- 명확한 변수명 사용
- 주석으로 복잡한 로직 설명
- 함수는 한 가지 일만 수행하도록 작성

```javascript
// Good
function calculateScore(correct, total) {
    return Math.round((correct / total) * 100);
}

// Bad
function calc(c, t) {
    return Math.round((c / t) * 100);
}
```

### CSS
- 클래스명은 kebab-case 사용
- 모바일 우선 반응형 디자인
- 재사용 가능한 컴포넌트 작성

```css
/* Good */
.game-card {
    padding: 20px;
    border-radius: 15px;
}

/* Bad */
.GameCard {
    padding: 20px;
    border-radius: 15px;
}
```

### HTML
- 시맨틱 HTML 사용
- 접근성 고려 (ARIA 레이블)
- 명확한 구조

## 🧪 테스트

변경사항을 제출하기 전에:
1. 모든 게임 모드가 정상 작동하는지 확인
2. 모바일과 데스크톱에서 테스트
3. 다양한 브라우저에서 테스트 (Chrome, Firefox, Safari)
4. 오프라인 모드 테스트

## 📋 커밋 메시지 규칙

명확한 커밋 메시지를 작성해주세요:

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 업무, 패키지 매니저 설정 등
```

예시:
```
feat: 타임어택 모드에 보너스 시간 추가
fix: 메모리 게임 카드 뒤집기 버그 수정
docs: README에 설치 방법 추가
```

## 🎨 디자인 가이드라인

### 색상 팔레트
- 주 색상: `#667eea` (보라)
- 보조 색상: `#764ba2` (진한 보라)
- 성공: `#28a745` (초록)
- 오류: `#dc3545` (빨강)
- 경고: `#ffc107` (노랑)

### 타이포그래피
- 기본 폰트: 시스템 폰트
- 제목: 1.5em ~ 2em
- 본문: 1em
- 작은 텍스트: 0.85em

### 간격
- 작은 간격: 10px
- 중간 간격: 20px
- 큰 간격: 30px

## 🐛 버그 리포트 템플릿

버그를 제보할 때 다음 정보를 포함해주세요:

```markdown
### 버그 설명
명확하고 간결한 버그 설명

### 재현 방법
1. '...'로 이동
2. '...'를 클릭
3. '...'까지 스크롤
4. 오류 발생

### 예상 동작
어떻게 동작해야 하는지 설명

### 실제 동작
실제로 어떻게 동작하는지 설명

### 스크린샷
가능하다면 스크린샷 첨부

### 환경
- OS: [예: iOS 15, Android 12, Windows 11]
- 브라우저: [예: Chrome 120, Safari 17]
- 버전: [예: 1.0.0]

### 추가 정보
기타 관련 정보
```

## 💡 기능 제안 템플릿

새로운 기능을 제안할 때:

```markdown
### 기능 설명
제안하는 기능에 대한 명확한 설명

### 문제점
이 기능이 해결하는 문제는 무엇인가요?

### 제안하는 해결책
어떻게 구현하면 좋을지 설명

### 대안
고려한 다른 방법들

### 추가 정보
기타 관련 정보, 스크린샷, 참고 자료 등
```

## 📚 참고 자료

- [JavaScript 스타일 가이드](https://github.com/airbnb/javascript)
- [HTML/CSS 가이드](https://google.github.io/styleguide/htmlcssguide.html)
- [접근성 가이드](https://www.w3.org/WAI/WCAG21/quickref/)
- [PWA 가이드](https://web.dev/progressive-web-apps/)

## 🙏 감사합니다!

여러분의 기여가 이 프로젝트를 더 좋게 만듭니다. 
질문이 있으시면 언제든지 이슈를 통해 문의해주세요!

---

Happy Coding! 🚀
