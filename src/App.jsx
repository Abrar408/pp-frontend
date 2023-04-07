import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SignInSignOut from './pages/Login';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrUser, setAccessToken } from './features/UserSlice';

function App() {
  const currUser = useSelector((state)=> state.user.currUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      await axios.get('http://localhost:3000/refresh',{
        withCredentials: true,
        credentials:true,
      })
      .then(res => {
        dispatch(setCurrUser(res.data.result))
        dispatch(setAccessToken(res.data.accessToken));
        // setLoggedIn(true)
        // if(rerender){
        //   setRerender(false);
        // }else{
        //   setRerender(true);
        // }
        // console.log(res.data.accessToken);
      })
      .catch(err => {
        console.error(err);
        // navigate('/');
      })
    }
    verifyToken();
  },[])
  
  return (
    <>
      <Navbar/>
      {/* <Dashboard/> */}
      <Routes>
        <Route path='/' element={<SignInSignOut/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </>    
  )
}

export default App
