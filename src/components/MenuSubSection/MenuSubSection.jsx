import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MenuList, VerticalMenu } from '..'
import './MenuSubSection.css'


const MenuSubSection = ({idioma, data, showVert, handleMenuClick}) => {
    const [datos, setDatos] = useState([])
    const [subMenu, setSubMenu] = useState(false)
  
    let id= useParams().id
    useEffect(()=>{
      if(!id){
        setDatos(data.menu)
        setSubMenu(false)
      } else if(id === "postres" || id === "mixologia"){
        console.log(data[id])
        setDatos([...data[id]])
        setSubMenu(false)
      } else{
        data.menu.forEach((e,index)=>{
          if(e.id===id){
            setSubMenu(true)
            setDatos(data.menu[index])
            console.log(datos)
          }
        })
      }
      //eslint-disable-next-line
    },[id])
  
    return (
      <>
        <VerticalMenu showVert={showVert} idioma={idioma} handleMenuClick={handleMenuClick}/>
        
        <section className='MenuSubSection'>
        <button className='boton-Vuelta'><Link to={"/"}>{idioma==="es" ? "Volver al menú" : "Back to main"}</Link></button>
          {subMenu ?
            (datos && <MenuList idioma={idioma} data={datos}/>) :
            (datos && (datos.map((e)=>{
              return(
                <MenuList idioma={idioma} data={e}/>
                )
              }))
              )
            }
            
        </section>
          </>
    )
}

export default MenuSubSection