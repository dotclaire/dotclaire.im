import React, { useContext } from "react"

import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import PropTypes from "prop-types"
import { ThemeContext } from "../context/themeContext"

const Layout = ({ children, isLanding }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const isDark = theme === "dark"

  const toggle = (
    <button
      id="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className={isDark ? "sunToggle" : "moonToggle"}></div>
    </button>
  )

  return (
    <div
      className={`${
        isDark ? "theme-dark" : "theme-light"
      } bg-primary flex flex-col ${isLanding ? "h-full w-full" : ""}`}
    >
      <Navbar toggle={toggle} />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
