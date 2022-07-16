import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

interface SignInButtonTokenTextProps{
  title: string;
  navig: string;
}

export const SignInButtonToken = ({ title, navig }: SignInButtonTokenTextProps ) => {
  
  const navigation = useNavigation();

  const openScreen = () => {
    navigation.navigate( navig );
  }

    // Page for login with Login and Password
  return ( 
    <Container>
      <Title onPress={openScreen}>
        { title }
      </Title>
    </Container>
  )
};