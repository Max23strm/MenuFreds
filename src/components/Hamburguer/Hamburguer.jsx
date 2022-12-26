import './Hamburguer.css'
const Hamburguer = ({showVert}) => {
  return (
    <div id="nav-icon4" className={`${showVert? "open": null}`}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Hamburguer