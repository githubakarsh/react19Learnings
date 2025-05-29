

import { Footercomponent } from "../../components/customComponents/footerComponent/FooterComponent";
import { Maincomponent } from "../../components/customComponents/mainComponent/MainComponent";
import { UseTitle } from "../../customHooks/title/useTitle"
import React from 'react';
import { Layout } from 'antd';
import { SidebarComponent } from "../../components/customComponents/sidebarComponent/SidebarComponent";

export const App: React.FC = () => {
  UseTitle({ title: "Ride events" });
  return (
    <Layout hasSider>
      <SidebarComponent />
      <Layout>
        <Maincomponent />
        <Footercomponent />
      </Layout>
    </Layout>
  )
};