import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productsServices from './../../services/products.services'
import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {

    const navigate = useNavigate()

    const { product_id } = useParams()


    useEffect(() => {
        deleteProduct(product_id)
    }, [])

    const deleteProduct = (product_id) => {
        productsServices
            .deleteProduct(product_id)
            .then(({ data }) => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return;
}

export default DeleteProduct