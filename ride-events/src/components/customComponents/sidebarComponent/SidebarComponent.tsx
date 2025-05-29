import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UnorderedListOutlined,
 BookOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  UserAddOutlined
} from '@ant-design/icons';


//import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router';


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

// const items: MenuProps['items'] = [
//   {name: 'Home', icon: HomeOutlined, path: '/home'},
//   {name: 'Events', icon: UnorderedListOutlined, path: '/events'},
//   {name: 'About', icon: VideoCameraOutlined, path: '/about'},
//   {name: 'FAQs', icon: BookOutlined, path: 'faqs'},
//   {name: 'Signup', icon: UserAddOutlined, path: '/sign-up'},
//   {name: 'Login', icon: LoginOutlined, path: '/log-in'},
// ].map((data, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(data.icon),
//   label: data.name,
//   path: data.path
// }));

const sidebarNavOptions = [
  {name: 'Home', icon: HomeOutlined, path: '/'},
  {name: 'Events', icon: UnorderedListOutlined, path: '/events'},
  {name: 'About', icon: VideoCameraOutlined, path: '/about'},
  {name: 'FAQs', icon: BookOutlined, path: 'faqs'},
  {name: 'Signup', icon: UserAddOutlined, path: '/sign-up'},
  {name: 'Login', icon: LoginOutlined, path: '/log-in'},
]

export const SidebarComponent = () => {
  const navigate = useNavigate();
    return <Sider style={siderStyle}>
    <div style={{
      display: 'block',
      color: 'white',
      margin: '20px 15px'
    }}><h2>Rider events</h2></div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
      {sidebarNavOptions.map((data, index) => {
        return <Menu.Item key={index} onClick={() => navigate(data.path)}>{data?.name}</Menu.Item>
      })}
    </Menu>
  </Sider>
};