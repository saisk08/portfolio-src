import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { Footer } from 'components/theme';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Footer />
  </Layout>
);
