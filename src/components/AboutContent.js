import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import Certificate from "../assets/certificateimg.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who are we?</h1>
        <p>ITORCHE Construction Services Limited is a building design and construction company, which specializes in design, construction, maintenance, and rennovation works. We have the capacity to undertake jobs from start to finish and provide an integrated services solution for our clients.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="certification">
            <h1>Certification</h1>
            <p>It was certified on the 25th day of September, 2013, that ITORCHE Construction Services LTD is incorporated under the COMPANIES AND ALLIED MATTERS ACT 1990, and that the Company is Limited By Shares.</p>
            <div className="img-cert">
                <img src={Certificate} className="img" alt="Certificate"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

