import React from 'react'
import { MenuOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, } from 'antd'


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{paddingLeft: '16px'}}>
                Bàn phím
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{paddingLeft: '16px'}}>
                Case PC
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{paddingLeft: '16px'}}>
                Chuột
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{paddingLeft: '16px'}}>
                Màn hình
            </a>
        ),
    },
    {
        key: '5',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{paddingLeft: '16px'}}>
                Máy tính
            </a>
        ),
    },
    {
        key: '6',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{paddingLeft: '16px'}}>
                Tai nghe
            </a>
        ),
    },
];
const DropDownComponent = () => {
  return (
    <div style={{display: 'flex', paddingLeft: '10px', paddingRight: '20px', marginTop: '10px', marginBottom: '10px'}}>
        <div style={{ width: '100px'}}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        <MenuOutlined style={{color: 'black'}}/>
                        <div style={{color: 'black'}}>
                        Danh mục
                        </div>
                    </Space>
                </a>
            </Dropdown>
        </div>
    </div>
  )
}

export default DropDownComponent