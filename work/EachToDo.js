import React from 'react'

function EachTodo(props) {
  return (
    <div>
        <div onClick={ ()=>{
        props.onChecked(props.id)
    } }>
        <li>{props.text}</li>
    </div> 
    </div>
  )
}

export default EachTodo