import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/cardSlider.css';



function CardSlider() {
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
            
                {data.map((item) => (
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



const data = [
    {
        image: 'eboard-elissa.png',
        title: "President",
        name: "Elisa Carillo",
        pronouns: "she/her",
        email: "email@illinois.edu",
        description: "Lorem ipsum..."
    },
    {
        image: '/eboard-melissa.png',
        title: "Vice President",
        name: "Melissa Aninagyei-Bonsu",
        pronouns: "she/her",
        email: "Placeholder",
        description: "Hey I'm Melissa. I'm a Junior studying Computer Science and minoring in Statistics! I am a CS STAR - CS Research Ambassador, and an Undergraduate Research Assistant! My hobbies include running track, watching Tiktok, and doing my hair, makeup, and nails! Catch me in the office on the daily!"
    },
    {
        image: '/eboard-adrian.png',
        title: "Treasurer",
        name: "Adrian Lara",
        pronouns: "he/him",
        email: "ajlara279@gmail.com",
        description: "Placeholder"

    },
    {
        image: '/eboard-libby.png',
        title: "Internal Director",
        name: "Libby Codamon",
        pronouns: "she/her",
        email: "ecoda2@illinois.edu",
        description: "Hi! My name is Libby Codamon, and I am a senior studying Computer Science with a minor in the Hoeft Technology & Management Program. I am from the southside of Chicago near Midway Airport and come from a big Honduran-Puerto Rican family – I’m one of five siblings! I love cats, cooking, and theme parks! I also recently picked up coloring and playing pickleball. "

    },
    {
        image: '/eboard-adela.png',
        title: "Social Director",
        name: "Adela Bautista Martinez",
        pronouns: "she/her",
        email: "adelab2@illinois.edu",
        description: "Hi!! My name is Adela, I’m a second year cs + phil and psychology major from Evanston, IL. I’m excited to continue to build and grow our built community. In my free time I like traveling, eating, and watching tv. Feel free to reach out for anything!"
    },
    {
        image: '/eboard-alejandro.png',
        title: "External Director",
        name: "Alejandro Chavez",
        pronouns: "he/him",
        email: "achav8@illinois.edu",
        description: "Hi, I’m Alejandro Chavez I’m a senior studying Computer Science + Economics and I’m from Chicago, IL. In my free time I enjoy going to the gym, watching sports, and spending time with friends and family." 
    },
    {
        image: 'eboard-bolden.jpg',
        title: "Infrastructure Director",
        name: "Bolden Jones",
        pronouns: "he/him",
        email: "boldenj2@illinois.edu",
        description: "Hi my name is Bolden! I am a third year CS major with a minor in statistics, from Flossmoor, IL. As this year's infrastructure director I am excited to lead technical projects advancing our members' technical skills. In my free time I like to go to the gym, play volleyball, and watch anime."
    },
    {
        image: '/eboard-alexis.jpg',
        title: "Outreach Director",
        name: "Alexis Serrano",
        pronouns: "he/him",
        email: "aserrano0031@gmail.com",
        description: "Hi, my name is Alexis Serrano, and I’m a fourth year Undergraduate student studying Computer Science. I’m from Berwyn, Illinois and really enjoy playing Tennis (and pickleball), listening to music, and running. As part of B[U]ILT, I’m the Outreach Director, and I look forward to expanding our CS community and helping students explore CS@UIUC. "
    },
    {
        image: '/eboard-simon.png',
        title: "Placeholder",
        name: "Simon Kato",
        pronouns: "he/him",
        email: "sk106@illinois.edu",
        description: "Hi, I am a third-year Ph.D. candidate in computer science studying decision-making under uncertainty. In my free time, I enjoy rock climbing, running, and cooking." 
    },
    {
        image:'/eboard-carolina.jpg',
        title: "Marketing Director",
        name: "Carolina Rosas",
        pronouns: "she/her",
        email: "cr46@illinois.edu",
        description: "Hey! My name is Carolina Rosas, I am a junior studying Computer Science with a passion for public speaking and comedy! On campus, I am President of the Illini Speech and Debate Team and Marketing Director for B[U]ILT. In my free time I enjoy arts and crafts, karaoke, and going on walks! "
    }
    
]