type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
  artifactLabel?: string;
  artifactUrl?: string;
};

const experience: Experience[] = [
  {
    company: "엔카닷컴",
    role: "QA 엔지니어",
    period: "2025.07 – 재직 중",
    artifactLabel: "TC 자동화 대시보드 보기 ↗",
    artifactUrl: "https://checklist-auto-dashboard.vercel.app/",
    description: [
      "테스트 계획 수립부터 테스트 수행, 결함 관리, 릴리즈 검증 및 Sign-off까지 QA 전 과정을 수행했습니다.",
      "중고차 플랫폼의 업무 흐름과 예외 조건을 반영해 테스트 시나리오를 설계하고, API 응답과 DB 데이터의 정합성을 검증했습니다.",
      "Claude와 Wiki·Figma MCP로 도메인 정책을 HTML로 정리·공유하고, 이를 기반으로 TC 작성을 자동화했습니다.",
    ],
  },
  {
    company: "헥토큐앤엠(구 큐오피스)",
    role: "QA 엔지니어",
    period: "2023.06 – 2024.08",
    artifactLabel: "글로벌 서비스 TC 보기 ↗",
    artifactUrl: "https://qa-portfolio-hecto.vercel.app/",
    description: [
      "아파트청약케어, 내정보지키미, 휘슬, 발로소득 등 다양한 서비스의 QA를 수행했습니다.",
      "내정보지키미 글로벌 및 자사 결제 시스템 오픈 QA와 펫케어·쇼핑로그인 신규 오픈 QA에 참여했습니다.",
      "통신 3사 네트워크 연동 테스트와 호환성·성능 테스트를 수행했습니다.",
      "사용자 인증 기능을 검증하고, 테스트 케이스·시나리오 설계 및 결함 분석을 수행했습니다.",
    ],
  },
  {
    company: "엑스엘게임즈",
    role: "QA 엔지니어",
    period: "2020.12 – 2023.06",
    artifactLabel: "밸런스 리딩 문서 보기 ↗",
    artifactUrl: "https://qa-portfolio-xlgames.vercel.app/",
    description: [
      "팀 테스트 가이드를 작성하고 테스트 진행을 리딩했습니다.",
      "게임 내 상품의 기능과 적용 여부를 검증하고, 운영 로그 및 지표 로그를 확인했습니다.",
      "대만·글로벌 서비스의 현지화 품질 검증(LQA)을 수행했습니다.",
      "타사 MMORPG 플레이 테스트를 통한 벤치마킹을 수행했습니다.",
      "Unity 로컬 환경에서 수치를 비교하며 밸런스 시나리오를 검증했습니다.",
    ],
  }
];

const educationAndExperience = {
  education: [
    { school: "동양미래대학교", degree: "컴퓨터소프트웨어 공학과", period: "2018.03 - 2021.02" },
    { school: "학점은행제", degree: "컴퓨터공학", period: "2022.02 - 2022.08" },
    { school: "빡공단 50기", degree: "Django 클래스", period: "2024.09" },
    { school: "엘리스", degree: "프론트엔드 전문가 트랙", period: "2024.09 - 2025.03" }
  ],
  experience
};

export default educationAndExperience;
export type { Experience} ;
