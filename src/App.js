import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';



function App () {

  const apellidos = ["Rodriguez", "Mortier"]

 



  return (
    <>
    <Navbar/>
    <CartWidget/>
    <ItemListContainer nombre="Erika" apellidos={apellidos}/>





    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </>
  );
}

export default App;