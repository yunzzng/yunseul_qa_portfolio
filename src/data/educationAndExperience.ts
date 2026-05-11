type Experience = {
  company: string;
  role: string;
  period: string;
  description?: string;
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
      period: "2025.07- 재직중",
      description: "1️⃣ 테스트 계획 수립(QA Plan) → 테스트 수행 → 결함 관리 → Sign-off까지 전 과정 담당 \n 2️⃣ 도메인 기반 테스트 설계 및 API/DB 데이터 검증으로 품질 확보 \n 3️⃣ AI를 활용한 요구사항 분석 및 테스트 케이스 자동화로 QA 효율 개선"
    },
    {
      company: "큐오피스",
      role: "QA 엔지니어",
      period: "2023.06 - 2024.08",
      description: "1️⃣ 사용자 인증(로그인, 계정 관리 등) 기능 검증 및 보안성 테스트 수행 \n 2️⃣ 테스트 케이스 및 시나리오 설계, 결함 분석 및 품질 개선 활동 수행"
    },
    {
      company: "엑스엘게임즈",
      role: "QA 엔지니어",
      period: "2020.12 - 2023.06",
      description: "1️⃣ 게임 품질 향상을 위한 기능 및 성능 테스트 진행 \n 2️⃣ 사용자 경험(UX) 개선을 위한 로그 분석 및 밸런스 시나리오 작성"
    }
  ]
};

export default educationAndExperience;
export type { Experience} ;