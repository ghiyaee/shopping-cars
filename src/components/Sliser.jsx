import { useState, useEffect } from "react";
// import Shopping from "./Shopping"
import "../styles/slider.css";
const Slider = ({ img }) => {
  let [imgCurrent, setImag] = useState(0);
  const slide = {
    backgroundImage: ` url(${img[imgCurrent].img})`,
  };
  const goToPerv = () => {
    imgCurrent > 0 ? setImag(imgCurrent - 1) : setImag(img.length - 1);
  };
  const goToNext = () => {
    imgCurrent < img.length - 1
      ? setImag(imgCurrent + 1)
      : setImag((imgCurrent = 0));
  };
  const dotHandel = (index) => {
    setImag(index);
  };

  useEffect(() => {
    const resetTime = setInterval(() => {
      goToNext();
    }, 4500);
    return () => {
      clearInterval(resetTime);
    };
  }, [imgCurrent]);
  return (
    <>
      <div className="wrrap">
        <div className="arrow-left" onClick={goToPerv}>
                  {/* <i className="fa-solid fa-circle-left"></i> */}
                  {'<'}
        </div>
        <div className="arrow-right" onClick={goToNext}>
                  {/* <i className="fa-solid fa-circle-right"></i> */}
                  {'>'}
        </div>
        <div className="slideStyle" style={slide}></div>
        <div className="dotStyle">
        </div>
      </div>
    </>
  );
};
export default Slider;
