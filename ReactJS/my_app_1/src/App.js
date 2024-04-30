import logo from './logo.svg';
import logoRed from './logo-pink.svg';
import './App.css';


const AppLink =()=>{
  const x="Mortada";
  return (
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    {x} want to Learn React 18
  </a>
  )

}
const Logo =({svg})=> <img id="logo" src={svg} className="App-logo" alt="logo" />

const HandleOnClik=(svg)=>{
const but=document.getElementById("logo");
but.src=svg;
} 

function LearnX({ linkLearning, content }){
  const HandleOnClikLearnButton=()=>{
    const LinkElement=document.getElementById('link');
    LinkElement.href=linkLearning;
    LinkElement.innerHTML=content;
  }
  return( 
  <button onClick={HandleOnClikLearnButton}>
      {content}
    </button>
    )

}


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Logo svg={logo}/>
     {/*  <Logo svg={logoRed}/> */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <AppLink/>
       <br></br>
       <button onClick={()=> HandleOnClik(logo)}> Blue</button>
       <button onClick={()=> HandleOnClik(logoRed)}> Pink</button>
      <br></br>
      <hr></hr>
      <a
        id="link"
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        to Learn React 18
        </a>
        <br></br>

        <LearnX linkLearning="https://vueJs.org" content="Learn vue JS" />
        <br></br>
        <LearnX linkLearning="https://Angularjs.org" content="Learn Angular JS" />
        <br></br>
        <LearnX linkLearning="https://react.dev" content="Learn React JS" />
      </header>
    </div>
  );
}

export default App;
