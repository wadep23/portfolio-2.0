// import { useState } from 'react';

function Portfolio() {
  // const[photos] = useState([
  //     {
  //         name: 'Oh Snap!',
  //         description: 'A react based portfolio style single page application',
  //     },
  //     {
  //         name: 'Pizza Hunt',
  //         description: 'A handlebars front end application with persistent data utilizing MongoDB and an Express server'
  //     },
  //     {
  //         name: 'Track My Budget',
  //         description: 'A single page application with offline useability utilizing service worker'
  //     }
  // ])
  return (
    <div className="project-box">
      <div className="project-heading">
        <h1>My Projects</h1>
      </div>
      <div className="container image">
        <a
          data-testid="link"
          href="https://github.com/wadep23/photo-port"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-thumbnail"
            src={require(`../../assets/projects/0.jpg`).default}
            alt="Oh Snap"
          />
        </a>
        <a
          data-testid="link"
          href="https://github.com/wadep23/pizza-hunt"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-thumbnail"
            src={require(`../../assets/projects/1.jpg`).default}
            alt="Pizza Hunt"
          />
        </a>
        <a
          data-testid="link"
          href="https://github.com/wadep23/track-my-budget"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-thumbnail"
            src={require(`../../assets/projects/2.jpg`).default}
            alt="Track My Budget"
          />
        </a>
        <a
          data-testid="link"
          href="https://github.com/wadep23/run-buddy"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-thumbnail"
            src={require(`../../assets/projects/3.jpg`).default}
            alt="Run Buddy"
          />
        </a>
        <a
          data-testid="link"
          href="https://github.com/wadep23/got-gear"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-thumbnail"
            src={require(`../../assets/projects/4.jpg`).default}
            alt="Got Gear"
          />
        </a>
        <a
          data-testid="link"
          href="https://github.com/wadep23/take-notes"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="img-thumbnail"
            src={require(`../../assets/projects/5.jpg`).default}
            alt="Take Notes"
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
