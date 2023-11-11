import React, {useState} from "react";
import { UnderLine, WrapperFrame, WrapperFrameInsight } from "./style";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Checkbox , Form, Select, CheckboxChangeEvent } from "antd";
import Paypal from '../../Assets/Image/paypalSmall.png'


const { Option } = Select;

const PurchasePage = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    console.log(`Selected value: ${value}`);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const [isExpressDeliverySelected, setExpressDeliverySelected] = useState(true);
  
  const [isPriorityDeliverySelected, setPriorityDeliverySelected] = useState(false);

  const handleExpressDeliveryChange = (e) => {
    setExpressDeliverySelected(e.target.checked);
    setPriorityDeliverySelected(false);
  };

  const handlePriorityDeliveryChange = (e) => {
    setPriorityDeliverySelected(e.target.checked);
    setExpressDeliverySelected(false);
  };

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#efefef",
      }}
    >
      <WrapperFrame>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              fontWeight: "800",
              fontFamily: "arial",
              paddingLeft: "530px",
              paddingTop: "15px",
              marginBottom: '15px',
              color: '#E5D283'
            }}
          >
            THANH TOÁN
          </span>
          <div>
            <span
              style={{
              fontSize: "15px",
              fontWeight: "00",
              marginBottom: "15px",
              }}
            >
              Thông tin mua hàng
            </span>
            <span
              style={{
              fontSize: "15px",
              fontWeight: "00",
              marginBottom: "15px",
              marginLeft: '607px'
              }}
            >
              Vận chuyển
            </span>
            
          </div>
            <div style={{ width: "600px", marginTop: '5px' }}>
              <InputFormComponent
                placeholder="Email: "
                style={{ height: "50px", marginBottom: '15px' }}
              />
              <InputFormComponent
                placeholder="Họ và tên: "
                style={{ height: "50px", marginBottom: '15px'}}
              />
              <InputFormComponent
                placeholder="Số điện thoại: +84"
                style={{ height: "50px", marginBottom: '15px' }}
              />
              <InputFormComponent
                  placeholder="Địa chỉ"
                  style={{ height: "50px", marginBottom: '15px' }}
                />
              <div style={{ display: "flex", flexDirection: "row", marginBottom: '15px' }}>
                <Form
                  form={form}
                  name="control-hooks"
                  onFinish={onFinish}
                  style={{ maxWidth: 600 }}>
                    <Select
                      placeholder="Tỉnh thành"
                      onChange={onGenderChange}
                      style={{ height: '50px', width: '200px' }}
                      allowClear>
                        <Option value="hanoi">Hà Nội</Option>
                        <Option value="haiphong">Hải Phòng</Option>
                        <Option value="hochiminh">Hồ Chí Minh</Option>
                        <Option value="danang">Đà Nẵng</Option>
                    </Select>
                    <Select
                      placeholder="Quận huyện"
                      onChange={onGenderChange}
                      style={{ height: "50px", width: '200px' }}
                      allowClear>
                        <Option value="Q1 ">Quận 1  </Option>
                        <Option value="Q2 ">Quận 2</Option>
                        <Option value="Q3 ">Quận 3</Option>
                        <Option value="Q4 ">Quận 4</Option>
                        <Option value="Q5 ">Quận 5</Option>
                        <Option value="Q6 ">Quận 6</Option>
                        <Option value="Q7 ">Quận 7</Option>
                        <Option value="Q8 ">Quận 8</Option>
                        <Option value="Q9 ">Quận 9</Option>
                        <Option value="Q10 ">Quận 10</Option>
                        <Option value="Q11 ">Quận 11</Option>
                        <Option value="Q12 ">Quận 12</Option>
                    </Select>
                    <Select
                      placeholder="Phường xã"
                      onChange={onGenderChange}
                      style={{ height: "50px", width: '200px' }}
                      allowClear>
                        <Option value="A">Mãi iu em</Option>
                        <Option value="B">Trọn đòi bên em</Option>
                        <Option value="C">Sói hoang cô độc</Option>
                        <Option value="D">Đại bàng tung cánh</Option>
                    </Select>
                </Form>
              </div>
              <InputFormComponent
                placeholder="Ghi chú"
                style={{ height: "50px", marginBottom: '15px' }}
              />
            </div>
          </div>
          <WrapperFrameInsight style={{marginLeft: '750px', marginTop: '-380px', display: 'flex', flexDirection: 'column'}}>
            <div>
              <Checkbox onChange={handleExpressDeliveryChange} 
                        defaultChecked={true} 
                        checked={isExpressDeliverySelected}
                        style={{fontSize: '15px', 
                        padding: '10px'}}>
                Chuyển phát nhanh
              </Checkbox> 
              <span style={{fontWeight: '600', fontSize: '15px', marginLeft: '100px'}}> 50.000đ</span>
            </div>
            <span style={{marginLeft: '36px', fontSize: '10px', marginTop: '-6px', marginBottom: '7px'}}>Thời gian giao hàng dự kiến: 2 - 3 ngày</span>
            <UnderLine />
            <div>
              <Checkbox onChange={handlePriorityDeliveryChange} 
                        checked={isPriorityDeliverySelected}
                        style={{fontSize: '15px', 
                        padding: '10px'}}>
                Chuyển phát hỏa tốc
              </Checkbox>
              <span style={{fontWeight: '600', fontSize: '15px', marginLeft: '84px'}}> 150.000đ</span>
            </div>
            <span style={{marginLeft: '36px', fontSize: '10px', marginTop: '-6px', marginBottom: '7px'}}>Thời gian giao hàng dự kiến: 3 - 4 giờ</span>
        </WrapperFrameInsight>

        <div style={{marginTop: '20px'}}>
          <span style={{marginLeft: '750px',
                fontSize: "15px",
                fontWeight: "00",
                marginBottom: "15px"}}>
                  Phương thức
          </span>
          <WrapperFrameInsight style={{marginLeft: '750px', marginTop: '10px', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Checkbox onChange={handleExpressDeliveryChange} 
                        defaultChecked={true} 
                        checked={isExpressDeliverySelected}
                        style={{fontSize: '15px', 
                        padding: '10px'}}>
                Credit Card
              </Checkbox> 
              <span style={{marginLeft: '130px'}}>
                <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="logoPaypal"/>
              </span>
            </div>
            <UnderLine />
            <div>
              <Checkbox onChange={handlePriorityDeliveryChange} 
                        checked={isPriorityDeliverySelected}
                        style={{fontSize: '15px', 
                        padding: '10px'}}>
                Thanh toán khi nhận hàng (COD)
              </Checkbox>
            </div>
          </WrapperFrameInsight>
        </div>

        <div style={{height: '52px', width: '424px', marginLeft: '750px', borderRadius: '10px', marginTop: '6px'}}>
          <ButtonComponent
                          size={40}
                          styleButton={{
                          background: "rgb(255, 57, 69)",
                          height: "52px",
                          width: "100%",
                          border: "none",
                          borderRadius: "10px",
                          }}
                          textButton={"Thanh Toán"}
                          styleTextButton={{
                          color: "#fff",
                          fontSize: "15px",
                          fontWeight: "700",
                          }}>
            </ButtonComponent>
        </div>
      </WrapperFrame>
    </div>
  );
};

export default PurchasePage;
