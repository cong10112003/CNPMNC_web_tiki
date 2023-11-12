import React, { useState } from 'react';
import { WrapperLableText, WrapperContent, WrapperTextValue, WrapperTextPrice, NavBarText, WrapperTittleNavItem, UnderLine } from './style';
import { Checkbox, Rate, Row } from 'antd';
import { StarFilled } from '@ant-design/icons';

const NavBarComponent = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    const onChange = () => {};

    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => {
                    const textStyle = {
                    color: hoveredIndex === index ? '#E5D283' : 'black',
                    fontSize: hoveredIndex === index ? '16px' : '14px',
                    fontWeight: hoveredIndex === index ? 'bold' : 'normal',
                    cursor: 'pointer',
                };

                return (
                    <WrapperTextValue
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        style={textStyle}>
                            {option}
                    </WrapperTextValue>
                    );
                });

            
            case 'checkbox':
                return (
                    <Checkbox.Group
                        style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
                        onChange={onChange}>
                            {options.map((option) => {
                                return <Checkbox value={option.value}> {option.label} </Checkbox>;
                            })}
                    </Checkbox.Group>
                );
                break;

            case 'star':
                return options.map((option) => {
                    console.log('check', option);
                return (
                    <div style={{ display: 'flex', gap: '4px' }}>
                        <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                        <span>{`Từ ${option} sao`}</span>
                    </div>
                    );
                });
                break;

                case 'price':
                    return options.map((option, index) => {
                        const priceStyle = {
                            color: hoveredIndex === index + options.length ? '#E5D283' : 'black',
                            fontSize: hoveredIndex === index + options.length ? '16px' : '14px',
                            fontWeight: hoveredIndex === index + options.length ? 'bold' : 'normal',
                            background: 'none',
                            cursor: 'pointer',
                        };

                    return (
                        <WrapperTextPrice
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index + options.length)}
                            onMouseLeave={handleMouseLeave}
                            style={priceStyle}>
                                {option}
                        </WrapperTextPrice>
                    );
                });
            default:
                return {};
        }
    };
    

        return (
            <div >
                <WrapperTittleNavItem>Sản phẩm liên quan</WrapperTittleNavItem>
                <WrapperContent>
                        {renderContent('text', [
                            'Tủ lạnh', 
                            'TV', 
                            'Máy giặt'
                        ])}
                </WrapperContent>
                <UnderLine />

                <WrapperTittleNavItem>Mức giá</WrapperTittleNavItem>
                <WrapperContent>
                        {renderContent('price', [
                            'Dưới 500.000 VNĐ', 
                            'Từ 500.000 VNĐ đến 1.000.000 VNĐ', 
                            'Từ 1.000.000 VNĐ đến 2.000.000 VNĐ',
                            'Từ 3.000.000 VNĐ đến 5.000.000 VNĐ',
                            'Từ 6.000.000 VNĐ đến 10.000.000 VNĐ',
                            'Từ 20.000.000 VNĐ đến 50.000.000 VNĐ',
                            'Từ 50.000.000 VNĐ VNĐ trờ lên',
                        ])}
                </WrapperContent>
                <UnderLine />








                <WrapperTittleNavItem>Khách hàng đánh giá</WrapperTittleNavItem>

                <div style={{cursor: 'pointer'}}>
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <span style={{fontSize: '15px', lineHeight: '24px', marginLeft: '7px'}}>
                        & Up
                    </span>
                </div>
                
                <div style={{cursor: 'pointer'}}>
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <span style={{fontSize: '15px', lineHeight: '24px', marginLeft: '7px'}}>
                        & Up
                    </span>
                </div>

                <div style={{cursor: 'pointer'}}>
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <span style={{fontSize: '15px', lineHeight: '24px', marginLeft: '7px'}}>
                        & Up
                    </span>
                </div>

                <div style={{cursor: 'pointer'}}>
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <span style={{fontSize: '15px', lineHeight: '24px', marginLeft: '7px'}}>
                        & Up
                    </span>
                </div>

                <div style={{cursor: 'pointer'}}>
                    <StarFilled
                        style={{ fontSize: "18px", color: "rgb(253, 216, 54)" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <StarFilled
                        style={{ fontSize: "18px", color: "white" }}
                    />
                    <span style={{fontSize: '15px', lineHeight: '24px', marginLeft: '7px'}}>
                        & Up
                    </span>
                </div>

            </div>
        );
};

export default NavBarComponent;