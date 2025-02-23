import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

// Array of service items
const items = [
    {
        itemIcon: '🛠️', // Replace with an actual icon
        topic: 'Service 1',
        description: 'Description of service 1'
    },
    {
        itemIcon: '💻',
        topic: 'Service 2',
        description: 'Description of service 2'
    },
    {
        itemIcon: '🚀',
        topic: 'Service 3',
        description: 'Description of service 3'
    },
    {
        itemIcon: '💻',
        topic: 'Service 2',
        description: 'Description of service 2'
    },
    {
        itemIcon: '🚀',
        topic: 'Service 3',
        description: 'Description of service 3'
    },
    
    {
        itemIcon: '💻',
        topic: 'Service 2',
        description: 'Description of service 2'
    },
    {
        itemIcon: '🚀',
        topic: 'Service 3',
        description: 'Description of service 3'
    }
];

export default function Services() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: 10, marginBottom: 10, backgroundColor:'rgba(255, 255, 255, 0.1);'}}>
            {/* Services Header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, backgroundColor: 'red' }}>
                <Typography sx={{ color: 'white' }}>Services</Typography>
            </Box>

            {/* Services List */}
            <Grid container spacing={2} justifyContent="center">
                {items.map((service, index) => (
                    <Grid xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ margin: 2, padding: 2, backgroundColor: 'white', borderRadius: 2, textAlign: 'center' }}>
                            <Box sx={{ fontSize: 40 }}>{service.itemIcon}</Box>
                            <Typography variant="h6">{service.topic}</Typography>
                            <Typography>{service.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
