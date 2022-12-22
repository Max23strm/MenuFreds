import { NavLink } from "react-router-dom"
import './Vertical.css'

const VerticalMenu = ({showVert,idioma, handleMenuClick}) => {
  return (
  <div className={`VerticalMenu  ${showVert? "Show-Vert" : "Hide-Vert"}`}>
      <div className="slide-in-blurred-right">
        <NavLink activeClassName="estamos" to="/menu"  onClick={handleMenuClick}>{idioma==="es"?"Menú":"Menu"}</NavLink>
        <NavLink activeClassName="estamos" to="/mixology" onClick={handleMenuClick}>
            {idioma==="es"?"Mixología":"Mixology"}
        </NavLink>
        <NavLink activeClassName="estamos" to="/postres" onClick={handleMenuClick}>
            {idioma==="es"?"Postres":"Desserts"}
        </NavLink>
        <a href="https://fredshouserestaurant.com/menudigital/destilados.pdf" onClick={handleMenuClick}>{idioma==="es"?"Destilados":"Spirits"} </a>
      </div>
    </div>
  )
}

export default VerticalMenu