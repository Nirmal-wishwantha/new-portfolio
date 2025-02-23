import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export default function Projects() {
    const projects = [
        {
            Topic: 'Project 1',
            Description: 'This is a description of Project 1.',
            linkTO: 'https://example.com/project1',
            imagePath: 'https://via.placeholder.com/150'
        },
        {
            Topic: 'Project 2',
            Description: 'This is a description of Project 2.',
            linkTO: 'https://example.com/project2',
            imagePath: 'https://via.placeholder.com/150'
        },
        {
            Topic: 'Project 3',
            Description: 'This is a description of Project 3.',
            linkTO: 'https://example.com/project3',
            imagePath: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:10,marginBottom:10,  backgroundColor:'rgba(255, 255, 255, 0.1)'
        ,padding:3,borderRadius:3}}>
            
            {/* Header */}
            <Box sx={{ width: '100%', textAlign: 'center', my: 4, backgroundColor: 'red', py: 1 }}>
                <Typography sx={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Projects
                </Typography>
            </Box>

            {/* Projects Grid */}
            <Box 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                    gap: 3,
                    width: '100%',
                    // maxWidth: '1000px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {projects.map((val, index) => (
                    <Box 
                        key={index} 
                        sx={{ 
                            backgroundColor: 'lightgray', 
                            padding: 3, 
                            borderRadius: 2, 
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{val.Topic}</Typography>

                        <Typography sx={{ fontSize: '0.9rem', marginBottom: 2 }}>{val.Description}</Typography>

                        <Box sx={{ mb: 2 }}>
                            <img 
                                src={val.imagePath} 
                                alt={val.Topic} 
                                style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '10px' }}
                            />
                        </Box>

                        <Button 
                            variant="contained" 
                            color="primary" 
                            href={val.linkTO} 
                            target="_blank"
                            sx={{ textTransform: 'none' }}
                        >
                            View Code
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
