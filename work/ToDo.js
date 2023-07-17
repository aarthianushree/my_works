import React from 'react'
import './ToDo.css'
import { useState } from 'react';
import EachTodo from './EachToDo';
import EachNotes from './EachNotes';

function ToDo() {

  const [inputText, setInputText] = useState("");

  const [lists, setLists] = useState( [] );
  

  function handleChange(event)
  {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick(){
     setLists( prevLists =>{
      return (
        [
          ...prevLists,
          inputText
        ]
      )
     });
     setInputText("");
  }

  function deleteIt(id)
  {
    return(
      setLists( prevLists=>{
        return(
          prevLists.filter( (lists, index)=>{
            return index!==id;
          })
        )
      })
    )
  }

  return (
    <div className='todo'>
    
    <div className='todobox'>

    <div className='todobox1'>

    <div className='todotitle'>
    <h3>ToDo</h3>
    </div>
    
    <div className='todocontent'>
    <div className='forms'>
      
      <input 
      onChange={handleChange}
      value={inputText}
      /> 
      <br></br><br></br>
      <button onClick={handleClick}>add</button>
      
      <div>
      <ul>

      {lists.map( (todoItem,index) => 
          <EachTodo
          text={todoItem}
          onChecked={deleteIt}
          id={index}
          />
        )
      }
        
      </ul>
      </div>

    </div>
    </div>

    </div>

    <div className='todobox2'>
    <EachNotes/>
    </div>
   
   
    </div>
     
    </div>
  )
}

export default ToDo
