import React from "react"

export const Home = () => {
  return (
    <section id="home" className="bg-light d-flex flex-fill py-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md d-flex flex-column justify-content-center">
            <h1 className="greeting text-center">Hello, I'm Claire.</h1>
            <h2 className="job text-center">
              Junior Developer &#64;
              <a
                className="company-name"
                href="https://signal-noise.co.uk"
                target="_blank"
              >
                Signal Noise, part of The Economist Group
              </a>
              .
            </h2>
          </div>
          <div className="col-sm-12 col-md-3 d-flex justify-content-center">
            <img
              className="portrait rounded-circle"
              src="53490573.jpeg"
              alt="portrait"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
