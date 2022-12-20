import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import "./FoodCard.css"
const FoodCard = ({data, idioma}) => {
  const [card, setCard] = useState("foodCard")
  const url=useLocation().pathname
  useEffect(()=>{
    if(url==="/mixologia"){
      setCard("mixCard")
    } else{
      setCard("foodCard")
    }
  },[url])
  return (
    <div className={`${card}${data.tipo}`}>
      <div className={`textArea`}>
        <h3>{data.nombre[idioma]}</h3>
        {data.qty && (<p className='qty'>{data.qty[idioma]}</p>)}
        {data.descripcion && (Array.isArray(data.descripcion[idioma])?(
          <p className='desc'>{data.descripcion[idioma][0]}
          <ul>
          {data.descripcion[idioma].map((e,i)=>{
            return <li key={i}>{e}</li>
          })}
          </ul>
          </p> 
        ):<p className='desc'>{data.descripcion[idioma]}</p>)}
        {data.extra ? (
          <div className='extraSection'>
            {data.extra[idioma][0] && <p className='extraStart'>{`${data.extra[idioma][0]}:`}</p>}
            <ul>
              {data.extra[idioma][1].map((e,i)=>{
                return(
                  <li key={i} className="extraFoodCard">
                    <p>{e.variedad}</p>
                    <p>{e.precio}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        ):null}
        {data.precio && <h3 className='pres'>{`$${data.precio}`}</h3>}
      </div>
      <div className={`foodArea`}>
        {data.img ?<img src={data.img} alt="" /> :<video src={data.video} autoPlay muted loop/>}
      </div>
    </div>
  )
}

export default FoodCard