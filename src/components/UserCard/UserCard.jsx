import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import authService from "../../services/auth.services";
import './UserCard.css'


const UserCard = ({ email, username, _id, setUsers }) => {

    const deleteUser = (user_id) => {
        authService
            .delete(user_id)
            .then(() => { return authService.getAllUsers() })
            .then(({ data }) => { setUsers(data) })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Card className='mb-3 UserCard'>
                <Card.Body>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{username}</Card.Text>
                    <Link to={`/user/edit/${_id}`} >
                        <button>Editar</button>
                    </Link>
                    <button onClick={() => deleteUser(_id)}>Eliminar</button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard