import React from 'react';

import { Container, Title } from './styles';

interface TitleProps{
  title: string;
}

export const ButtonFrequency = ({ title, ...rest } : TitleProps) => {
  return (
    <Container { ...rest }>
      <Title>
        { title }
      </Title>
    </Container>
  );
};