import { FC, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
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
  const imageTriggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeExpandedImage = useCallback(() => {
    setExpandedImage(null);
    window.setTimeout(() => {
      imageTriggerRef.current?.focus();
    }, 0);
  }, []);

  useEffect(() => {
    if (!expandedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeExpandedImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeExpandedImage, expandedImage]);

  const openExpandedImage = (
    event: MouseEvent<HTMLButtonElement>,
    image: string,
    title: string
  ) => {
    event.stopPropagation();
    imageTriggerRef.current = event.currentTarget;
    setExpandedImage({
      src: image,
      alt: `${title} 썸네일`,
    });
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
          <h3 className={styles.sectionTitle}>기술 스택</h3>
          <div className={styles.sidebarSkillList}>
            {skills.map((group) => (
              <div key={group.category} className={styles.sidebarSkillGroup}>
                <h4 className={styles.sidebarSkillGroupTitle}>{group.category}</h4>
                <div className={styles.sidebarSkillItems}>
                  {group.items.map((skill) => (
                    <span
                      key={`${group.category}-${skill.name}`}
                      className={`${styles.sidebarSkillItem} ${
                        skill.description ? styles.sidebarSkillItemWide : ""
                      }`}
                    >
                      <span className={styles.sidebarSkillName}>
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
                      {skill.description && (
                        <span className={styles.sidebarSkillDescription}>
                          {skill.description}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.mainHeading}>API·DB 정합성 검증과 테스트 자동화를 수행하는 QA 엔지니어</h1>
        <p className={styles.subtitle}>{aboutMe.introduction}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>경력</h2>
          <div className={styles.timeline}>
            {educationAndExperience.experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <h3 className={styles.jobTitle}>{exp.company}</h3>
                <p className={styles.jobCompany}>
                  {exp.role} · {exp.period}
                </p>
                <p className={styles.jobSectionLabel}>담당 업무</p>
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
              <article
                key={index}
                className={styles.portfolioCard}
              >
                <a
                  href={portfolio.output}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.portfolioCardLink}
                  aria-label={`${portfolio.title} ${portfolio.ctaLabel}`}
                />

                <div className={styles.portfolioHeader}>
                  <h3 className={styles.portfolioTitle}>{portfolio.title}</h3>
                </div>

                <p className={styles.portfolioDescription}>
                  <strong className={styles.projectLabel}>
                    {portfolio.subtitle}
                  </strong>
                  {portfolio.overview && (
                    <span className={styles.projectText}>
                      {portfolio.overview}
                    </span>
                  )}
                </p>

                <p className={styles.projectOpenHint}>{portfolio.ctaLabel}</p>

                <hr className={styles.portfolioDivider} />

                <div className={styles.portfolioDetailRow}>
                  <div className={styles.portfolioDetails}>
                    {portfolio.role && (
                      <div className={styles.portfolioField}>
                        <strong>담당 역할</strong>
                        <p className={styles.portfolioText}>{portfolio.role}</p>
                      </div>
                    )}

                    {portfolio.implementations && (
                      <div className={styles.portfolioField}>
                        <strong>{portfolio.featureLabel ?? "주요 구현"}</strong>
                        <ul className={styles.portfolioList}>
                          {portfolio.implementations.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {portfolio.verification && (
                      <div className={styles.portfolioField}>
                        <strong>검증 결과:</strong>
                        <ul className={styles.portfolioList}>
                          {portfolio.verification.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {portfolio.expectedEffects && (
                      <div className={styles.portfolioField}>
                        <strong>기대 효과:</strong>
                        <ul className={styles.portfolioList}>
                          {portfolio.expectedEffects.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className={styles.portfolioImageBox}
                    onClick={(event) => {
                      openExpandedImage(event, portfolio.image, portfolio.title);
                    }}
                    aria-label={`${portfolio.title} 이미지 확대`}
                  >
                    <img
                      src={portfolio.image}
                      alt={`${portfolio.title} 썸네일`}
                      className={styles.portfolioImage}
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {expandedImage && (
        <div className={styles.imageModalOverlay} role="dialog" aria-modal="true">
          <div className={styles.imageModalContent}>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.imageModalClose}
              onClick={closeExpandedImage}
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
