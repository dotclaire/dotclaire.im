import React from "react"
import { Github } from "../icons/Github"
import { Linkedin } from "../icons/Linkedin"
import { Twitter } from "../icons/Twitter"

export class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
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

          <div className="row p-4 justify-content-center">
            &copy; 2019 Claire Charalampidou
          </div>
        </div>
      </footer>
    )
  }
}
