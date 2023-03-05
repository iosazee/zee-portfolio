import projects from "../../assets/projects.json"
import './More.css'
import MoreCard from "../morecard/MoreCard"


const More = () => {
    return (
        <section id="moreBox">
            <div id="moreStack">
                {
                    projects.filter(item => {
                        return !item.isFeatured ? item : null
                    }).map(item => {
                        return (
                            <MoreCard
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                gitLink={item.gitLink}
                                liveLink={item.liveLink}
                                stack={item.techStack}
                             />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default More;