import React from 'react'
import { WrapperLableText, WrapperContent, WrapperTextValue, WrapperTextPrice } from './style'
import { Checkbox, Rate, Row } from 'antd'

const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((options) => {
                    return (                      
                        <WrapperTextValue>{options}</WrapperTextValue>                      
                    )})
                case 'checkbox' :
                    return (
                        <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px'}} onChange={onChange}>      
                            {options.map((option) => {
                                return(
                                    <Checkbox value={option.value}> {option.label} </Checkbox>
                                )
                            })}              
                        
                        </Checkbox.Group>
                    )
                
                    case 'star' :
                    return options.map((option) => {
                        console.log('check', option)
                        return (
                            <div style={{display: 'flex', gap: '4px'}}>
                                <Rate style={{fontSize: '12px'}} disabled defaultValue={option}/>
                                <span>{`Từ ${option} sao`}</span>
                            </div>
                        )
                    })

                    case 'price' :
                    return options.map((option) => {
                        return (
                            <WrapperTextPrice>{option}</WrapperTextPrice>
                        )
                    })
                default:
                return {}    
        }
    }

    return (
        <div>
            <WrapperLableText>Label</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'TV', 'Máy giặt'])}
            </WrapperContent>
        </div>
  )
}

export default NavBarComponent