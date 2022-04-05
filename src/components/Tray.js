import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AiOutlineBars } from "react-icons/ai";
import classes from "./Tray.css"
import { SportsRugbySharp } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { alpha, makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';



export default function Tray() {
  const [state, setState] = React.useState({
    right: false,
  });

  // const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
     
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    
    >
      
    
      <ul>
        <li >
        <Link to="/home"><CottageOutlinedIcon className='icon'/>Home</Link>
        </li>
       
        <li>
          <Link to="/portfolio"><HandymanOutlinedIcon className='icon'/>Portfolio</Link>
          <ul>
            <li><Link to="/portfolio/spring">Spring API</Link></li>
            <li><Link to="/portfolio/tictactoe">Tic-Tac-Toe</Link></li>
            <li><Link to="/portfolio/signclassification">Sign Classification</Link></li>
            {/* <li>Interloper</li> */}
            <li><Link to="/portfolio/courseoutline">Course Outline</Link></li>
            <li><Link to="/portfolio/toolshop">Toolshop</Link></li>
          </ul>
        </li>

       

        <li>
         <Link to="/about"> <InfoOutlinedIcon className='icon'/>About</Link>
        </li>
 
        </ul>

        {/* {['Home', 'Portfolio', 'About'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      
    </Box>
  );

  return (
    <div>
    
        <React.Fragment key={"right"}>
        <AiOutlineBars className='icon' size="35px"  onClick={toggleDrawer("right", true)}/> 
          {/* <Button onClick={toggleDrawer("right", true)}>{"right"}</Button> */}
          <Drawer
            PaperProps={{sx:{
              backgroundColor: '#a0a59c',
             
              width: 'calc(200px + 5vw)'
            }}}
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}