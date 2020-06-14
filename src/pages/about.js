import React from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "..//components/Footer"

export default class About extends React.Component {
  render() {
    return (
      <div className="bg-grey">
        <Navbar />
        <div className="container mx-auto py-5 flex justify-between">
          <div>
            <img
              className="rounded-full"
              src="https://avatars3.githubusercontent.com/u/53490573?v=4"
            />
          </div>
          <div className="flex flex-col justify-start max-w-lg">
            <h1>About</h1>
            <p>
              My name is Charikleia Charalampidou, but people call me Claire! I
              am a Front End Developer with passion for responsive web design
              and a firm believer in the mobile first approach. I love getting
              my hands on new technologies and building contemporary projects.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
