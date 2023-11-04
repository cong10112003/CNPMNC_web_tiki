import React from "react";
import {
  StyleNameProduct,
  WrapperPriceText,
  WrapperReportText,
  WrapperPriceDiscountText,
  WrapperCardStyle,
  WrapperTextSell
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
      <WrapperReportText >
        <span style={{ marginRight: "4px" }}>
          <span>4.68</span>{" "}
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperTextSell>| Đã bán: 1000+ lần</WrapperTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: '8px'}}>1.000.000 VND</span>
        <WrapperPriceDiscountText>-30%</WrapperPriceDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CartComponent;
