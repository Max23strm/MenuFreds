import Flickity from "react-flickity-component";
import { Link,  } from "react-router-dom";
import {Hamburguer} from '../index'

import './Header.css'

const Header = ({idioma, changeIdioma, data,handleMenuClick, showVert}) => {
  const option={pageDots: false, cellAlign: 'left', wrapAround:true,selectedAttraction: 0.2,groupCells: "90%",friction: 0.8}
  
  return (
    <header className={`grupoHeader`}>
      <section className={`grupoTopHeader`}>
        <button onClick={changeIdioma}>{idioma==="es"? "EN" : "ES"}</button>
        <Link className="logoA" to={"/"}>
          <img src="https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/05/freds-restaurant-logo-1024x454-1.png" alt="logo"  className={`grupoHaderLogo`}/>
        </Link>
        <button onClick={handleMenuClick}>
          <Hamburguer showVert={showVert}/>
        </button>
      </section>
      <section>
        <Flickity
          className={'carousel'}
          options={option}>
          {data && data.map((e,i)=>{
            if(e.nombre.es =="Destilados"){
              return( 
                <a href={e.link} key={i}>
                  <img src={e.img} alt={"icon"} target={"_blank"}/>
                  <p>{e.nombre[idioma]}</p>
                </a>
              )
          } else {
            return(
              <Link to={`/menu/${e.link}`} key={i} >
                <img src={e.img} alt={"icon"} />
                <p>{e.nombre[idioma]}</p>
              </Link>
            )
          }
          })}
        </Flickity>
      </section>
    </header>
  )
}

export default Header