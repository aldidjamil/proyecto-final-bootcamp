import './Navigation.css'
import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import logo from './../assets/images/logo.png'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)
    return (
        <Navbar variant='dark' expand="md" className='navigation mb-4'>
            <Container>
                <Link to="/">
                    <img src={logo} className="logo"></img>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="AboutTempeh">
                            <Nav.Link as="span">¿Que es el TEMPEH?</Nav.Link>
                        </Link>
                        <Link to="/products">
                            <Nav.Link as="span">Productos</Nav.Link>
                        </Link>
                        <Link to="/recipes">
                            <Nav.Link as="span">Recetas</Nav.Link>
                        </Link>
                        <Link to="/AboutUs">
                            <Nav.Link as="span">Conocenos</Nav.Link>
                        </Link>
                        <Link to="/Events">
                            <Nav.Link as="span">Eventos</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className="ml-auto">

                        {user
                            ?
                            <>
                                <Link to="/perfil">
                                    <Nav.Link as="span">Mi Perfil</Nav.Link>
                                </Link>
                                <Nav.Link as="span" onClick={logout}>Log Out</Nav.Link>
                                <Link to="/appUsers">
                                    <Nav.Link as="span">Usuarios</Nav.Link>
                                </Link>
                            </>
                            :
                            <>
                                <Link to="/iniciar-sesion">
                                    <Nav.Link as="span">Log In</Nav.Link>
                                </Link>
                                <Link to="/crearUsuario">
                                    <Nav.Link as="span">Sign up</Nav.Link>
                                </Link>
                            </>
                        }
                    </Nav>
                    {user && <Navbar.Text>Bienvenid@, {user.username}</Navbar.Text>}
                </Navbar.Collapse >
            </Container >
        </Navbar >
    )

}

export default Navigation
