import { Link } from 'react-router-dom'
import './Footer.css'
import instagram from './../../assets/images/insta.png'
import fb from './../../assets/images/facebook.png'

const Footer = () => {

    return <footer>
        <div className='container'>
            <section style={{ float: 'left', width: '50%', textAlign: 'justify', textAlignLast: 'unset', justifyContent: 'center', }}>

                <ul>
                    <Link to='/deliverypolicy'>
                        <li>Política de Recogida, Envios y Devoluciones</li>
                    </Link>
                    <Link to='/cookiespolicy'>
                        <li>Política de Cookies</li>
                    </Link>
                    <Link to='/privacypolicy'>
                        <li>Política de Privacidad</li>
                    </Link>
                </ul>
            </section>
            <section style={{ float: 'right', width: '50%', textAlign: 'justify', textAlignLast: 'unset', justifyContent: 'center', }}>

                <ul>
                    <Link to='/legal'>
                        <li>Aviso legal</li>
                    </Link>
                    <Link to='/innovationfood'>
                        <li>Negocio Alimenticio Innovador</li>
                    </Link>
                </ul>
            </section>
            <section className='fotos' style={{ float: 'right', width: '50%', textAlign: 'justify', textAlignLast: 'unset', justifyContent: 'center', }}>

                <ul>
                    <Link to='https://www.instagram.com/tempehjava'>
                        <img className='fb' src={instagram} alt="" />
                    </Link>
                    <Link to='https://www.facebook.com/tempehjava/'>
                        <img className='fb' src={fb} alt="" />

                    </Link>
                </ul>
            </section>

        </div>

    </footer>

}

export default Footer