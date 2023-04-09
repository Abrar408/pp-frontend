import { Avatar, Button, Checkbox, FormControlLabel, FormLabel, Grid, Link, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';

const fontCol = '#344563';
const hoverBgCol = '#ddedff';
const fontFocusCol = '#2C53CC';

const Register = () => {
    const [cred,setCred] = useState({
        user:'',
        email:'',
        gender:'',
        pass:'',
        confirmPass:''
    })
    const [checkBox,setCheckBox] = useState(false)
    const [err,setErr] = useState('')
    const [success,setSuccess] = useState('')

    const checkIfEmpty =()=>{
        if(cred.user == '' || cred.email == '' || cred.pass == '' || cred.confirmPass == ''){
            setErr('required fields cannot be blank');
            return false
        }
        else{
            setErr('')
            return true
        }
    }
    const checkEmail =()=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cred.email))
        {
            setErr('');
            return true
        }else{
            setErr('email is not a valid email address');
            return false
        }            
    }
    const checkPass =()=>{
        if(cred.pass === cred.confirmPass){
            setErr('')
            return true
        }
        else{
            setErr('passwords do not match');
            return false
        }
    }
    const validate = () => {
        if(checkIfEmpty()){
            if(checkEmail()){
                if(checkPass()){
                    if(checkBox){
                        setErr('')
                        return true
                    }
                    else{
                        setErr('please accept terms & conditions')
                        return false
                    }
                }
            }
        }        
    }
    const registerUser = () => {
        if(validate()){
            axios.post('http://localhost:3000/auth/register',cred)
            .then(res => {
                if(res.status == 200){
                    console.log(res.data)
                    setSuccess(res.data)
                    setCred({...cred,
                        user:'',
                        email:'',
                        pass:'',
                        confirmPass:''})
                    setCheckBox(false)
                }
            })
            .catch(err => {
                setErr(err.response.data)
                console.log(err.response.data)
            })
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
                <h2 style={{margin:'0px'}}>Register</h2>
                <Typography color='green'>{success}</Typography>
            </Grid>  
            <TextField id='tf1' className='req' value={cred.user} onChange={(e)=>{setCred({...cred,user:e.target.value})}} size='small' label='Username' variant='outlined'
            placeholder='Enter Username' required sx={{width:'100%',m:'10px 0px'}} />  
            <TextField id='tf2' className='req' value={cred.email} onChange={(e)=>{setCred({...cred,email:e.target.value})}} size='small' label='Email' variant='outlined'
            placeholder='Enter email' required type='email' sx={{width:'100%',m:'10px 0px'}} />
            
            <TextField id='tf3' className='req' value={cred.pass} onChange={(e)=>{setCred({...cred,pass:e.target.value})}} size='small' label='Password' variant='outlined'
            placeholder='Enter Password' type='password' required sx={{width:'100%',m:'10px 0px'}} />
            <TextField id='tf4' className='req' value={cred.confirmPass} onChange={(e)=>{setCred({...cred,confirmPass:e.target.value})}} size='small' label='Confirm Password' variant='outlined'
            placeholder='Enter Password Again' type='password' required sx={{width:'100%',m:'10px 0px'}} /> 
            <Typography color='red'>{err}</Typography>
            <FormControlLabel control={<Checkbox checked={checkBox} onChange={(e)=>{setCheckBox(e.target.checked)}}/>} label="I accept terms and conditions" />              
            <Button endIcon={<DoneIcon/>} variant='contained' type='submit' fullWidth onClick={registerUser} sx={{backgroundColor: fontFocusCol}}>Register</Button>    
            <Button startIcon={<GitHubIcon sx={{color:'white'}}/>} fullWidth variant='contained' sx={{backgroundColor:'black',m:'10px 0px'}} onClick={handleGithubLogin}>Register with Github</Button>
            <Typography>
                Already have an account? 
                <Link>
                    Login
                </Link>
            </Typography>
        </Paper>
    </Grid>
    </>
  )
}

export default Register