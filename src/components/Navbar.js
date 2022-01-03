import { Link } from "react-router-dom"

const Navbar = ({links}) =>  {
  return(
      <nav>
<span>
  Este es el titulo de la tienda
</span>
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