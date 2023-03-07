import UserCard from "../UserCard/UserCard"
import { Col, Row } from "react-bootstrap"


const UserList = ({ users }) => {
    return (

        <Row>
            {
                users.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <UserCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default UserList