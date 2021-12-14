import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import {useState} from "react"


function App () {

  const apellidos = ["Rodriguez", "Mortier"]

  const [contador,setContador] = useState(0)

  const foo = () => {
    console.log("soy foo")
  }

  const sumar = () => {
    if (contador < stock) {
    setContador(contador + 1)
  }
  }

  const restar = () => {
    if (contador > 0) {
        setContador(contador - 1)
    }
  }

  let carrito = []

  const onAdd =()=>{
    carrito.push(contador)
  }

  let stock = 5

  return (
    <>
    <Navbar/>
    <CartWidget/>
    <ItemListContainer nombre="Erika" apellidos={apellidos}/>
    <ItemCount foo={foo}  />

    <p>Contador actual: {contador}</p>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    <button onClick={onAdd}>Agregar al carrito</button>




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