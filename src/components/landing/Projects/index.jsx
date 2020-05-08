import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
      <Item key={0} as="a" href="https://github.com/saisk08/tttxttt" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>tttxttt</h4>
            <p>A react version of the extended tic tac toe game</p>
          </Content>
        </Card>
      </Item>
      <Item key={1} as="a" href="https://github.com/SCIS-SysAdmin/Hermes" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Hermes</h4>
            <p>A web application for lab submission</p>
          </Content>
        </Card>
      </Item>
      <Item key={2} as="a" href="https://github.com/saisk08/Pomodoro_clock" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Pomodoro Clock</h4>
            <p>Pomodoro clock in web web application</p>
          </Content>
        </Card>
      </Item>
      <Item key={3} as="a" href="https://github.com/saisk08/GameOfCards" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Game of Cards</h4>
            <p>A client server application that lets many clients play a card game together.</p>
          </Content>
        </Card>
      </Item>
      <Item key={4} as="a" href="https://github.com/rajubapi/NN-Notes" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>NN Notes</h4>
            <p>A blog for Neural Networks</p>
          </Content>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
