import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/coding.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Heya!</h1>
        <h4>I’m Sai and I’m an AI research student</h4>
      </Details>
      <Thumbnail>
        <img src={dev} alt="coder!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
