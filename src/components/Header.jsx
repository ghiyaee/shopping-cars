import "../styles/header.css";
import SearchBar from "./SearchBar";
import { useState,useEffect } from "react";
const Header = ({ setShow, basket, searchHandel }) => {
  const [searchShow, setSearchShow] = useState(true)
  const[list,setList]=useState(false)
  const showHandel = () => {
    if (!searchShow) {
      setSearchShow(true)
    } else {
      setSearchShow(false)
     }
  }
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
          <i className="fa-solid fa-list-ul "></i>
          <h2>Cars</h2>
        </span>
        <div className={`list-cars ${list ? "show" : "hiden"}`}>
          <ul>
            <li>BENZ</li>
            <li>FORD</li>
            <li>BMW</li>
            <li>NISSAN</li>
            <li>TOYOTA</li>
            <li>KIA</li>
            <li>HYUNDAI</li>
            <li>PORSCHE</li>
            <li>RENAULT</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
