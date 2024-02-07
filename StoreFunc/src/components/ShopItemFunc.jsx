import * as PropTypes from "prop-types";
import CardObject from "./CardObject.jsx";

function ShopItemFunc(props) {
    /*PropTypes.checkPropTypes(ShopItemFunc.props, props,'props','ShopItemFunc')*/


    return (
        <div className="main-content">
            <h2>{props.item.brand}</h2>
            <h1>{props.item.title}</h1>
            <h3>{props.item.description}</h3>
            <div className="description">{props.item.descriptionFull}</div>
            <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{props.item.currency}{props.item.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
}
ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(CardObject)
};

ShopItemFunc.defaultProps = {
    item: {
        brand: 'Бренд',
        title: 'Товар',
        description: 'Описание',
        descriptionFull: 'Полное описание',
        price: 0,
        currency: '£'
    }
};
export default ShopItemFunc;