import React from "react";
import { Fade } from "react-awesome-reveal";
import './About.css'
import { useState, useEffect } from "react";


const About = () => {
    const [data, setData] = useState(null)

    const updateQuote = async () => {
        try {
            const resp = await fetch("https://api.quotable.io/random")
            const {statusCode, satusMessage, ...data} = await resp.json()
            if (!resp.ok) throw new Error(`${statusCode}, ${satusMessage}`)
            setData(data)
        } catch (e) {
            console.error(e)
            setData({content: "Oops... Something went wrong!"})
        }
    }

    useEffect(() => {
        updateQuote()
    }, [])

  
    if (!data) return null

    return (
        <section id="aboutMe">
            <Fade bottom delay={200} cascade distance={"60%"}>
                <div id="aboutMe-box">
                    <div id="aboutMe-Img">
                        <img src={require("../../assets/zee.jpg")} alt="headshot of zee mudia"/>
                    </div>
                    <div id="aboutMe-text">
                        <div id="aboutMe-title">
                            <h2>About Me.</h2>
                        </div>
                        <div id="aboutMe-body">
                            <p>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey, my name is Zee Mudia. I am a Software Engineer and  a student of the EDx/Trilogy Bootcamp. I have also acquired certifications from the Meta's fullstack developer specialization hosted on Coursera. Prior to switching to Software Engineering, I had a ten years career as a dentist. However, in 2022, I decided to pursue my passion and interests in software development.
                            </p>
                            <p>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My approach to life is to enjoy every moment, mind the little things while striving to do big things. I am a hardworking, tenacious, teamplayer who always strives to be better by being open to learning new things.
                            </p>
                        </div>
                        <div id="aboutMe-quote" className="quote-animation">
                            <blockquote>
                                <p>{data.content}</p>
                                {data.author && (
                                    <small>
                                        <cite title="Source Title">{data.author}</cite>
                                    </small>
                                )}
                            </blockquote>
                            <button className="GetInTouch-Btn" onClick={updateQuote}>Get New Quote</button>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}


export default About;