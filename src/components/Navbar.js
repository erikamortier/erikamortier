import { Link } from "react-router-dom"

const Navbar = ({links}) =>  {
  return(
      <nav>
<Link to="/">
  Este es el Brand de la tienda
</Link>
  <ul>

    {links.map((e)=> {
      return (
        <li>
        <Link to={e.href}> {e.name} </Link>
        </li>
    )
    })}

  </ul>



</nav>
  )
}

export default Navbar