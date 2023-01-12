import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MenuList, VerticalMenu } from '..'
import Back from '../../assets/img/backSvg/Back'

import './MenuSubSection.css'


const MenuSubSection = ({idioma, data, showVert, handleMenuClick}) => {
    const [datos, setDatos] = useState([])
  
    let id= useParams().id
    useEffect(()=>{ 
      setDatos([])
      if(!id){
        setDatos([...data.menu])
      }  else{
        data.menu.forEach((e,index)=>{
          if(e.id===id){
            console.log(e)
            setDatos(current => [...current, e])
            
          }
        })
      }
      window.scrollTo(0,0)
      //eslint-disable-next-line
    },[id])
    return (
      <>
        <VerticalMenu showVert={showVert} idioma={idioma} handleMenuClick={handleMenuClick}/>
        
        <section className='MenuSubSection'>
        <button className='boton-Vuelta'><Link to={"/"}> <Back/>{idioma==="es" ? " menú" : " main"}</Link></button>
          <MenuList idioma={idioma} data={datos}/>
          {/* {subMenu ?

            
            :

            (datos && (datos.map((e)=>{
              return(
                <MenuList idioma={idioma} data={e}/>
                )
              }))
              )
            } */}
            
        </section>
          </>
    )
}

export default MenuSubSection