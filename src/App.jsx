import styles from './App.module.css';
import FloatingBoba from './components/FloatingBoba/FloatingBoba';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InfoCards from './components/InfoCards/InfoCards';
import BottomCards from './components/BottomCards/BottomCards';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <FloatingBoba />
      <div className={styles.container}>
        <Header />
        <Hero />
        <InfoCards />
        <BottomCards />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
