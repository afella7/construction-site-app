import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

function Contact() {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="Contact Us" text="Let us know how we can be of service" />
            <Form />
            <Footer />
        </div>
    );
}

export default Contact;