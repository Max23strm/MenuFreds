import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import { Header, Footer, MainMenuSection, MenuSubSection } from '../components'

const Rutas = ({data, idioma, changeIdioma,handleMenuClick,showVert}) => {
  
  return (
    <BrowserRouter basename='/build'>
        <Header data={data.header} changeIdioma={changeIdioma} idioma={idioma} handleMenuClick={handleMenuClick} showVert={showVert}/>
        <Switch>
            <Route
              path="/"
              exact 
              children={
                <MainMenuSection showVert={showVert} idioma={idioma} data={data} handleMenuClick={handleMenuClick}/>
              }
            />

            <Route 
              path="/menu/:id" 
              children={
                <MenuSubSection showVert={showVert} idioma={idioma} data={data} handleMenuClick={handleMenuClick}/>
              }
            />

            {/* <Route 
              path="/mixologia" 
              children={
                <MainMenuSection idioma={idioma} data={data.Mixologia}/>
              }
            /> */}
        </Switch>
        <Footer/>
        </BrowserRouter>
  )
}

export default Rutas