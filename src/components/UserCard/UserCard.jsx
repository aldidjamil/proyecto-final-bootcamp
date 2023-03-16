import { Card, Button, ButtonGroup } from "react-bootstrap"
import { useContext } from "react"
import { Link } from "react-router-dom";
import authService from "../../services/auth.services";
import './UserCard.css'
import { AuthContext } from "../../contexts/auth.context";

const UserCard = ({ email, username, _id, role, setUsers }) => {

    const { user } = useContext(AuthContext)

    const deleteUser = (user_id) => {
        authService
            .delete(user_id)
            .then(() => { return authService.getAllUsers() })
            .then(({ data }) => { setUsers(data) })
            .catch(err => console.log(err))
    }

    return (
        <Card className='mb-3 UserCard'>
            <Card.Body>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{username}</Card.Text>
                <Card.Text>{role}</Card.Text>
                {user?.role === 'ADMIN' &&
                    <>
                        <Link to={`/user/edit/${_id}`} >
                            <Button variant="outline-warning">Editar</Button>
                        </Link>
                        <Button variant="outline-danger" onClick={() => deleteUser(_id)}>Eliminar</Button>
                    </>
                }
            </Card.Body>
        </Card>
    )
}

export default UserCard