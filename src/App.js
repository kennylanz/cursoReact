import logo from './logo.svg';
import './App.css';


function  Navbar() {
  return <> 
          <h2>Música electrónica</h2>
          <CartWidget />
          </>;
}
</NavBar> 

function ItemListContainer() {
}
function App() {
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
}

export default App;
