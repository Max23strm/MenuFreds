
import {FoodCard} from '../index'
import './MenuList.css'
const MenuList = ({idioma, data}) => {
  return (
    <section className='listSection'>
      <h3 className='sectionName' id={data.id || null}>{data.nombre[idioma]}</h3>
      {data.sub1 && <h4 className='sectionSub1'>{data.sub1[idioma]}</h4>}
      {data.sub2 && <h5 className='sectionSub2'>{data.sub2[idioma]}</h5>}
      <div className='foodSection'>

        {data.platos.map((e,i)=>{
          return(
            <FoodCard key={i} data={e} idioma={idioma}/>
            )
          })}
      </div>
    </section>
  )
}

export default MenuList