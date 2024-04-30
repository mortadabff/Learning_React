import { useState } from "react";
import './App.css';
import './Custom.css'

function Header({ title }) {
  return(
  <header className="App-header">
    <h1>Learn {title}</h1>
  </header>  )
}
function Component({ title, onClick  }) {
  return(
  <div className="component">
    <p>{title}</p>
    <button onClick={() => onClick(title)}>click me!</button>
  </div>
  )
}
 

function App() {
  const libraries = [
    {title: "React", link: "https://reactjs.org/"}, 
    {title: "Angular", link: "https://angular.io/"}, 
    {title:"Vue", link: "https://vuejs.org/"}, 
    {title:"Bootstrap", link: "https://getbootstrap.com/"}, 
  ];
  const [index, setIndex] = useState(0)
  const handleOnClick = () => {
    const length = libraries.length - 1;
    setIndex(prevIndex => prevIndex < length ? prevIndex + 1 : 0)
  }
  return (
    <div className="App">
        <Header title={libraries[index].title}/>
        {libraries.map(lib => {
          return (<Component title={lib.title} link={lib.link} onClick={handleOnClick}/>)
        })}
    </div>
  );
}

export default App;
