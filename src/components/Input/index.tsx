import React from 'react';

import {
  Container,
  Text
} from './styles';

interface TitleProps{
  title: string;
}

export const Input = ({ title } : TitleProps) => {
  return(
    <Container>
      <Text>
        { title }
      </Text>
    </Container>
  )
}