import React from 'react'
import './Calc.css'
import reacts from './pics/projectPics/React_js for Beginners — Props and State Explained.png';
import login from './pics/projectPics/simpleLogin.png';
import authenticate from './pics/projectPics/userAuthentication.png';
import userlogin from './pics/projectPics/userloginPage.png';
import recently from './pics/projectPics/recentlyPlayed.png'
import weeklyplaylist from './pics/projectPics/DiscoverWeekly.png'

function Calc() {
  return (
    <section id='project'>
    <div className='calc'>
     <div className='project'>
.
    <div className='projectHeading'>
    <img className='reactlogo' src={reacts} alt=''/>
    <h3>PROJECTS - SPOTIFY REACT CLONE</h3>
    </div>
    
    <div className='projectbox'>
    <div className='projectboxes'>

    <div className='projectbox1'>

<div className='box2Internal'>
  <h4>1. Login Page</h4>
  <img  className='imageDimensions' src={login} alt=''/>

  <h4>2. User authentication</h4>
  <img  className='imageDimensions' src={authenticate} alt=''/>

  <h4>3. User Spotify Login</h4>
  <img  className='imageDimensions' src={userlogin} alt=''/>
</div>

</div>
    <div className='projectbox1'>

    <h4>TECHNOLOGIES USED</h4>
    <div className='box1Internal'>
      
      <ul>
        <li>USER AUTHENTICATION WITH SPOTIFY API.</li>
        <li>HANDS ON TRAINING WITH SPOTIFY-WEB-API-JS.</li>
        <li>HTML, CSS, JS.</li>
        <li>REACT.js FRAMEWORK.</li>
        <li>MATERIAL UI.</li>
        <li>CONTEXT API [ useContext, createContext, useReducer ] .</li>
        <li>HOOKS [ useState, useEffect].</li>
      </ul>
      
    </div>
    </div>

    </div>

    <div className='projectContent'>
    <h3>RECENTLY PLACED USER TRACKS.</h3>
        <div className='projectContentInternal'>
          <p>GETTING USER INFORMATION DYNAMICALLY TO CREATE THE USER'S SPOTIFY  RECENTLY PLACED USER TRACKS</p>
          <img className='imageDimensions' src={recently} alt=''/>
        </div>

     <h3>DISCOVER WEEKLY PLAYLIST</h3>
        <div className='projectContentInternal'>
          <p>GETTING USER INFORMATION DYNAMICALLY TO CREATE THE USER'S SPOTIFY DISCOVER WEEKLY PLAYLIST CLONE.</p>
          <img className='imageDimensions' src={weeklyplaylist} alt=''/>
        </div>.
    </div>

    </div>
    </div>
    </div>
    </section>
  )
}

export default Calc;