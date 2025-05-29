import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UnorderedListOutlined,
 BookOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined
} from '@ant-design/icons';


import type { MenuProps } from 'antd';


const {  Sider } = Layout;
const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const items: MenuProps['items'] = [
  {name: 'Home', icon: HomeOutlined},
  {name: 'Events', icon: UnorderedListOutlined},
  {name: 'About', icon: VideoCameraOutlined},
  {name: 'FAQs', icon: BookOutlined},
  {name: 'Signup', icon: UserAddOutlined},
  {name: 'Login', icon: LoginOutlined},
].map((data, index) => ({
  key: String(index + 1),
  icon: React.createElement(data.icon),
  label: data.name,
}));

export const SidebarComponent = () => {
    return <Sider style={siderStyle}>
    <div style={{
      display: 'block',
      color: 'white',
      margin: '20px 15px'
    }}><h2>Rider events</h2></div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
  </Sider>
};