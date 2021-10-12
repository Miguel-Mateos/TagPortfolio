import { useEffect, useMemo } from "react";
import logo from './logo.svg';
import arrow from './flecha-hacia-abajo.png'
import "./App.css";

function Test({child}) {
  child('yee')
  return <div>hola</div>
}


function App() {
  useEffect(() => {
    document.title = "Eneko"
  }, [])

  useMemo(() => <Test />, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="welcome-header">
          Welcome
        </p>
        <img src={arrow} className="arrow-logo" alt="arrow" />
      </header>
      <section className="first-section">
        <img className="head-logo" src={logo} alt="logo" />
        <h2 className="first-section-title">This is my portfolio, im working on it, stay tuned ;)</h2>
      </section>
    </div>
  );
}

export default App;
