import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
        padding: 10px 120px;
        background-color: rgb(26 , 148 , 255);
        align-items: center;
        gap:16px;
        width: 1270px;
        padding: 10px 0;
        flex-wrap:nowrap;
`
export const WrapperTextHeader = styled.span`
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        text-align: left
`
export const WrapperUserHeader = styled.div` //aka WrapperUserAccount
        display:flex;
        align-items: center;
        color: #fff;
        gap: 10px;
        font-size: 12px;
`
export const WrapperTextHeaderSmall = styled.span`
        font-size: 12px;
        color: #fff;
        white-space: nowrap;
`
export const WrapperIconHeader = styled.span`
        font-size: 30px;
        color: #fff;
`