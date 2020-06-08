import React from "react"
import { Info } from "../icons/Info"

export const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="container d-flex py-5">
        <div className="row">
          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
            <Info />
          </div>
          <div className="col-md-12 col-lg-6">
            <h1 className="d-flex justify-content-center justify-content-lg-start">
              <span className="hyphen">-</span>
              About Me
            </h1>
            <p>
              My name is Charikleia Charalampidou, but people call me Claire! I
              am a Front End Developer with passion for responsive web design
              and a firm believer in the mobile first approach. I love getting
              my hands on new technologies and building contemporary projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
