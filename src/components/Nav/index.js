function Nav(props) {
  const {
    setContactSelected,
    contactSelected,
    setPortfolioSelected,
    portfolioSelected,
    setResumeSelected,
    resumeSelected,
    aboutSelected,
    setAboutSelected,
  } = props;

  return (
    <header className="container">
      <div className="container name-logo">
        <a data-testid="link" href="/">
          <img
            src={require("../../assets/images/code_icon.png").default}
            alt="code icon"
          />
        </a>
        <h1 className="mx-2">Wade Facer</h1>
      </div>
      <nav>
        <ul className="container">
          <li className={`${aboutSelected && "navActive"}`}>
            <a
              data-testid="about"
              href="#about"
              onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false);
                setResumeSelected(false);
                setContactSelected(false);
              }}
            >
              About
            </a>
          </li>
          <li className={`${portfolioSelected && "navActive"}`}>
            <a
              data-testid="portfolio"
              href="#portfolio"
              onClick={() => {
                setPortfolioSelected(true);
                setResumeSelected(false);
                setContactSelected(false);
                setAboutSelected(false);
              }}
            >
              Portfolio
            </a>
          </li>
          <li className={`${contactSelected && "navActive"}`}>
            <a
              className="contact"
              href="#contact"
              onClick={() => {
                setContactSelected(true);
                setResumeSelected(false);
                setPortfolioSelected(false);
                setAboutSelected(false);
              }}
            >
              Contact
            </a>
          </li>
          <li className={`${resumeSelected && "navActive"}`}>
            <a
              data-testid="resume"
              href="#resume"
              onClick={() => {
                setResumeSelected(true);
                setPortfolioSelected(false);
                setContactSelected(false);
                setAboutSelected(false);
              }}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
