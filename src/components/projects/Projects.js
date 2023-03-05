import Feature from "../featureprojects/Feature";
import More from "../moreprojects/More";
import "./Projects.css"

const Projects = () => {
    return (
        <section id="projects">
            <div className="projectsHeader">
                <h2>Projects</h2>
            </div>
            <Feature />
            <More />
        </section>
    )
}

export default Projects;