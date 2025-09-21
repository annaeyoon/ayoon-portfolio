import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div classname="intro">
        <h1 className="intro-text">Hi, I'm Anna</h1>
      </div>
      
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      <div classname="resume-download">
        <a href='/Anna Yoon - Resume.pdf' download>
          <button class='buttonDownload'>Download Resume</button>
        </a>
      </div>
    </>
  )
}

export default App
