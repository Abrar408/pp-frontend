import '../styles/navbar.css';
import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { Button, Icon, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrUser, setAccessToken } from '../features/UserSlice';
import { useNavigate } from 'react-router-dom';

const fontCol = '#344563';
const hoverBgCol = '#ddedff';
const fontFocusCol = '#2C53CC';

const navBtnStyle = {
    textTransform:'none',
    color:fontCol,
    fontWeight:'500',
    m:'0px 4px',
    height:'32px',
    padding: '0px 5px',
    backgroundColor: 'transparent',
    border: 'none',
    ':hover':{backgroundColor:hoverBgCol,color:fontFocusCol},
    ':focus':{backgroundColor:hoverBgCol,color:fontFocusCol}
};
const navBtnArrowStyle = {
    marginLeft:'-8px',
    width:'16px',
    ':hover':{color:fontFocusCol},
    ':focus':{color:fontFocusCol},
};
const iconStyle = {
    color:fontCol,
    width: '32px',
    height:' 32px',
    padding: '4px 4px',  
    borderRadius: '50%',
    ':hover':{backgroundColor:hoverBgCol, color:fontFocusCol},
    ':focus':{backgroundColor:hoverBgCol, color:fontFocusCol}
};
const rightIcon = {...iconStyle, m:'0px 5px'}
let navLinks = [];

const Navbar = () => {  
    const navigate = useNavigate();
    const currUser = useSelector((state)=> state.user.currUser);
    const dispatch = useDispatch();

    const showLogin = () => {
        var element = document.getElementsByClassName("animate");
        for (let el of element) {
            el.classList.remove('animate');
            el.classList.add('show');
        }
    }

    const hideBg = () => {
        var element = document.getElementById("dashboard");
        element.classList.add("hide");
    }
    const showBg = () => {
        var element = document.getElementById("dashboard");
        element.classList.remove("hide");
    }

const handleLogout = async () => {
    await axios.get('http://localhost:3000/logout/',{
        withCredentials: true,
    })
    .then(res => {
        console.log(res);
        dispatch(setCurrUser(''))
        dispatch(setAccessToken(''))
        navigate('/');
            
    })
    .catch(err => console.log(err))
}

    if(currUser.username){
        navLinks = ['Your work', 'Projects', 'Filters', 'Dashboards', 'Teams', 'Apps'];
    }
  return (
    <div className='toolbar'>
        {currUser.username ? 
        (<>
            <div>
                <AppsIcon sx={iconStyle}/>
            </div> 
            <div className='nav-logo'>
                <img src='../../jira-logo.png'></img>
            </div>
            {            
            navLinks.map((link, index) => 
                <Button key={index} sx={navBtnStyle} endIcon={<KeyboardArrowDownIcon sx={navBtnArrowStyle}/>}>
                    {link}
                </Button> 
            )
            }
            <Button variant='contained' sx={{textTransform:'none',fontWeight:'bold',backgroundColor:fontFocusCol, height:'32px',width:'70px',ml:'10px'}}>Create</Button>
            <div className='right-nav'>
                <div className='search-container'>
                    <SearchIcon sx={{width:'18px',color:'gray'}}/>
                    <input placeholder='Search' className='nav-input'></input>
                </div>
                <NotificationsIcon sx={rightIcon}/>
                <HelpIcon sx={rightIcon}/>
                <SettingsIcon sx={rightIcon}/>
                <div className='account-container'>
                    <IconButton sx={{p:0,m:0,width:'32px',height:'32px'}} onBlur={showBg} onFocus={hideBg}>
                        <AccountCircleIcon className='account' sx={rightIcon}/>
                    </IconButton>
                    <div className='hidden'>
                        <div>{currUser.username}</div>
                        <button style={{fontSize:'15px',fontWeight:'bold'}} onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </>) 
        : 
        (<>
            <div className='nav-logo'>
            <img src='../../atlassian-logo.png'></img>
            </div>
            <Button variant='contained' sx={{textTransform:'none',fontWeight:'bold',backgroundColor:fontFocusCol, height:'32px',width:'70px',ml:'auto'}} onClick={showLogin}>Login</Button>
        </>)
        }        
    </div>    
  )
}

export default Navbar