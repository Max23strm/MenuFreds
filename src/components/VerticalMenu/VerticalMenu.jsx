import { Link } from "react-router-dom"
import './Vertical.css'

const VerticalMenu = ({idioma}) => {
  return (
    <div className="VerticalMenu">
        <a href="/">{idioma==="es"?"Menú":"Menu"}</a>
        <Link to="/mixology">
            {idioma==="es"?"Mixología":"Mixology"}
        </Link>
        <Link to="/postres">
            {idioma==="es"?"Postres":"Desserts"}
        </Link>
        <a href="https://fredshouserestaurant.com/menudigital/destilados.pdf">{idioma==="es"?"Destilados":"Spirits"}</a>
    </div>
  )
}

export default VerticalMenu