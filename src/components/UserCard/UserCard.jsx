import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import authService from "../../services/auth.services";
import './UserCard.css'


const UserCard = ({ email, username, _id, role, setUsers }) => {

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
                    <Card.Text>{role}</Card.Text>
                    <Link to={`/user/edit/${_id}`} >
                        <Button variant="outline-warning">Editar</Button>
                    </Link>
                    <Button variant="outline-danger" onClick={() => deleteUser(_id)}>Eliminar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard