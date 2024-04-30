import {  useState } from "react";
import './App.css';

// les règles des hooks

function App() {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="result">Counter</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count => count + 1)}>add</button>&nbsp;
        <button onClick={reset}>reset</button>
      </header>
    </div>
  );
}

export default App;
