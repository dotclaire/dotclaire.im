import { Footer } from "..//components/Footer"
import Layout from "../components/Layout"
import { Navbar } from "../components/Navbar"
import React from "react"

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <div className="bg-grey">
          {/* <Navbar /> */}
          <div className="container mx-auto max-w-container p-4 md:py-10 md:p-5">
            <div className="flex flex-col justify-around md:flex-row">
              <div className="flex flex-col justify-start mt-5 order-2 flex-1 md:mr-5 md:mt-0 md:order-1">
                <p className="text-2xl text-justify text-black-text">
                  My name is Charikleia Charalampidou, but people call me
                  Claire! I am a Front End Developer with passion for responsive
                  web design and a firm believer in the mobile first approach. I
                  love getting my hands on new technologies and building
                  contemporary projects.
                </p>
                <p className="text-grey-text text-xl py-5 text-justify">
                  Before I got into software, I did my undergraduate studies in
                  Mathematics and got my Master's degree in Data Analytics.
                  While studying full time, I was growing my skills as a
                  developer.
                </p>
              </div>
              <div className="flex flex-col items-center order-1 flex-initial md:w-64 md:ml-5 md:order-2">
                <img
                  className="rounded-full"
                  src="https://avatars3.githubusercontent.com/u/53490573?v=4"
                  alt="portrait"
                />
              </div>
            </div>
            <div className="flex flex-col justify-around py-5 md:flex-row">
              <div className="flex flex-col justify-start flex-1 md:mr-5">
                <h2 className="text-2xl text-black-text">Education</h2>
                <hr className="block h-line bg-secondary w-32" />
                <h3 className="pt-4 text-xl text-black-text">
                  Masters of Science in Data Analytics (September 2018 - October
                  2019)
                </h3>
                <h2 className="pb-4 text-black-text">
                  University of Brighton, United Kingdom
                  <br />
                  School of Computing, Engineering and Mathematics
                </h2>
                <p className="text-grey-text text-xl text-justify">
                  The MSc course in Data Analytics covered three main areas;
                  Data Management, Data Interpretation and Project Management. I
                  had the opportunity to attend modules such as Data Management
                  (in Microsoft SQL Server), Data Visualisation and Analysis (in
                  R), Programming for Analytics (in R & SAS), Business Analytics
                  Strategy and Practice, Medical Statistics (in R), Data Mining
                  and Knowledge Discovery in Data (in Python & SPSS Modeler),
                  Risk Analysis and Retail Finance (in R & SAS). My Thesis topic
                  is related to predicting Employee Attrition using
                  classification algorithms, implementing them in RStudio.
                </p>

                <h3 className="pt-4 text-xl text-black-text">
                  Bachelors of Science in Mathematics (September 2011 - June
                  2017)
                </h3>
                <h2 className="pb-4 text-black-text">
                  Aristotle University of Thessaloniki, Greece <br />
                  Faculty of Physics and Mathematics
                </h2>
                <p className="text-grey-text text-xl text-justify">
                  My BSc studies in Mathematics included modules related to five
                  different departments of mathematics. Algebra Number Theory
                  and Mathematical Logic, Geometry, Statistics and Operational
                  Research Department, Mathematical Analysis, and Section of
                  Computer Science and Numerical Analysis.
                </p>
              </div>
              <div className="flex flex-col mt-5 flex-initial md:ml-5 md:mt-0">
                <h2 className="text-2xl text-black-text">Skills</h2>
                <hr className="block h-line bg-secondary w-32" />
                <ul className="pt-3 flex flex-col justify-between flex-wrap md:block">
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
          {/* <Footer /> */}
        </div>
      </Layout>
    )
  }
}
