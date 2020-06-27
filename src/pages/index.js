import { Footer } from "../components/Footer"
import Layout from "../components/Layout"
import { Navbar } from "../components/Navbar"
import React from "react"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="bg-primary flex flex-col h-full w-full">
          {/* <Navbar isDark /> */}
          <div className="container mx-auto max-w-container flex flex-1 flex-col justify-center p-5 md:p-0">
            <div>
              <h1 className="text-5xl text-white">
                Hello, I'm <span className="text-secondary">Claire</span>.
              </h1>
              <h2 className="text-3xl text-white">
                Junior Developer &#64;
                <a
                  className="text-3xl text-white hover:text-signalNoise underline pl-2"
                  href="https://signal-noise.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Signal Noise
                </a>
                , part of
                <a
                  className="text-3xl text-white hover:text-teg underline pl-2"
                  href="https://www.economistgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Economist Group
                </a>
                .
              </h2>
            </div>
          </div>
          {/* <Footer isDark /> */}
        </div>
      </Layout>
    )
  }
}
