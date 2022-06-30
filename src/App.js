import { useState,useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ListCars from "./components/ListCars";
import Footer from "./components/Footer";
import data from "./data";
import "./styles/app.css"
const App = () => {
    const [scroll,setScroll]=useState(false)
    const [show, setShow] = useState(true)
    const [card, setCart] = useState([]);
    const [basket, setBasket] = useState(0)
    const addHandel = (item) => {
        if (card.indexOf(item) === -1) {
            setCart([...card, item]);
            setBasket(basket+1)
         }
    }
    const handelChange = (item, d) => {
        const ind = card.indexOf(item);
        const arr = card;
        arr[ind].conter += d
        if(arr[ind].conter===0) arr[ind].conter=1
        setCart([...arr])
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
              setScroll(true)
            } else {
                setScroll(false)
          }
      })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
    const searchHandel = (e) => {
        const car = data.map(car => {
          return  car.brand===e
        })
        console.log(car);
 }
        return (
            <>
                {scroll &&(<i className="fa-solid fa-angle-up scroll__up" onClick={scrollUp}></i>) }
                <Header setShow={setShow} basket={basket} searchHandel={ searchHandel} />
                {show ? <Main addHandel={addHandel} /> : <ListCars card={card} setCart={setCart} handelChange={handelChange} setBasket={setBasket} basket={basket } />}
                <Footer />
            </>
        )
    
}
export default App;