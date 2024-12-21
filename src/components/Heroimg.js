import "./Herostyless.css";
import Introimg from "../assets/constructimg.jpg";
import { Link } from 'react-router-dom';



function Heroimg() {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='img-style' src={Introimg} alt='Introimg' />
            </div>
            <div className="content">
                <h1>WE ARE DESIGN AND CONSTRUCTION EXPERTS</h1>
                <div>
                <Link to='/projects' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Heroimg;
