import React, { useState } from 'react'
import './Keeper.css'

function Keeper(props) {

    const [notes, setnotes] = useState({
        title:"",
        content:""
    });

    

    function handleChange(event){
      const {name,value} = event.target
      setnotes( (prevValue)=>{
        return(
            {
                ...prevValue,
                [name]:value
            }
        )
      })
    }

    function handleClick(event){
       event.preventDefault();
       props.Onadd(notes)
       setnotes({
        title:"",
        content:""
       })
    }

  return (
    <div>

    <div className='keeper'>
    <form>
        <input
            name='title'
            onChange={handleChange}
            value={notes.title}
            placeholder='title.........'
        />
        <textarea
            name='content'
            onChange={handleChange}
            value={notes.content}
            placeholder='content..........'
        />
        <button onClick={handleClick}>ADD</button>
    </form>
    </div>
    </div>
  )
}

export default Keeper