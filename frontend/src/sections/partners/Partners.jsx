import React from  'react';
import Carousel from "react-multi-carousel";
import Fade from 'react-reveal';
import "react-multi-carousel/lib/styles.css";
import './partners.styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 4,
      partialVisible: true,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1124, min: 664 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1
    }
  };

const Partners = () => {
    return (
        <div className='main-wrapper' id='partnerzy'>
            <Fade delay={1000}>
            <h1>Partnerzy</h1>
            <div className='carousel-wrapper'>
        <Carousel
        centerMode={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          arrows={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 1s linear"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        <div className='p-box partner1'/>
        <div className='p-box partner2'/>
        <div className='p-box partner3'/>
        <div className='p-box partner4'/>
        {/* <div className='p-box partner1'/>
        <div className='p-box partner2'/>
        <div className='p-box partner1'/>
        <div className='p-box partner2'/> */}
        </Carousel>
        </div>
        </Fade>
        </div>
    );
};

export default Partners