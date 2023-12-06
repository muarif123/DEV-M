import React from "react";
// import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Playlist from "./playlist";
import { Grid } from "@mui/material";
import { Image } from 'antd';


const drawerWidth = 190;
const drawerHeight = 1200;


function Content(props){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
          <Toolbar />
         
          <List>
           
              <ListItem sx={{transform:'rotate(270deg)',marginTop:'400px'}}>
                <ListItemButton style={{}}>
                 <ListItemText >
                    <h1 className="ff" style={{fontSize:'150px',color:'#1db954',letterSpacing:'10px',fontFamily: 'Vina Sans'}}>

                    SOUNDMAX
                    </h1>

                 </ListItemText>
                 
                </ListItemButton>
              </ListItem>
      
          </List>
          <Divider />
       
        </div>
      );
    
      // Remove this const when copying and pasting into your project.
      const container = window !== undefined ? () => window().document.body : undefined;
    
    return(
        <>
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            backgroundColor:'rgb(37,37,37)',
            
            
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{justifyContent:'end'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, }}
          >
            <MenuIcon style={{color:'white'}} />
          </IconButton>
             <Image
    width={50}
    style={{borderRadius:'50%'}}
    
    src='https://scontent.flhe16-1.fna.fbcdn.net/v/t39.30808-1/295376978_725011245471356_8901132253121982371_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGQym99PjhtSHDr7fGMrZlTfgnxw_juzZl-CfHD-O7NmW84eDDRJ0PzjZS3FoT400lGRKGEKvioFLC4MUlfL0Ou&_nc_ohc=jT6svOL8iC4AX8xJVe_&_nc_ht=scontent.flhe16-1.fna&oh=00_AfAmXjC6xnYFxjEYcIVgq8KEL2tZccCdMukp26W4ROdh1A&oe=655EF81B'
  />
          <Typography variant="h6" noWrap component="div">
          
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } ,}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'rgb(37,37,37)' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,height:drawerHeight,backgroundColor:'rgb(37,37,37)' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`,backgroundColor:'rgb(47,47,47)' } }}
      >
       <Grid container>

        <Playlist/>
       </Grid>
      </Box>
    </Box>
        
        </>
    )
}
Content.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
  };
export default Content