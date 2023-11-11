import React from "react";
import { WrapperEventItem, WrapperProductFrame, WrapperTittleText } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from  '../../Assets/Image/slider4.jpg'
import slider2 from  '../../Assets/Image/slider2.jpg'
import slider3 from  '../../Assets/Image/slider3.jpg'
import slider4 from  '../../Assets/Image/slider1.jpg'
import CartComponent from "../../components/CartComponent/CartComponent";
import ProductItemComponent from "../../components/ProductItemComponent/ProductItemComponent";
import sB1 from '../../Assets/Image/smallBanner1.jpg'
import sB2 from '../../Assets/Image/smallBanner2.jpg'
import sB3 from '../../Assets/Image/smallBanner3.jpg'
import CategoryItemComponent from "../../components/CategoryItemComponent/CategoryItemComponent";


const HomePage =() => {
    
    return(  
        <div className="body"   style={{width: '100%', backgroundColor: '#efefef'}}>
            <span id="container" style={{height: '1000px', width: '100%', margin: '0 auto'}}>
                <SliderComponent arrImage = {[slider1, slider2, slider3, slider4 ]}/>
                
            </span>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: '120px', paddingRight: '120px', marginTop: '-150px', marginBottom: '20px' }}>
                <WrapperEventItem >
                    <div>
                        <img src={sB1} alt="Event 1" style={{alignItems: 'center', display: 'flex'}}/>
                    </div>
                </WrapperEventItem>
                <WrapperEventItem >
                    <div>
                        <img src={sB2} alt="Event 2" style={{alignItems: 'center', display: 'flex'}}/>
                    </div>
                </WrapperEventItem>
                <WrapperEventItem >
                    <div>
                        <img src={sB3} alt="Event 2" style={{alignItems: 'center', display: 'flex'}}/>
                    </div>
                </WrapperEventItem>
            </div>
            
            <div style={{ height: 'auto'}}>
            <WrapperProductFrame style={{ flexDirection: 'column' }}>
                    <WrapperTittleText >
                        CATEGORY
                    </WrapperTittleText>
                    <div style={{display: 'flex', flexWrap: 'wrap', width: '1200px'}}>
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                        <CategoryItemComponent />
                    </div>
            </WrapperProductFrame>

            <WrapperProductFrame style={{flexDirection: 'column'}}>
                <WrapperTittleText>BEST SELLER</WrapperTittleText>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '1200px', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                    <CartComponent />
                </div>
            </WrapperProductFrame>

            <WrapperProductFrame style= {{display: 'flex', flexDirection: 'column'}}>
                <WrapperTittleText>NEW ARRIVAL</WrapperTittleText>
                <ProductItemComponent />
                <div style={{marginTop: '20px'}}>
                    <ProductItemComponent />
                </div>
                <div style={{marginTop: '20px'}}>
                    <ProductItemComponent />
                </div>
                <div style={{marginTop: '20px'}}>
                    <ProductItemComponent />
                </div>
                <div style={{marginTop: '20px'}}>
                    <ProductItemComponent />
                </div>
                <div style={{marginTop: '20px'}}>
                    <ProductItemComponent />
                </div>
                <div style={{marginTop: '20px'}}>
                    <ProductItemComponent />
                </div>  
            </WrapperProductFrame>
            
            </div>
        </div>
    )
}

export default HomePage