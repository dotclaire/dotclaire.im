import React from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default class Home extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column home">
        <Navbar />
        <div className="bg-light d-flex flex-fill">
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <h1>Hello, I'm Claire</h1>
                <h2>I'm a Developer.</h2>
              </div>
              <div className="col d-flex justify-content-center">
                <img
                  className="rounded-circle w-50"
                  src="53490573.jpeg"
                  alt="portrait"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
