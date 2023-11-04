import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imageLogo from '../../Assets/Image/signupPicture.png';
import { EyeInvisibleFilled, EyeFilled } from '@ant-design/icons';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{width: '800px', height: '445px', borderRadius: '6px', backgroundColor: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chào,</h1>  
          <p>Đăng nhập và tạo tài khoản</p>
          <InputFormComponent style={{marginBottom: '10px'}} placeholder="abc@gmail.com"/>

          <div style={{position: 'relative', marginBottom:' 10px' }}> 
            <span style={{zIndex: '10', position: 'absolute', top: '4px', right: '8px'}}>
              {
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputFormComponent placeholder="password" type={isShowPassword ? "text" : "password"} />
          </div>
          <div style={{position: 'relative' }}>
            <span style={{zIndex: '10', position: 'absolute', top: '4px', right: '8px'}}>
              {
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputFormComponent placeholder="confirm password" type={isShowConfirmPassword ? "text" : "confirm password"} />
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
            textButton={"Đăng kí"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt= "image-logo" height= "203px" width= "203px" />
          <h4>Mua sắm tại BANTUMLUM</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage