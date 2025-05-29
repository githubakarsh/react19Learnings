

import { Footercomponent } from "../../components/customComponents/footerComponent/FooterComponent";
import { HeaderComponent } from "../../components/customComponents/headerComponent/HeaderComponent";
import { Maincomponent } from "../../components/customComponents/mainComponent/MainComponent";
import { UseTitle } from "../../customHooks/title/useTitle"


import React from 'react';
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
import { Layout, Menu, theme } from 'antd';

const {  Content, Footer, Sider } = Layout;
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
  {name: 'Logout', icon: LogoutOutlined},
  //{name: 'Team', icon: TeamOutlined},
  //{name: 'Shop', icon: ShopOutlined},
].map((data, index) => ({
  key: String(index + 1),
  icon: React.createElement(data.icon),
  label: data.name,
}));



export const App: React.FC = () => {
  UseTitle({ title: "Ride events" });
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
    <Sider style={siderStyle}>
      <div style={{
        display: 'block',
        color: 'white',
        margin: '20px 15px'
      }}><h2>Rider events</h2></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
    <Layout>
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
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ride events ©{new Date().getFullYear()} Created by Ride events pvt ltd.
      </Footer>
    </Layout>
  </Layout>
  )
}

