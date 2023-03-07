import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './UserCard.css'


const UserCard = ({ email, username, password, _id }) => {

    return (
        <Link to={`/listado/${_id}`}>
            <Card className='mb-3 CoasterCard'>
                <Card.Body>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{username}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default UserCard