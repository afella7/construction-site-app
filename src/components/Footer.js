import React from 'react';
import './Footerstyles.css';
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>10 Engr Maduagwu Street, Off Harmony Road New Home, Phase II</p>
                            <p>Enugu East L.G.A, Enugu State</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />08033190037</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />itorche@yahoo.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>We are ITORCHE CONSTRUCTION SERVICES LIMITED. We specialize in delivering any kind of construction services. We prioritize quality and durability, and we have zero tolerance for inefficiency.</p>
                    <div className='socials'>
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;