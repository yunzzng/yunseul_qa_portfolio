import { FC, useEffect, useState } from "react";
import styles from "./resume.module.css";
import certifications from "./data/certifications";
import portfolios from "./data/portfolios";
import educationAndExperience from "./data/educationAndExperience";
import skills from "./data/skills";
import profileImg from "/img/yunseul.jpg";
import githubIcon from "/icons/skill/github.png";
import aboutMe from "./data/about";

const Resume: FC = () => {
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!expandedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedImage]);

  const openOutput = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <img src={profileImg} alt="Profile" className={styles.profileImage} />
        <h2 className={styles.name}>이윤슬</h2>
        <p className={styles.title}>QA Engineer</p>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>연락처</h3>
          <ul className={styles.list}>
            <li>yun.zzang9.me@gmail.com</li>
            <li>
              <a
                href="https://github.com/yunzzng?tab=repositories&q=&type=public&language=&sort="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>교육</h3>
          <ul className={styles.list}>
            {educationAndExperience.education.map((edu, index) => (
              <li key={index} className={styles.eduItem}>
                <div className={styles.school}>{edu.school}</div>
                <div className={styles.degree}>{edu.degree}</div>
                <div className={styles.period}>{edu.period}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>자격증 및 수상</h3>
          <ul className={styles.list}>
            {certifications.map((cert, index) => (
              <li key={index}>
                <div className={styles.certificationName}>{cert.name}</div>
                <div className={styles.period}>({cert.date})</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>기술 스택</h3>
          <div className={styles.sidebarSkillList}>
            {skills.map((group) =>
              group.items.map((skill) => (
                <span key={`${group.category}-${skill.name}`} className={styles.sidebarSkillItem}>
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt=""
                      aria-hidden="true"
                      className={styles.skillIcon}
                    />
                  )}
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.mainHeading}>API·DB 정합성 검증과 테스트 자동화를 수행하는 QA 엔지니어</h1>
        <p className={styles.subtitle}>{aboutMe.introduction}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>경력</h2>
          <div className={styles.timeline}>
            {educationAndExperience.experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <h3 className={styles.jobTitle}>{exp.role}</h3>
                <p className={styles.jobCompany}>
                  {exp.company} ({exp.period})
                </p>
                <ul className={styles.jobDescriptionList}>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>프로젝트</h2>
          <div className={styles.portfolioGrid}>
            {portfolios.map((portfolio, index) => (
              <div
                key={index}
                className={styles.portfolioCard}
                onClick={() => openOutput(portfolio.output)}
              >
                <div className={styles.portfolioHeader}>
                  <h3 className={styles.portfolioTitle}>
                    {portfolio.title}
                    <span className={styles.portfolioDate}>
                      {portfolio.date}
                    </span>
                  </h3>
                </div>

                <p className={styles.portfolioDescription}>
                  <strong className={styles.projectLabel}>
                    {portfolio.subtitle}
                  </strong>
                  <span className={styles.projectText}>
                    {portfolio.overview}
                  </span>
                </p>

                <hr className={styles.portfolioDivider} />

                <div className={styles.portfolioDetailRow}>
                  <div className={styles.portfolioDetails}>
                    <p className={styles.portfolioField}>
                      <strong>수행 형태:</strong>
                      <span className={styles.portfolioValue}>
                        {portfolio.executionType}
                      </span>
                    </p>

                    {portfolio.implementations && (
                      <div className={styles.portfolioField}>
                        <strong>주요 구현:</strong>
                        <ul className={styles.portfolioList}>
                          {portfolio.implementations.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {portfolio.result && (
                      <p className={styles.portfolioField}>
                        <strong>검증 결과 또는 기대 효과:</strong>
                        <span className={styles.portfolioValue}>
                          {portfolio.result}
                        </span>
                      </p>
                    )}
                  </div>

                  <div
                    className={styles.portfolioImageBox}
                    onClick={(event) => {
                      event.stopPropagation();
                      setExpandedImage({
                        src: portfolio.image,
                        alt: `${portfolio.title} 썸네일`,
                      });
                    }}
                  >
                    <img
                      src={portfolio.image}
                      alt={`${portfolio.title} 썸네일`}
                      className={styles.portfolioImage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {expandedImage && (
        <div className={styles.imageModalOverlay} role="dialog" aria-modal="true">
          <div className={styles.imageModalContent}>
            <button
              type="button"
              className={styles.imageModalClose}
              onClick={() => setExpandedImage(null)}
              aria-label="이미지 닫기"
            >
              ×
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className={styles.imageModalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
