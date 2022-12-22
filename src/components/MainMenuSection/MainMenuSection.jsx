
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MenuList } from '..'

import './MainMenuSection.css'

const MainMenuSection = ({idioma, data}) => {
  const [datos, setDatos] = useState([])
  const [subMenu, setSubMenu] = useState(false)
  let {id}= useParams()
  useEffect(()=>{
    if(!id){
      setDatos(data.menu)
      setSubMenu(false)
    } else if(id === "postres" || id === "mixologia"){
      setDatos(data[id])
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
  },[])
  return (
    <section className='MainMenuSection'>
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
  )
}

export default MainMenuSection