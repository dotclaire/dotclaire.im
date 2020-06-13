import React from "react"
import laptop from "../assets/images/laptop.jpg"

export const LandingPage = () => {
  return (
    <div className="h-full w-full landing">
      <div className="h-full p-5 flex flex-col justify-center items-start">
        <div>
          <h1 className="greeting text-white">Hello, I'm Claire.</h1>
          <h2 className="job text-white">
            Junior Developer &#64;
            <a
              className="company-name text-white"
              href="https://signal-noise.co.uk"
              target="_blank"
            >
              Signal Noise, part of The Economist Group
            </a>
            .
          </h2>
        </div>
        <img className="landing-image" src={laptop} alt="hands-on-laptop" />
      </div>
    </div>
  )
}
