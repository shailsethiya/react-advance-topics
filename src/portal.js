import React from 'react'
import reactDom from 'react-dom'

const Portal = () => {
  return reactDom.createPortal(
    <h1>portal</h1>, 
    document.getElementById('portal-root')
  )
}

export default Portal;