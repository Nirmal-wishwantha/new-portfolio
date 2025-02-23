import React from 'react';
import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { hover } from 'framer-motion';

const Contact = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                borderRadius: 2,
                mt: 10,
                mb: 5,

            }}
        >




            {/* Header */}
            <Box sx={{
                width: '100%',
                textAlign: 'center',
                mb: 3,
               
                
                py: 1
            }}>
                <Typography sx={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Contact Me
                </Typography>
            </Box>




            {/* Contact Information & Form */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                    borderRadius: 2,
                    margin: 3,

                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        p: 3,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        margin: 3
                    }}
                >
                    {/* Left Side - Contact Details */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon sx={{ color: '#00b4d8', width: 50, height: 'auto' }} />
                        <Typography sx={{ color: 'white', cursor: 'pointer', fontWeight: 600 }}>
                            Email: nirmalwishwantha@gmail.com
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocalPhoneIcon sx={{ color: '#00b4d8', width: 50, height: 'auto' }} />
                        <Typography sx={{ color: 'white', fontWeight: 600 }}>Phone: 0778765269</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ color: '#00b4d8', width: 50, height: 'auto' }} />
                        <Typography sx={{ color: 'white', fontWeight: 600 }}>Address: 138/3 Baddegama, Kobeigane, Sri Lanka</Typography>
                    </Box>



                    {/* Social Media Section */}
                    <Box
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            p: 3,
                            borderRadius: 2,
                            textAlign: 'center',
                            mt: 1,


                        }}
                    >
                        <Typography sx={{ fontWeight: 600, fontSize: 20, color: '#00b4d8' }}>Connect with me</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
                            <GitHubIcon
                                sx={{
                                    width: 50,
                                    height: 'auto',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#00b4d8',
                                    },
                                }}
                            />

                            <LinkedInIcon
                                sx={{
                                    width: 50,
                                    height: 'auto',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#00b4d8',
                                    },
                                }}
                            />
                        </Box>

                    </Box>
                </Box>

                {/* Right Side - Contact Form */}
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        flex: 1,
                        p: 3,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        margin: 3

                    }}
                >
                    <Typography sx={{ color: 'white', fontSize: 25, fontWeight: 600, textAlign: 'center' }}>Send Email</Typography>

                    <TextField
                        sx={{
                            backgroundColor: '#333',
                            borderRadius: 1,
                            '& .MuiInputBase-input': {
                                color: 'white', // Text color
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white', // Label color
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'white', // Placeholder color
                            },
                        }}
                        label="Your Name"
                        fullWidth
                        placeholder="Enter your name"
                        InputLabelProps={{
                            style: { color: 'white' }, // Ensures label is white
                        }}
                    />

                    <TextField
                        sx={{
                            backgroundColor: '#333',
                            borderRadius: 1,
                            '& .MuiInputBase-input': {
                                color: 'white', // Text color
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white', // Label color
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'white', // Placeholder color
                            },
                        }}
                        label="Your Email"
                        fullWidth
                        placeholder="Enter your email"
                        InputLabelProps={{
                            style: { color: 'white' }, // Ensures label is white
                        }}
                    />


                    <Box
                        sx={{
                            width: '100%',

                            // backgroundColor: 'white',
                            borderRadius: 1
                        }}
                    >
                        <TextareaAutosize
                            minRows={4}
                            placeholder="Your Message"

                            style={{
                                width: '100%',
                                backgroundColor: '#333',
                                color: 'white',
                                fontSize: '20',
                                padding: '8px',
                                borderRadius: '4px'
                            }}
                        />
                    </Box>


                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#00b4d8', color: 'white', mt: 2 }}
                    >
                        Send Email
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
