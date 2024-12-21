import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Navbar from "../components/Navbar";



function About() {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="About Us" text="We are design and contruction experts" />
            <AboutContent />
            <Footer />
        </div>
    );
}

export default About;