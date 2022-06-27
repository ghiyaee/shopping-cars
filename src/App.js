import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
    const [show, setShow] = useState(true)
     const [card, setCart] = useState([]);
     const addHandel = (item) => {
         setCart([...card, item]);
     }
        return (
            <>
                <Header setShow={setShow} />
                {show? <Main addHandel={addHandel} />:'card'}
            </>
        )
    
}
export default App;