import React from 'react'

const ComponentOne = (props) => {
  return (
    <div>{props.render()}</div>
  )
}

export default ComponentOne