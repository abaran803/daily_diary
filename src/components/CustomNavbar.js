import {Container, Navbar} from "react-bootstrap";

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;