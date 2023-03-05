import skills from "../../assets/skills.json";
import SkillsCard from "../skillscard/SkillsCard";
import Typography from '@mui/material/Typography';
import './Skills.css'


const Skills = () => {
    return (
        <section id="skillsBox">
            <div className="skills-title">
                <h2>Skills</h2>
            </div>
            <div id="skillsGrid">
                {
                    skills.map(skill => {
                        return (
                            <SkillsCard
                                key={skill.id}
                                title={skill.title}
                                subTitle={skill.subTitle}
                                skills={skill.skillsList.map((elm, index) => <Typography variant="body2" color="text.secondary" key={index} > {elm} </Typography>)}
                                img={skill.certifications}
                             />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Skills;