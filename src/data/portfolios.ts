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
    title:  "엔카해커톤",
    subtitle: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
    description: "이미지 최적화는 페이지 로딩 속도를 개선하는 핵심 요소 중 하나입니다. 본 프로젝트는 Vite 환경에서 이미지 최적화를 자동으로 수행하는 플러그인(vite-plugin-optimize-image)을 개발하는 것을 목표로 하였습니다. 별도의 이미지 최적화 작업을 하지 않아도 자동으로 최적화된 이미지를 제공할 수 있도록 합니다.",
    date: "2025-02-05",
    contribution: "개인 프로젝트",
    dataset: [
      "PNG, JPEG, JPG 이미지 형식 파일을 Webp로 자동 변환하는 기능"
    ],
    analysis: [
      "웹사이트 로딩 속도개선: 이미지 크기 최적화를 통해 초기 페이지 로딩 속도가 빨라짐"
    ],
    insight: [
      "Vite 플러그인 개발 경험: 추가적인 설정 없이 플러그인 설치만으로 최적화 기능 사용 가능"
    ],
    output: "https://www.npmjs.com/package/vite-plugin-optimize-image" ,
    image: "/img/plugin.png" 
  },
  {
    title:  "엔카 서비스 이차 어때",
    subtitle: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
    description: "이미지 최적화는 페이지 로딩 속도를 개선하는 핵심 요소 중 하나입니다. 본 프로젝트는 Vite 환경에서 이미지 최적화를 자동으로 수행하는 플러그인(vite-plugin-optimize-image)을 개발하는 것을 목표로 하였습니다. 별도의 이미지 최적화 작업을 하지 않아도 자동으로 최적화된 이미지를 제공할 수 있도록 합니다.",
    date: "2025-02-05",
    contribution: "개인 프로젝트",
    dataset: [
      "PNG, JPEG, JPG 이미지 형식 파일을 Webp로 자동 변환하는 기능"
    ],
    analysis: [
      "웹사이트 로딩 속도개선: 이미지 크기 최적화를 통해 초기 페이지 로딩 속도가 빨라짐"
    ],
    insight: [
      "Vite 플러그인 개발 경험: 추가적인 설정 없이 플러그인 설치만으로 최적화 기능 사용 가능"
    ],
    output: "https://www.npmjs.com/package/vite-plugin-optimize-image" ,
    image: "/img/plugin.png" 
  },
  {
    title:  "qa 자동화 a-z",
    subtitle: "이미지를 자동으로 .webp으로 변환하는 vite플러그인",
    description: "이미지 최적화는 페이지 로딩 속도를 개선하는 핵심 요소 중 하나입니다. 본 프로젝트는 Vite 환경에서 이미지 최적화를 자동으로 수행하는 플러그인(vite-plugin-optimize-image)을 개발하는 것을 목표로 하였습니다. 별도의 이미지 최적화 작업을 하지 않아도 자동으로 최적화된 이미지를 제공할 수 있도록 합니다.",
    date: "2025-02-05",
    contribution: "개인 프로젝트",
    dataset: [
      "PNG, JPEG, JPG 이미지 형식 파일을 Webp로 자동 변환하는 기능"
    ],
    analysis: [
      "웹사이트 로딩 속도개선: 이미지 크기 최적화를 통해 초기 페이지 로딩 속도가 빨라짐"
    ],
    insight: [
      "Vite 플러그인 개발 경험: 추가적인 설정 없이 플러그인 설치만으로 최적화 기능 사용 가능"
    ],
    output: "https://www.npmjs.com/package/vite-plugin-optimize-image" ,
    image: "/img/plugin.png" 
  },
];

export default portfolios;
export type { Portfolio };