
import { useState } from 'react';
import './App.css';
import Forms from './Forms';

function App() {

  const [vals, setVals] = useState("");

  const getData = (data) => {
      setVals(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Forms onSubmit={getData} />
      </header>
      <div> Entered: {vals} </div>
    </div>
  );
}

export default App;
