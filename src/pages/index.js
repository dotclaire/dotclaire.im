import React from "react"
import { Navbar } from "../components/Navbar"
import { Home } from "../components/Home"
import { AboutMe } from "../components/AboutMe"
import { Education } from "../components/Education"
import { Skills } from "../components/Skills"
import { Footer } from "../components/Footer"
import { LandingPage } from "../components/LandingPage"

export default class App extends React.Component {
  render() {
    return (
      <div className="h-100 d-flex flex-column">
        {/* <Navbar /> */}
        <LandingPage />
        {/* <Home />
        <AboutMe />
        <Education />
        <Skills />
        <Footer /> */}
      </div>
    )
  }
}
