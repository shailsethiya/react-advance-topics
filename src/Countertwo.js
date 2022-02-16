import React from 'react'

const Countertwo = (props) => {
  return (
    <div>
        <h1 onMouseOver={props.incrementValue}>Hover{props.count}times</h1>
    </div>
  )
}

export default Countertwo