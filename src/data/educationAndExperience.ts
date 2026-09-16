type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
};

const educationAndExperience = {
  education: [
    { school: "동양미래대학교", degree: "컴퓨터소프트웨어 공학과", period: "2018.03 - 2021.02" },
    { school: "학점은행제", degree: "컴퓨터공학", period: "2022.02 - 2022.08" },
    { school: "빡공단 50기", degree: "Django 클래스", period: "2024.09" },
    { school: "엘리스", degree: "프론트엔드 전문가 트랙", period: "2024.09 - 2025.03" }
  ],
  experience: [
    {
      company: "엔카닷컴",
      role: "QA 엔지니어",
      period: "2025.07 – 재직 중",
      description: [
        "테스트 계획 수립부터 테스트 수행, 결함 관리, 릴리즈 검증 및 Sign-off까지 QA 전 과정을 수행했습니다.",
        "중고차 플랫폼의 업무 흐름과 예외 조건을 반영해 테스트 시나리오를 설계하고, API 응답과 DB 데이터의 정합성을 검증했습니다.",
        "발견한 이슈를 재현 절차와 함께 Jira에 기록하고, 개발 조직과 협업해 해결을 진행했습니다.",
        "AI를 활용해 요구사항을 분석하고 테스트 케이스를 구조화했습니다.",
      ],
    },
    {
      company: "큐오피스",
      role: "QA 엔지니어",
      period: "2023.06 – 2024.08",
      description: [
        "사용자 인증(로그인, 계정 관리 등) 기능 검증을 수행했습니다.",
        "테스트 케이스 및 시나리오를 설계하고, 결함 분석 및 품질 개선 활동을 수행했습니다.",
      ],
    },
    {
      company: "엑스엘게임즈",
      role: "QA 엔지니어",
      period: "2020.12 – 2023.06",
      description: [
        "게임 품질 향상을 위한 기능 테스트를 진행했습니다.",
        "사용자 경험(UX) 개선을 위한 로그 분석과 밸런스 시나리오 작성을 수행했습니다.",
      ],
    }
  ]
};

export default educationAndExperience;
export type { Experience} ;
