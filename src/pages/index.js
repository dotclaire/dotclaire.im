import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import React from "react"
import { SEO } from "../components/seo"

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="bg-primary flex flex-col h-full w-full">
        <SEO title="Claire Charalampidou, Software Engineer" />
        <Navbar isDark />
        <div className="container mx-auto max-w-container flex flex-1 flex-col justify-center p-5 md:p-5">
          <div>
            <h1 className="text-4xl text-white">
              Hello, I'm <span className="text-secondary">Claire</span>.
            </h1>
            <h2 className="text-2xl text-white">
              Software Engineer &#64;
              <a
                className="text-2xl text-white hover:text-rad underline pl-2"
                href="https://radically.digital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Radically Digital
              </a>
              .
            </h2>
          </div>
        </div>
        <Footer isDark />
      </div>
    )
  }
}
