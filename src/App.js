import './App.css';
import updatedComponent from './withComponent';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.name}
      </header>
    </div>
  );
}

export default updatedComponent(App);
