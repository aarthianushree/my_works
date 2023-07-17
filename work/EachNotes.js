import React, { useState } from 'react'
import Keeper from './Keeper'
import Notes from './Notes';
import './Keeper.css';

// 1. 1st i'll make keeper.js which has title & content , -> button,
//on clicking that button it mus render us the individyal notes, but we cant do that inside keeper, so
//2. 2nd ly I'll create EachNote.js will has array useStates to map the title&content.
//here we r gonna pass all the title and content from keeper to Eachnote.js

function EachNotes() {

    const [eachNote, setEachNote] = useState([]);

    function addNote(individualnotes){
       
       setEachNote((prevvalue)=>{
        return (
            [
                ...prevvalue,
                individualnotes
            ]
        )
       })
    }

    function handledelete(id){
        setEachNote( prevValue=>{
            return(
                prevValue.filter((eachNote,index)=>{
                    return(
                        index!==id
                    )
                })
            )
        })
    }
    

  return (
    <div>
    <Keeper Onadd={addNote} />

    <div className='displayingGrid'>
    {eachNote.map( (item,index)=>{
        return(
           <Notes 
            title={item.title}
            content={item.content}
            id={index}
            Ondelete={handledelete}
           />
        )
    })}
    </div>
    
    </div>
  )
}

export default EachNotes