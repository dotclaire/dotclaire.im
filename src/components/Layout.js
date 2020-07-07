import React, { useContext } from "react"

import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import PropTypes from "prop-types"
import { ThemeContext } from "../context/themeContext"

const Layout = ({ children, isLanding }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const toggle = (
    //   <Toggle
    //   id="theme-toggle"
    //   checked={theme === "light" ? true : false}
    //   onChange={handleThemeToggle}
    // />

    <button id="theme-toggle" onClick={handleThemeToggle}>
      <div className={theme === "dark" ? "sunToggle" : "moonToggle"}></div>
      {/* <div className="toggleAfter"></div> */}
    </button>
  )

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
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
