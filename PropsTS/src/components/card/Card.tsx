import classes from './card.module.css'
import { IProduct } from '../../models/interface';
import { FC } from 'react';

interface ICard {
    item: IProduct
}

export const Card: FC<ICard> = ({item}) => {
    const { url, MainImage, title, currency_code, price, quantity } = item;
    const quantityLevel:string = quantity && quantity <= 10 ? 'low' : quantity && quantity <= 20 ? 'medium' : 'high';
    const titleSlice:string = title?.slice(0, 50) + '...';
    const currencyCodeChar:string | undefined = currency_code && ['USD','CAD'].includes(currency_code) ? '$' : currency_code === 'EUR'?'€':currency_code;// for GBP use '£';

    return (
        <div className={classes.item}>
            <div className={classes["item-image"]}>
                <a href={url}>
                    <img src={MainImage?.url_570xN} />
                </a>
            </div>
            <div className={classes["item-details"]}>
                <p className={classes["item-title"]}>{titleSlice}</p>
                <p className={classes["item-price"]}>{currencyCodeChar}{price}</p>
                <p className={`${classes["item-quantity"]} ${classes[`level-${quantityLevel}`]}`}>{quantity} left</p>
            </div>
        </div>
    )
}
