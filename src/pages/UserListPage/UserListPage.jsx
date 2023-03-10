import { useContext, useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import UserList from "../../components/UserList/UserList";
import { AuthContext } from "../../contexts/auth.context";
import authService from "../../services/auth.services";

const UserListPage = () => {

    const [users, setUsers] = useState([])





    return (
        <div>
            <Container>

                <>
                    <h1>Listado de Usuarios</h1>
                    <UserList users={users} setUsers={setUsers} />
                </>

            </Container>
        </div>
    )
}

export default UserListPage

