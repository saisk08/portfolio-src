import { Layout, Typography } from "antd";
import React from "react";
const { Header } = Layout;
const { Text } = Typography;

export default () => (
  <Layout>
    <Header>
      <Text type="danger">Header</Text>
    </Header>
  </Layout>
);
