import * as PropTypes from "prop-types";
import CardObject from "./CardObject.jsx";
import {Component} from "react";

class ShopItemClass extends Component{
    constructor(props) {
        super(props);
        this.brand = props.item.brand;
        this.title = props.item.title;
        this.description = props.item.description;
        this.descriptionFull = props.item.descriptionFull;
        this.currency = props.item.currency;
        this.price = props.item.price;
    }

    render(){
        return (
            <div className="main-content">
                <h2>{this.brand}</h2>
                <h1>{this.title}</h1>
                <h3>{this.description}</h3>
                <div className="description">{this.descriptionFull}</div>
                <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{this.currency}{this.price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }

}
ShopItemClass.propTypes = {
    item: PropTypes.instanceOf(CardObject)
};

ShopItemClass.defaultProps = {
    item: {
        brand: 'Бренд',
        title: 'Товар',
        description: 'Описание',
        descriptionFull: 'Полное описание',
        price: 0,
        currency: '£'
    }
};
export default ShopItemClass;