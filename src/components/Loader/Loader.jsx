import logo from '../../assets/img/fredsLogo.png'

import './Loader.css'
const Loader = () => {
  return (
    <div className='loaderDiv'>
        <img src={logo} alt="" />
        <p>
        Loading...

        </p>
    </div>
  )
}

export default Loader