import * as PropTypes from "prop-types";
import {Col, Image, Button} from 'react-bootstrap';
function ShopItem({name,price,color,img}){
    return(
        <>
            <Col lg={1}><Image src={img} style={{width:"100%"}} rounded /></Col>
            <Col lg={3} className="text-uppercase fs-2 fw-bold">{name}</Col>
            <Col lg={3} >{color}</Col>
            <Col lg={3} >{price}</Col>            
            <Col lg={1} > <Button variant="outline-danger" className="rounded-5">Go somewhere</Button></Col>
            </>
    )
}

ShopItem.propTypes={
    name: PropTypes.string,
    price:PropTypes.string,
    color:PropTypes.string,
    img:PropTypes.string
}

export default ShopItem