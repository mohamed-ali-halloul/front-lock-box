import React, {useEffect} from 'react';

import { Link } from "react-router-dom";



  
  export default function Home (){
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
 

    useEffect(() => {
      console.log(localStorage.getItem("token"));
      },[]);
    
  
   return (<div>fvcvsdv</div>
  /*<> 
   <div>
       
       <AppBar position="static" color="primary" >
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
             Box
            </Typography>
            </Toolbar>
            </AppBar>    
              </div>
 
       </>
    
       <List
       sx={{ width: '100%', maxWidth: 250, bgcolor: "#7ba3a6" }}
       component="nav"
       aria-labelledby="lockbox-list-subheader"
       subheader={
         <ListSubheader component="div" id="lockbox-list-subheader">
           Lock Box Menu
           </ListSubheader>
       }
     >
      
       <ListItemButton onClick={handleClick}>
         <ListItemIcon>
         <DraftsIcon />

         </ListItemIcon>
         <ListItemText primary="Box" />
         {open ? <ExpandLess /> : <ExpandMore />}
       </ListItemButton>
       <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
           <ListItemButton sx={{ pl: 4 }}>
            <Link to="/createbox"> 
             <ListItemText primary="Create Box" />
             </Link>
           </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Read Boxes"/>

          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Update Box"/>

          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Delete Box"/>
        </ListItemButton>
        

         </List>
         
       </Collapse>

       <ListItemButton onClick={handleClick}>
         <ListItemIcon>
         <DraftsIcon />
        </ListItemIcon> 
       <ListItemText primary="Cabine" />
         {open ? <ExpandLess /> : <ExpandMore />}
       </ListItemButton>
       <Collapse in={open} timeout="auto" unmountOnExit>
         <List component="div" disablePadding>
           <ListItemButton sx={{ pl: 4 }}>
            <Link to="/createcabine"> 
             <ListItemText primary="Create Cabine" />
             </Link>
           </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Read Cabines"/>

          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Update Cabine"/>

          </ListItemButton>
          <ListItemButton sx={{pl: 4}}>
        <ListItemText primary="Delete Cabine"/>
        </ListItemButton>
        

         </List>
         
       </Collapse>
     </List>)
      */
   )};
    
