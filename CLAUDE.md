# TypeScript-React-Base Project

## Project Overview
TypeScript 학습 및 React 실습을 위한 프로젝트입니다. TypeScript 기초부터 React 컴포넌트, 라우팅, 실시간 통신(WebSocket/STOMP)까지 다양한 기능을 포함하고 있습니다.

## Tech Stack
- **React 18.3.1** - 함수형 컴포넌트 및 Hooks 사용
- **TypeScript 5.6.3** - Strict 모드 활성화
- **React Router DOM 7.8.0** - 클라이언트 사이드 라우팅
- **Create React App** - Webpack 기반 빌드 도구
- **@stomp/stompjs + sockjs-client** - WebSocket 실시간 통신
- **Testing Library** - React 컴포넌트 테스트
- **Prettier** - 코드 포맷팅

## Project Structure
```
src/
├── App.tsx              # 메인 앱 컴포넌트 (라우팅 설정)
├── index.tsx            # React 18 진입점
├── components/          # React 컴포넌트
│   ├── AComponent.tsx   # Props 예시 컴포넌트
│   ├── BComponent.tsx   # 기본 컴포넌트
│   ├── Chat.tsx         # WebSocket 채팅 컴포넌트
│   └── Parent.tsx       # 상태 관리 예시
├── css/                 # 스타일시트
│   ├── App.css
│   └── index.css
└── lecture/             # TypeScript 학습 자료
    ├── 1_array&tuple.ts
    ├── 2_object.ts
    ├── 3_primitive&literal.ts
    ├── 4_type&index_signature.ts
    ├── 5_enum.ts
    ├── 6_any_unknown.ts
    ├── 7_void_never.ts
    └── chapter_0X/      # React 예제 챕터
```

## Coding Conventions

### 컴포넌트 작성
- **함수형 컴포넌트 사용** - 클래스 컴포넌트 사용 안 함
- **타입 지정 방식**:
  ```tsx
  // 인라인 Props 타입
  function AComponent({ message }: { message: string }) { }

  // React.FC 타입 어노테이션
  const Parent: React.FC = () => { }
  ```
- **파일명**: PascalCase (예: `AComponent.tsx`, `Parent.tsx`)

### TypeScript 규칙
- **Strict 모드 활성화**: null/undefined 체크 필수
- **타입 명시 우선**: any 사용 최소화
- **타입 정의**: 인라인 타입 또는 interface 사용
- `@ts-ignore`는 필요한 경우에만 사용

### 네이밍 컨벤션
- **컴포넌트**: PascalCase (예: `Chat`, `Parent`)
- **변수/함수**: camelCase (예: `messageText`, `handleSend`)
- **상수**: UPPER_SNAKE_CASE (예: `SOCKET_URL`, `CHAT_TOPIC`)
- **주석**: 한글 사용 가능 (학습 목적)

### Prettier 설정
- 들여쓰기: 2칸 스페이스
- 최대 줄 길이: 80자
- 따옴표: JS는 작은따옴표, JSX는 큰따옴표
- 후행 쉼표: 모든 곳에 사용
- 화살표 함수 괄호: 항상 사용

## Key Patterns

### 라우팅
```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Parent />} />
    <Route path="/chat" element={<Chat />} />
  </Routes>
</BrowserRouter>
```

### Hooks 사용
- `useState` - 컴포넌트 상태 관리
- `useEffect` - 사이드 이펙트 처리 (WebSocket 연결 등)
- 정리(cleanup) 함수 반드시 작성 (예: WebSocket 연결 해제)

### WebSocket/STOMP 통신
- **연결**: SockJS + STOMP 클라이언트
- **구독**: `/topic/messages/{roomId}` 패턴
- **발행**: `/app/chat/send` 엔드포인트
- **정리**: useEffect cleanup에서 연결 해제

### 상태 관리
- **전역 상태**: 별도 라이브러리 없이 React Hooks 사용
- **Props drilling**: 필요 시 Props로 상태 전달
- Redux/Zustand 등 사용 안 함

### 스타일링
- CSS 파일 기반 스타일링
- 인라인 스타일 객체 사용 (특히 Flexbox 레이아웃)
- CSS-in-JS 라이브러리 사용 안 함

## Important Notes

### 개발 시 주의사항
- **TypeScript strict 모드**: 타입 안정성 최우선
- **컴포넌트 순수성**: 사이드 이펙트는 useEffect에서만 처리
- **WebSocket 정리**: 연결 해제를 반드시 구현하여 메모리 누수 방지
- **라우팅 구조**: 단순한 플랫 구조 유지 (중첩 라우트 없음)

### 프로젝트 구조 철학
- **학습 자료 분리**: `/lecture` 폴더는 학습 목적, 프로덕션 코드와 분리
- **컴포넌트 집중**: UI 로직은 컴포넌트 단위로 관리
- **기본 구조 유지**: Create React App 기본 구조 활용

### 빌드 및 실행
```bash
npm start        # 개발 서버 시작
npm test         # 테스트 실행
npm run build    # 프로덕션 빌드
```

### Git 브랜치 전략
- **Main 브랜치**: main
- 최근 작업: flex 레이아웃, 라우터 설정, STOMP 메시징

## Code Examples

### 기본 컴포넌트
```tsx
const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default MyComponent;
```

### WebSocket 연결 패턴
```tsx
useEffect(() => {
  const client = new Client({
    brokerURL: SOCKET_URL,
    // ... 설정
  });

  client.onConnect = () => {
    client.subscribe(CHAT_TOPIC, callback);
  };

  client.activate();

  return () => {
    client.deactivate(); // 정리
  };
}, []);
```
