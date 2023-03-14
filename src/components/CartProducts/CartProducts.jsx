import Button from 'react-bootstrap/Button';
import { CartContext } from "../../contexts/cart.context";
import { useContext, useState } from "react";
// import { getProductData } from "../productsStore";
import productsService from '../../services/products.services'


const CartProduct = (props) => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    // const productData = getProductData(id);

    const [products, setProducts] = useState()

    const loadProducts = (product_id) => {
        productsService
            .getOneProduct(product_id)
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h3>{products.title}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * products.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;