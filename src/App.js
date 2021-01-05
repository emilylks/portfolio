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
      </div>
    </div>
  );
}

export default App;
