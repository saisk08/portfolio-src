import React from 'react';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
      <Item key={0} as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Test</h4>
            <p>Test</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>{0}</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>{1}</span>
            </div>
          </Stats>
        </Card>
      </Item>
      <Item key={1} as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Test</h4>
            <p>Test</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>{0}</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>{1}</span>
            </div>
          </Stats>
        </Card>
      </Item>
      <Item key={2} as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Test</h4>
            <p>Test</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>{0}</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>{1}</span>
            </div>
          </Stats>
        </Card>
      </Item>
      <Item key={3} as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Test</h4>
            <p>Test</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>{0}</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>{1}</span>
            </div>
          </Stats>
        </Card>
      </Item>
      <Item key={4} as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Test</h4>
            <p>Test</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>{0}</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>{1}</span>
            </div>
          </Stats>
        </Card>
      </Item>
      <Item key={5} as="a" href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h4>Test</h4>
            <p>Test</p>
          </Content>
          <Stats>
            <div>
              <img src={starIcon} alt="stars" />
              <span>{0}</span>
            </div>
            <div>
              <img src={forkIcon} alt="forks" />
              <span>{1}</span>
            </div>
          </Stats>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
