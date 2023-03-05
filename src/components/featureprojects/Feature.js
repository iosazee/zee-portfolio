import projects from "../../assets/projects.json"
import './Feature.css'
import FeatureCard from "../featurecard/FeatureCard"

const Feature = () => {
    return (
        <section className="featureBox">
           {
            projects.filter(item => {
                return  item.isFeatured ? item : null
            }).map(item => {
                return(
                    <FeatureCard
                    key={item.id}
                    img = {item.img}
                    title = {item.title}
                    desc = {item.desc}
                    stack = {item.techStack.map((elm, index) => <span id="tsp"key={index} >{elm}</span>)}
                    gitLink = {item.gitLink}
                    liveLink = {item.link}
                />
                )
            })
           }
        </section>
    )
}

export default Feature;