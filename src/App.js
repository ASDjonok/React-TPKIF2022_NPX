import logo from './logo.svg';
import './App.css';
// import React from "react";

function Welcome(props) {
  return <h1>Привіт, {props.name}</h1>;
}

function App() {
  return (
      <div>
        <Welcome name="Світ"/>
        <Welcome name="Світ2"/>
      </div>
  );
}

/*class App extends React.Component {
  render() {
    return <h1>2Привіт, {this.props.name}</h1>;
  }
}*/
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
