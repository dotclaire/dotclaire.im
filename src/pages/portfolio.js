import { Footer } from "..//components/Footer"
import { Navbar } from "../components/Navbar"
import React from "react"

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="bg-grey">
        <Navbar />
        <div className="container mx-auto max-w-container p-4 md:py-10 md:p-0">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col flex-1 mt-5 md:mr-5 md:mt-0">
              Image
            </div>
            <div className="flex flex-col flex-1 items-start md:w-64 md:ml-5">
              <h2 className="text-2xl text-black-text">Overground App</h2>
              <hr className="block h-line bg-secondary w-32" />
              <p className="text-grey-text text-xl py-5 text-justify">
                This is a mobile app built with React Native using Expo
                framework. The app uses the Transport for London (TFL) API to
                get the overground arrivals data.
              </p>
              <h3 className="pb-3 text-xl text-black-text">Technology</h3>
              <ul className="flex flex-row text-grey-text text-xl text-justify">
                <li>React Native</li>
                <li className="ml-4">Expo</li>
                <li className="ml-4">TFL API</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between pt-8 md:flex-row">
            <div className="flex flex-col flex-1 mt-5 md:mr-5 md:mt-0">
              Image
            </div>
            <div className="flex flex-col flex-1 items-start md:w-64 md:ml-5">
              <h2 className="text-2xl text-black-text">HEX to RGB Converter</h2>
              <hr className="block h-line bg-secondary w-32" />
              <p className="text-grey-text text-xl py-5 text-justify">
                This is a web app built with Create React App using Bootstrap.
                The app accepts only valid HEX codes and converts them to the
                equivalent RGB values. There is also copy to clipboard button,
                and a demo button which converts Red, Green and Blue to RGB
                values.
              </p>
              <h3 className="py-3 text-xl text-black-text">Technology</h3>
              <ul className="flex flex-row text-grey-text text-xl text-justify">
                <li>React</li>
                <li className="ml-4">Bootstrap</li>
                <li className="ml-4">Local Storage</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between pt-8 md:flex-row">
            <div className="flex flex-col flex-1 mt-5 md:mr-5 md:mt-0">
              Image
            </div>
            <div className="flex flex-col flex-1 items-start md:w-64 md:ml-5">
              <h2 className="text-2xl text-black-text">Gatsby Portfolio</h2>
              <hr className="block h-line bg-secondary w-32" />
              <p className="text-grey-text text-xl py-5 text-justify">
                My portfolio website is built with Gatsby and Tailwind CSS. The
                purpose of this website is to showcase my experience and my side
                projects. I also used Netlify to deploy it.
              </p>
              <h3 className="py-3 text-xl text-black-text">Technology</h3>
              <ul className="flex flex-row text-grey-text text-xl text-justify">
                <li>Gastby</li>
                <li className="ml-4">Tailwind CSS</li>
                <li className="ml-4">Netlify</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
