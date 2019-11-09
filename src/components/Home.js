import React from "react"

export const Home = () => {
  return (
    <section id="home" className="bg-light d-flex flex-fill py-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="col d-flex flex-column justify-content-center">
            <h1 className="heading text-center">Hello, I'm Claire.</h1>
            <h2 className="text-center">
              Junior Developer &#64; <br />
              <a
                className="company-name"
                href="https://signal-noise.co.uk"
                target="_blank"
              >
                Signal Noise, part of the Economist Group
              </a>
              .
            </h2>
          </div>
          <div className="col-5 d-flex justify-content-center">
            <img
              className="rounded-circle w-50"
              src="53490573.jpeg"
              alt="portrait"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
