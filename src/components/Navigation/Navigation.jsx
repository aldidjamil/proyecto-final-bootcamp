import './Navigation.css'
import { useContext, useEffect } from 'react'
import { Container, Nav, Navbar, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContext } from '../../contexts/cart.context'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { AuthContext } from "../../contexts/auth.context"


const Navigation = () => {

    const { user, logout } = useContext(AuthContext)
    const { cartData, show, fireFinalActions, setShow } = useContext(CartContext)

    console.log({ cartData })

    useEffect(() => {
        console.log({ cartData })
    }, [])


    const handleShow = () => setShow(true)


    return (
        <>
            <Navbar variant='dark' expand="md" className='navigation mb-4'>
                <Container fluid>
                    <Link className='mx-5' to="/">
                        <img src={logo} className="logo"></img>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='mx-2' to="aboutTempeh">
                                <Nav.Link as="span">¿Que es el TEMPEH?</Nav.Link>
                            </Link>
                            <Link className='mx-2' to="/products">
                                <Nav.Link as="span">Productos</Nav.Link>
                            </Link>
                            <Link className='mx-2' to="/recipes">
                                <Nav.Link as="span">Recetas</Nav.Link>
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
                                    {user && user.role === 'ADMIN' &&
                                        <Link to="/appUsers">
                                            <Nav.Link as="span">Usuarios</Nav.Link>
                                        </Link>
                                    }
                                    <Button variant='primary' className='cart mx-5' onClick={handleShow}> {cartData?.buy?.reduce((acc, elm) => acc + elm.quantity, 0)} Productos <img className='cartImg' src="https://img.freepik.com/free-icon/shopping-cart_318-633177.jpg?w=24" alt="" /></Button>

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

                        {user && <Navbar.Text>{user.username}</Navbar.Text>}

                    </Navbar.Collapse >
                </Container >
            </Navbar >


            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title> Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShoppingCart fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>
        </>
    )

}

export default Navigation
