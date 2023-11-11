import styled from "styled-components"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background: rgb(13, 92, 182);
        span{
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`
export const WrapperProduct = styled.div`
    display: flex;
    gap: 14px;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 1100px;
`
export const WrapperEventItem = styled.div`
    height: 400px;
    width: 350px;
    border: 1px;
    border-radius: 20px;
    background-color: red;
    position: relative;
    overflow: hidden;
`
export const WrapperProductFrame = styled.span`
    width: 1350px;
    height: fit-content;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    padding-bottom: 15px;
`
export const WrapperCategoryItem = styled.div`
    height: 150px;
    width: 150px;
    background-color: red;
    border-radius: 20px;
`
export const WrapperTittleText = styled.span`
    font-size: 40px;
    font-weight: bold;
    color: #E55604;
    margin-top: 10px;
    margin-bottom: 30px;
`

