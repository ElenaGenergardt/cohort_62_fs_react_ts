import { v4 } from "uuid";
import "./styles.css";
import {type Car} from "./types"

const cars: Car[] = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 50000, isDiesel: true },
];

const carsCard = cars.map((car : Car) => {
  return (
    <div key={v4()} className="car_card">
      <h2 className="car_brand">Модель : {car.brand}</h2>
      <p className="car_price">Цена : {car.price}</p>
      <p className="car_fuel">
        Тип топлива : {car.isDiesel ? "Дизель" : "Бензин"}
      </p>
    </div>
  );
});

function Homework_06() {
  return (
    <div className="cars_container">
      <h1>Список автомобилей</h1>
      {carsCard}
    </div>
  );
}

export default Homework_06;
