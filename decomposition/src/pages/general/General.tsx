import { Row, Container, Col } from 'react-bootstrap';
import Logo from '../../components/Logo/Logo';
import Space from '../../components/Space/Space';


/**
 * 
 * Главная страница. 
 */

export default function General() {
    return(
        <>
            <Container>
                <Row>
                    <Col xs={12} md={2}>
                        <Logo/>
                    </Col>
                    <Col xs={12} md={8}>
                        <Space />
                    </Col>
                </Row>
            </Container>
        </>
    )
}