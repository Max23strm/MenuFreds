import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import { Header, Footer, MainMenuSection } from '../components'

const Rutas = ({data, idioma, changeIdioma}) => {
  
  return (
    <BrowserRouter >
        <Header data={data.header} changeIdioma={changeIdioma} idioma={idioma}/>
        <Switch>
            <Route
              path="/"
              exact 
              children={
                <MainMenuSection idioma={idioma} data={data}/>
              }
            />

            <Route 
              path="/:id" 
              children={
                <MainMenuSection idioma={idioma} data={data}/>
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