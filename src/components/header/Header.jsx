import Flickity from "react-flickity-component";
import { Link } from "react-router-dom";


import './Header.css'

const header = ({idioma, changeIdioma, data}) => {

  const option={pageDots: false, cellAlign: 'left', wrapAround:true}
  return (
    <header className={`grupoHeader`}>
      <section className={`grupoTopHeader`}>
        <button onClick={changeIdioma}>{idioma==="es"? "EN" : "ES"}</button>
        <img src="https://fredshouserestaurant.com/menudigital/wp-content/uploads/2022/05/freds-restaurant-logo-1024x454-1.png" alt="logo"  className={`grupoHaderLogo`}/>
        <img src="" alt="menu" />
      </section>
      <section>
        <Flickity
          className={'carousel'}
          options={option}>
          {data.map((e,i)=>{
            if(e.link==="/mixologia" || e.link==="/postres"){
              return(
                <Link to={e.link} key={i}>
                  <img src={e.img} alt={"icon"} />
                  <p>{e.nombre[idioma]}</p>
                </Link>
              )
            }
            return(
              <Link to={e.link} key={i}>
                <img src={e.img} alt={"icon"} />
                <p>{e.nombre[idioma]}</p>
              </Link>
            )
          })}
        </Flickity>
      </section>
    </header>
  )
}

export default header