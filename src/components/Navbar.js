import React from "react"
import { Logo } from "../icons/Logo"

export const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap p-6 md:p-0 md:py-6">
      <Logo />
      <div className="flex-grow flex lg:items-center w-auto">
        <div className="flex-grow"></div>
        <div>
          <a
            href="#responsive-header"
            className="mt-2 text-base md:text-lg inline-block mt-0 text-white hover:text-tea mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="mt-2 text-base md:text-lg inline-block mt-0 text-white hover:text-tea mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="mt-2 text-base md:text-lg inline-block mt-0 text-white hover:text-tea"
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  )
}
