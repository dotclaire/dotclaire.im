import React from "react"
import { Info } from "../icons/Info"

export const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="container d-flex py-5">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <Info />
          </div>
          <div className="col">
            <h1>
              <span className="hyphen">-</span>About Me
            </h1>
            <p>
              My name is Charikleia Charalampidou, but people call me Claire! I
              come from Greece and I moved to the UK in September 2018. I did my
              undergraduate studies at Aristotle University of Thessaloniki in
              Greece, which is my first domain of knowledge. After that, I
              earned my master's degree in Data Analytics at the University of
              Brighton. During my MSc, I enhanced my programming skills and that
              was the time that I realised my passion for coding. Thus, I
              acquired personal experience in Front End Web Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
