import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './../assets/images/logo.png'
import './Navigation.css'

const Navigation = () => {

    return (
        <Navbar variant='dark' expand="md" className='navigation mb-4'>
            <Container>
                <Navbar.Brand href="#home">BeanBased</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="navcontain ml-auto">
                    <Link to="/">
                        <Nav.Link as="span">¿Que es el TEMPEH?</Nav.Link>
                    </Link>
                    <Link to="/products">
                        <Nav.Link as="span">Productos</Nav.Link>
                    </Link>
                    <Link to="/recipes">
                        <Nav.Link as="span">Recetas</Nav.Link>
                    </Link>
                    <img src={logo} className="logo"></img>
                </Nav >

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navcontain mr-auto">
                        <Link to="/aboutus">
                            <Nav.Link as="span">Conocenos</Nav.Link>
                        </Link>
                        <Link to="/events">
                            <Nav.Link as="span">Eventos</Nav.Link>
                        </Link>

                        <Nav.Link as="span" onClick='{logout}'>Log Out</Nav.Link>
                        <Link to="/start-session">
                            <Nav.Link as="span">Log In</Nav.Link>
                        </Link>
                        <Link to="/signUp">
                            <Nav.Link as="span">Sign In</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse >
            </Container >
        </Navbar >
    )

}

export default Navigation