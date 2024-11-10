import React from 'react';
import '../styles/aboutPage.css';
import CardSlider from '../components/cardslider.js';
import ValueCard from '../components/valueCard.js';



function AboutPage() {
    return (
        <div className="AboutPage">
            <header className="AboutPage-header">
                <div className="hero-section">
                    <div className="hero-overlay">
                        <h1 className='merriweather'>About Us</h1>
                        <a href="#mission" className="hero-button">Mission Statement</a>
                    </div>
                    <div className="scroll-indicator">&#x2193;</div>
                </div>
                <section className='mission' id='mission'>
                    <h2 className='brown merriweather' >Mission Statement</h2>
                    <div className='divider'></div>
                    <p>B[U]ILT is a non-profit student organization at the University of Illinois at Urbana-Champaign. We strive to become a strong support system for minorities in computing-related fields that fosters scholarship, professional development, and a sense of community. We seek to improve the diversity of the workplace in computing fields by holding technical and professional events for current students, in addition to running outreach programs to encourage the next generation of students from underrepresented communities to pursue careers in computing fields.</p>
                </section>
                <h2 className='brown value-header merriweather'>Our Values</h2>
                <section className='values'>
                    <ValueCard url="graduation-cap-512.png" value="Academic Support" text="We provide resources and mentorship to help our members excel academically. From study groups to tutoring sessions, our goal is to support students in achieving their educational goals and overcoming challenges in their coursework."></ValueCard>
                    <ValueCard url="tie-512.png" value="Professional Support" text="Preparing for a successful career starts here. Through networking events, resume workshops, and mock interviews, we equip our members with the skills and connections needed to thrive in the professional world."></ValueCard>
                    <ValueCard url="group-512.png" value="Community Support" text="A strong sense of community is at the heart of our organization. We foster a welcoming environment where members can connect, collaborate, and build lasting friendships, creating a support system that extends beyond the classroom."></ValueCard>
                </section>
                <h2 className='brown value-header merriweather'>Meet the E-Board!</h2>
             
            </header>
            <CardSlider/>
        </div>
    );
}

export default AboutPage;