import '../styles/header.css'
const Header = ({setShow}) => {
    return (
      <nav className="nav__container">
        <div className="nav__box">
          <div className="nav__logo" onClick={()=> setShow(true)}>
            Shopping Cars
          </div>
          <div className="nav__basket" onClick={()=>setShow(false)}>
            <span>
              <i className="fa-solid fa-cart-arrow-down"></i>
            </span>
            <span>10</span>
          </div>
        </div>
      </nav>
    );
}
 
export default Header;