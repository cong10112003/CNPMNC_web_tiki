import React from 'react'
import { UnderLine, WrapperLowerTitle, WrapperTittleText, WrapperUpperImage } from './style'

const ProductItemComponent = () => {
  return (
    <div >
      <WrapperLowerTitle >
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '420px'}} >
        <UnderLine/>
        <WrapperTittleText style={{marginLeft: '20px'}}>
          Thông tin sản phẩm
        </WrapperTittleText>
        </div>
    </WrapperLowerTitle>
    <WrapperUpperImage>

    </WrapperUpperImage>
    </div>
  )
}

export default ProductItemComponent