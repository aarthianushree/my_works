import React from 'react'
import './Resume.css';
import degree from './pics/degree.jpg'
import css from './pics/download icon css 3 svg eps png psd ai logo vector color free.png';
import html from './pics/231 Web Development - Websites, Applications and Software.png';
import javascript from './pics/Javascript Logo Sticker by marcoafsousa.jpg';
import java from './pics/Google Images.png'
import react from './pics/React_js for Beginners — Props and State Explained.png'
import sih from './pics/SIH.png';

import HomeIcon from '@mui/icons-material/Home';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddTaskIcon from '@mui/icons-material/AddTask';

function Resume() {
  return (
    <section id='resume'>
    <div className='resume'>

    <div className='icons'>
    <a href='#home'><HomeIcon fontSize='large'/></a>
    <a href='#works'><LaptopChromebookIcon fontSize='large'/></a>
    <a href='#works'><AddTaskIcon fontSize='large'/></a>
    <a href='#resume'><HistoryEduIcon fontSize='large'/></a>
    <a href='#contact'><PermContactCalendarIcon fontSize='large'/></a>
    </div>

    <div>
   
    <div className='resumebox'>
    
    <div className='resumebox1'>
    <h3>RESUME</h3>
        <div className='heading'>
          <img src={degree} alt=""/>
          <div className='headingText'>
          <h2>Anushree N</h2>
          <h3>B.E - Information Science and Engineering</h3>
          </div>
        </div>
        
        <br></br>
        
        <hr color= 'black' width='88%'></hr>

        <h3>ACADEMIC CREDENTIALS</h3>
        <div className='box1'>
        <div>

        <h4><b>BANNARI AMMAN INSTITUTE OF TECHNOLOGY</b></h4>  
        <p>B.E - INFORMATION SCIENCE AND ENGINEERING EXPECTED TO BE GRADUATED IN 2024 8.96 CGPA( upto- V sem)</p>
         
        <h4><b>SHREE SARASWATHI VIDHYA MANDIR</b></h4>  
        <p>HSC - COMPLETED IN 2020(12th)<br></br>ATTAINED -82.6%</p>
        

        <h4><b>SRI AMBAL PUBLIC SCHOOL(CBSE)</b></h4>  
        <p>SSLC - COMPLETED IN 2018 (10th)<br></br>ATTAINED -83.6%</p>
        

        </div>
        </div>

        <h3>ACHIVEMENTS</h3>
        <div className='box1'>
        
            <div>
                <p>SMART INDIA HACKATHON 2022-FINALIST<br></br> TITLE -AI CHATBOT FOR EDUCATIONAL WEBSITE</p>
            </div>
            <img className='sihpic' src={sih} alt=''/>
        </div>

        <h3>PROFILE</h3>
        <div className='box1'>
        

        <div className='profilebox'>
          <p><a href="https://github.com/aarthianushree">GITHUB</a></p>
        </div>
        <div className='profilebox'>
         <p><a href="https://leetcode.com/AnushreeN/">LEETCODE</a></p>
        </div>
        <div className='profilebox'>
         <p><a href="https://www.hackerrank.com/anushree_ig20">HACKERRANK</a></p>
        </div>
        
        </div>

        <h3>AREAS OF INTEREST &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OTHER SKILLS</h3>
        
        <div className='Areas'>
        <div className='Areasbox'>
            <ul>
                <li>REACT. js</li>
                <li>DATA STRUCTURES</li>
                <li>OOPS</li>
            </ul>
            
        </div>
        <div className='Areasbox'>
        <ul>
                <li>COMMUNICATION</li>
                <li>TIME MANAGEMENT</li>
                <li>LEADERSHIP</li>
        </ul>
        </div>
        
        </div>
        
        <h3>HOBBIES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LANGUAGES KNOWN</h3>
        <div className='Areas'>
        <div className='Areasbox'>
            <ul>
                <li>READING BOOKS</li>
                <li>POETRY</li>
                <li>DANCING</li>
            </ul>
            
        </div>
        <div className='Areasbox'>
        <ul>
                <li>TAMIL</li>
                <li>ENGLISH</li>
                
        </ul>
        </div>
        
        </div>

        <h3>EXTRA-CURRICULAR ACTIVITIES</h3>
        <div className='box1'>
          <ul>
            <li>ORGANIZED AND COORDINATED SANGAMAM-2022 EVENT PRESENTED BY TAMIL MANDRAM</li>
            <li>ORGANIZED QUIZES AND CODING CONTEST ON THE PLATFORM OF HACKEREARTH</li>
          </ul>
        </div>
        .
    </div>
    

    <div className='resumebox2'>
       
       
       <h3>SKILLS</h3>
       <img src={html} alt=''/>
       <img src={css} alt=''/>
       <img src={javascript} alt=''/>
       <img src={java} alt=''/>
       <img src={react} alt=''/>
      
       <h3>TECHNICAL EVENT PARTICIPATED</h3>
      <div className='box1'>
       <p> HACKATHON:<br></br><br></br>SMART INDIA HACKATHON 2022(MINISTRY OF EDUCATION-GOVERNMENT OF INDIA)</p>
      </div>

      <h3>PROJECTS</h3>
      <div className='box1'>
        <h5>PROJECT 1</h5>
        <h4>AI CHATBOT FOR EDUCATIONAL WEBSITE </h4>
        <p> <b>DURATION</b> - 2 MONTHS | TEAM SIZE:4 <br></br> <b>TECHNOLOGY</b> - HTML, JSON,WEB SCRAPING <br></br> <b>DESCRIPTION</b> - DEVELOPMENT OF AI CHATBOT <br></br> CAPABLE OF HANDLING QUERIES RELATED TO WEBSITES.</p>
      </div>

      <div className='box1'>
        <h5>PROJECT 2</h5>
        <h4>SPOTIFY REACT [DISCOVER WEEKLY PLAYLIST] CLONE & RECENTLY PLACED USER TRACKS.</h4>
        <p> <b>DURATION</b> - 3 DAYS | TEAM SIZE:1 <br></br>
<b>TECHNOLOGY</b> - REACT,REACT CONTEXT API, HTML,CSS, JAVASCRIPT.<br></br>
<b>DESCRIPTION</b> - GETTING USER INFORMATION DYNAMICALLY TO CREATE A SPOTIFY DISCOVER
WEEKLY PLAYLIST CLONE & RECENTLY PLACED USER
TRACKS.
        </p>
      </div>

      <h3>EXTRA-CURRICULAR ACHIVEMENTS</h3>
      <div className='box1'>
      <h5>SPEECH & POETRY</h5>
      <div className='gridDisplay'>

        <div> <p>1. BIT GOT TALENT-GRAFEAS</p> </div>
        <div><p>WINNER</p></div>
        <div><p>2. ZAPTIMUS LIT-AEGIS-TALKPOSITIVE </p></div>
        <div><p>WINNER</p></div>
        <div><p>3. YRC- LITERATURE SPEECH</p> </div>
        <div><p>WINNER</p></div>
        <div><p>4.BIT INTRAMUN'22</p></div>
        <div><p>BEST VERBAL MENTION</p></div>
        <div><p>5. SPEAK NOW LDS</p></div>
        <div><p>1st RUNNER UP</p></div>

      </div>
        
      </div>
      .
       

    </div>

    </div>
    
    </div>
    {/* <div className='iconNavBars'>
    <div>
    <a href ="#resume"><AssignmentIndIcon fontSize='large'/></a>
    <a href ="#project" ><UploadFileIcon fontSize='large'/></a>
    <a href='#contact'><ContactPhoneIcon fontSize='large'/></a>
    </div>
    </div> */}
    </div>
    </section>
  )
}

export default Resume