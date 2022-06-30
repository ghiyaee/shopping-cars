import "../styles/header.css";
import SearchBar from "./SearchBar";
const Header = ({ setShow, basket ,searchHandel}) => {
  return (
    <>
      <nav className="nav__container">
        <div className="nav__box">
          <div className="nav__logo" onClick={() => setShow(true)}>
            <i className="fa-solid fa-store icon"></i>
            Shopping Cars
          </div>
          <div className="nav__basket" onClick={() => setShow(false)}>
            <span>
              <i className="fa-solid fa-cart-arrow-down"></i>
            </span>
            <span>{basket}</span>
          </div>
        </div>
        {/* <SearchBar /> */}
        <div className="input">
          <input placeholder="Searchbar" onChange={(e)=> searchHandel(e.target.value)} />
          {/* <i class="fa-solid fa-magnifying-glass "></i> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
