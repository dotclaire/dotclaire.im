import React from "react"
import { Github } from "../icons/Github"
import { Linkedin } from "../icons/Linkedin"
import { Twitter } from "../icons/Twitter"

export class Footer extends React.Component {
  render() {
    return (
      <footer className="flex flex-col justify-center items-center py-5">
        <div className="flex flex-row">
          <a href="https://www.github.com/clchar" className="pr-3">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/clchar" className="pr-3">
            <Linkedin />
          </a>
          <a href="https://www.twitter.com/CCharalampidou" className="pr-3">
            <Twitter />
          </a>
        </div>
        <div className="text-white">&copy; 2019 Claire Charalampidou</div>
      </footer>
    )
  }
}
