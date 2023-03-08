import React from 'react';

import './LandingPage.css'
import landingPageBackgroundImage from '../../data/images/landingPageBackground.jpg'

import IntroField from './IntroField'

const LandPage = () => {
    return (
        <section className='start-section' style={{backgroundImage: `url(${landingPageBackgroundImage})`, position: 'fixed', minWidth: '100%', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', top: 0, left: 0}}>
            <IntroField />
        </section>
    );
};

export default LandPage;