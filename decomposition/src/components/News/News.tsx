import { Col, Container, Row } from "react-bootstrap";
import Promotions from "../Promotions/Promotions";
import NewsBlock from "./NewsBlock/NewsBlock";
import ExchRatesBlock from "./ExchRatesBlock/ExchRatesBlock";

export default function News() {
    return (
        <Col>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    <NewsBlock/>
                                </Col>
                                <Col>
                                    <ExchRatesBlock/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Promotions />
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}