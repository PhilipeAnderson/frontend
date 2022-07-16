import React from 'react';
import { SignInButtonToken } from '../../components/SignInButtonToken';
import { SignInButton } from '../../components/SignInButton';

import GoogleSvg from '../../assets/icon-google.svg';

import {
  Container,
  Header,
  Content,
  Logo,
  TextLogin,
  InputsFields,
  InputLogin,
  InputPassword
} from './styles';

export const LoginToken = () => {

  return (
    <Container>
      <Header>
        <Logo source={require('../../assets/logo.png')} />
      </Header>
      <Content>
        <TextLogin>
          Entre no app {'\n'}
          com seu Login e Senha
        </TextLogin>
        <InputsFields>
          <InputLogin 
            placeholder="Digite seu Login" 
              
          />
          <InputPassword placeholder="Digite sua Senha" />
          <SignInButtonToken
            title="Entrar"
            navig="Home"
          />
        </InputsFields>
        <TextLogin>
          Ou {'\n'} Use sua conta Google
        </TextLogin>
        <SignInButton
          title="Entrar com o Google"
          navig="Home"
          svg={GoogleSvg}
        />
      </Content>
    </Container>
  )
};