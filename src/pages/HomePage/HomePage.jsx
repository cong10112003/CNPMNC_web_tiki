import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperTypeProduct, WrapperProduct } from "./style";
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
        <div style={{width: '1270px', margin: '0 auto'}}>
        <WrapperTypeProduct>
            {arr.map((item) => {
                return(
                    <TypeProduct name= {item} key={item}/>
            )
        })}
        </WrapperTypeProduct>
        </div>
        <div className="body"   style={{width: '100%', backgroundColor: '#efefef'}}>
            <div id="container" style={{height: '1000px', width: '1270px', margin: '0 auto'}}>
                <SliderComponent arrImage = {[slider1, slider2, slider3, slider4 ]}/>
                <WrapperProduct>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                </WrapperProduct>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                    <WrapperButtonMore 
                        textButton="Xem thêm"
                        type="outline"
                        styleButton={{border: '1px solid rgb(11, 116, 229)', coler: 'rgb(11, 116, 229)',
                                width: '240px', height: '38px', borderRadius: '4px'}}
                        styleTextButton={{fontWeight: 500}}
                                />
                </div>
            </div>
        </div>
    </>
    )
}

export default HomePage