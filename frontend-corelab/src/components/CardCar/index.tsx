import { Dispatch, SetStateAction } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Car } from "../../types/Car-type";
import { CardStyle, CardIcons } from "./style";
import { useNavigate } from "react-router-dom";

import { carsApi } from "../../services/api";

export function CardCar(props: {car: Car, setControl:Dispatch<SetStateAction<boolean>>}){
    let navigate = useNavigate();
    function goToEdit(){
        navigate('/update')
    }
   async function deleteCar(){
        try{
        await carsApi.deleteCar(props.car.id??"")
        props.setControl(true);
        }catch(err){
          alert(err)
        }
    }
    async function FavoriteCar(){

        try{
            await carsApi.favoriteCar(props.car??"")
            props.setControl(true);
        }catch(error){
            alert(error)
        }
    }
    return(


        <CardStyle cardColor={props.car.color}>
        <CardIcons >
        <button onClick={goToEdit}><AiOutlineEdit size={25} color="black"/></button>
        <button onClick={()=>deleteCar()}><AiFillDelete size={25} color="black"/></button>
        <button onClick={()=>FavoriteCar()}>{props.car.isFavorite?<AiFillHeart size={25} color="red"/>:<AiOutlineHeart color="red" size={25}/>}</button>
        </CardIcons>

            <h2>{props.car.name}</h2>
            <span>{props.car.description}</span>
        </CardStyle>
        
    )
}