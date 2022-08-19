import "../styles/header.css";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
const Header = ({ setShow, basket, filter_car_Handel, filter_cars_Handel }) => {
  const [searchShow, setSearchShow] = useState(true);
  const [list, setList] = useState(false);
  const showHandel = () => {
    if (!searchShow) {
      setSearchShow(true);
    } else {
      setSearchShow(false);
    }
  };
  const listHandel = () => {
    if (!list) {
      setList(true);
    } else {
      setList(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setList(false);
      }
    });
  }, []);
  const hiden = { transform: ' translateY(-120px)' }

  return (
    <>
      <nav className="nav__container">
        <div className="nav__box">
          <div className="nav__logo" onClick={() => setShow(true)}>
            <i className="fa-solid fa-store icon"></i>
            Shopping Cars
          </div>

          <div className="icone">
            <div className="nav__basket" onClick={() => setShow(false)}>
              <span>
                <i className="fa-solid fa-cart-arrow-down"></i>
              </span>
              <span>{basket}</span>
            </div>
          </div>
        </div>
        {/* <SearchBar /> */}
        {/* <div className={`input ${searchShow ? "show" : "hiden"} `}>
          <input
            placeholder="Searchbar"
            onChange={(e) => searchHandel(e.target.value)}
          />
          <div className="iconSearch">
            <i className="fa-solid fa-magnifying-glass icons" onClick={""}></i>
          </div>
        </div> */}
        <span className="list__cars" onClick={() => listHandel()}>
          {/* <i class="fa-solid fa-list-ol"></i> */}
          <h2>ListCars</h2>
        </span>
        {/* //${list ? "show" : "hiden"} */}
        <div className={`list-cars ${list ? 'show' : hiden} `}>
          <ul>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              BENZ
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              FORD
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              BMW
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              NISSAN
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              TOYOTA
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              KIA
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              HYUNDAI
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              PORSCHE
            </li>
            <li onClick={(e) => filter_car_Handel(e.target.textContent)}>
              RENAULT
            </li>
            <li onClick={(e) => filter_cars_Handel(e.target.textContent)}>
              <i className="fa-solid fa-arrow-rotate-left"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
