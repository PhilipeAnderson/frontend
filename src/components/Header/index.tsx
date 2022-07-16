import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Content,
  UserData,
  UserPic,
  UserGreeting,
  TextGreeting,
  UserProfile,
  Icon,
  TitlePageHeader
} from './styles';

interface titleProps {
  title: string;
}

export const Header = ({ title }: titleProps) => {

  const navigation = useNavigation();

  const openNextScreen = () => {
    navigation.navigate('ProfileUser');
  };

  return (
    <Container>
      <Content>
        <UserData>
          <UserPic source={require('../../assets/user.png')} />
          <UserGreeting>
            <TextGreeting>Olá , </TextGreeting>
            <TextGreeting>Usuário</TextGreeting>
          </UserGreeting>
        </UserData>
        <UserProfile onPress={ openNextScreen }>
          <Icon source={require('../../assets/power.png')} />  
        </UserProfile>
      </Content>
      <TitlePageHeader>{ title }</TitlePageHeader>
    </Container>
  );
};