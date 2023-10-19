import React from "react";
import {
  StyleNameProduct,
  WrapperPriceText,
  WrapperReportText,
  WrapperPriceDiscountText,
  WrapperCardStyle,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../Assets/Image/verifyCheck.png";

const CartComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      bodyStyle={{ padding: "10px" }}
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: -1,
          left: -1,
          borderTopLeftRadius: "3px",
        }}
      />
      <StyleNameProduct>Em gái</StyleNameProduct>
      <WrapperReportText style={{ marginRight: "4px" }}>
        <span>
          <span>4.68</span>{" "}
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span>| Đã bán: 1000+ lần</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000 VNĐ
        <WrapperPriceDiscountText>-30%</WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CartComponent;
