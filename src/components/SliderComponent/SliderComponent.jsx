import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';
import { WrapperSliderStyle } from './style';


const SliderComponent = ({arrImage}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        auplaySpeed: 1000
    };
    return (
        <Slider {...settings}>
            {arrImage.map((image) => {
                return(
                    <Image src={image} alt="slider" preview={false} width="100%" height="800px" />
            )
            })}
        </Slider>
  )
}

export default SliderComponent