import "./ServiceCardstyles.css";
import React from 'react'
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div className="service">
    <div className="card-container">
        <div className="card">
            <h3>- Service -</h3>
            <span className="bar"></span>
            <p>This is a description of the service we render</p>
            <Link to='/contact' className='btn'>INQUIRE</Link>
        </div>
        <div className="card">
            <h3>- Service -</h3>
            <span className="bar"></span>
            <p>This is a description of the service we render</p>
            <Link to='/contact' className='btn'>INQUIRE</Link>
        </div>
        <div className="card">
            <h3>- Service -</h3>
            <span className="bar"></span>
            <p>This is a description of the service we render</p>
            <Link to='/contact' className='btn'>INQUIRE</Link>
        </div>
    </div>
    </div>
  )
}

export default ServiceCard;
