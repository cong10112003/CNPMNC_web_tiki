import { Col, Flex } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
  WrapperUserHeader,
} from "./style";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponents = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>BANTUMLUM</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            placeholder="Tìm kiếm ở đây"
            textButton="Tìm kiếm"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
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
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponents;
