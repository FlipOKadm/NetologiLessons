import { Container, Row } from "react-bootstrap";
import News from "../News/News";
import Promotions from "../../shared/Promotions/Promotions";
import Search from "../Search/Search";
import RandomBlocksContent from "../RandomBlocksContent/RandomBlocksContent";

 /**
  * Компонент основного пространства разделен на 4 линии.
  * 1. Новости и реклама;
  * 2. Поисковая строка;
  * 3. Реклама;
  * 4. Рандомные блоки с контентом;
  */
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
                <RandomBlocksContent/>
            </Row>
        </Container>
        </>
    )
}