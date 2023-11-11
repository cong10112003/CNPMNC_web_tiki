import React from "react";
import HeaderComponents from "../HeaderComponents/HeaderComponents"
import FooterComponent from "../FooterComponent/FooterComponent";

const DefaultComponents =({children}) => {
    return(
    <div>
        <HeaderComponents />
        {children}
        <FooterComponent />
        
    </div>
    )
}

export default DefaultComponents