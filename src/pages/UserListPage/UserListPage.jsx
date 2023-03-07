import { useContext, useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import UserList from "../../components/UserList/UserList";
import { AuthContext } from "../../contexts/auth.context";
import authService from "../../services/auth.services";

const UserListPage = () => {

    const [users, setUsers] = useState([])

    // const { user } = useContext(AuthContext)

    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = () => {
        authService
            .getAllUsers()
            .then(({ data }) => { setUsers(data) })
            .catch(err => console.los(err))
    }

    // const fireFinalActions = () => {
    //     loadUsers()
    // }
    return (
        <>
            <Container>

                <>
                    <h1>Listado de Usuarios</h1>
                    <UserList users={users} />
                </>

            </Container>
        </>
    )
}

export default UserListPage

