import React from "react";
import HeaderComponents from "../HeaderComponents/HeaderComponents"
import FooterComponent from "../FooterComponent/FooterComponent";
import DropDownComponent from "../DropDownComponent/DropDownComponent";
const DefaultComponents =({children}) => {
    return(
    <div>
        <HeaderComponents />
        <DropDownComponent />
        {children}
        <FooterComponent />
        
    </div>
    )
}

export default DefaultComponents