import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Title, SocialImg } from './styles';
interface SignInButtonProps extends RectButtonProps {
  svg: React.FC<SvgProps>
  title: string,
  navig: string
}

export const SignInButton = ({ title, navig, svg: Svg }: SignInButtonProps) => {
  
  const navigation = useNavigation();

  const openScreen = () => {
    navigation.navigate(navig);
  }
  
  // Page for login with Google
  return (
    <Container>
      <SocialImg>
        <Svg />
      </SocialImg>
      <Title onPress={ openScreen }>
        { title }
      </Title>
    </Container>
  );
};