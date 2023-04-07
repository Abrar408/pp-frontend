import React from 'react';
import '../styles/dashboard.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CachedIcon from '@mui/icons-material/Cached';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Button } from '@mui/material';
import { contentIntro,contentProject,contentIssue,contentActivity} from '../data/content';

const iconStyle = {color:'#42526E'};
const btnStyle = {color:'#42526E', backgroundColor:'#F5F6F8',textTransform:'none',m:'0px 5px',fontWeight:'bold',fontSize:'13px',height:'32px'};
const dashboardRight = [{heading:'Assigned to Me',content:contentIssue()},{heading:'Activity Streams',content:contentActivity()}];
const dashboardLeft = [{heading:'Introduction',content:contentIntro()},{heading:'Projects',content:contentProject()}];

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
            dashboardLeft.map((d,i)=>(
              <div className='card'>
                <div className='card-header'>
                  <span>{d.heading}</span>
                  <div>
                    <CloseFullscreenIcon/>
                    <FullscreenIcon/>
                    <CachedIcon/>
                  </div>
                </div>
                <div className='card-content'>{d.content}</div>
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
            dashboardRight.map((d,i)=>(
              <div className='card'>
                <div className='card-header'>
                  <span>{d.heading}</span>
                  <div>
                    <CloseFullscreenIcon/>
                    <FullscreenIcon/>
                    <CachedIcon/>
                  </div>
                </div>
                <div className='card-content'>{d.content}</div>
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