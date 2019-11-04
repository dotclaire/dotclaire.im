import React from "react"
import { JavascriptIcon } from "../icons/JavascriptIcon"
import { HtmlIcon } from "../icons/HtmlIcon"
import { CssIcon } from "../icons/CssIcon"
import { ReactIcon } from "../icons/ReactIcon"
import { BootstrapIcon } from "../icons/BootstrapIcon"

export const Skills = () => {
  return (
    <section id="skills" className="d-flex p-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1>
            <span className="hyphen">-</span>Skills
          </h1>
        </div>
        <div className="row d-flex justify-content-center">
          <h2>Web Development Skills</h2>
        </div>
        <hr />
        <div className="row d-flex justify-content-center">
          <div className="col-7 mt-4 web-skills">
            <ul className="p-2">
              <li>
                <span>
                  <JavascriptIcon />
                </span>
                JavaScript
              </li>
              <li>
                <span>
                  <HtmlIcon />
                </span>
                HTML
              </li>
              <li>
                <span className="ml-1">
                  <CssIcon />
                </span>
                CSS
              </li>
              <li>
                <span>
                  <ReactIcon />
                </span>
                React
              </li>
              <li className="ml-1">
                <span>
                  <BootstrapIcon />
                </span>
                Bootstrap
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
