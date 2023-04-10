// import React, { useState } from 'react'
// import Typography  from "@mui/material/Typography";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button'
// import { useForm, ValidationError } from '@formspree/react';



// const ContactForm = () => {
//     const [contactInfo, setContactInfo] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: ""
//     })
//     const [formResponseMessage, setformResponseMessage] = useState("")

//     const handleChange = e => {
//         setContactInfo({
//         ...contactInfo,
//         [e.target.name]: e.target.value,
//         })
//     }
//     const handleSubmit = event => {
//         event.preventDefault()
//         sendEmail()
//         if (contactInfo.message.length <= 10){
//             setformResponseMessage("please enter in a valid message")
//         } else {
//             setformResponseMessage("Form submitted successfully");
//             setContactInfo({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 message: ""
//             })
//         }
//     }
//     const sendEmail = () => {
//         Axios.post(
//         'https://us-central1-zee-portfolio-9e5c5.cloudfunctions.net/submit',
//         contactInfo
//         )
//         .then(res => {
//             db.collection('emails').add({
//             firstName: contactInfo.firstName,
//             lastName: contactInfo.lastName,
//             email: contactInfo.email,
//             message: contactInfo.message,
//             time: new Date(),
//             })
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }

//     return (
//         <section style={{marginBottom:25}}>
//             <Typography variant="h3" style={{marginTop:25}}>Contact Form</Typography>
//             <Card style={{ maxWidth:450, margin:"0 auto", padding:"20px 5px" }} >
//                 <CardContent>
//                     <Typography gutterBottom ></Typography>
//                     <form onSubmit={handleSubmit}>
//                         <Grid container spacing={1}>
//                             <Grid xs={12} sm={6} item>
//                                 <TextField
//                                     label='First Name'
//                                     placeholder='Enter your first name'
//                                     variant="outlined"
//                                     fullWidth
//                                     required
//                                     name="firstName"
//                                     value={contactInfo.firstName}
//                                     onChange={handleChange}
//                                 />
//                             </Grid>
//                             <Grid xs={12} sm={6} item>
//                                 <TextField
//                                     label='Last Name'
//                                     placeholder='Enter your last name'
//                                     variant="outlined"
//                                     fullWidth
//                                     required
//                                     name="lastName"
//                                     value={contactInfo.lastName}
//                                     onChange={handleChange}
//                                 />
//                             </Grid>
//                             <Grid xs={12} item>
//                                 <TextField
//                                     label='Email'
//                                     type='email'
//                                     placeholder='Enter your email address'
//                                     variant="outlined"
//                                     fullWidth
//                                     required
//                                     name="email"
//                                     value={contactInfo.email}
//                                     onChange={handleChange}
//                                 />
//                             </Grid>
//                             <Grid xs={12} item>
//                                 <TextField
//                                     label='Message'
//                                     placeholder='Type your message here'
//                                     variant="outlined"
//                                     fullWidth
//                                     required
//                                     name="message"
//                                     value={contactInfo.message}
//                                     onChange={handleChange}
//                                     multiline
//                                     rows={4}
//                                 />
//                             </Grid>
//                             <Grid xs={12} item>
//                                 <Typography gutterBottom variant="body2" component="p" color="red">{formResponseMessage}</Typography>
//                             </Grid>
//                             <Grid xs={12} item>
//                                 <Button variant="contained" sx={{backgroundColor:"var(--primary-color-5)", ":hover": {backgroundColor: "var(--secondary-color)"}}} fullWidth type="submit" >
//                                     Submit
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </CardContent>
//             </Card>
//         </section>
//     )
// }

// export default ContactForm;



import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mayzledn");

  if (state.succeeded) {
    return (
      <section style={{marginBottom:25}}>
        <Typography variant="h3" style={{marginTop:25}}>Thanks for contacting us!</Typography>
      </section>
    );
  }

  return (
    <section style={{marginBottom:25}}>
      <Typography variant="h3" style={{marginTop:25}}>Contact Us</Typography>
      <Card style={{ maxWidth:450, margin:"0 auto", padding:"20px 5px" }} >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid xs={12} item>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </Grid>
              <Grid xs={12} item>
                <Button 
                  variant="contained" 
                  sx={{
                    backgroundColor:"var(--primary-color-5)",
                    ":hover": {backgroundColor: "var(--secondary-color)"}
                  }} 
                  fullWidth 
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default ContactForm;

