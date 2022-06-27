
const Card = ({ cars,addHandel }) => {
    return (
        <div className="cards">
            <div className="img_box">
                <img src={cars.img} alt="" />
            </div>
            <div className="details">
                <p>{cars.brand}</p>
                <p>{cars.model}</p>
                <p>$ {cars.price}</p>
                <button onClick={()=>addHandel(cars)}>ADD TO CART</button>
            </div>
        </div>
      );
}
 
export default Card;