import { Link } from "gatsby"
import { Logo } from "../icons/Logo"
import React from "react"

export const Navbar = ({ isDark }) => {
  return (
    <div className={`${isDark ? "bg-none" : "bg-primary"}`}>
      <nav className="container max-w-container mx-auto flex flex-col items-center justify-between flex-wrap p-6 md:flex-row md:p-0 md:p-6">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex-grow flex justify-end lg:items-center w-auto">
          <div className="flex justify-between">
            <Link
              to="/"
              className="text-base p-4 inline-block text-white hover:text-secondary-dark md:text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base p-4 inline-block text-white hover:text-secondary-dark md:text-lg"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-base p-4 inline-block text-white hover:text-secondary-dark md:text-lg"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
