import { Component } from "react";
import {Row} from 'react-bootstrap';
import * as PropTypes from "prop-types";
import ShopItem from "./ShopItem";

class ListView extends Component{
    constructor(props){
        super(props);
        this.cards = props.cards
    }
    
    render(){
        return(
            <>
            {this.cards && this.cards.map((card, index) => (
                <Row key={index} className="row d-flex text-center align-items-center mb-1" style={{backgroundColor:'#f5f5f5'}}>
                <ShopItem key={index} name={card.name}  price={card.price} color={card.color} img={card.img}/>
                
                </Row>
            ))
            }
            </>
        );
    }
}

ListView.propTypes={
    cards: PropTypes.array
}

export default ListView