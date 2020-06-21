import { Footer } from "..//components/Footer"
import { Navbar } from "../components/Navbar"
import React from "react"

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="bg-grey">
        <Navbar />
        <div className="container mx-auto max-w-container p-4 md:py-10 md:p-0">
          <div className="flex flex-col justify-around md:flex-row">
            <div className="flex flex-col justify-start mt-5 flex-1 md:mr-5 md:mt-0">
              Portfolio
            </div>
            <div className="flex flex-col items-centerflex-initial md:w-64 md:ml-5">
              Description
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
