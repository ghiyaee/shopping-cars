import { useState } from "react";
import ListCars from "./ListCars";
import data from "../data";
import Card from "./Card";
import "../styles/main.css";
const Main = ({addHandel}) => {
    return (
      <section>
        {data.map((car) => (
          <Card key={car.id} cars={car} addHandel={addHandel} />
        ))}
      </section>
    );

};
export default Main;
