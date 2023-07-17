import React, { useEffect, useState } from 'react'
import './Login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import ToDo from './ToDo';


function Login() {

  const [values, setValues] = useState({
    username:'',
    email:'',
    password:''
  });

  const [collectInfo, setCollectInfo] = useState([]);

  const [submit, setSubmit] = useState(false)

  function handleChange(event){
     const {name,value} = event.target;
     setValues( (prevValues)=>{
      return(
        {
          ...prevValues,
          [name]:value
        }
      )
     })
  }

  function handleClick(event){
    event.preventDefault();
    setCollectInfo(validate(values));
    setSubmit(true);
  }

  useEffect( ()=>{
    if(Object.keys(collectInfo).length === 0 && submit)
    {
      alert("signed in successfully")
      
    } 
    
    setSubmit(false)
  })

  function validate(Eachinput){
    const error = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 

    if(!Eachinput.username)
    {
      error.username = 'name required'
    }

    if(!Eachinput.email)
    {
      error.email = 'email required'
    }
    else if(!regex.test(Eachinput.email))
    {
       error.email = "not a valid email"
    }

    if(!Eachinput.password)
    {
      error.password='password required'
    }
    if(Eachinput.password.length<5)
    {
      error.password = 'password must contain more than 5 characters'
    }
    return error
  }

  return (

    <div className='login'>
      <div className='loginbox'>

      <form>
        <div className='registrationbox'>
        
        <h4>UserName</h4>
        <div className='inputs'>
        <AccountCircleIcon fontSize='large'/>
        <input
          onChange={handleChange}
          name='username'
          type='text'
          placeholder='your name.......'
          value={values.username}
         />
        </div>
        <p>{collectInfo.username}</p>
        
        <h4>Email</h4>
        <div className='inputs'>
        <ContactMailIcon fontSize='large'/>
        <input
          onChange={handleChange}
          name="email"
          type='email'
          placeholder='your email.......'
          value={values.email}
        />
        </div>
        <p>{collectInfo.email}</p>
        
        <h4>Password</h4>
        <div className='inputs'>
        <PasswordOutlinedIcon fontSize='large'/>
        <input
          onChange={handleChange}
          name="password"
          type='password'
          placeholder='your password......'
          value={values.password}
        />
        </div>
        <p>{collectInfo.password}</p>
        
        <br></br>
        <hr></hr>
        <button onClick={handleClick}>login</button>
        </div>
        </form>
 

      </div>
      <ToDo/>
    </div>
  )
}

export default Login