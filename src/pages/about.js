import React from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "..//components/Footer"

export default class About extends React.Component {
  render() {
    return (
      <div className="bg-grey h-full">
        <Navbar />
        <h1>About</h1>
        <Footer />
      </div>
    )
  }
}
