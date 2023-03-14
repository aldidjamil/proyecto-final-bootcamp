import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import productsService from "../../services/products.services"
import ProductCard from "../../components/ProductCard/ProductCard";
import recipesService from "../../services/recipes.services";
import RecipeCard from "../../components/RecipeCard/RecipeCard"



const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getProducts()
        getRecipes()
    }, [])

    const getProducts = () => {
        productsService
            .getProductByOwner()
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    const getRecipes = () => {
        recipesService
            .getRecipeByOwner()
            .then(({ data }) => {
                setRecipes(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <Container border="light" className="ml-2">

            <Card border="light" className='mb-3 UserCard'>
                <Card.Body>
                    <h1>Bienvenido a tu perfil, {user.username}</h1>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.role}</Card.Text>
                    <Link to={`/user/edit/${user._id}`} >
                        <Button variant="outline-warning">Editar</Button>
                    </Link>
                </Card.Body>
            </Card>

            <Card border="light" className="my-5">
                <Row className="mx-5">
                    <h1>My Products</h1>
                    {
                        products.map(elm => {
                            return (
                                <Col md={{ span: 3 }} key={elm._id}>
                                    <ProductCard {...elm} setProducts={setProducts} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Card>

            <Card border="light" className="my-5">
                <Row className="mx-5">
                    <h1>My Recipes</h1>
                    {
                        recipes.map(elm => {
                            return (
                                <Col md={{ span: 3 }} key={elm._id}>
                                    <RecipeCard {...elm} setRecipes={setRecipes} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Card>

        </Container>
    )
}
export default ProfilePage