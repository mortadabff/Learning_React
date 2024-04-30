import { useEffect, useState } from "react";
import './App.css';

// les règles des hooks
const [count, setCount] = useState(0);

function App() {

  const reset = () => {
    useEffect(() => {
      setCount(0)
    }, [])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="result">Counter</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count => count + 1)}>click</button>
        <button onClick={reset}>reset</button>
      </header>
    </div>
  );
}

export default App;
