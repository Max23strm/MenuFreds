
import {FoodCard} from '../index'
import './MenuList.css'
const MenuList = ({idioma, data}) => {
  console.log(data)
  return (
    data && data.map((e,i)=>{
      return(
         <section className='listSection' key={i}>
           <h3 className='sectionName' id={e.id || null}>{e.nombre[idioma]}</h3>
           {e.sub1 && <h4 className='sectionSub1'>{e.sub1[idioma]}</h4>}
           {e.sub2 && <h5 className='sectionSub2'>{e.sub2[idioma]}</h5>}
           <div className='foodSection'>

             {e.platos.map((j,l)=>{
               return(
                 <FoodCard key={l} data={j} idioma={idioma}/>
                 )
               })}
           </div>
         </section>

      )
    })

  )
}

export default MenuList