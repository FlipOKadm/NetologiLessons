import { Component } from "react";
import * as PropTypes from "prop-types";
import ShopCard from "./ShopCard";
import Col from 'react-bootstrap/Col';

class CardsView extends Component{
    constructor(props){
        super(props);
        this.cards = props.cards
    }
    
    render(){
        return(
            <>
            {this.cards && this.cards.map((card, index) => (
                <Col lg={4} className="d-flex justify-content-center align-items-center mb-2" key={index}>
                <ShopCard key={index} name={card.name}  price={card.price} color={card.color} img={card.img}/>
                </Col>
            ))
            }
            </>
        );
    }
}

CardsView.propTypes={
    cards: PropTypes.array
}

export default CardsView