import './Navigation.css'
import { useContext, useState, useEffect } from 'react'
import { Container, Nav, Navbar, Row, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import authService from '../../services/auth.services'
import logo from '../../assets/images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContext } from '../../contexts/cart.context'



const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    const { cart, setData, cartData } = useContext((CartContext))

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    // const quantity = cartData.buy.quantity.reduce((acc, cur) => acc + cur)
    // const quantity = cartData.reduce((acc, cur) => acc + cur.quantity, 0)
    // const quantities = Object.values(cartData).map(item => item.quantity);
    // // const totalQuantity = quantities.reduce((acc, cur) => acc + cur, 0);

    // const totalQuantity = quantities.reduce((total, item) => {
    //     return total + parseInt(item.quantity);
    // }, 0);


    return (
        <>
            <Navbar variant='dark' expand="lg" className='navigation mb-4'>
                <Container fluid>
                    <Link className='mx-5' to="/">
                        <img src={logo} className="logo"></img>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='mx-2' to="AboutTempeh">
                                <Nav.Link as="span">¿Que es el TEMPEH?</Nav.Link>
                            </Link>
                            <Link className='mx-2' to="/products">
                                <Nav.Link as="span">Productos</Nav.Link>
                            </Link>
                            <Link className='mx-2' to="/recipes">
                                <Nav.Link as="span">Recetas</Nav.Link>
                            </Link>
                            <Link className='mx-2' to="/AboutUs">
                                <Nav.Link as="span">Conocenos</Nav.Link>
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
                            <Link to={'/shoppingcart'}>
                                <Button variant='primary' className='cart mx-5'>   Productos <img src="https://img.freepik.com/free-icon/shopping-cart_318-633177.jpg?w=24" alt="" /></Button>
                            </Link>
                        </Nav>
                        {/* {user && <Navbar.Text>Bienvenid@, {user.username}</Navbar.Text>}

                        <Button variant='primary' className='cart mx-5' onClick={handleShow}>  ({productsCount} Productos) <img src="https://img.freepik.com/free-icon/shopping-cart_318-633177.jpg?w=24" alt="" /></Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> Shopping Cart</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {productsCount > 0 ?
                                    <>
                                        <p>Productos en tu carrito</p>
                                        {cart.items.map((currentProduct, idx) => (
                                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>

                                        ))}
                                        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                                        <Button variant="success" onClick={checkout}>
                                            Comprar productos
                                        </Button>
                                    </>
                                    :
                                    <h1>No hay productos en su carrito.</h1>
                                }
                            </Modal.Body>


                        </Modal> */}
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </>
    )

}

export default Navigation
