import '../styles/header.css'
const Header = () => {
    return (
      <nav className="nav__container">
        <div className="nav__box">
          <div className="nav__logo">Shopping Cars</div>
          <div className="nav__basket">
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