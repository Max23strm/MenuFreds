
import { MenuList } from '..'

import './MainMenuSection.css'

const MainMenuSection = ({idioma, data}) => {
  return (
    <section className='MainMenuSection'>

        {data.map((e,i)=>{
            return(
                <MenuList idioma={idioma} data={e} key={i}/>
            )
        })}
    </section>
  )
}

export default MainMenuSection