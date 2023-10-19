import { Button } from "antd";
import React from "react";
import {SearchOutlined} from '@ant-design/icons'
import InputComponents from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton, bordered, 
        backgroundColorInput = '#fff', 
        backgroundColorButton= 'rgb(13,92,182',
        colorButton= '#fff'} = props
    return(
        <div style={{display: 'flex'}}>
            <InputComponents 
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            style={{backgroundColor: backgroundColorInput}}/>
            <ButtonComponent 
            size={size}
            icon={<SearchOutlined icon={colorButton}/>}
            styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
            textButton={textButton}
            styleTextButton={{color : colorButton}}
            />
        </div>
    )
}

export default ButtonInputSearch