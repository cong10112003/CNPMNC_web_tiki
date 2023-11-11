import React, { Fragment } from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CartComponent from '../../components/CartComponent/CartComponent'
import { Row, Pagination, Col } from 'antd'
import { WrapperProduct, WrapperNavBar } from './style'
const TypeProductPage = () => {
  const onChange = () => {}
  return (
    <div style={{width: '100%', background: '#efefef'}}>
      <div style={{ width: '1370px', margin: '0 auto'}}>
        <Row  style={{  flexWrap: 'nowrap',paddingTop: '10px'}}>
            <WrapperNavBar span={6} >
                <NavBarComponent />
            </WrapperNavBar>
            <Col span={20}>
              <WrapperProduct>
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
                <CartComponent />
              </WrapperProduct>
              <Pagination defaultCurrent={2} total={100} onChange={onChange} 
                          style={{textAlign: 'center', marginTop: '10px'}} />
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default TypeProductPage