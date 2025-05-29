import React, { useState } from "react";
import { theme, Layout } from 'antd';
const { Content } = Layout;

import {
    LogoutOutlined,
} from '@ant-design/icons';
import { LogoutModal } from "../../modals/LogoutModal";
import { AppRouter } from "../../../approuter/AppRouter";

export const Maincomponent: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
      };

    return <>
    <LogoutModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    <div style={{
        padding: 20,
        textAlign: 'right',
        cursor: 'pointer'
    }}>
        <label onClick={() => showModal()} style={{
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
            <AppRouter />
        </div>
    </Content></>;
};

type Maincomponent = {
    setIsModalOpen: () => void; // Example with a string state
  };