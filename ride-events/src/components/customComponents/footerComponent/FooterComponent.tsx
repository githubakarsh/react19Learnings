import { Layout } from 'antd';

const {  Footer  } = Layout;

export const Footercomponent = ()=> {
    return <Footer style={{ textAlign: 'center' }}>
    Ride events ©{new Date().getFullYear()} Created by Ride events pvt ltd.
  </Footer>;
};