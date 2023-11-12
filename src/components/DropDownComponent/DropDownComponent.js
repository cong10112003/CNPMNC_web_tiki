import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd'


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{display: 'flex', justifyContent: 'center'}}>
                Asus
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{display: 'flex', justifyContent: 'center'}}>
                Lenovo
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{display: 'flex', justifyContent: 'center'}}>
                Macbook
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{display: 'flex', justifyContent: 'center'}}>
                HP
            </a>
        ),
    },
];
const DropDownComponent = () => {
  return (
    <div style={{display: 'flex', paddingLeft: '10px', paddingRight: '20px', marginTop: '10px', marginBottom: '10px'}}>
        <div style={{ width: '200px' }}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        Máy tính
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        <div style={{marginLeft: '20px', width: '200px'}}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        Điện thoại
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        <div style={{marginLeft: '20px', width: '200px'}}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        TV
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        <div style={{marginLeft: '20px', width: '200px'}}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        Linh kiện
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        <div style={{marginLeft: '20px', width: '200px'}}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        PC
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        <div style={{marginLeft: '20px', width: '200px'}}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        Tai nghe
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
        <div style={{marginLeft: '20px', width: '200px'}}>
            <Dropdown menu={{ items }} overlayStyle={{width: '200px'}}>
                <a onClick={(e) => e.preventDefault()} style={{height: '30px', fontSize: '14px', lineHeight: '1', display: 'flex', justifyContent: 'center'}}>
                    <Space>
                        Em gái 18 múp
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    </div>
  )
}

export default DropDownComponent