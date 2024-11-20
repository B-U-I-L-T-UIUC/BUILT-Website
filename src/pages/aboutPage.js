import React from 'react';
import StickyNavBar from '../components/stickyNavBar'
import '../styles/aboutPage.css';
import CardSlider from '../components/cardslider.js';
import ValueCard from '../components/valueCard.js';



function AboutPage() {
    return (
        <>
        <StickyNavBar></StickyNavBar>
        <div className="AboutPage">
            <header className="AboutPage-header">
                <div className="hero-section">
                    <div className="hero-overlay">
                        <h1 className='merriweather'>About Us</h1>
                        <a href="#mission" className="hero-button">Mission Statement</a>
                    </div>
                    
                </div>
                <section className='mission' id='mission'>
                    <h2 className='brown merriweather' >Mission Statement</h2>
                    <div className='divider'></div>
                    <p>B[U]ILT is a non-profit student organization at the University of Illinois at Urbana-Champaign. We strive to become a strong support system for minorities in computing-related fields that fosters scholarship, professional development, and a sense of community. We seek to improve the diversity of the workplace in computing fields by holding technical and professional events for current students, in addition to running outreach programs to encourage the next generation of students from underrepresented communities to pursue careers in computing fields.</p>
                </section>
                <h2 className='brown value-header merriweather'>Our Values</h2>
                <section className='values'>
                    <ValueCard 
                        url="graduation-cap-512.png" 
                        value="Academic Support" 
                        text="We provide resources and mentorship to help our members excel academically. From study groups to tutoring sessions, our goal is to support students in achieving their educational goals and overcoming challenges in their coursework." 
                    />
                    <ValueCard 
                        url="tie-512.png" 
                        value="Professional Support" 
                        text="Preparing for a successful career starts here. Through networking events, resume workshops, and mock interviews, we equip our members with the skills and connections needed to thrive in the professional world." 
                    />
                    <ValueCard 
                        url="group-512.png" 
                        value="Community Support" 
                        text="A strong sense of community is at the heart of our organization. We foster a welcoming environment where members can connect, collaborate, and build lasting friendships, creating a support system that extends beyond the classroom." 
                    />
                </section>
                <h2 className='brown value-header merriweather'>Meet the E-Board!</h2>
             
            </header>
            <CardSlider
            data={data}
            />
        </div>
        </>

    );
}

export default AboutPage;

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
        title: "Graduate Affairs Director",
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
    },
    {
        image:'/eboard-xochi.png',
        title: "Secretary",
        name: "Xochitl Zapata",
        pronouns: "she/her",
        email: "xzapata2@illinois.edu",
        description: "Hi my name is Xochi Zapata, I study Brain and Cognitive Science and minoring in Computer Science. I’m from Blue Island, IL.  Some of my interests are philosophy, music and art!"
    }
]