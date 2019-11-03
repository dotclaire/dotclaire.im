import React from "react"
import { Navbar } from "../components/Navbar"
import { Home } from "../components/Home"
import { AboutMe } from "../components/AboutMe"
import { Footer } from "../components/Footer"

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column home">
        <Navbar />
        <Home />
        <AboutMe />
        <Footer />
      </div>
    )
  }
}
