import React, { useState } from "react";
import "./About.css";
import { Img } from "../../../assets/image/hookImg";
import { AnimatePresence, motion } from "framer-motion";
const About = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: 1, title: "Item 1", subtitle: "Subtitle 1" },
    { id: 2, title: "Item 2", subtitle: "Subtitle 2" },
    { id: 3, title: "Item 3", subtitle: "Subtitle 3" },
  ];
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 p-4">
              <img
                src={Img.homeSlide1}
                className="about__img-responsive"
                alt=""
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about__about-text">
                <h2>About Us</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>Why Choose Us?</h3>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li
                              className="about__about-text__li"
                              key={`${d}-${i}`}
                            >
                              {d}
                            </li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li
                              className="about__about-text__li"
                              key={`${d}-${i}`}
                            >
                              {" "}
                              {d}
                            </li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
