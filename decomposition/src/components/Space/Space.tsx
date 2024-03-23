import { Container, Row } from "react-bootstrap";
import News from "../News/News";
import Promotions from "../Promotions/Promotions";
import Search from "../Search/Search";

export default function Space() {
    return (
        <>
        <Container>
            <Row>
                <News />
                <Promotions/>
            </Row>
            <Row>
                <Search/>
            </Row>
            <Row>
                <Promotions />
            </Row>
            <Row>

            </Row>
        </Container>
        </>
    )
}