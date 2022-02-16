import React from 'react'

//Hoc is a function that take a component & return a new component
const updatedComponent = OriginalComponent => {
    const NewComponent = () => {
        return (
            <div>
              <OriginalComponent name="shailendra"/>
            </div>
        )
      }    
      return NewComponent;  
}

export default updatedComponent;