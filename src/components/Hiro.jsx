import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import hiroIMG1 from '../assets/hiroIMG1.jpg';

export default function Hiro() {
    return (
        <div>
            <Box 
                sx={{ 
                    width: '100%', 
                    height: '90vh', // Adjusted height
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Background Image */}
                <img 
                    src={hiroIMG1} 
                    alt="Hero Image" 
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} 
                />
                
                {/* Animated Text */}
                <Box 
                    sx={{ 
                        position: 'absolute',
                        textAlign: 'center'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} // Continuous animation
                    >
                        <Typography 
                            sx={{ 
                                color: 'white',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)'
                            }}
                        >
                            Hello, I'm Nirmal Wishwantha
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatType: "reverse" }} // Continuous animation
                    >
                        <Typography 
                            sx={{ 
                                color: 'white',
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)'
                            }}
                        >
                            Web Developer
                        </Typography>
                    </motion.div>
                </Box>
            </Box>
        </div>
    );
}
