import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, TitleButton } from './styles';

interface titleProps {
  title: string;
  navig: string;
}

export const Button = ({ title, navig }: titleProps) => {

  const navigation = useNavigation();

  const openNextScreen = () => {
    navigation.navigate( navig )
  }

  return(
    <Container>
      <TitleButton onPress={ openNextScreen }>
        { title }
      </TitleButton>
    </Container>
  )
}