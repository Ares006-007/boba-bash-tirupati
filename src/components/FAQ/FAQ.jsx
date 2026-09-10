import { useState } from 'react';
import styles from './FAQ.module.css';
import FaqItem from './FaqItem';
import useScrollReveal from '../../hooks/useScrollReveal';

import raccoonBoba from '../../assets/raccoon-boba-CiAIXHwE-removebg-preview.png';
import bobaCup from '../../assets/boba cup.png';

const FAQ_DATA = [
  {
    iconBg: 'bg-green',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
    question: 'Who can participate in Boba Bash Tirupati?',
    answer:
      "Anyone who's curious, creative and excited to build! Whether you're a coder, designer, storyteller or just someone with ideas — you're welcome here. All students currently enrolled in any college or university can participate.",
  },
  {
    iconBg: 'bg-yellow',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    question: 'Is there a registration fee?',
    answer:
      'Nope! Boba Bash is completely free. Just sign up, show up, and have fun!',
  },
  {
    iconBg: 'bg-pink',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <circle cx="18" cy="8" r="3" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
    question: 'Do I need a team to participate?',
    answer:
      'Not at all! You can come solo and team up on the spot, or bring your friends along. Either way works perfectly.',
  },
  {
    iconBg: 'bg-pink',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    question: 'What should I bring to the event?',
    answer:
      "Just bring your laptop, a charger, and your curiosity! We'll take care of the rest — including boba, of course.",
  },
  {
    iconBg: 'bg-green',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    question: 'Will food and accommodation be provided?',
    answer:
      "Boba and snacks are on us! Accommodation isn't provided, but we can help you find nearby options if you're traveling.",
  },
  {
    iconBg: 'bg-blue',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    question: 'What is the duration of Boba Bash?',
    answer:
      "It's a one-day event! Expect around 5–6 hours of building, sharing, and boba-drinking goodness.",
  },
  {
    iconBg: 'bg-yellow',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
      </svg>
    ),
    question: 'What can I win?',
    answer:
      "It's not about competition — it's about creating! But there may be some fun surprises and shoutouts for cool projects. 👀",
  },
  {
    iconBg: 'bg-blue',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    question: "What if I'm new to hacking or building?",
    answer:
      "That's totally fine! Boba Bash is beginner-friendly. You'll have mentors around, and a page about your cat absolutely counts as a project.",
  },
  {
    iconBg: 'bg-pink',
    iconSvg: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    question: 'Who can I contact for more questions?',
    answer:
      'Reach out to us anytime! Drop us a message on our socials or email us — we\'re always happy to help.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useScrollReveal();
  const bannerRef = useScrollReveal();

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className={`${styles.faqSection} reveal`} id="faqSection" ref={sectionRef}>
      {/* Header */}
      <div className={styles.faqHeader}>
        <div className={styles.faqHeaderText}>
          <div className={styles.faqPill}>FAQ</div>
          <h2 className={styles.faqTitle}>
            Frequently<br />Asked{' '}
            <span className={styles.faqTitleHighlight}>Questions</span>
          </h2>
          <p className={styles.faqSubtitle}>
            Everything you need to know about<br />Boba Bash Tirupati.
          </p>
        </div>
        <div className={styles.faqHeaderImg}>
          <div className={styles.faqSpeechBubble}>got questions?</div>
          <img
            src={raccoonBoba}
            alt="Raccoon with boba"
            className={styles.faqRaccoon}
            loading="lazy"
          />
        </div>
      </div>

      {/* Grid */}
      <div className={styles.faqGrid}>
        {FAQ_DATA.map((item, index) => (
          <FaqItem
            key={index}
            iconBg={item.iconBg}
            iconSvg={item.iconSvg}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* Bottom Banner */}
      <div className={`${styles.faqBottomBanner} reveal`} ref={bannerRef}>
        <div className={styles.faqBannerLeft}>
          <img
            src={bobaCup}
            alt="Boba cup"
            className={styles.faqBannerCup}
          />
          <div>
            <h3>Still have questions?</h3>
            <p>We&rsquo;re here to help! Reach out to us anytime.</p>
            <a href="mailto:shaikajhaj@gmail.com" className={styles.faqContactBtn}>
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              CONTACT US
            </a>
          </div>
        </div>
        <div className={styles.faqBannerRight}>
          <p>
            Can&rsquo;t wait to see you at<br />
            <strong>Boba Bash Tirupati!</strong> ✨
          </p>
        </div>
      </div>
    </section>
  );
}
