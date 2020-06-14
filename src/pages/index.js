import React from "react"
import laptop from "../assets/images/laptop.jpg"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default class App extends React.Component {
  render() {
    return (
      <div className="bg-primary flex flex-col h-full w-full">
        <Navbar />
        <div className="container mx-auto flex flex-1 flex-col justify-center p-5 md:p-0">
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
          <img
            className="hidden absolute opacity-10 right-0 top-2 w-6/12 lg:block"
            src={laptop}
            alt="hands-on-laptop"
          />
        </div>
        <Footer />
      </div>
    )
  }
}
