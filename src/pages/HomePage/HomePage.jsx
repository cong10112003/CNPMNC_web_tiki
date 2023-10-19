import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from  '../../Assets/Image/slider4.jpg'
import slider2 from  '../../Assets/Image/slider2.jpg'
import slider3 from  '../../Assets/Image/slider3.jpg'
import slider4 from  '../../Assets/Image/slider1.jpg'
import CartComponent from "../../components/CartComponent/CartComponent";

const HomePage =() => {
    const arr = ['TV', 'Tủ lạnh', 'Laptop']
    return(
        <>
        <div style={{padding: '0 120px'}}>
        <WrapperTypeProduct>
            {arr.map((item) => {
                return(
                    <TypeProduct name= {item} key={item}/>
            )
        })}
        </WrapperTypeProduct>
    </div>
    <div id="container" style={{backgroundColor: '#efefef', padding: '0 120px'}}>
            <SliderComponent arrImage = {[slider1, slider2, slider3, slider4 ]}/>
    <div style={{marginTop: '20px', display: 'flex', alignItems:'center', gap: '20px', height: '1000px'}}>
        <CartComponent/>
    </div>
        </div>
        </>
    )
}

export default HomePage