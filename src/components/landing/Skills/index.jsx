import React from 'react';
import { Container } from 'components/common';
import dev from 'assets/illustrations/about_me.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="About me!" />
      </Thumbnail>
      <Details>
        <h1>About me</h1>
        <p>
          I am a research assitant at University of Hyderabad, currently pursuing my masters in Artificial Intelligence.
          I am strongly driven by the phrase: "AI for better mankind". Apart from this I also love making toy
          applications to ease my day-to-day life and keep myself entertained.（＾ｖ＾）
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
