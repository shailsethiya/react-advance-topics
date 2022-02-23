import './App.css';

function App() {
  const myDebounce = (cb, d) => {
    let timer;
    return function (...args){
      if(timer) clearInterval(timer);
      timer = setTimeout(() => {
        cb(...args)
      }, d)
    }
  }

  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
