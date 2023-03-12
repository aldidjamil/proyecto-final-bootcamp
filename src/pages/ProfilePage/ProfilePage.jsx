import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import productsService from "../../services/products.services"
import ProductCard from "../../components/ProductCard/ProductCard";



const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        productsService
            .getProductByOwner()
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <Container>

            <Card className='mb-3 UserCard'>
                <Card.Body>
                    <h1>Bienvenido a tu perfil, {user.username}</h1>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.role}</Card.Text>
                    <Link to={`/user/edit/${user._id}`} >
                        <Button variant="outline-warning">Editar</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card>
                {
                    products.map(elm => {
                        return (
                            <Col md={{ span: 3 }} key={elm._id}>
                                <ProductCard {...elm} setProducts={setProducts} />
                            </Col>
                        )
                    })
                }
            </Card>
        </Container>
    )
}
export default ProfilePage