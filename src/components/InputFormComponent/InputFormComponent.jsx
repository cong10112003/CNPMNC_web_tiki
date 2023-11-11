import { Input } from 'antd'
import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputFormComponent = (props) => {
    const [valueInput, setValueInput] = useState('')
    const { placeholder= 'Nhập text',style, ...rests } = props
  return (  
    <WrapperInputStyle placeholder= {placeholder} valueInput= {valueInput} style={style} {...rests}/>
  )
}

export default InputFormComponent