import { CustomLink } from "./CustomLink";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export function CustomNavBar() {
    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">PropsTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to="/raiting">Raiting</CustomLink>
            <CustomLink to="/listing">Listing</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
}
