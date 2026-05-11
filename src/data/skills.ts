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

export type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "Claude", icon: claudeIcon },
  { name: "Cursor", icon: cursorIcon },
  { name: "Confluence", icon: confluenceIcon },
  { name: "Jira", icon: jiraIcon },
  { name: "Postman", icon: postmanIcon },
  { name: "Python", icon: pythonIcon },
  { name: "DBeaver", icon: dbeaverIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Notion", icon: notionIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Adobe XD", icon: adobeXdIcon },
  { name: "Photoshop", icon: photoshopIcon },
  { name: "Illustrator", icon: illustratorIcon },
  { name: "Github", icon: githubIcon },
  { name: "GitLab", icon: gitlabIcon },
];

export default skills;