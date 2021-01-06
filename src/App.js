import './App.css';
import IntroPic from './components/IntroPic/IntroPic.js';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://code.iconify.design/1/1.0.6/iconify.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <div id="content">
        <div className="row-content" id="web-header">
          <span id="name-tag">emily lukas</span>
          <div className="row-content" id="link-header">
            <span className="top-link">about</span>
            <span className="top-link">projects</span>
          </div>
        </div>
        <div className="row-content">
          <div className="intro-blurb">
            <p className="big-name">Hi! I'm Emily</p>
            <p className="name-subtitle">- i design, code, and create things</p>
            <div className="row-content" id="location-element">
              <span className="iconify" id="location-pin" data-inline="false"
                    data-icon="cil:location-pin" style={{color: '#999b84', fontSize: 30}} />
              <p style={{color: '#999b84'}}>Vancouver, BC, Canada</p>
            </div>
          </div>
          <div id="picture">
            <IntroPic />
          </div>
        </div>

        <p className="section-header" id="about">about -</p>
        <div className="row-content">
          <div className="intro-paragraph">
            <p>Hey! I’m Emily and I’m currently in my 3rd year of Computer Engineering at UBC.
            I’m passionate about projects that promote <mark className="highlight">wellness,
            accessibility, and sustainability,</mark> as these topics are so important in shaping our future.
            Currently, most of my experience is in <mark className="highlight">front-end development with a
            touch of full-stack.</mark> When I’m not on my laptop coding, you’ll
            likely find me with a cup of matcha scouting out new food places to try:)</p>
          </div>
          <div className="comment-box">
            <p className="comment-item">/*</p>
            <p className="comment-item">&nbsp;* <span className="comment-label">Author:</span> Emily Lukas</p>
            <p className="comment-item">&nbsp;* <span className="comment-label">Interests:</span> software dev, tech in medicine</p>
            <p className="comment-item">&nbsp;* <span className="comment-label">Hobbies:</span>  food, friends, and tea</p>
            <p className="comment-item">&nbsp;* <span className="comment-label">Favorite Figma Plugin:</span> Blobs</p>
            <p className="comment-item">&nbsp;*/</p>
          </div>
        </div>

        <p className="section-header">education -</p>
      </div>
    </div>
  );
}

export default App;
