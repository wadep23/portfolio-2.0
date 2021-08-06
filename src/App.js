import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);

  return (
    <div className="big-box">
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      />
      <main>
        {aboutSelected ? (
          <About />
        ) : portfolioSelected ? (
          <Portfolio />
        ) : contactSelected ? (
          <Contact />
        ) : resumeSelected ? (
          <Resume />
        ) : (
          <About />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
