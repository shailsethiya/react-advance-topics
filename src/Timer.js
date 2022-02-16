import {useState, useEffect} from 'react'

const Timer = () => {
    const[seconds, setSeconds] = useState(0);
    const[isActive, setIsActive] = useState(false);
  
    const toggle = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect (() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
            setSeconds(seconds => seconds+1)
            }, 1000);
        } else if(!isActive && seconds !==0){
           clearInterval(interval);
        }
        return() => clearInterval(interval);
    }, [isActive, seconds]);
 

    return (
        <div className="app">
            <h1>{seconds}</h1>
            <button onClick={toggle}>
            {isActive ? 'pause': 'start'}
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    )
}

export default Timer