import React from 'react'
import './Contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


import HomeIcon from '@mui/icons-material/Home';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddTaskIcon from '@mui/icons-material/AddTask';

function Contact() {
  return (
    <section id='contact'>

    <div className='contact'>.
     <div className='contactbox'>

     <div className='contactBox1'>
        <h1>Contact Me</h1>

        <div className='boxes'>
        <LinkedInIcon fontSize='large'/>
        <button><a href='https://www.linkedin.com/in/anushree2326/' >LinkedIn</a></button>
        </div>
        
        <h1>My GitHub</h1>

        <div className='boxes'>
        <GitHubIcon fontSize='large'/>
        <button><a href='https://github.com/aarthianushree' >GITHUB</a></button>
        </div>

        <h1>Email</h1>

        <div className='boxes'>
        <EmailIcon fontSize='large'/>
        anushree.ig20@bitsathy.ac.in
        </div>
        
     </div>
     <hr color='grey' width='-20px'></hr>

     <div className='contactBox2'>
      <div className='contactBox2_Content'>

      <button>
      <h3>If you have found the patterns, then Congrats.......  You Did It</h3>
      </button>
      <div className='content'>
      <p>Learning through Projects adds a lot more difference than just learning the fundamentals with simple || complex codes.</p>
      <h4 style={{color:'#c26023'}}>Patterns = Connecting Dots</h4>
      <p>If you are learning something Tricky || complex, and can't figure out whats going on, then...</p>
      <p>just find patterns and Connect The Dots.</p>
      </div>

        </div>
     </div>

     </div>

     <div className='icon'>
    <a href='#home'><HomeIcon fontSize='large'/></a>
    <a href='#works'><LaptopChromebookIcon fontSize='large'/></a>
    <a href='#works'><AddTaskIcon fontSize='large'/></a>
    <a href='#resume'><HistoryEduIcon fontSize='large'/></a>
    <a href='#contact'><PermContactCalendarIcon fontSize='large'/></a>
    </div>

    </div>

    </section>
  )
}

export default Contact