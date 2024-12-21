import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";



function Projects() {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="PROJECTS" text="Here is some of our recent work" />
            <ProjectCard />
            <Footer />
        </div>
    );
}

export default Projects;