import React from "react"
import { EducationIcon } from "../icons/EducationIcon"

export const Education = () => {
  return (
    <section id="education" className="d-flex p-5 bg-light">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <h1>
            <span className="hyphen">-</span>Education
          </h1>
        </div>

        <div className="row d-flex justify-content-center">
          <h2>University Degrees</h2>
        </div>

        <hr className="education-line" />

        <div className="row d-flex justify-content-center">
          <div className="col-1 d-flex justify-content-center align-items-center">
            <EducationIcon />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <p>
              <span className="degree-title">
                Masters of Science in Data Analytics
              </span>
              <br /> University of Brighton, United Kingdom <br />
              School of Computing, Engineering and Mathematics
              <br />
              September 2018 - October 2019
            </p>
          </div>
        </div>

        <div className="row mt-5 d-flex justify-content-center align-items-center">
          <div className="col-1 d-flex justify-content-center align-items-center">
            <EducationIcon />
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <p className="pr-5">
              <span className="degree-title">
                Bachelors of Science in Mathematics
              </span>
              <br /> Aristotle University of Thessaloniki, Greece <br />
              Faculty of Physics and Mathematics <br />
              September 2011 - June 2017
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
