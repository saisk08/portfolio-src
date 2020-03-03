import { Layout, Typography } from 'antd';
import React from 'react';
import styles from './footer.module.scss';

const { Footer } = Layout;
const { Text } = Typography;

export default () => (
  <Footer className={styles.footer}>
    <Text>Made with black magic by Sai</Text>
  </Footer>
);
