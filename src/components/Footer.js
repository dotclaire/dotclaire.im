import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

export class Footer extends React.Component {
  render() {
    return (
      <footer className="flex flex-col justify-center items-center py-5">
        <div className="flex flex-row">
          <a href="https://www.github.com/clchar" className="pr-3">
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </a>
          <a href="https://www.linkedin.com/in/clchar" className="pr-3">
            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
          </a>
          <a href="https://www.twitter.com/CCharalampidou" className="pr-3">
            <FontAwesomeIcon icon={faTwitter} fixedWidth />
          </a>
        </div>
        <div className="text-white">&copy; 2019 Claire Charalampidou</div>
      </footer>
    )
  }
}
