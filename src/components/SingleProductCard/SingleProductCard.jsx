import { Link } from "react-router-dom"



const ProductCard = ({ title, description, imageUrl, format, stock, _id }) => {
    console.log(description)
    return (
        <>

            <img src={imageUrl} alt={_id} />
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{format} Gramos</p>
            <Link to={`/products/details/${_id}`} >
                <p>Ver detalles</p>
            </Link>
            <Link to={`/products/edit/${_id}`} >
                <button>Editar</button>
            </Link>
        </>
    )
}

export default ProductCard