import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ListCars from "./components/ListCars";
import Footer from "./components/Footer";
const App = () => {
    const [show, setShow] = useState(true)
    const [card, setCart] = useState([]);
    const [basket,setBasket]=useState(0)
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
        return (
            <>
                <Header setShow={setShow} basket={ basket} />
                {show ? <Main addHandel={addHandel} /> : <ListCars card={card} setCart={setCart} handelChange={handelChange} />}
                 <Footer/>
            </>
        )
    
}
export default App;