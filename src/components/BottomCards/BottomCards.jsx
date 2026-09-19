import styles from './BottomCards.module.css';
import useScrollReveal from '../../hooks/useScrollReveal';
import Gallery from '../Gallery/Gallery';

import raccoonBoba from '../../assets/raccoon-boba-CiAIXHwE-removebg-preview.png';
import raccoonSignup from '../../assets/raccoon-signup-CmhNPqMA-removebg-preview (1).png';
import raccoonBuild from '../../assets/raccoon-build-UDtVXbFF-removebg-preview.png';

export default function BottomCards() {
  const leftRef = useScrollReveal();
  const middleRef = useScrollReveal();
  const whatRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section className={styles.bottomCards}>
      {/* Bring your people */}
      <div className={`${styles.bottomCard} ${styles.leftCard} reveal`} ref={leftRef}>
        <h2 className={styles.cardTitle}>Bring your people.</h2>
        <p className={styles.cardDesc}>
          Boba Bash Tirupati is happening on <strong>TBA</strong> at{' '}
          <strong>Mohan Babu University</strong>. Come hang out, meet new people and
          experience a celebration built around everyone&rsquo;s favourite little cup of
          happiness.
        </p>
      </div>

      {/* What is Boba Bash? */}
      <div className={`${styles.middleCardContainer} reveal`} ref={middleRef}>
        <div className={`${styles.bottomCard} ${styles.middleCard}`}>
          <h2 className={styles.cardTitle}>What is Boba Bash?</h2>
          <p className={styles.cardDesc}>
            Boba Bash is an epic gathering for creative people. Come build, share, and
            connect with a community of amazing makers while enjoying your favorite cup of
            boba!
          </p>
        </div>
        <img
          src={raccoonBoba}
          alt="Animals with Boba"
          className={styles.raccoonImg}
          loading="lazy"
        />
      </div>

      {/* What do you do at a Boba Bash? */}
      <div
        className={`${styles.bottomCard} ${styles.whatYouDoCard} reveal`}
        ref={whatRef}
      >
        <h2 className={styles.cardTitle}>What do you do at a Boba Bash?</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <img
              src={raccoonSignup}
              alt="Sign up"
              className={styles.stepImg}
              loading="lazy"
            />
            <div className={styles.stepText}>
              <h3>1. sign up</h3>
              <p>
                Find your city and put your name down. It&rsquo;s free, and you don&rsquo;t
                need an idea yet.
              </p>
            </div>
          </div>
          <div className={`${styles.stepDivider} step-divider`} />
          <div className={styles.step}>
            <img
              src={raccoonBuild}
              alt="Build projects"
              className={styles.stepImg}
              loading="lazy"
            />
            <div className={styles.stepText}>
              <h3>2. build projects</h3>
              <p>
                Bring a laptop. You&rsquo;ve got three to five hours to make a website out
                of plain HTML and CSS. No experience needed, and a page about your cat
                counts.
              </p>
            </div>
          </div>
          <div className={`${styles.stepDivider} step-divider`} />
          <div className={styles.step}>
            <img
              src={raccoonBoba}
              alt="Get boba"
              className={`${styles.stepImg} ${styles.stepImg3}`}
              loading="lazy"
            />
            <div className={styles.stepText}>
              <h3>3. get boba!</h3>
              <p>
                Order whatever you want, it&rsquo;s on us. Then show the room what you made
                and go home having built something.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <Gallery />

      {/* Ready to bash? */}
      <div
        className={`${styles.bottomCard} ${styles.rightCard} reveal`}
        ref={rightRef}
      >
        <h2 className={styles.rightCardTitle}>Ready to bash?</h2>
        <p className={styles.smallInfo}>
          Tirupati &bull; TBA &bull; Mohan Babu University
        </p>
        <a
          href="https://bash.hackclub.com/events/tirupati"
          className={styles.joinBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN THE BASH &rarr;
        </a>
      </div>
    </section>
  );
}
