import { Car } from "../../types/Car-type";
import { CardStyle } from "./style";

export function CardCar(props: {car: Car}){
    return(
        <CardStyle cardColor={props.car.color}>
            <h2>{props.car.name}</h2>
            <span>{props.car.description}</span>
        </CardStyle>
    )
}