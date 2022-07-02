import { useState } from "react";
import ListCars from "./ListCars";
import data from "../data";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "../styles/main.css";
const Main = ({ addHandel, srch }) => {
  let list = 0;
  if (srch.length) {
    list = srch.map((car) => {
      return <Card key={car.id} cars={car} addHandel={addHandel} />;
    });
  } else {
    list = data.map((car) => {
      return <Card key={car.id} cars={car} addHandel={addHandel} />;
    });
  }

  return (
    <section>
      {/* {data.map((car) => (
        <Card key={car.id} cars={car} addHandel={addHandel} />
      ))} */}
      {list}
   
    </section>
  );
};
export default Main;
