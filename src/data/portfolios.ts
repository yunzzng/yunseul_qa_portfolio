interface Portfolio {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  contribution: "Team project" | "Personal project";
  dataset: string[];
  analysis: string[];
  insight: string[];
  output: string;
  image: string;
}

const portfolios = [
  {
    title: "QA 테스트 자동화",
    subtitle: "Playwright 기반 E2E 테스트 자동화 및 결과 대시보드",
    description:
      "Playwright를 활용하여 주요 사용자 시나리오를 자동으로 검증하고, 테스트 실행 결과와 스크린샷, HTML Report를 대시보드에서 확인할 수 있도록 구축한 프로젝트입니다. 반복적인 회귀 테스트를 자동화하여 테스트 수행 시간을 줄이고 품질 검증의 일관성을 높이는 것을 목표로 개발했습니다.",
    date: "2026-04",
    contribution: "개인 프로젝트",
    dataset: [
      "Playwright 기반 로그인 및 주요 사용자 시나리오 E2E 테스트",
      "PASS / FAIL 결과 및 실행 시간 자동 수집",
      "실패 시 스크린샷 및 HTML Report 자동 생성",
      "테스트 결과 대시보드 제공"
    ],
    analysis: [
      "반복적인 회귀 테스트 자동 수행",
      "실패한 테스트를 즉시 확인하여 원인 분석 시간 단축",
      "테스트 결과를 시각화하여 품질 현황을 한눈에 확인 가능"
    ],
    insight: [
      "Playwright 기반 E2E 테스트 자동화 경험",
      "테스트 리포트 및 결과 시각화 환경 구축 경험",
      "자동화 테스트를 활용한 회귀 테스트 운영 경험"
    ],
    output: "https://lovely-goods-shop.vercel.app/",
    image: "/img/qa-dashboard.png"
  },
  {
    title: "엔카 해커톤",
    subtitle: "API 호출 흐름 시각화 및 분석 대시보드(monologo) 구축",
    description:
      "QA와 개발자가 웹 서비스의 API 호출 흐름을 직관적으로 분석할 수 있도록 브라우저 확장 프로그램과 대시보드를 개발한 프로젝트입니다. 페이지별 API 호출을 자동 수집하고 흐름을 시각화하여 문제 원인 분석 시간을 단축하고 협업 효율을 높이는 것을 목표로 했습니다.",
    date: "2026-05",
    contribution: "B2C 스쿼드 프로젝트",
    dataset: [
      "페이지 진입 시 API 요청 자동 감지",
      "API 호출 순서 및 Flow Tree 시각화",
      "응답 시간, 상태 코드, 호출 횟수 통계 제공",
      "API 호출 현황 대시보드 구현",
    ],
    analysis: [
      "API 원인 분석 시간 약 50% 단축",
      "API 호출 흐름 파악 정확도 90% 이상 확보",
      "월 약 30시간 이상의 분석 및 확인 업무 절감 기대",
    ],
    insight: [
      "QA 관점에서 API 분석 및 디버깅 프로세스를 개선한 경험",
      "브라우저 확장 프로그램과 대시보드를 활용한 품질 개선 경험",
      "개발자와 비개발자 모두 활용 가능한 시각화 도구 기획 및 검증 경험",
    ],
    output: "https://encar-hackathon.vercel.app/",
    image: "/img/encar-hackathon.png",
  },
  {
    title: "TC 자동 생성 및 관리 대시보드",
    subtitle: "AI 기반 테스트 케이스 생성 및 QA 관리 플랫폼",
    description:
      "Figma 기획 문서를 기반으로 테스트 케이스를 자동 생성하고, 테스트 결과 입력부터 리그레션 테스트 케이스 생성, 결과 리포트까지 하나의 플랫폼에서 관리할 수 있도록 구현한 QA 지원 프로젝트입니다. 반복적인 테스트 문서 작성 업무를 줄이고 QA 프로세스를 표준화하는 것을 목표로 개발했습니다.",
    date: "2026-06",
    contribution: "개인 프로젝트",
    dataset: [
      "Figma 기획 문서 기반 테스트 케이스(TC) 자동 생성",
      "테스트 결과 입력 및 관리",
      "리그레션 테스트 케이스 자동 생성",
      "테스트 결과 리포트 자동 생성"
    ],
    analysis: [
      "반복적인 테스트 케이스 작성 시간 단축",
      "TC 작성부터 실행 결과 관리까지 하나의 플랫폼에서 관리",
      "표준화된 테스트 문서로 QA 업무 효율 향상"
    ],
    insight: [
      "생성형 AI를 활용한 테스트 케이스 자동 생성 경험",
      "QA 업무 프로세스를 고려한 플랫폼 기획 및 구현 경험",
      "반복적인 문서 작성 업무를 자동화하여 QA 생산성 향상"
    ],
    output: "https://checklist-auto-dashboard.vercel.app/",
    image: "/img/checklist-auto-dashboard.png"
  },
  {
    title: "엔카 서비스 이차 어때",
    subtitle: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
    description:
      "이미지 최적화는 페이지 로딩 속도를 개선하는 핵심 요소 중 하나입니다. 본 프로젝트는 Vite 환경에서 이미지 최적화를 자동으로 수행하는 플러그인(vite-plugin-optimize-image)을 개발하는 것을 목표로 하였습니다. 별도의 이미지 최적화 작업을 하지 않아도 자동으로 최적화된 이미지를 제공할 수 있도록 합니다.",
    date: "2025-0",
    contribution: "개인 프로젝트",
    dataset: [""],
    analysis: [""],
    insight: [""],
    output: "",
    image: "/img/plugin.png",
  },
];

export default portfolios;
export type { Portfolio };

