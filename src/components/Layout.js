import React, { useContext } from "react"

import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import PropTypes from "prop-types"
import { ThemeContext } from "../context/themeContext"
import Toggle from "react-toggle"

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const toggle = (
    <Toggle
      id="theme-toggle"
      checked={theme === "light" ? true : false}
      onChange={handleThemeToggle}
    />
  )

  return (
    <div
      className={`${
        theme === "light" ? "theme-light" : "theme-dark"
      } bg-primary flex flex-col h-full w-full`}
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
