import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import instagram from './../../assets/images/instagram.jpeg'
import fb from './../../assets/images/facebook.png'


function Footer() {
    return (
        <div className="footer-container">
            <Row className="mt-auto">
                <Col>
                    <h5>Políticas</h5>
                    <ul className="footer-list">
                        <li>
                            <Link to="/deliverypolicy">Política de Recogida, Envios y Devoluciones</Link>
                        </li>
                        <li>
                            <Link to="/cookiespolicy">Política de Cookies</Link>
                        </li>
                        <li>
                            <Link to="/privacypolicy">Política de Privacidad</Link>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h5>Otros</h5>
                    <ul className="footer-list">
                        <li>
                            <Link to="/legal">Aviso legal</Link>
                        </li>
                        <li>
                            <Link to="/innovationfood">Negocio Alimenticio Innovador</Link>
                        </li>
                    </ul>
                </Col>
                <Col className="logosfooter mx-2">
                    <h5>Síguenos en</h5>
                    <ul className="social-list">
                        <li>
                            <Link to="https://www.instagram.com/tempehjava" target="_blank">
                                <img className="social-icon" src={instagram} alt="Instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/tempehjava/" target="_blank">
                                <img className="social-icon" src={fb} alt="Facebook" />
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}
export default Footer