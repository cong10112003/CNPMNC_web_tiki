import { Badge, Col, Flex } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
  WrapperUserHeader,
} from "./style";
import {
  UserOutlined,
  CaretDownFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import DropDownComponent from "../DropDownComponent/DropDownComponent";


const HeaderComponents = () => {
  return (
    <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center'}}>
      <WrapperHeader>
        <Col span={4} style={{marginLeft: '-50px'}}>
          <div style={{marginLeft: '-40px'}}>
            <WrapperTextHeader>BANTUMLUM</WrapperTextHeader>
          </div>
        </Col>
        <Col span={3}>
          <div style={{marginLeft: '-100px'}}>
            <DropDownComponent />
          </div>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            placeholder="Tìm kiếm ở đây"
            textButton="Tìm kiếm"
          />
        </Col>
        <Col
          span={5}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <WrapperUserHeader>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownFilled />
              </div>
            </div>
          </WrapperUserHeader>

          <div>
            <div>
              <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}/>
              </Badge>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponents;
