import promoVideo from './../../assets/videos/promovideo.mp4'

const HomePage = () => {
    return (

        <>

            <video className='promovideo' autoPlay loop muted>
                <source src={promoVideo} type='video/mp4' />
            </video>
        </>

    )
}

export default HomePage