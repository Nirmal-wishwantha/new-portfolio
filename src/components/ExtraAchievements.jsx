import { Typography, Box } from '@mui/material';
import React from 'react';

// Array of Achievements
const Achievements = [
    { achive: 'First achievement' },
    { achive: 'Second achievement' },
    { achive: 'Third achievement' },
    { achive: 'Fourth achievement' },
    { achive: 'Fifth achievement' },
    { achive: 'Sixth achievement' },
    { achive: 'Seventh achievement' },
    { achive: 'Eighth achievement' },
    { achive: 'Ninth achievement' },
    { achive: 'Tenth achievement' },
];

export default function ExtraAchievements() {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',  backgroundColor:'rgba(255, 255, 255, 0.1)'
        ,padding:3,borderRadius:3}}>
            
            {/* Header */}
            <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 3, backgroundColor: 'red'}}>
                <Typography sx={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Extra Achievements
                </Typography>
            </Box>

            {/* Achievements Grid */}
            <Box 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, 
                    gap: 2, 
                    width: '100%',
                    // maxWidth: '800px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {Achievements.map((achievement, index) => (
                    <Box 
                        key={index} 
                        sx={{ 
                            backgroundColor: 'yellow', 
                            padding: 2, 
                            borderRadius: 2, 
                            textAlign: 'center'
                        }}
                    >
                        <Typography sx={{ color: 'black' }}>{achievement.achive}</Typography>
                    </Box>
                ))}
            </Box>

        </Box>
    );
}
