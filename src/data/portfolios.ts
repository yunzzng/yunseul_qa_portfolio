interface Portfolio {
  title: string;
  subtitle: string;
  overview: string;
  executionType: string;
  implementations: string[];
  role?: string;
  featureLabel?: string;
  ctaLabel: string;
  verification?: string[];
  expectedEffects?: string[];
  output: string;
  image: string;
}

const portfolios: Portfolio[] = [
  {
    title: "Playwright 기반 E2E 테스트 자동화",
    subtitle: "개인 프로젝트 · 2026.04",
    overview:
      "로그인 및 주요 사용자 시나리오를 자동 검증하고, 실행 결과와 실패 증적을 대시보드에서 확인할 수 있도록 구현한 개인 프로젝트입니다.",
    executionType: "개인 프로젝트",
    implementations: [
      "로그인 및 주요 사용자 시나리오 E2E 테스트",
      "테스트별 성공·실패 여부와 실행 시간 수집",
      "실패 시 스크린샷 및 HTML Report 생성",
      "테스트 결과 대시보드 제공",
    ],
    ctaLabel: "테스트 대상 서비스 보기 ↗",
    output: "https://lovely-goods-shop.vercel.app/",
    image: "/img/qa-dashboard.png"
  },
  {
    title: "monologo — API 호출 흐름 분석 도구",
    subtitle: "엔카 해커톤 · 2026.05 · B2C 스쿼드 프로젝트",
    overview:
      "웹 서비스의 API 요청을 수집하고 호출 흐름과 응답 정보를 시각화하는 브라우저 확장 프로그램 및 대시보드 프로젝트입니다.",
    executionType: "B2C 스쿼드 프로젝트",
    role: "프로토타입 설계와 UI 시각화를 담당했습니다.",
    featureLabel: "프로젝트 주요 기능",
    implementations: [
      "페이지 진입 시 API 요청 자동 감지",
      "API 호출 순서 및 Flow Tree 시각화",
      "응답 시간, 상태 코드, 호출 횟수 통계 제공",
      "API 호출 현황 대시보드",
    ],
    ctaLabel: "프로젝트 보기 ↗",
    output: "https://encar-hackathon.vercel.app/",
    image: "/img/encar-hackathon.png",
  },
  {
    title: "AI 기반 테스트 케이스 생성·관리 플랫폼",
    subtitle: "개인 프로젝트 · 2026.06",
    overview:
      "Figma 기획 문서를 기반으로 테스트 케이스를 생성하고, 실행 결과와 회귀 테스트 케이스 및 리포트를 관리할 수 있도록 구현한 개인 프로젝트입니다.",
    executionType: "개인 프로젝트",
    implementations: [
      "Figma 기획 문서 기반 테스트 케이스 생성",
      "테스트 실행 결과 입력 및 관리",
      "회귀 테스트 케이스 생성",
      "테스트 결과 리포트 생성",
    ],
    ctaLabel: "TC 관리 플랫폼 보기 ↗",
    output: "https://checklist-auto-dashboard.vercel.app/",
    image: "/img/checklist-auto-dashboard.png"
  },
  // {
  //   title: "엔카 서비스 이차 어때",
  //   subtitle: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
  //   description:
  //     "이미지 최적화는 페이지 로딩 속도를 개선하는 핵심 요소 중 하나입니다. 본 프로젝트는 Vite 환경에서 이미지 최적화를 자동으로 수행하는 플러그인(vite-plugin-optimize-image)을 개발하는 것을 목표로 하였습니다. 별도의 이미지 최적화 작업을 하지 않아도 자동으로 최적화된 이미지를 제공할 수 있도록 합니다.",
  //   date: "2025-0",
  //   contribution: "개인 프로젝트",
  //   dataset: [""],
  //   analysis: [""],
  //   insight: [""],
  //   output: "",
  //   image: "/img/plugin.png",
  // },
];

export default portfolios;
export type { Portfolio };
