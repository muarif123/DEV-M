// import React, { useState } from "react";
// import Datas from "./playdata";
// import { Grid } from "@mui/material";
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// function Playlist() {
//   const [state, setState] = React.useState({
//     right: false,
//     drawerContent: null,
//     selecteditem: null,
//   });

//   const toggleDrawer = (anchor, open, selecteditem) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ ...state, [anchor]: open, selecteditem: selecteditem });
//     if (open) {
//       setState({ ...state, drawerContent: generatedrawercontent(selecteditem) });

//     }
//   };
//   let generatedrawercontent = (selecteditem) => {
//     if (!selecteditem) {
//       return (null)
//     }
//     else {
//       return (

//         <div>
//           <img src={selecteditem.image} alt="" />
//           <h3>{selecteditem.name}</h3>
//           <p>{selecteditem.artist}</p>
//           <p>{selecteditem.date}</p>
//         </div>
//       )
//     }


//   }

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       {/* Your List and Divider components */}
//     </Box>
//   );

//   let [song, setsong] = useState([Datas]);

//   return (
//     <>
//       <Grid item sx={{ marginTop: '70px', color: 'whitesmoke', fontSize: '30px', padding: '0px 10px' }}>
//         Made For Muarif Tahir
//       </Grid>
//       <Grid container sx={{ justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '10px' }}>
//         <div>
//           {['right'].map((anchor) => (
//             <React.Fragment key={anchor}>
//               <button style={{ display: 'none' }} onClick={toggleDrawer(anchor, true)}>{anchor}</button>
//               <Drawer
//                 anchor="right"
//                 open={state.right}
//                 onClose={toggleDrawer('right', false)}
//               >
//                 <Box
//                   sx={{
//                     width: 250,
//                     padding: '20px',
//                   }}
//                   role="presentation"
//                   onClick={toggleDrawer('right', false)}
//                   onKeyDown={toggleDrawer('right', false)}
//                 >
//                   {state.drawerContent} {/* Display drawerContent here */}
//                 </Box>
//               </Drawer>
//             </React.Fragment>
//           ))}
//         </div>
//         {Datas.map((item, index) => {
//           return (
//             <Grid item key={index} className="flexb" sx={{ borderRadius: '10px', padding: '1px', marginTop: '40px' }}>
//               <Grid item className="hver" sx={{ width: '100%', height: '65%', borderRadius: '10px' }}>
//                 <img className="low" style={{ width: '100%', height: '100%', borderRadius: '10px' }} src={item.image} alt="" />
//                 {/* Use onClick with toggleDrawer and pass 'right' as the anchor */}

//                 <button onClick={toggleDrawer('right', true)} className="play">
//                   <i class="fa-solid fa-play"></i>
//                 </button>
//               </Grid>
//               <Grid item>
//                 <h3 style={{ color: 'white' }}>{item.name}</h3>
//                 <p style={{ color: 'silver' }}>{item.artist}</p>
//                 <p style={{ color: 'whitesmoke' }}>{item.date}</p>
//               </Grid>
//             </Grid>
//           )
//         })}
//       </Grid>
//     </>
//   )
// }

// export default Playlist;
import React, { useState } from "react";
import Datas from "./playdata";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ReactAudioPlayer from 'react-audio-player';

function Playlist() {
  const [right, setRight] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  let [newaudio,setnewaudio]=useState(new Audio())


  const toggleDrawer = (open, selectedItem) => () => {
    setRight(open);
    setSelectedItem(selectedItem);
    
  };

  const generateDrawerContent = (selectedItem) => {
    if (!selectedItem) {
      return null;
    } else {
      return (
        <div style={{borderRadius:'10px',}}>
          <img style={{borderRadius:'10px',boxShadow:'10px 10px 10px steelblue'}} src={selectedItem.image} alt="" />
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'40px'}}>
  <div style={{padding:'20px 0px'}}>

<h3 style={{ color: 'white' }}>{selectedItem.name}</h3>
  </div>
<img style={{height:'70px',width:"70px",borderRadius:'50%',border:'3px solid white'}} src={selectedItem.artimg} alt="" />
  </div>

          <p style={{ color: 'steelblue' }}>{selectedItem.artist}</p>
          <p style={{ color: 'whitesmoke' }}>{selectedItem.date}</p>
          <p style={{color:'silver'}}>{selectedItem.info}</p>
          
          <ReactAudioPlayer
          
  src={require(`${selectedItem.song}`)}
  autoPlay
  controls
  className=""
  style={{marginTop:'60px',width:'100%',margin:'auto'}}
/>

        </div>
      );
    }
  };

  return (
    <>
      <Grid item sx={{ marginTop: '70px', color: 'whitesmoke', fontSize: '30px', padding: '0px 10px' }}>
        Made For Muarif Tahir
      </Grid>
      <Grid container sx={{ justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '10px' }}>
        {Datas.map((item, index) => (
          <Grid item key={index} className="flexb" sx={{ borderRadius: '10px', padding: '1px', marginTop: '40px' }}>
            <Grid item className="hver" sx={{ width: '100%', height: '65%', borderRadius: '10px' }}>
              <img className="low" style={{ width: '100%', height: '100%', borderRadius: '10px' }} src={item.image} alt="" />
              <button onClick={toggleDrawer(true, item)} className="play">
                <i className="fa-solid fa-play"></i>
              </button>
            </Grid>
            <Grid item>
              
                <div style={{display:'flex',justifyContent:'space-between'}}>

              <h3 style={{ color: 'white' }}>{item.name}</h3>
              <img style={{height:'50px',width:"50px",borderRadius:'50%',display:'none'}} src={item.artimg} alt="" />
                </div>
               
             
              
              <h2 style={{color:'silver',display:'none'}}>{item.info}</h2>

              <p style={{ color: 'silver' }}>{item.artist}</p>
              <p style={{ color: 'whitesmoke' }}>{item.date}</p>

              {/* <audio src={item.song}></audio> */}
             
            </Grid>
          </Grid>
        ))}
        <div>
          <Drawer 
          sx={{height:'auto'}}
          
            anchor="right"
            open={right}
            onClose={toggleDrawer(false, null)}
          >
            <Box
              sx={{

                width: 300,
                height:'auto%',
                padding: '20px',
                paddingBottom:'100px',
                border:'5px solid rgb(255,253,208)',
                backgroundColor:'rgb(27,27,27)'
              }}
              role="presentation"
              onClick={toggleDrawer(false, null)}
              onKeyDown={toggleDrawer(false, null)}
            >
              {generateDrawerContent(selectedItem)}
            </Box>
          </Drawer>
        </div>
      </Grid>
    </>
  );
}

export default Playlist;

