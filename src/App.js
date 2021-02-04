import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import IntroPic from './components/IntroPic/IntroPic.js';
import { ReactComponent as EmailIcon } from './assets/EmailIcon.svg';
import { ReactComponent as GithubIcon } from './assets/GithubIcon.svg';
import { ReactComponent as LinkedinIcon } from './assets/LinkedinIcon.svg';
import { ReactComponent as PilldexPhone } from './assets/pilldexMockup.svg';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const script = document.createElement('script');

    script.src = "https://code.iconify.design/1/1.0.6/iconify.min.js";
    script.async = true;
    document.body.appendChild(script);

    wrapSpans();

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  function wrapSpans() {
    // Wrap every letter in a span
    var textWrapper = document.getElementsByClassName("big-name")[0];
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\s]|\w)/g, "<span class='letter'>$&</span>");

    var spans = document.getElementsByClassName("letter");
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.animationDelay = (0.4 + i / 12) + "s";
    }
  }

  return (
    <div className="App">
      <div id="content">
        <div className="landing">
          <div className="row-content" id="web-header">
            <span id="name-tag">emily lukas</span>
            <div className="row-content" id="link-header">
              <span className="top-link">about</span>
              <span className="top-link">projects</span>
            </div>
          </div>
          <div className="landing-content">
            <div className="row-content">
              <div className="column-content">
                <p className="big-name">Hi! I'm Emily</p>
                <p className="name-subtitle">- i design, code, and create things</p>
                <div className="row-content" id="icon-row">
                  <div className="social-icon">
                    <GithubIcon style={{height: '50%', width: '50%'}}/>
                  </div>
                  <div className="social-icon">
                    <LinkedinIcon style={{height: '50%', width: '50%'}}/>
                  </div>
                  <div className="social-icon">
                    <EmailIcon style={{height: '50%', width: '50%'}}/>
                  </div>
                </div>
              </div>
              <div id="picture">
                <IntroPic />
              </div>
            </div>
          </div>
        </div>

        <p className="section-header" id="about" data-aos="fade-up" data-aos-duration="800">about -</p>
        <div className="row-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="intro-paragraph">
            <p>Hey! I’m Emily and I’m currently in my 3rd year of Computer Engineering at the University of British Columbia.
              Currently, most of my experience is in <mark className="highlight">front-end development with a
              touch of full-stack.</mark>
            <br></br>
            <br></br>
            I’m passionate about projects that promote <mark className="highlight">wellness,
            accessibility, and sustainability,</mark> as these topics are so important in shaping our future!
            When I’m not on my laptop coding, you’ll
            likely find me with a cup of matcha scouting out new food places to try:)</p>
          </div>
          <div className="comment-box">
            <p className="comment-line">/*</p>
            <p className="comment-line">&nbsp;* <span className="comment-label">Author:</span> Emily Lukas</p>
            <p className="comment-line">&nbsp;* <span className="comment-label">Interests:</span> mobile + web dev, tech in medicine</p>
            <p className="comment-line">&nbsp;* <span className="comment-label">Hobbies:</span>  food, friends, and tea</p>
            <p className="comment-line">&nbsp;* <span className="comment-label">Favorite Figma Plugin:</span> Blobs</p>
            <p className="comment-line">&nbsp;*/</p>
          </div>
        </div>

        <p className="section-header" data-aos="fade-up" data-aos-duration="800">selected projects -</p>
        <div className="project-container">
          <div className="project">
            <div className="project-pic">
              <PilldexPhone style={{height: '100%', width: '100%'}}/>
            </div>
            <div className="project-description">
              <h2 className="project-name">pilldex</h2>
              <p>a pillbox app that parses images of prescription labels and fosters medication adherence</p>
              <p>technologies-</p>
              <p>React Native, Node.js, MongoDB, Firebase, Detox/Jest, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
