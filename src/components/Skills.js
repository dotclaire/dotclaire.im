import React from "react"
import { JavascriptIcon } from "../icons/JavascriptIcon"
import { HtmlIcon } from "../icons/HtmlIcon"
import { CssIcon } from "../icons/CssIcon"
import { ReactIcon } from "../icons/ReactIcon"
import { BootstrapIcon } from "../icons/BootstrapIcon"
import { WebpackIcon } from "../icons/WebpackIcon"
import { GatsbyIcon } from "../icons/GatsbyIcon"
import { JestIcon } from "../icons/JestIcon"
import { GitIcon } from "../icons/GitIcon"
import { TypescriptIcon } from "../icons/TypescriptIcon"
import { MachineLearningIcon } from "../icons/MachineLearningIcon"
import { RIcon } from "../icons/RIcon"
import { PythonIcon } from "../icons/PythonIcon"
import { SqlIcon } from "../icons/SqlIcon"

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
            <ul className="row p-2 d-flex justify-content-center">
              <div className="col-5">
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
              </div>
              <div className="col-4">
                <li>
                  <span>
                    <WebpackIcon />
                  </span>
                  Webpack
                </li>
                <li className="ml-2">
                  <span>
                    <GatsbyIcon />
                  </span>
                  Gatsby
                </li>
                <li>
                  <span>
                    <JestIcon />
                  </span>
                  Jest
                </li>
                <li>
                  <span>
                    <GitIcon />
                  </span>
                  Git
                </li>
                <li className="ml-1">
                  <span>
                    <TypescriptIcon />
                  </span>
                  Typescript
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-5 row d-flex justify-content-center">
          <h2>Data Analysis Skills</h2>
        </div>
        <hr />
        <div className="row d-flex justify-content-center">
          <div className="col-7 mt-4 web-skills">
            <ul className="row p-2 d-flex justify-content-center">
              <div className="col-9">
                <li>
                  <span>
                    <MachineLearningIcon />
                  </span>
                  Machine Learning Algorithms
                </li>
                <li>
                  <span>
                    <RIcon />
                  </span>
                  R Programming Language
                </li>
                <li>
                  <span>
                    <PythonIcon />
                  </span>
                  Python
                </li>
                <li>
                  <span>
                    <SqlIcon />
                  </span>
                  MySQL
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
