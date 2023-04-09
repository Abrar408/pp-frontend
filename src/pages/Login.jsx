import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import Login from '../components/login'
import Register from '../components/register';
// import '../styles/index.css'
import LoginImage from '../assets/landing.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div style={{height:'91vh',display:'flex'}}>
        <p style={{position:'absolute',left:'50px',top:'10px',fontSize:'70px',color:'#344563'}}>Its possible</p>
        <p style={{position:'absolute',left:'200px',top:'80px',fontSize:'70px',color:'#344563'}}>with teamwork</p>
      <div style={{margin:'0px',flex:'1',display:'flex',justifyContent:'center',alignItems:'flex-end'}}>        
        <img src={LoginImage} alt="Login Image" width="700px" height="500px" />
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginRight:'50px'}}>
        <Paper className='animate' sx={{width:'300px', margin:'auto'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Login" {...a11yProps(0)} sx={{margin:'0px auto'}}/>
              <Tab label="Register" {...a11yProps(1)} sx={{margin:'0px auto'}}/>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Login/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Register />
          </TabPanel>        
        </Paper> 
      </div>
    </div>        
    </>
  );
}