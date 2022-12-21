
// import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import { MenuList } from '..'

import './MainMenuSection.css'

const MainMenuSection = ({idioma, data}) => {
  // const [datos, setDatos] = useState([])
  let {id}= useParams()
  // setDatos()
  return (
    <section className='MainMenuSection'>
        <h1>{id}</h1>
        {/* {datos && datos.map((e,i)=>{
            return(
                <MenuList idioma={idioma} data={e} key={i}/>
            )
        })} */}
    </section>
  )
}

export default MainMenuSection