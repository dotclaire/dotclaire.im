import React from "react"
import { Navbar } from "../components/Navbar"
import { Footer } from "..//components/Footer"

export default class About extends React.Component {
  render() {
    return (
      <div className="bg-grey">
        <Navbar />
        <div className="container mx-auto py-10">
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col justify-start max-w-xl">
              <p className="text-2xl">
                My name is Charikleia Charalampidou, but people call me Claire!
                I am a Front End Developer with passion for responsive web
                design and a firm believer in the mobile first approach. I love
                getting my hands on new technologies and building contemporary
                projects.
              </p>
              <p className="text-grey-text text-xl py-5">
                Before I got into software, I did my undergraduate studies in
                Mathematics and got my Master's degree in Data Analytics. While
                studying full time, I was growing my skills as a developer.
              </p>
            </div>
            <img
              className="rounded-full w-3/12"
              src="https://avatars3.githubusercontent.com/u/53490573?v=4"
            />
          </div>
          <div className="flex flex-row justify-evenly py-5">
            <div className="max-w-xl">
              <h2 className="text-2xl">Education</h2>
              <hr className="block h-line bg-secondary w-32" />
              <h3 className="pt-4 text-xl">
                Masters of Science in Data Analytics (September 2018 - October
                2019)
              </h3>
              <h2 className="pb-4">
                University of Brighton, United Kingdom
                <br />
                School of Computing, Engineering and Mathematics
              </h2>
              <p className="text-grey-text text-xl">
                The MSc course in Data Analytics covered three main areas; Data
                Management, Data Interpretation and Project Management. I had
                the opportunity to attend modules such as Data Management (in
                Microsoft SQL Server), Data Visualisation and Analysis (in R),
                Programming for Analytics (in R & SAS), Business Analytics
                Strategy and Practice, Medical Statistics (in R), Data Mining
                and Knowledge Discovery in Data (in Python & SPSS Modeler), Risk
                Analysis and Retail Finance (in R & SAS). My Thesis topic is
                related with predicting Employee Attrition using classification
                algorithms, implementing them in RStudio.
              </p>

              <h3 className="pt-4 text-xl">
                Bachelors of Science in Mathematics (September 2011 - June 2017)
              </h3>
              <h2 className="pb-4">
                Aristotle University of Thessaloniki, Greece <br />
                Faculty of Physics and Mathematics
              </h2>
              <p className="text-grey-text text-xl">
                My BSc studies in Mathematics included modules related with five
                different departments of mathematics. Algebra Number Theory and
                Mathematical Logic, Geometry, Statistics and Operational
                Research Department, Mathematical Analysis, and Section of
                Computer Science and Numerical Analysis.
              </p>
            </div>
            <div className="w-3/12">
              <h2 className="text-2xl">Skills</h2>
              <hr className="block h-line bg-secondary w-32" />
              <ul className="pt-3">
                <li className="text-grey-text text-xl mb-0">React</li>
                <li className="text-grey-text text-xl mb-0">React Native</li>
                <li className="text-grey-text text-xl mb-0">Redux</li>
                <li className="text-grey-text text-xl mb-0">Typescript</li>
                <li className="text-grey-text text-xl mb-0">Gatsby</li>
                <li className="text-grey-text text-xl mb-0">Next</li>
                <li className="text-grey-text text-xl mb-0">GraphQL</li>
                <li className="text-grey-text text-xl mb-0">CircleCI</li>
                <li className="text-grey-text text-xl mb-0">Node</li>
                <li className="text-grey-text text-xl mb-0">Jest</li>
                <li className="text-grey-text text-xl mb-0">Wordpress</li>
                <li className="text-grey-text text-xl mb-0">Storybook</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
