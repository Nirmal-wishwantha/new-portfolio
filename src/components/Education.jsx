import React from 'react';
import Grid from '@mui/material/Grid2';
import {
  Box,
  Container,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const Education = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Adjust breakpoint as needed

  const educationItems = [
    {
      title: '(Bsc) Business Information Technology (Special)',
      institution: 'Rajarata University of Sri Lanka',
      description: 'Specialized in Software Development, Web Technologies, and Management.',
    },
    {
      title: 'Full Stack Developer Course',
      institution: 'ACPT - Academy Of Computer Programming And Training - 2024',
      description: 'Focused on HTML, CSS, JavaScript, React Js, React Native, Java, Springboot, Express Js, Mysql.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor:'rgba(255, 255, 255, 0.1);',
        color: 'white',
        marginTop: 10,
        marginBottom:10,
        paddingTop:3,
        paddingBottom:3,
        borderRadius:3
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: '#ADD8E6' }} // Light blue color
        >
          Education
        </Typography>
        <Grid container spacing={3}>
          {educationItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 2, // Padding inside the paper
                  bgcolor: '#000080', // Darker blue background
                  color: 'white',
                  height: '100%', // Ensure Paper takes full height of the Grid item
                }}
                elevation={3} // Add a subtle shadow
              >
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.institution}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
