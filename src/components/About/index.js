// import { useState } from 'react';

function About() {
  return (
    <div className="about container">
      <img
        id="profile-picture"
        src={require("../../assets/images/my_pic.jpg").default}
        alt="Me"
      />
      <h1 className="about-me">About Me</h1>
      <p>
        Hi! My name is Wade and I'm 32 years old. I decided to pursue a career
        in Web Development after a lifetime obsession with technology and desire
        to know and understand how things worked. I have always been known for
        my inquisitive nature and ability to grasp abstract concepts. I have
        decided to bring my personal touch to the world of Web Development with
        the desire to create innovative and useful applications that can reach a
        broad audience of users.
      </p>
    </div>
  );
}

export default About;
