import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import { Header, Footer, MainMenuSection } from '../components'

const Rutas = ({data, idioma, changeIdioma,handleMenuClick,showVert}) => {
  
  return (
    <BrowserRouter >
        <Header data={data.header} changeIdioma={changeIdioma} idioma={idioma} handleMenuClick={handleMenuClick}/>
        <Switch>
            <Route
              path="/menu"
              exact 
              children={
                <MainMenuSection showVert={showVert} idioma={idioma} data={data} handleMenuClick={handleMenuClick}/>
              }
            />

            <Route 
              path="/:id" 
              children={
                <MainMenuSection showVert={showVert} idioma={idioma} data={data} handleMenuClick={handleMenuClick}/>
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