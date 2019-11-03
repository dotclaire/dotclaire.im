import React from "react"

export const Home = () => {
  return (
    <section id="home" className="bg-light d-flex flex-fill py-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1 className="heading">Hello, I'm Claire.</h1>
            <h2>I'm a Developer.</h2>
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
    </section>
  )
}
