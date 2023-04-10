import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SignInSignOut from './pages/Login';
import UnderConstruction from './pages/UnderConstruction';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrUser, setAccessToken } from './features/UserSlice';
import axios from 'axios';
import Loading from './components/loading';
import Pnf from './pages/Pnf';

function App() {
  const navigate = useNavigate()
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
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<SignInSignOut/>} /> */}
        {/* <Route path='/' element={loading ? <Loading/> : currUser?.username ? navigate('/dashboard'):<SignInSignOut/>} /> */}
        <Route path='/' element={loading ? <Loading/> : <SignInSignOut/>} />
        <Route path='/dashboard' element={loading ? <Loading/> :<Dashboard/>} />
        <Route path='/work' element={loading ? <Loading/> :<UnderConstruction/>} />
        <Route path='/project' element={loading ? <Loading/> :<UnderConstruction/>} />
        <Route path='/filter' element={loading ? <Loading/> :<UnderConstruction/>} />
        <Route path='/team' element={loading ? <Loading/> :<UnderConstruction/>} />
        <Route path='/app' element={loading ? <Loading/> :<UnderConstruction/>} />
        <Route path='*' element={loading ? <Loading/> :<Pnf/>} />
      </Routes>
    </>    
  )
}

export default App
