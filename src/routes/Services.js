import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";


function Services() {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="Services" text="These are the services we render" />
            <ServiceCard />
            <Footer />
        </div>
    );
}

export default Services;