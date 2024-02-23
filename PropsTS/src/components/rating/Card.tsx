import { FC, useState } from "react"
import { IFilms } from "../../models/interface"
import classes from "../rating/card.module.css";
import { Stars } from "./Stars";
import Button from 'react-bootstrap/Button';
import { Like } from "../../shared/like/Like";

interface IFilm {
    item: IFilms
}


export const Card: FC<IFilm> = ({item}) => {
    const { name, rating, price, type, image, description } = item;
    const [like, setLike] = useState<number>(0);
    const onLike = () => {
        setLike(like + 1);
        
    };
    // const onDislike = () => {
    //     setLike(like - 1);
    // };

    const descriptionSlice:string = description?.slice(0, 100) + '...';

    return(
        <>
        <div className={classes.item}>
            <div className={classes["item-image"]}>
                    <img src={image} alt={name} />
                    <div className={classes["item-type"]}>{type}</div>
            </div>
            <div className={classes["item-details"]}>
                <div><h2>{name}</h2></div>
                <div className={classes["item-description"]}>{descriptionSlice}</div>
                <div>
                    <Stars rating={rating} />
                </div>
                <div>
                    <Button variant="secondary">Купить {price}</Button>
                    <Button variant="link">Подробнее</Button>
                </div>
            </div>
            <div><Like onLike={onLike} like={like} /></div>
            
        </div>
        </>
    );
}