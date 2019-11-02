import React from "react"
import { Logo } from "../icons/Logo"

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div>
            <a className="navbar-brand" href="/">
              <Logo className="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="nav-menu" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-flex justify-content-end">
              <li className="nav-item active">
                <a className="nav-link font-weight-bold h5" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-weight-bold h5" href="#">
                  About Me
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link font-weight-bold h5" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link font-weight-bold h5" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
