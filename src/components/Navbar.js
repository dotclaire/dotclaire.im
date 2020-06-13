import React from "react"
import { Logo } from "../icons/Logo"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
      <div className="container">
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
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link h5 text-dark" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h5 text-dark" href="#aboutme">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h5 text-dark" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h5 text-dark" href="#skills">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
