
import { useEffect, useState } from 'react';
import './App.css';
import Rutas from './routes/Rutas';
import { Loader } from './components';

function App() {
  const [idioma, setIdioma] = useState("es")
  const [showVert, setShowVert] = useState(false)
  const changeIdioma=()=>{
    idioma==="es"? setIdioma("en") : setIdioma("es")
  } 
  const handleMenuClick=()=>{
    setShowVert(!showVert)
  }
  
   const [data, setData] = useState({})
   function getData() {
     return fetch('https://macariorestaurant.com/prueba/data.json', {
       'mode': 'cors',
       'headers': {
           'Access-Control-Allow-Origin': '*',
       }
     })
     .then((response) => response.json())
     .then((responseJson) => {
       setData(responseJson)
     })
     .catch((error) => {
       console.error(error);
     });
  }
   useEffect(()=>{
     getData()
    
   },[])

  return (
    <div className="App">
      {data.menu ? 
      <Rutas data={data} idioma={idioma} changeIdioma={changeIdioma} showVert={showVert} handleMenuClick={handleMenuClick} />
      :
      <Loader/>
      }
    </div>
  );
}

export default App;
