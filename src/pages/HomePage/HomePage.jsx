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


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Products />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Recipes />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>

    )
}

export default HomePage