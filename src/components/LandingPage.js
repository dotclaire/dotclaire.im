import React from "react"
import laptop from "../assets/images/laptop.jpg"

export const LandingPage = () => {
  return (
    <div className="h-100 w-100 landing">
      <div className="h-100 p-5 d-flex flex-column justify-content-center">
        <div className="d-flex flex-column align-self-start">
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
        <img
          className="d-none d-md-block landing-image"
          src={laptop}
          alt="hands-on-laptop"
        />
      </div>
    </div>
  )
}
