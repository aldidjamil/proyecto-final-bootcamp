import { Card, Button, ButtonGroup } from "react-bootstrap"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.services";
import './UserCard.css'
import { AuthContext } from "../../contexts/auth.context";

const UserCard = ({ email, username, _id, role, setUsers }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

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
                    {user && user.role === 'ADMIN' &&
                        <Link to={`/user/edit/${_id}`} >
                            <Button variant="outline-warning">Editar</Button>
                        </Link>
                    }
                    {user && user.role === 'ADMIN' &&
                        <Button variant="outline-danger" onClick={() => deleteUser(_id)}>Eliminar</Button>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard