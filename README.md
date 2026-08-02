# yunseul-resume

QA Engineer 이윤슬의 이력서와 포트폴리오를 보여주는 React 기반 웹 페이지입니다.

## 소개

이 프로젝트는 QA 경력, 교육, 자격증, 스킬, 포트폴리오 프로젝트를 한 화면에서 확인할 수 있도록 구성한 개인 이력서 사이트입니다. 프로젝트 카드를 클릭하면 외부 결과 페이지로 이동하며, 썸네일 이미지는 모달로 확대해서 볼 수 있습니다.

## 주요 기능

- QA 엔지니어 소개 및 경력 타임라인 표시
- 교육, 자격증 및 수상 내역 표시
- 스킬 아이콘 목록 표시
- 포트폴리오 프로젝트 카드 및 상세 정보 표시
- 프로젝트 썸네일 이미지 확대 모달
- 프로젝트 결과물 외부 링크 연결

## 기술 스택

- React 18
- TypeScript
- Vite
- React Router
- CSS Modules
- ESLint

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 결과 미리보기

```bash
npm run preview
```

### 린트 검사

```bash
npm run lint
```

## 프로젝트 구조

```text
src/
  App.tsx
  Resume.tsx
  routes.tsx
  resume.module.css
  data/
    about.ts
    certifications.ts
    educationAndExperience.ts
    portfolios.ts
    skills.ts
public/
  img/
  icons/
```

## 콘텐츠 수정 위치

- 자기소개: `src/data/about.ts`
- 경력 및 교육: `src/data/educationAndExperience.ts`
- 자격증 및 수상: `src/data/certifications.ts`
- 스킬: `src/data/skills.ts`
- 포트폴리오: `src/data/portfolios.ts`
- 프로필 및 프로젝트 이미지: `public/img`
- 스킬 아이콘: `public/icons/skill`

## 배포

Vite 정적 빌드 결과물은 `dist` 디렉터리에 생성됩니다. Vercel, Netlify, GitHub Pages 등 정적 호스팅 환경에 배포할 수 있습니다.
