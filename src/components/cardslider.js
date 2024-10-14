import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, FreeMode, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import '../styles/cardSlider.css';



function CardSlider() {
    return (
        <div className='wrapper'>
            <Swiper
                loop={true}
                modules={[Pagination, FreeMode, Autoplay]}
                pagination={{clickable: true}}
                freeMode={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper'
            >

                {data.map((item) => (
                    <SwiperSlide className='slides'>
                        <div className='cards'>
                            <h1><span className='brown'>{item.title}</span></h1>
                            <h2><span className='brown'>{item.name}</span></h2>
                            <p>{item.pronouns}</p>
                            <p>{item.email}</p>
                            <p>{item.description}</p>
                        </div>
                        <div className='imgcontainer'>
                            <img className='image' src={item.image} alt='e-board'/>
                        </div>
                    </SwiperSlide>
                ))}

        
        
            </Swiper>
        </div>
        
  
    )
}

export default CardSlider;


const data = [
    {
        image: '/e-board.png',
        title: "President",
        name: "Elisa Carillo",
        pronouns: "she/her",
        email: "email@illinois.edu",
        description: "Lorem ipsum..."
    },
    {
        image: '/coffee-social.png',
        title: "Placeholder",
        name: "Adrian Vargas",
        pronouns: "he/him",
        email: "avarga@illinois.edu",
        description: "test description"
    }
]