import React from 'react'
import './Keeper.css'
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props) {

    function handleClick(){
      props.Ondelete(props.id)
    }

    return (


    <div className='Notes'>
    
    {props.title}<br></br><hr></hr>
    {props.content}

    <DeleteIcon className='ico'
     onClick={handleClick} 
    />

    </div>


  )
}

export default Notes