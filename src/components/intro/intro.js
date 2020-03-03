import React from 'react';
import { Col, Row, Layout, Divider } from 'antd';
import styles from './intro.module.scss';

export default () => (
  <Layout className={styles.container}>
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className={styles.crop}>
          <img src={require('../../assets/images/claw.jpg')} />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <h1>Hi, this is Sai</h1>
        <Divider />
        <p>Some stuff about me maybe</p>
      </Col>
    </Row>
  </Layout>
);
