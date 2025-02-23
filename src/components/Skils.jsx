import * as React from 'react';
import { Box, Typography } from '@mui/material';

import html from '../assets/slikIMG/html.png';
import css from '../assets/slikIMG/css.png';
import axios from '../assets/slikIMG/Axios (2).png';
import express from '../assets/slikIMG/express.png';
import github from '../assets/slikIMG/github.png';
import intellij from '../assets/slikIMG/intellij.png';
import javascript from '../assets/slikIMG/javascript-logo.png';
import java from '../assets/slikIMG/java.png';

import react from '../assets/slikIMG/react.png';
import mongodb from '../assets/slikIMG/mongo-db.png';
import MUI from '../assets/slikIMG/MUI.png';
import mysql from '../assets/slikIMG/mysql.png';
import nodejs from '../assets/slikIMG/nodejs.png';
import reactnative from '../assets/slikIMG/react-native.png';
import springboot from '../assets/slikIMG/spring-boot.png';

import vscode from '../assets/slikIMG/vs-code.png';

// Define skill icons array
const skilIcons = [
    { src: html, alt: 'html', skil: 'HTML' },
    { src: css, alt: 'css', skil: 'CSS' },
    { src: javascript, alt: 'javascript', skil: 'JavaScript' },
    { src: java, alt: 'Java', skil: 'Java' },
    { src: springboot, alt: 'springboot', skil: 'Spring Boot' },
    { src: reactnative, alt: 'reactnative', skil: 'React Native' },
    { src: react, alt: 'react', skil: 'React' },
    { src: express, alt: 'express', skil: 'Express.js' },
    { src: nodejs, alt: 'nodejs', skil: 'Node.js' },
    { src: mysql, alt: 'mysql', skil: 'MySQL' },
    { src: mongodb, alt: 'mongodb', skil: 'MongoDB' },
    { src: axios, alt: 'axios', skil: 'Axios' },
    { src: github, alt: 'github', skil: 'GitHub' },
    { src: intellij, alt: 'intellij', skil: 'IntelliJ' },
    { src: vscode, alt: 'vscode', skil: 'VS Code' },
    { src: MUI, alt: 'MUI', skil: 'Material UI' },
];

export default function Skils() {
    return (
        <Box
            sx={{
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: 3,
                borderRadius:3
            }}
        >
            {/* Header */}
            <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 3, backgroundColor: 'red', py: 1 }}>
                <Typography sx={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Skills
                </Typography>
            </Box>

            {/* Icons Grid */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr 1fr',
                        sm: '1fr 1fr ',
                        md: '1fr 1fr 1fr 1fr ',
                        lg: '1fr 1fr 1fr 1fr 1fr 1fr ',
                    },
                    gap: 3,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minWidth: '100%',
                }}
            >
                {skilIcons.map((val, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 120,
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Image Box with Hover Animation */}
                        <Box
                            sx={{
                                width: 100,
                                height: 'auto',
                                boxShadow: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 1,
                                padding: 1,
                                backgroundColor: 'white',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    boxShadow: '0px 5px 15px rgba(255, 255, 255, 0.5)',
                                },
                            }}
                        >
                            <img src={val.src} alt={val.alt} style={{ width: '65%', height: '65%' }} />
                        </Box>

                        {/* Skill Name */}
                        <Typography sx={{ marginTop: 1, fontSize: '0.9rem', fontWeight: 'bold', color: '#fff' }}>
                            {val.skil}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
