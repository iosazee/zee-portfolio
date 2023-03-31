import { LazyLoadImage } from 'react-lazy-load-image-component';
import './FeatureCard.css'


const FeatureCard = ({img, title, desc, stack, gitLink, liveLink}) => {


    return (
        <section className='feature' >
            <div className='featureImgBox'>
                <LazyLoadImage
                    src={require(`../../assets/${img}`)}
                    alt="project"
                    className='featureImg'
                 />
            </div>
            <div className='featureText'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className='techStack'>
                   Tech Stack: {stack}
                </div>
                <div className='projectLinks'>
                    <a href={gitLink} target="_blank" rel='noopener noreferrer' className='gitLink'>Github</a>
                    <a href={liveLink} target="_blank" rel='noopener noreferrer' className='liveLink'>Live Page</a>
                </div>
            </div>
        </section>
    )
}

export default FeatureCard;