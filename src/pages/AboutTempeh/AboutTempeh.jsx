import video from './../../assets/videos/promovideo.mp4'
import { Container, Col } from 'react-bootstrap'

const AboutTempeh = () => {
    return (
        <Container className='mb-5 '>

            <h1>¿Qué es el TEMPEH?</h1>
            <br />

            <div className="container">
                <section className='aboutTempehText'>
                    <p>El <b>tempeh</b> es un alimento <b>100 % vegetal</b> con un alto contenido en proteínas. Está producido a partir de la <b>fermentación natural controlada originalmente de la soja.</b></p>

                    <p>Es un producto originario de <b>Indonesia del siglo XII</b>. A día de hoy, el tempeh está considerado como uno de los <b> mejores alimentos con valor nutritivo añadido.</b></p>

                    <h2>Beneficios del tempeh para la salud</h2>

                    <p> Nuestro Tempeh está elaborado, no solo a partir de soja, también de otras legumbres y alubias, por lo que supone una <b>gran fuente de energía</b> con variedad de vitaminas. </p>
                    <p>Estos son sus principales beneficios y aportes a la salud y bienestar:</p>
                    <ul>
                        <li>Bueno para el <b>corazón</b>: al no contener colesterol, el Tempeh <b>reduce el riesgo de enfermedades cardiovasculares.</b></li>
                        <li> <b>Reconstituye la flora intestinal</b>: es un alimento que regenera la flora intestinal de manera completamente natural y favorece el tránsito.</li>
                        <li> Contiente <b> Vitamina B12</b>: es muy raro encontrarla en los productos vegetales, sin embargo, el Tempeh la posee.</li>
                        <li> Combate la <b>menopausia</b>: las isoflavonas que contiene son ideales para combatir las incómodas consecuencias de la menopausia.Contribuye activamente al fortalecimiento de los huesos y a reducir los sofocos.</li>
                        <li> <b>Alta concentración de proteínas</b></li>
                        <li> <b>Baja concentración de sodio</b></li>
                    </ul>
                </section>
                <section className="video">
                    <video className='video' autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                    </video>
                </section>
            </div>
        </Container>

    )
}

export default AboutTempeh