import React, { FC } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Feed from "../../components/Feed";

const { Header, Sider, Content, Footer } = Layout;

const PageNation = () => {
  return (
    <Layout style={{ height: "100vh", minWidth: "992px" }}>
      <Header>header</Header>
      <Layout>
        <Sider breakpoint={"lg"}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Feed />
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default PageNation;
