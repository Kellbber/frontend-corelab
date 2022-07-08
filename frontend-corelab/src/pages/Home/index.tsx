import AddButton from "../../components/AddButton";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Car } from "../../types/Car-type";
import { carsApi } from "../../services/api";
import { CardCar } from "../../components/CardCar";
const Home = () => {
  const [cars, setCars] = useState<Car[]>();
const navigate= useNavigate();
function goToAdd(){
  navigate('/create')
}

async function getCars(){
  const carList = await carsApi.getCars();
  setCars(carList);
}

useEffect(()=>{
  getCars();
},[]);
  return (
    <S.Home>
      <S.HomeContent>
        <S.HomeContentSearch>
          <S.HomeSearch>
            <img />
            <input type="text" placeholder="Buscar" />
          </S.HomeSearch>
          <S.HomeEqualizer>
            <img />
          </S.HomeEqualizer>
          

     
        </S.HomeContentSearch>
        <S.HomeButton onClick={goToAdd} >
          <AddButton />
        </S.HomeButton>
        <S.HomeCarList>
          {cars?.map((car)=>{
            return <CardCar car={car} key={car.id}/>
          })}
            
            </S.HomeCarList>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
