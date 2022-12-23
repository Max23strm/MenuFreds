
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MenuList, VerticalMenu } from '..'

import './MainMenuSection.css'

const MainMenuSection = ({idioma, data, showVert, handleMenuClick}) => {
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
  },[])

  return (
    <>
      <VerticalMenu showVert={showVert} idioma={idioma} handleMenuClick={handleMenuClick}/>

      <section className='MainMenuSection'>
        {subMenu ?
          (datos && <MenuList idioma={idioma} data={datos}/>) :
          (datos && (datos.map((e, i)=>{
            return(
              <MenuList idioma={idioma} data={e} key={i}/>
              )
            }))
            )
          }
          
      </section>
        </>
  )
}

export default MainMenuSection