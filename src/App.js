
import { useState } from 'react';
import './App.css';
import Rutas from './routes/Rutas';

function App({data}) {
  const [idioma, setIdioma] = useState("es")
  const changeIdioma=()=>{
    idioma==="es"? setIdioma("en") : setIdioma("es")
  } 
  
  return (
    <div className="App">
      <Rutas data={data} idioma={idioma} changeIdioma={changeIdioma}/>
    </div>
  );
}

export default App;
