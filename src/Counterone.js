import React from 'react'

const Counterone = (props) => {
  return (
    <div>
        <button onClick={props.incrementValue}>click{props.count}button</button>
    </div>
  )
}

export default Counterone