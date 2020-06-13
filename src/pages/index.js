import React from "react"
import { Navbar } from "../components/Navbar"
import { Home } from "../components/Home"
import { AboutMe } from "../components/AboutMe"
import { Education } from "../components/Education"
import { Skills } from "../components/Skills"
import { Footer } from "../components/Footer"

export default class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <Navbar />
        <Home />
        <AboutMe />
        <Education />
        <Skills />
        <Footer />
      </div>
    )
  }
}
