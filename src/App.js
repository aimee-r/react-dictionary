import logo from './logo.jpeg';
import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Dictionary App
        </p>
        <Dictionary />
     
      </header>
    </div>
  );
}

export default App;
