import React from "react"
import { Logo } from "./Logo"

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-light">
          <div className="container">
            <div className="row p-5">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <Logo />
                <h2>I'm a Developer</h2>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <img
                  className="rounded-circle w-50"
                  src="53490573.jpeg"
                  alt="portrait"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>- About Me</h1>
                <p className="summary">
                  My name is Charikleia Charalampidou, people call me Claire! I
                  am from Greece and I moved to the UK in September 2018. I did
                  my undergraduate studies in Mathematics at Aristotle
                  University of Thessaloniki in Greece, which is my first domain
                  of knowledge. After that, I earned my master's degree in Data
                  Analytics at the University of Brighton. During my MSc, I
                  enhanced my programming skills and that was the time that I
                  realised my passion for coding. Thus, I acquired personal
                  experience in Web Development.
                </p>
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
