import promoVideo from './../../assets/videos/promovideo.mp4'
import Carousel from 'react-bootstrap/Carousel'
import AboutTempeh from '../AboutTempeh/AboutTempeh'
import Products from '../Products/Products'
import Recipes from '../Recipes/Recipes'

const HomePage = () => {
    return (

        <>

            <Carousel>
                <Carousel.Item>
                    <h1>Bienvenidos a BeanBased.</h1>

                    <AboutTempeh />
                    <Carousel.Caption>

                        <h3>LO DEJO POR SI HACE FALTA</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Products />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Recipes />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>

    )
}

export default HomePage