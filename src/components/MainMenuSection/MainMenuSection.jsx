
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MenuList, VerticalMenu } from '..'

import './MainMenuSection.css'

const MainMenuSection = ({idioma, data, showVert, handleMenuClick}) => {
  const [datos, setDatos] = useState([])
  const [subMenu, setSubMenu] = useState(false)

  let id= useParams().id
  useEffect(()=>{
    setDatos([...data.menu])
    //eslint-disable-next-line
  },[])

  return (
    <>
      <VerticalMenu showVert={showVert} idioma={idioma} handleMenuClick={handleMenuClick}/>

      <section className='MainMenuSection'>
        
        {datos && <MenuList idioma={idioma} data={datos}/>} 
          
      </section>
        </>
  )
}

export default MainMenuSection