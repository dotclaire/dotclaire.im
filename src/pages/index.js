import Layout from "../components/Layout"
import React from "react"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout isLanding>
        <div className="bg-primary flex flex-col h-full w-full">
          <div className="container mx-auto max-w-container flex flex-1 flex-col justify-center p-5 md:p-6">
            <div>
              <h1 className="text-4xl text-main-text">
                Hello, I'm <span className="text-green-light">Claire</span>.
              </h1>
              <h2 className="text-2xl text-main-text">
                Junior Developer &#64;
                <a
                  className="text-2xl text-main-text hover:text-hover-signalNoise underline pl-2"
                  href="https://signal-noise.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Signal Noise
                </a>
                , part of
                <a
                  className="text-2xl text-main-text hover:text-hover-teg underline pl-2"
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
        </div>
      </Layout>
    )
  }
}
