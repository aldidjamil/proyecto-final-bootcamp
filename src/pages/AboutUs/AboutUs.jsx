import aboutus from './../../assets/images/aboutusfoto.png'

const AboutUs = () => {
    return (
        <>
            <h1>SOBRE NOSOTRAS</h1>
            <br />
            <div className="container">
                <section className="AboutUsText">

                    <br />
                    <p>Somos tres mujeres de Indonesia con una fuerte pasión por la comida</p>
                    <br />
                    <p>Comenzamos este negocio por la necesidad de compartir nuestra herencia tradicional de alimentos con el mundo. Queríamos compartir el TEMPEH.</p>
                    <br />
                    <p>El tempeh no solo es un superalimento que tiene muchos beneficios para la salud, sino que también es una de las mejores alternativas proteicas de origen vegetal.</p>
                    <br />
                    <p>Presentamos el tempeh en su forma original, fresco, no pasteurizado, pero también una variante de frijoles y legumbres.</p>
                    <br />
                    <p>Todo nuestro Tempeh está elaborado con legumbres orgánicas producidas dentro de la Unión Europea</p>
                </section>
                <section className="aboutUsImage">
                    <img src={aboutus} alt="aboutus" />
                </section>

            </div>
        </>
    )
}

export default AboutUs