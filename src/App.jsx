import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Important from "./components/Important/Important";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import SectionStrength from "./components/SectionStrength/SectionStrength";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProgressBar />
      <About />
      <Important />
      <SectionStrength />
      <Footer />
    </>
  );
};

export default App;
