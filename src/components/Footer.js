import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="bg-navbar-primary">
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
        <div className="text-navbar-text">
          &copy; {year} Claire Charalampidou
        </div>
      </footer>
    </div>
  )
}
