import "../styles/header.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { logDOM } from "@testing-library/react";
const Header = ({ setShow, basket, searchHandel }) => {
  const [searchShow, setSearchShow] = useState(false)

  const showHandel = () => {
    if (!searchShow) {
      setSearchShow(true)
    } else {
      setSearchShow(false)
     }
  }
  
  return (
    <>
      <nav className="nav__container">
        <div className="nav__box">
          <div className="nav__logo" onClick={() => setShow(true)}>
            <i className="fa-solid fa-store icon"></i>
            Shopping Cars
          </div>
          <div className="icone">
            <div className="iconSearch">
              <i
                className="fa-solid fa-magnifying-glass icons"
                onClick={showHandel}
              ></i>
            </div>

            <div className="nav__basket" onClick={() => setShow(false)}>
              <span>
                <i className="fa-solid fa-cart-arrow-down"></i>
              </span>
              <span>{basket}</span>
            </div>
          </div>
        </div>
        {/* <SearchBar /> */}
        <div className={`input ${searchShow ? 'show' : 'hiden'} `}>
          <input
            placeholder="Searchbar"
            onChange={(e) => searchHandel(e.target.value)}
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
