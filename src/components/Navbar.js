import React from "react"
import { Logo } from "../icons/Logo"
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <nav className="container mx-auto flex flex-col items-center justify-between flex-wrap p-6 md:flex-row md:p-0 md:py-6">
      <Logo />
      <div className="flex-grow flex lg:items-center w-auto">
        <div className="flex-grow"></div>
        <div>
          <Link
            to="/"
            className="mt-2 text-base md:text-lg inline-block mt-0 text-white hover:text-secondary-dark mr-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mt-2 text-base md:text-lg inline-block mt-0 text-white hover:text-secondary-dark mr-4"
          >
            About
          </Link>
          <Link
            to="portfolio"
            className="mt-2 text-base md:text-lg inline-block mt-0 text-white hover:text-secondary-dark mr-4"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  )
}
