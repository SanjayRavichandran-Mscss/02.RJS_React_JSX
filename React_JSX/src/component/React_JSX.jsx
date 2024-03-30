import React from 'react'

export const React_JSX = () => {
  let customCSS = "code";
  const isLoggedIn = true;
  // Conditional Rendering
  const greeting = isLoggedIn ? <p>Welcome Back!</p> : <p>Please Login!</p>
  return (

    <>
    <h1 className='bannerText'>hello ALL!</h1>
    <p className='slogan'>learn More Be Smart</p>

    {/* JavaScript Expression and Inline CSS in JSX  */}
    <p className={customCSS} style={{backgroundColor:"skyblue", fontSize:'30px',fontStyle:'italic',padding:'5px',borderRadius:'10px',border:'2px solid blue'}}>50+50={50+50}</p>
    {/* Conditional Rendering in JSX */}
    <div style={{color:'green',fontSize:'50px',textAlign:'center'}}> {greeting }</div>



    </>
  )
}  
