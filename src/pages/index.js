import React from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import laptop from "../assets/images/laptop.jpg"

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="bg-primary flex flex-col h-full w-full">
        <Navbar isDark />
        <div className="container mx-auto flex flex-1 flex-col justify-center p-5 md:p-0">
          <div>
            <h1 className="greeting text-white">
              Hello, I'm <span className="text-secondary">Claire</span>.
            </h1>
            <h2 className="job text-white">
              Junior Developer &#64;
              <a
                className="company-name text-white hover:text-signalNoise underline"
                href="https://signal-noise.co.uk"
                target="_blank"
              >
                Signal Noise
              </a>
              , part of
              <a
                className="company-name text-white hover:text-teg underline"
                href="https://signal-noise.co.uk"
                target="_blank"
              >
                The Economist Group
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
        <Footer isDark />
      </div>
    )
  }
}
