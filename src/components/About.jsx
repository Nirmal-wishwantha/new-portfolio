import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled Box for the About Me section
const AboutMeBox = styled(Box)(({ theme }) => ({
  backgroundColor:'rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

}));

// Styled Avatar with a circular border
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(18),
  height: theme.spacing(18),
  border: '4px solid #00bcd4',
}));

const About = () => {
  return (
    <Box
      sx={{
        // minHeight: '400px',
        marginTop:10,
        marginBottom:10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on larger screens
        gap: 4, // Adds spacing between items
        // p: 3,
      }}
    >
      {/* Avatar Section */}
      <StyledAvatar alt="Your Name" src="/path/to/your/image.jpg" />

      {/* About Me Text Section */}
      <AboutMeBox>
        <Typography variant="h5" component="h2" align="center" gutterBottom sx={{ color: '#00bcd4' }}>
          About Me
        </Typography>

        <Typography variant="body1">
          I am a recent graduate of Rajarata University with a BSc in Business Information Technology (Special). I
          am passionate about creating efficient software solutions and have a solid foundation in software
          development. I thrive in collaborative environments and am eager to contribute my skills and enthusiasm
          as an intern software engineer.
        </Typography>

      </AboutMeBox>
    </Box>
  );
};

export default About;
