import { Layout, Avatar } from 'antd';
import React from 'react';
import styles from './header.module.scss';
const { Header } = Layout;

export default () => (
  <Header className={styles.header}>
    <Avatar size="large" src={require('../../assets/images/claw.jpg')} />
  </Header>
);
