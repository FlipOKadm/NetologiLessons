import { FC } from "react";
import { Star } from "./Star";
import classes from "./card.module.css"

interface IStar{
    rating: number
}

export const Stars: FC<IStar> = ({rating}) => {
    return (
        <ul className={classes["card-body-stars"]}>
            {rating<=5 &&[...Array(rating)].map((_, index) => <Star key={index} />)}
        </ul>
    )
    
}