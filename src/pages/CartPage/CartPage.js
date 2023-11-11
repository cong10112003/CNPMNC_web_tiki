import React from 'react'
import { WrapperFrame, UnderLine, WrapperFrameRight, WrapperFrameLeft, WrapperTextBold, WrapperText } from './style'
import { Empty} from 'antd'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const CartPage = () => {
  return (
    <>
        <div style={{height: '10px', backgroundColor: 'white'}}></div>
        <WrapperFrame style={{padding: '10px'}}>
            <div >
                <span style={{fontSize: '25px', fontWeight: 'bolder', paddingLeft: '50px'}}>
                    Giỏ hàng
                </span>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <WrapperFrameRight>
                        <Empty description={
                            <span>
                                Chưa có sản phẩm trong giỏ hàng! <a href="#API">Mua ngay</a>
                            </span>
                            }/>
                    </WrapperFrameRight>

                    <WrapperFrameLeft>
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                            <WrapperTextBold style={{paddingLeft: '125px'}}>
                                Giá trị đơn hàng 
                            </WrapperTextBold>

                            <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>
                                <div style={{marginBottom: '5px'}}>
                                    <WrapperText>Tạm tính: </WrapperText>
                                    <WrapperText style={{marginLeft: '230px', fontWeight: 'bold'}}>xxx.xxx VNĐ </WrapperText>
                                </div>

                                <div style={{marginBottom: '5px'}}>
                                    <WrapperText>Giảm giá: </WrapperText>
                                    <WrapperText style={{marginLeft: '229px', fontWeight: 'bold'}}>xxx.xxx VNĐ </WrapperText>
                                </div>

                                <div style={{marginBottom: '5px'}}>
                                    <WrapperText>Phí giao hàng: </WrapperText>
                                    <WrapperText style={{marginLeft: '202px', fontWeight: 'bold'}}>xxx.xxx VNĐ </WrapperText>
                                </div>
                                
                                <div style={{paddingLeft: '20px', marginTop: '15px', display: 'flex', alignItems: 'center'}}>
                                    <WrapperText style={{fontWeight: 'bold'}}>Tổng tiền:</WrapperText>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <span style={{fontSize: '30px', fontWeight: 'bolder', color: 'red', marginLeft: '70px'}}>
                                            100.000.000 VNĐ
                                        </span>
                                        <span style={{marginLeft: '135px', fontSize: '12px'}}>
                                            (Đã bao gồm VAT)
                                        </span>
                                    </div>
                                </div>
                                <ButtonComponent
                                    size={40}
                                    styleButton={{
                                        background: "rgb(255, 57, 69)",
                                        height: "48px",
                                        width: "100%",
                                        border: "none",
                                        borderRadius: "4px",
                                        margin: '26px 0 10px'
                                    }}
                                    textButton={"Đặt hàng"}
                                    styleTextButton={{
                                        color: "#fff",
                                        fontSize: "15px",
                                        fontWeight: "700",
                                    }}>
                                </ButtonComponent>
                            </div>
                        </div>
                    </WrapperFrameLeft>
                </div>

            </div>
        </WrapperFrame>
    </>
  )
}

export default CartPage