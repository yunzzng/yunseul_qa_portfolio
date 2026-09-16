import figmaIcon from "/icons/skill/figma.png";
import adobeXdIcon from "/icons/skill/adobexd.png";
import githubIcon from "/icons/skill/github.png";
import gitlabIcon from "/icons/skill/gitlab.png";
import postmanIcon from "/icons/skill/postman.png";
import jiraIcon from "/icons/skill/jira.png";
import confluenceIcon from "/icons/skill/confluence.png";
import pythonIcon from "/icons/skill/python.png";
import photoshopIcon from "/icons/skill/photoshop.png";
import illustratorIcon from "/icons/skill/illustrator.png";
import claudeIcon from "/icons/skill/claude.png";
import cursorIcon from "/icons/skill/cursor.png";
import postgresqlIcon from "/icons/skill/postgresql.png";
import mysqlIcon from "/icons/skill/mysql.png";
import notionIcon from "/icons/skill/notion.png";
import mongodbIcon from "/icons/skill/mongodb.png";
import dbeaverIcon from "/icons/skill/dbeaver.png";
const playwrightIcon = "/icons/skill/playwright-logo.svg?v=20260916";

export type Skill = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

const skills: SkillGroup[] = [
  {
    category: "QA·자동화",
    items: [
      { name: "Jira", icon: jiraIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "Playwright", icon: playwrightIcon },
    ],
  },
  {
    category: "API·데이터 검증",
    items: [
      { name: "DBeaver", icon: dbeaverIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "MongoDB", icon: mongodbIcon },
    ],
  },
  {
    category: "협업·형상 관리",
    items: [
      { name: "GitHub", icon: githubIcon },
      { name: "GitLab", icon: gitlabIcon },
      { name: "Confluence", icon: confluenceIcon },
      { name: "Notion", icon: notionIcon },
    ],
  },
  {
    category: "개발·AI·디자인",
    items: [
      { name: "Python", icon: pythonIcon },
      { name: "Claude", icon: claudeIcon },
      { name: "Cursor", icon: cursorIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Adobe XD", icon: adobeXdIcon },
      { name: "Photoshop", icon: photoshopIcon },
      { name: "Illustrator", icon: illustratorIcon },
    ],
  },
];

export default skills;
