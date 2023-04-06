import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import '../styles/navbar.css';
import { Button, Icon, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navColor = '#344563';
const btnHoverColor = 'lightblue';
const navBtnStyle = {textTransform:'none', color:`${navColor}`,fontWeight:'500',m:'0px 1px',':hover':{backgroundColor:btnHoverColor},':focus':{backgroundColor:btnHoverColor}};
const navBtnArrowStyle = {marginLeft:'-8px', color:'gray', width:'16px'};
const iconStyle = {color:navColor,':hover':{color:'#2C53CC'}}
const navLinks = ['Your work', 'Projects', 'Filters', 'Dashboards', 'Teams', 'Apps'];

const Navbar = () => {  
  return (
    <div className='toolbar'>
        <div className='apps-icon'>
        <AppsIcon sx={iconStyle}/>
        </div>     
        <div className='nav-logo'>
            <img src='../../public/jira-logo.png'></img>
        </div>  
        {
            navLinks.map(
                (link, index) => 
                    <Button 
                    key={index} 
                    className='nav-btn' 
                    endIcon={<KeyboardArrowDownIcon sx={navBtnArrowStyle}/>} 
                    sx={navBtnStyle}>
                        {`${link}`}
                    </Button> 
            )
        }       
        <Button variant='contained' sx={{textTransform:'none',fontWeight:'bold',backgroundColor:'#2C53CC', height:'32px',width:'70px',ml:'10px'}}>Create</Button>

        <div className='right-nav'>
            <div className='search-container'>
                <SearchIcon sx={{width:'18px',color:'gray'}}/>
                <input placeholder='Search' className='nav-input'></input>
            </div>
            <NotificationsIcon className='right-icons' sx={iconStyle}/>
            <HelpIcon className='right-icons' sx={iconStyle}/>
            <SettingsIcon className='right-icons' sx={iconStyle}/>
            <AccountCircleIcon className='right-icons' sx={iconStyle}/>
        </div>
        
    </div>    
  )
}

export default Navbar