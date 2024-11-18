import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/cardSlider.css';



function CardSlider(props) {
    return (
        <div className='wrapper'>
            <Swiper
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 500000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper'
            >
            
                {props.data.map((item) => (
                    <SwiperSlide className='slides'>
                        <div className='cards'>
                            <h1 className='eboard-title'><span className='brown'>{item.title}</span></h1>
                            <h2 className='eboard-subtitle'><span className='brown'>{item.name} ({item.pronouns})</span></h2>
                            <p className='cardText'>{item.email}</p>
                            <p className='cardText'>{item.description}</p>
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



