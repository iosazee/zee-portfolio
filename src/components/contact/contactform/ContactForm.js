import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ContactForm() {
    // eslint-disable-next-line
    const [state, handleSubmit] = useForm("https://formspree.io/f/mayzledn");
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    // eslint-disable-next-line
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        try {
            await fetch('https://formspree.io/f/mayzledn', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'formspree-client': 'id'
                },
                body: formData
            });
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    if (state.succeeded || submitSuccess) {
        return (
            <section style={{ marginBottom: 25 }}>
                <Card style={{maxWidth: 650, margin: "0 auto", padding: "20px 5px"}} >
                <Typography variant="h3" style={{ marginTop: 25 }}>Thanks for contacting me!</Typography>
                <Typography variant='h3' style={{marginTop: 25}} >I will get back to you as soon as possible.</Typography>
                </Card>

            </section>
        );
    }

    return (
        <section style={{ marginBottom: 25 }}>
            <Typography variant="h3" style={{ marginTop: 25 }}>Contact Me</Typography>
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <CardContent>
                    <form onSubmit={submitForm} onReset={handleReset}>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formValues.firstName}
                                    onChange={handleChange}
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
                                    value={formValues.lastName}
                                    onChange={handleChange}
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
                                    value={formValues.email}
                                    onChange={handleChange}
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
                                    maxRows={5}
                                    minRows={5}
                                    value={formValues.message}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "var(--primary-color-5)",
                                        ":hover": { backgroundColor: "var(--secondary-color)" }
                                    }}
                                    fullWidth
                                    type="submit"
                                    disabled={state.submitting} >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </section>
    )
}
export default ContactForm;


