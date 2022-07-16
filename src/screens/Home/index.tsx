import React from 'react';

import { Header } from '../../components/Header';
import { CardHeader } from '../../components/CardHeader';

import { 
  Container, 
  Content
} from './styles';

import { ListInfluencers } from '../../components/ListInfluencers';

export const Home = () => {
  return (
    <Container>
      <Header title="  "/>
      <Content>
        <CardHeader />
      </Content>
      <ListInfluencers />
    </Container>
  );
};