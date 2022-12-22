
import { useState } from 'react';
import './App.css';
import Rutas from './routes/Rutas';

function App({data}) {
  const [idioma, setIdioma] = useState("es")
  const [showVert, setShowVert] = useState(false)
  const changeIdioma=()=>{
    idioma==="es"? setIdioma("en") : setIdioma("es")
  } 
  const handleMenuClick=()=>{
    setShowVert(!showVert)
  }
  
  return (
    <div className="App">
      <Rutas data={data} idioma={idioma} changeIdioma={changeIdioma} showVert={showVert} handleMenuClick={handleMenuClick} />
    </div>
  );
}

export default App;
