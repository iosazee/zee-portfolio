import React, { useState } from 'react'
import { Axios, db } from '../../../firebase/firebaseConfig'
import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [formSubmitMessage, setFormSubmitMessage] = useState("")

    const updateInput = e => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        if (formData.message.length <= 10){
            setFormSubmitMessage("please enter in a valid message")
        } else {
            setFormSubmitMessage("Form submitted successfully");
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        }
       
    }
    const sendEmail = () => {
        Axios.post(
        'https://us-central1-zee-portfolio-9e5c5.cloudfunctions.net/submit',
        formData
        )
        .then(res => {
            db.collection('emails').add({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date(),
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <section id='contactForm'>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor='name' >Your Name <sup>*</sup></label>
                    </div>
                    <div className='col-75'>
                        <input
                            type="text"
                            name="name"
                            id='name'
                            placeholder="Name"
                            onChange={updateInput}
                            value={formData.name || ''}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor='email'>Your Email <sup>*</sup></label>
                    </div>
                    <div className='col-75'>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            placeholder="Email"
                            onChange={updateInput}
                            value={formData.email || ''}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor='message'>Message Me <sup>*</sup></label>
                    </div>
                    <div className='col-75'>
                        <textarea
                            type="text"
                            name="message"
                            id='message'
                            placeholder="Message"
                            onChange={updateInput}
                            rows={10}
                            value={formData.message || ''}
                        ></textarea>
                    </div>
                </div>
                <div className='row' id='btnBox'>
                    <p className='red'>{formSubmitMessage}</p>
                    <button type="submit" className='submitBtn'>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;
