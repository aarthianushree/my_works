import React, { useRef, useState } from 'react'
import './MyWorks.css'
import Login from './work/Login'



function MyWorks() {

  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(null);
 

  setInterval(()=>{
    setCurrentTime(new Date().toLocaleTimeString());
  },1000)

  const [activeState, setActiveSate] = useState("");
  const [height, setheight] = useState("1px");

  const content = useRef(null);

  function toggleAccordion(){
     setActiveSate( activeState === "" ? "active" : "")
     setheight( activeState === "active" ? "0px" : `${content.current.scrollHeight}px`)
  }


  return (
    <section id='works'>
    <div className='myworks'>.

     <div className='workbox'> 

      <div className='timebox'>
      <h1>{currentTime}</h1>
      </div>

     

      <div className='accordionbox1'>
      
      <button className='accordion1' onClick={toggleAccordion}>
      <h1 className='title'>Starting is always Messy, but here's what I practised..........</h1>
      </button><hr width="80%"></hr>
      <div ref={content} className='content' style={ {maxHeight: `${height}`}}>
      <p > Going through various websites, getting confused and eventually ending in a loop hole. Struggling to find the direction?</p>
      <h4 style={ {color:'#c26023'}}>Here's what you must do</h4>
      <p>Just learn the needed simple Fundamentals</p>
      <p>and practice by making simple, intermediate & advanced Projects.</p>
      </div>

      </div>

      {/* <div className='accordionbox2'>

      <button className='accordion2' onClick={toggleAccordion}>
      <p className='title'>If you have found the patterns, then Congrats.......  You Did It</p>
      </button>
      <div ref={content} className='content' style={ {maxHeight: `${height}`} }>
      <p>Learning through Projects adds a lot difference than just learning the fundamentals with simple complex codes.</p>
      <h4>Patterns is Important</h4>
      <p>If you are learning something Tricky || complex, and cant figure out whats going on, then...</p>
      <p>just find patterns and Connect The Dots</p>
      </div>

      </div> */}

{/* 
      <div className='accordionbox'>
      
      <button className='accordion' onClick={toggleAccordion}>
      <p className='title'>Consistency is ain't enough</p>
      </button>
      <div ref={content} className='content' style={{maxHeight: `${height}`}}>
      <h4>True Obsession is all what it is</h4>
      <p>Obsession is a whole new level of craziness , when it comes to coding</p>
      </div>


      </div> */}

      

     <div className='workbox1'>
        <Login/>
     </div>
     
     </div>

    </div>
    </section>
  )
}

export default MyWorks