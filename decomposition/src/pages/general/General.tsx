import { Row, Container, Col } from 'react-bootstrap';
import Logo from '../../components/Logo/Logo';

export default function General() {
    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} md={2}>
                        <Logo/>
                    </Col>
                    <Col xs={12} md={8}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}