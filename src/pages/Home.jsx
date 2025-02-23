import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Hiro from '../components/Hiro';
import About from '../components/About';
import Education from '../components/Education';
import Services from '../components/Services';
import ExtraAchievements from '../components/ExtraAchievements';
import Projects from '../components/Projects';
import Skils from '../components/Skils';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



const navItems = ['Home', 'About', 'Education', 'Service', 'Achivments', 'Skils', 'Project', 'Contact'];

function Home(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                fontWeight: 500,


            }}>



            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>



            <CssBaseline />

            <AppBar component="nav" sx={{
                backgroundColor: 'transparent',
                boxShadow: 10,
                margin: '5px',
                borderRadius: '20px', // Added border radius
                width: 'calc(100% - 16px)' // Adjust width to fit with margins



            }}>

                <Toolbar
                    sx={{
                        backdropFilter: 'blur(60px)',
                        // backgroundColor: 'rgba(68, 69, 69, 0.6)',
                        boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.5)',
                        borderRadius: '10px'


                    }}
                >



                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>





                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'space-around',
                            width: '95%'
                        }}
                    >
                        {navItems.map((item) => (
                            <Button key={item} sx={{
                                color: 'white', 
                                fontWeight: 700,
                                // borderRadius:2,
                                '&:hover': {
                                    backgroundColor: 'rgba(2, 0, 0, 0.77)',
                                    color: '#FFD700',

                                }
                            }}>
                                {item}
                            </Button>
                        ))}
                    </Box>






                </Toolbar>

            </AppBar>


            <nav>
                <Drawer
                    container={container}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                            height: '55%',
                            borderRadius: 5,
                            margin: 1,
                            backgroundColor: 'transparent',
                            backdropFilter: 'blur(30px)',
                            color: 'white',
                            '&:hover': {
                                    backgroundColor: 'rgba(4, 0, 0, 0.77)',
                                    color: '#FFD700',

                                }


                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>


            <Box component="main">
                <Hiro />

                <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
                    <About />

                    <Education />

                    <Services />

                    <ExtraAchievements />

                    <Projects />

                    <Skils />

                    <Contact />
                </Box>

                <Footer />



            </Box>


        </Box>


    );
}

Home.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Home;
