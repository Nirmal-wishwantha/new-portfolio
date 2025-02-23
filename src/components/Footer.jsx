import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box sx={{ 
            width: '100%', 
            textAlign: 'center', 
            // backgroundColor: 'red',
            height: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 0px 30px rgba(227, 228, 237, 0.5)', // Fixed syntax
            backdropFilter: 'blur(60px)' // Fixed syntax
        }}>
            <Typography sx={{ color: '#fff', fontSize: 15 }}>
                © 2024 Nirmal. All Rights Reserved.
            </Typography>
        </Box>
    )
}
