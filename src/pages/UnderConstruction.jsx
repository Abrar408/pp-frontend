import React from 'react';
import PageCon from '../assets/page-under-construction.jpg'

const UnderConstruction = () => {
  return (
    <>    
        <div style={{display:'flex',justifyContent:'center',height:'91vh',alignItems:'center'}}>
            <img src={PageCon} alt='page under construction' width="700px" height="500px"></img>
        </div>
        
    </>
  )
}

export default UnderConstruction