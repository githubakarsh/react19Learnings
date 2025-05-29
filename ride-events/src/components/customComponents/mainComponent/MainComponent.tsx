import React from "react";
import { theme, Layout } from 'antd';
const { Content } = Layout;

import {
    LogoutOutlined,
} from '@ant-design/icons';

export const Maincomponent: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return <>
    <div style={{
        padding: 20,
        textAlign: 'right',
        cursor: 'pointer'
    }}>
        <label style={{
            cursor: 'pointer'
        }}><LogoutOutlined /> Logout</label>
    </div>

    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div
            style={{
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            <p>long content</p>
        </div>
    </Content></>;
};