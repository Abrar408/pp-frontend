import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SignInSignOut from './pages/Login';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrUser, setAccessToken } from './features/UserSlice';
import axios from 'axios';
import Loading from './components/loading'

function App() {
  const navigate = useNavigate()
  const [user,setUser] = useState(false)
  const [loading,setLoading] = useState(true)
  const currUser = useSelector((state)=> state.user.currUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      await axios.get('http://localhost:3000/refresh',{
        withCredentials: true,
      })
      .then(res => {
        dispatch(setCurrUser(res.data.resCred));
        dispatch(setAccessToken(res.data.accessToken));
        setUser(true) 
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        navigate('/');
      })
    }
    verifyToken();
  },[])
  
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={loading ? <Loading/> : user ? navigate('/dashboard'):<SignInSignOut/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>    
  )
}

export default App
