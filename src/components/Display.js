import React from 'react'

function Display(props) {
  return (
    <div className="note col-4">
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p><b>Phone:</b> {props.phone}</p>
            <p><b>DOB:</b> {props.dob}</p>
            
        </div>
  )
}

export default Display