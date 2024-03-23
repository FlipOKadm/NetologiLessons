import { Col, Container, Row } from "react-bootstrap";
import Promotions from "../../shared/Promotions/Promotions";
import NewsBlock from "./NewsBlock/NewsBlock";
import ExchRatesBlock from "../ExchRatesBlock/ExchRatesBlock";
/**
 * Основной блок с новостями. Разделен на два блока.
 * 1. Новости и курс валют;
 * 2. Реклама;
 */
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