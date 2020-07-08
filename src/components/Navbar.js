import { Link } from "gatsby"
import { Logo } from "../icons/Logo"
import React from "react"

export const Navbar = ({ toggle }) => {
  return (
    <div className="bg-navbar-primary">
      <nav className="container max-w-container mx-auto flex flex-col items-center justify-between flex-wrap p-6 md:flex-row md:p-0 md:p-6">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex-grow flex justify-end lg:items-center w-auto">
          <div className="flex justify-between">
            <Link
              to="/"
              className="text-base p-4 inline-block text-navbar-text hover:text-green md:text-lg"
              activeStyle={{ color: "#26979c" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base p-4 inline-block text-navbar-text hover:text-green md:text-lg"
              activeStyle={{ color: "#26979c" }}
            >
              About
            </Link>
            <Link
              to="portfolio"
              className="text-base p-4 inline-block text-navbar-text hover:text-green md:text-lg"
              activeStyle={{ color: "#26979c" }}
            >
              Portfolio
            </Link>
          </div>
          <div className="flex items-center">{toggle}</div>
        </div>
      </nav>
    </div>
  )
}
