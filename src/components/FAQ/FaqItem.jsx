import styles from './FAQ.module.css';

export default function FaqItem({
  iconBg,
  iconSvg,
  question,
  answer,
  isActive,
  onToggle,
}) {
  return (
    <div
      className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ''}`}
    >
      <div
        className={styles.faqItemHeader}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <div className={`${styles.faqIcon} ${iconBg}`}>{iconSvg}</div>
        <span className={styles.faqQuestion}>{question}</span>
        <span className={styles.faqToggle}>{isActive ? '−' : '+'}</span>
      </div>
      <div
        className={`${styles.faqAnswer} ${isActive ? styles.faqAnswerOpen : ''}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
