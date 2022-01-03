import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route } from "react-router-dom"


function App () {

  const productos = [
    {
    "id": "producto1",
    "categoria": "placas de video",
    "titulo": "AMD 6700xt",
    "descripcion": "PowerColor - Hellhound",
    "precio": 1200
    },
    {
    "id": "producto2",
    "categoria": "placas de video",
    "titulo": "NVidia 3090",
    "descripcion": "Colorful triple fan",
    "precio": 3200
    },
    {
    "id": "producto3",
    "categoria": "placas de video",
    "titulo": "GeForce 3070",
    "descripcion": "MSI Ventus 3",
    "precio": 1700
    },
    {"id": "producto4",
    "categoria": "perifericos",
    "titulo": "Microprocesador",
    "descripcion": "intelg4560",
    "precio": 100
    },
    {"id": "producto5",
    "categoria": "perifericos",
    "titulo": "Memoria ram",
    "descripcion": "8gb ddr4",
    "precio": 25},
    {
    "id": "producto6",
    "categoria": "fuentes",
    "titulo": "Prime  gx-1300",
    "descripcion": "80 plus gold",
    "precio": 500
    },
    {
    "id": "producto7",
    "categoria": "fuentes",
    "titulo": "Thermaltek 750w",
    "descripcion": "80 plus gold",
    "precio": 100
    },
    {
    "id": "producto8",
    "categoria": "fuentes",
    "titulo": "HP 1200",
    "descripcion": "Server Patinum 95%",
    "precio": 300
    },
    
]

  const apellidos = ["Rodriguez", "Mortier"]

 
  const links = [
    {href: "/home", name: "Home"},
    {href: "/productos", name: "Productos"},
    {href: "/carrito", name: "Carrito"},
    {href: "/categoria/placas-de-video", name: "Placas de video"},
    {href: "/categoria/perifericos", name: "Perifericos"},
    {href: "/categoria/fuentes", name: "Fuentes"},
    {href: "/item-detail", name: "Item Detail"}
  ]


  return (
    <BrowserRouter>
    <Navbar links={links}/>
    <CartWidget/>
    <Routes>
      <Route path="/home" element="" />
      <Route path="/productos" element={<ItemListContainer productos={productos} nombre="Erika" apellidos={apellidos}/>} />
      <Route path="/carrito" element={<CartWidget/>} />
      <Route path="/categoria/:id" element={<ItemListContainer nombre="Erika" apellidos={apellidos}/>} />
      <Route path="/item-detail/:id" element={<ItemDetailContainer productos={productos} />} />
      
    </Routes>




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
    </BrowserRouter>
  );
}

export default App;