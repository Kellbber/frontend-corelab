import SaveButton from "../SaveButton";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { carsApi } from "../../services/api";
import { v4 as uuidv4 } from "uuid";
import { Car } from "../../types/Car-type";
import React from "react";
const ModalCreate = () => {
  let navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newCar: Car = {
      name: event.currentTarget.Name.value,
      year: parseInt(event.currentTarget.year.value),
      price: parseFloat(event.currentTarget.price.value),
      color: event.currentTarget.color.value,
      brand: event.currentTarget.brand.value,
      license: event.currentTarget.license.value,
      description: event.currentTarget.description.value,
    };
    console.log(newCar)
    await carsApi.postCar(newCar);
    goToStart()
    
  }
  function goToStart() {
    navigate("/");
  }
  return (
    <S.BoxModal>
      <S.modalCreateBack>
        <img onClick={goToStart} />
      </S.modalCreateBack>
      <S.BoxModalForm1 onSubmit={handleSubmit}>
        <label htmlFor="Name">Nome:</label>
        <input type="text" name="Name" id="Name" />

        <label htmlFor="brand">Marca:</label>
        <input type="text" name="brand" id="brand" />

        <label htmlFor="price">Preço:</label>
        <input type="number" name="price" id="preço" />

        <label htmlFor="color">Cor:</label>
        <input type="text" name="color" id="color" />

        <label htmlFor="year">Ano:</label>
        <input type="number" name="year" id="year" />

        <label htmlFor="license">Placa:</label>
        <input type="text" name="license" id="license" />

        <label htmlFor="description">Descrição:</label>
        <input type="text" name="description" id="description" />
        <SaveButton />
      </S.BoxModalForm1>
    </S.BoxModal>
  );
};

export default ModalCreate;
