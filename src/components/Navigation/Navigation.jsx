import './Navigation.css'
import { useContext, useState, useEffect } from 'react'
import { Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import authService from '../../services/auth.services'
import logo from './../assets/images/logo.png'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user)
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     loadUsers()
    // }, [])
    // const loadUsers = () => {
    //     authService
    //         .getAllUsers()
    //         .then(({ data }) => {
    //             setUsers(data)
    //             console.log({ setUsers })
    //         })
    //         .catch(err => console.los(err))

    // }
    return (
        <Navbar variant='dark' expand="lg" className='navigation mb-4'>
            <Container>

                {/* <Navbar.Brand href="#home">BeanBased</Navbar.Brand> */}
                <Nav className="navContainL me-auto">
                    <Link to="AboutTempeh">
                        <Nav.Link as="span">¿Que es el TEMPEH?</Nav.Link>
                    </Link>
                    <Link to="/products">
                        <Nav.Link as="span">Productos</Nav.Link>
                    </Link>
                    <Link to="/recipes">
                        <Nav.Link as="span">Recetas</Nav.Link>
                    </Link>
                </Nav >
                <Link to="/">
                    <img src={logo} className="logo"></img>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navContainR me-auto">

                        <>
                            <Link to="/AboutUs">
                                <Nav.Link as="span">Conocenos</Nav.Link>
                            </Link>
                            <Link to="/Events">
                                <Nav.Link as="span">Eventos</Nav.Link>
                            </Link>
                        </>

                        {user
                            ?
                            <>
                                <Link to="/perfil">
                                    <Nav.Link as="span">Mi Perfil</Nav.Link>
                                </Link>
                                <Nav.Link as="span" onClick={logout}>Log Out</Nav.Link>
                                {user && user.role === 'ADMIN' &&
                                    <Link to="/appUsers">
                                        <Nav.Link as="span">Usuarios</Nav.Link>
                                    </Link>
                                }
                            </>
                            :
                            <>
                                <Link to="/iniciar-sesion">
                                    <Nav.Link as="span">Log In</Nav.Link>
                                </Link>
                                <Link to="/crearUsuario">
                                    <Nav.Link as="span">Sig In</Nav.Link>
                                </Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
                {user && <Navbar.Text>Bienvenid@, {user.username} | </Navbar.Text>}
            </Container >
        </Navbar >
    )

}

export default Navigation