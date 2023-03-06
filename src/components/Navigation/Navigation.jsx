import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <Navbar bg='dark' variant='dark' expand="md" className='mb-4'>
            <Container>
                <Navbar.Brand href="#home">BeanBased</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link as="span">Home</Nav.Link>
                        </Link>
                        <Link to="/products">
                            <Nav.Link as="span">Products</Nav.Link>
                        </Link>
                        <Link to="/recipes">
                            <Nav.Link as="span">Recipes</Nav.Link>
                        </Link>
                        <><Nav.Link as="span" onClick='{logout}'>Log Out</Nav.Link></>
                        <>
                            <Link to="/start-session">
                                <Nav.Link as="span">Log In</Nav.Link>
                            </Link>
                            <Link to="/signUp">
                                <Nav.Link as="span">Sign In</Nav.Link>
                            </Link>
                        </>
                    </Nav >
                </Navbar.Collapse >
            </Container >
        </Navbar >
    )

}

export default Navigation