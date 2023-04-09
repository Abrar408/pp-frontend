import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React, {  useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrUser, setAccessToken} from '../features/UserSlice';
import { useNavigate } from 'react-router-dom';

const fontCol = '#344563';
const hoverBgCol = '#ddedff';
const fontFocusCol = '#2C53CC';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cred,setCred] = useState({
        email:'',
        pass:'',
    })
    const [err,setErr] = useState('')

    const checkIfEmpty =()=>{
        if(cred.email == '' || cred.pass == ''){
            setErr('required fields cannot be blank');
            return false;
        }
        else{
            setErr('')
            return true;
        }
    }
    const checkEmail =()=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cred.email))
        {
            setErr('');
            return true;
        }else{
            setErr('email is not a valid email address');
            return false;
        }            
    }
    const loginUser = async () => {
        if(checkIfEmpty()){
            if(checkEmail()){
                 await axios.post('http://localhost:3000/auth/login',cred,{
                    withCredentials: true
                })
                .then(res =>{
                    if(res.status == 200){
                        dispatch(setCurrUser(res.data.resCred));
                        dispatch(setAccessToken(res.data.accessToken));
                        navigate('/dashboard');
                    }
                })
                .catch(err => {
                    console.log(err);
                }) 
            }
        }
    }
    const handleGithubLogin = async () => {
        window.open("http://localhost:3000/auth/github", "_self");
    }
  return (
    <>
    <Grid>        
        <Paper sx={{padding:'20px'}}>
            <Grid align='center' >
                <h2>Login</h2>
            </Grid>  
            <TextField value={cred.email} onChange={(e)=>{setCred({...cred,email:e.target.value})}} size='small' label='Email' variant='outlined'
            placeholder='Enter Email' required sx={{width:'100%',m:'10px 0px'}} />   
            <TextField value={cred.pass} onChange={(e)=>{setCred({...cred,pass:e.target.value})}} size='small' label='Password' variant='outlined'
            placeholder='Enter Password' type='password' required sx={{width:'100%',m:'10px 0px'}} />  
            <Typography color='red'>{err}</Typography>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />  
            <Button endIcon={<ArrowForwardRoundedIcon/>} variant='contained' type='submit' fullWidth onClick={loginUser} sx={{backgroundColor: fontFocusCol}}>Login</Button>    
            <Button startIcon={<GitHubIcon sx={{color:'white'}}/>} fullWidth variant='contained' sx={{backgroundColor:'black',mt:'10px'}} onClick={handleGithubLogin}>Login with Github</Button>
            <Typography sx={{m:'20px 0px 10px 0px'}}>
                <Link>
                    Forgot Password?
                </Link>
            </Typography>
            <Typography>
                Don't have an account? 
                <Link>
                    Register
                </Link>
            </Typography>
        </Paper>
    </Grid>
    </>
  )
}

export default Login