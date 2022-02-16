import React from 'react'


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