import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi There</p>
        <a href="/auth/google">Login</a>
      </header>
    </div>
  );
}

export default App;
