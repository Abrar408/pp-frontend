import React from 'react';
import '../styles/dashboard.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CachedIcon from '@mui/icons-material/Cached';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Button } from '@mui/material';

const iconStyle = {color:'#42526E'};
const btnStyle = {color:'#42526E', backgroundColor:'#F5F6F8',textTransform:'none',m:'0px 5px',fontWeight:'bold',fontSize:'13px',height:'32px'};
const dashRight = [{heading:'Assigned to me'},{heading:'Your Company JIRA'}];
const dashLeft = [{heading:'Introduction'},{heading:'Projects'}];
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='header'>
        <span>
          Default dashboard
        </span>
        <div className="right-btn">
          <StarOutlineIcon sx={iconStyle}/>
          <Button sx={btnStyle} endIcon={<CachedIcon sx={iconStyle}/>} >Refresh</Button>
          <Button sx={btnStyle} endIcon={<EditIcon sx={iconStyle}/>}>Edit</Button>
          <MoreHorizIcon sx={{...iconStyle,backgroundColor:'#F5F6F8',p:'4px',boxSizing:'content-box'}}/>
        </div>
      </div>
      <div className='cards'>
        <div className="left-column">
          {
            dashLeft.map((d,i)=>(
              <div className='card'>
                <div className='card-header'>
                  <span>{d.heading}</span>
                  <div>
                    <CloseFullscreenIcon/>
                    <FullscreenIcon/>
                    <CachedIcon/>
                  </div>
                </div>
                <div className='card-content'></div>
                <div className='card-footer'>
                  <CachedIcon sx={{width:'16px'}} />
                  <span>2 hours ago</span>
                </div>
              </div>
            ))
          }
        </div>
        <div className="right-column">
        {
            dashRight.map((d,i)=>(
              <div className='card'>
                <div className='card-header'>
                  <span>{d.heading}</span>
                  <div>
                    <CloseFullscreenIcon/>
                    <FullscreenIcon/>
                    <CachedIcon/>
                  </div>
                </div>
                <div className='card-content'></div>
                <div className='card-footer'>
                  <CachedIcon sx={{width:'16px'}} />
                  <span>2 hours ago</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard