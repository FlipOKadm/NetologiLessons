import * as PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ShopCard({name,price,color,img}){
    return(
        <Card className="text-center" style={{ width: '20rem', backgroundColor:'#f5f5f5' }}>
            
            <Card.Body>
                <Card.Title className="text-uppercase">{name}</Card.Title>                
                <Card.Text>
                {color}
                </Card.Text>
                <Card.Img variant="top" src={img} style={{ maxWidth: '70%', height:'auto' }}/>
            </Card.Body>
            <Card.Body className="align-middle">
                <Card.Text className="d-flex justify-content-between align-items-center pb-2 mb-1 text-danger" style={{fontSize: "20px"}}>
                    ${price}
                <Button variant="outline-danger" className="rounded-5">Go somewhere</Button>
                </Card.Text>
                
            </Card.Body>
            </Card>
    )
}

ShopCard.propTypes={
    name: PropTypes.string,
    price:PropTypes.string,
    color:PropTypes.string,
    img:PropTypes.string
}

export default ShopCard