import { Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import products from "../assets/products.json"
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
ListView

class Store extends Component{
    constructor(props){
        super(props);
        this.products = products;
        this.state = {position: "view_module"}
    }

    

    render(){
        const onSwitchSet = () => {
            this.setState(prevState => ({
            position: prevState.position == "view_list" ? "view_module" : "view_list"
            }));
        }
        return(
        <Container fluid>
            <Row className=" mx-4">
            <Col className="d-flex justify-content-end"><IconSwitch onSwitch={onSwitchSet} icon={this.state.position}/></Col>
            </Row>
            <Row className="d-flex justify-content-center  mx-4">
                {this.state.position == "view_module" ? <CardsView cards={this.products}/> : <ListView cards={this.products}/>}                
            </Row>
        </Container>
        )
    }
}

export default Store