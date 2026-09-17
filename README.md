# 이윤슬 QA 포트폴리오

QA Engineer 이윤슬의 경력, 기술 스택, 프로젝트 산출물을 확인할 수 있는 포트폴리오 웹사이트입니다.

## 포트폴리오 개요

- 역할: QA Engineer
- 관심 분야: API·DB 정합성 검증, 테스트 케이스 설계, 테스트 자동화, 품질 프로세스 개선
- 구성: 경력, 교육, 자격증, 기술 스택, 프로젝트, 경력별 산출물 링크
- 구현 방식: React 기반 단일 페이지 포트폴리오

## 주요 확인 포인트

- QA 경력별 담당 업무와 검증 범위
- 테스트 케이스 설계 및 관리 경험
- API 응답과 DB 데이터 정합성 검증 경험
- Playwright 기반 E2E 테스트 자동화 프로젝트
- 테스트 케이스 생성·관리 플랫폼 구현 경험
- 서비스별 QA 산출물 및 프로젝트 결과물 링크

## 경력 산출물

| 회사 | 산출물 | 링크 |
| --- | --- | --- |
| 헥토큐앤엠 | 글로벌 서비스 TC | https://qa-portfolio-hecto.vercel.app/ |
| 엑스엘게임즈 | 밸런스 리딩 문서 | https://qa-portfolio-xlgames.vercel.app/ |

## 프로젝트

| 프로젝트 | 설명 | 링크 |
| --- | --- | --- |
| Playwright 기반 E2E 테스트 자동화 | 로그인 및 장바구니 담기 시나리오를 자동화하고, 실패 시 스크린샷과 실행 기록을 확인한 프로젝트 | https://lovely-goods-shop.vercel.app/ |
| monologo API 흐름 대시보드 | API 호출 흐름, 응답 시간, 상태 코드, 호출 횟수를 시각화한 대시보드 | https://encar-hackathon.vercel.app/ |
| AI 기반 테스트 케이스 생성·관리 플랫폼 | Figma 화면 기반 테스트 케이스 생성, 실행 결과 관리, 회귀 테스트 케이스 생성 기능을 구현한 프로젝트 | https://checklist-auto-dashboard.vercel.app/ |

## 기술 스택

- Frontend: React 18, TypeScript, Vite
- Routing: React Router
- Styling: CSS Modules
- QA / Testing: Playwright, Postman, Jira, Confluence
- Database / Tooling: MySQL, PostgreSQL, MongoDB, DBeaver, GitHub, GitLab

## 실행 방법

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

## 콘텐츠 수정 위치

- 자기소개: `src/data/about.ts`
- 경력 및 교육: `src/data/educationAndExperience.ts`
- 자격증 및 수상: `src/data/certifications.ts`
- 스킬: `src/data/skills.ts`
- 포트폴리오 프로젝트: `src/data/portfolios.ts`

## 배포 정보

- 저장소: `yunzzng/yunseul_qa_portfolio`
- 빌드 결과물: `dist`
- 배포 환경: Vercel 등 정적 호스팅 환경
