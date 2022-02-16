import {useState, useEffect} from 'react'

const Counter = (props) => {
  const[count, setCount] = useState(0);

  const incrementValue = () => {
    setCount(prevCount => { 
        return prevCount + 1})
  }

  return (
    <div>{props.render(count, incrementValue)}</div>
  )
}

export default Counter