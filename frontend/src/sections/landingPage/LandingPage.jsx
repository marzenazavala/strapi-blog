import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './landingPage.styles.css';



const LandingPage = () => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element,{
        duration:1000,
        delay: 100,
        smooth: true,
        offset:-80
    });
}

    return (
      <div className='landing-page'>
       
        <Fade delay={1000}>
          <div className='logo'/>
        </Fade>

        <Fade bottom delay={2000}>
          <div className='btn from-center button' onClick={() => scrollToElement('aktualnosci')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              Wejście
          </div>
        </Fade>
        <div className='logos-wrapper'>
          <div className='logo-justify'>
            <Link to={{ pathname: "https://moviegate.pl" }} target="_blank" className='movie-gate'/>
            <Link to={{ pathname: "https://timegates.pl" }} target="_blank" className='time-gate'/>
          </div>
        </div>
      </div>
    );
};

export default LandingPage;