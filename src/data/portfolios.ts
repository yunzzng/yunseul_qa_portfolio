interface Portfolio {
  title: string;
  subtitle: string;
  overview: string;
  date: string;
  executionType: string;
  implementations: string[];
  result?: string;
  output: string;
  image: string;
}

const portfolios = [
  {
    title: "QA 테스트 자동화",
    subtitle: "Playwright 기반 E2E 테스트 자동화 및 결과 대시보드",
    overview:
      "Playwright로 로그인 및 주요 사용자 시나리오의 E2E 테스트를 자동화했습니다. 테스트별 성공·실패 여부와 실행 시간을 수집하고, 실패 시 스크린샷과 HTML Report를 생성해 대시보드에서 결과를 확인할 수 있도록 구현했습니다.",
    date: "2026-04",
    executionType: "개인 프로젝트",
    implementations: [
      "Playwright 기반 로그인 및 주요 사용자 시나리오 E2E 테스트",
      "PASS / FAIL 결과 및 실행 시간 자동 수집",
      "실패 시 스크린샷 및 HTML Report 자동 생성",
      "테스트 결과 대시보드 제공",
    ],
    result:
      "반복 검증 결과와 실패 증적을 대시보드에서 확인할 수 있도록 하는 것을 목표로 했습니다.",
    output: "https://lovely-goods-shop.vercel.app/",
    image: "/img/qa-dashboard.png"
  },
  {
    title: "엔카 해커톤",
    subtitle: "API 호출 흐름 시각화 및 분석 대시보드(monologo) 구축",
    overview:
      "QA와 개발자가 웹 서비스의 API 호출 흐름을 직관적으로 분석할 수 있도록 브라우저 확장 프로그램과 대시보드를 개발한 프로젝트입니다.",
    date: "2026-05",
    executionType: "B2C 스쿼드 프로젝트",
    implementations: [
      "페이지 진입 시 API 요청 자동 감지",
      "API 호출 순서 및 Flow Tree 시각화",
      "응답 시간, 상태 코드, 호출 횟수 통계 제공",
      "API 호출 현황 대시보드 구현",
    ],
    result:
      "API 호출 흐름과 응답 정보를 한 화면에서 확인하여 원인 분석과 협업을 지원하는 것을 목표로 했습니다.",
    output: "https://encar-hackathon.vercel.app/",
    image: "/img/encar-hackathon.png",
  },
  {
    title: "TC 자동 생성 및 관리 대시보드",
    subtitle: "AI 기반 테스트 케이스 생성 및 QA 관리 플랫폼",
    overview:
      "Figma 기획 문서를 기반으로 테스트 케이스를 자동 생성하고, 테스트 결과 입력부터 리그레션 테스트 케이스 생성, 결과 리포트까지 하나의 플랫폼에서 관리할 수 있도록 구현한 QA 지원 프로젝트입니다. 반복적인 테스트 문서 작성 업무를 줄이고 QA 프로세스를 표준화하는 것을 목표로 개발했습니다.",
    date: "2026-06",
    executionType: "개인 프로젝트",
    implementations: [
      "Figma 기획 문서 기반 테스트 케이스(TC) 자동 생성",
      "테스트 결과 입력 및 관리",
      "리그레션 테스트 케이스 자동 생성",
      "테스트 결과 리포트 자동 생성",
    ],
    result:
      "TC 작성부터 실행 결과 관리까지 하나의 플랫폼에서 관리하고, 반복적인 테스트 문서 작성 업무를 줄이는 것을 목표로 했습니다.",
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
