import { v4 } from "uuid";
import {CarsContainer, CarsContainerH1, CarCard, CarBrand, CarPrice, CarFuel} from "./styles"
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
    <CarCard key={v4()}>
      <CarBrand> Модель : {car.brand}</CarBrand>
      <CarPrice> Цена : {car.price}</CarPrice>
      <CarFuel>
        Тип топлива : {car.isDiesel ? "Дизель" : "Бензин"}
      </CarFuel>
    </CarCard>
  );
});

function Homework_06() {
  return (
    <CarsContainer>
      <CarsContainerH1>Список автомобилей</CarsContainerH1>
      {carsCard}
    </CarsContainer>
  );
}

export default Homework_06;
