import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import {Link} from "react-router-dom";
import "./style.css"
import {hallway} from '../../Media/hallway.jpg';

const Header =()  =>{
 
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="headerBody"
      showLabels
     style={{
         marginTop:'2%',
         height:'10vh',
         
          
     }}
    >
      <BottomNavigationAction  fontSize="large"  label="Learn more" icon={<InfoIcon />} component ={Link} to={'/about'}/>
      <BottomNavigationAction color="secondary" fontSize="large" icon={<HomeIcon />}  component ={Link} to={'/'}/>
      <BottomNavigationAction fontSize="large" label="Contact us" icon={<PermContactCalendarIcon />}  component ={Link} to={'/contact'}/>
    </BottomNavigation>
  );
}


export default Header;