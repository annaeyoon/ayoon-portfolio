import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Anna!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="intro">
        <h1 className="intro-text">{typedText}</h1>
      </div>

      <div className="resume-download">
        <a href='/Anna Yoon - Resume.pdf' download>
          <button className="buttonDownload">Download Resume/CV</button>
        </a>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p className="about-me-text">I'm a recent Computer Science graduate from University of California, Irvine. </p>
      </div>
    </>
  )
}

export default App
