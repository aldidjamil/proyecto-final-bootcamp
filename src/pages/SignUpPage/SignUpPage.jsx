import { Container, Row, Col } from 'react-bootstrap'
import SignUpForm from '../../components/SignUpForm/SignUpForm'


const SignupPage = () => {
    return (
        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <h1>REGISTRO</h1>
                    <hr />
                    <SignUpForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage