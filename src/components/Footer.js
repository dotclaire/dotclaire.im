import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const Footer = ({ isDark }) => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className={`${isDark ? "bg-none" : "bg-primary"}`}>
      <footer className="flex flex-col justify-center items-center py-6">
        <div className="flex flex-row">
          <a
            href="https://www.github.com/dotclaire"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-3"
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </a>
          <a
            href="https://www.linkedin.com/in/dotclaire"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-3"
          >
            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
          </a>
          <a
            href="https://www.twitter.com/dotclaireim"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-3"
          >
            <FontAwesomeIcon icon={faTwitter} fixedWidth />
          </a>
        </div>
        <div className="text-white text-sm mt-4">&copy; {year} Claire Charalampidou</div>
      </footer>
    </div>
  )
}
