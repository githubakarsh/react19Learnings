import { Layout } from 'antd';

const {  Footer  } = Layout;

export const Footercomponent = ()=> {
    return <Footer style={{ textAlign: 'center', borderTop: '1px solid lightgray' }}>
    Ride events ©{new Date().getFullYear()} Created by Ride events pvt ltd.
  </Footer>;
};