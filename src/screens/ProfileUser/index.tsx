import React from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { KeyboardAvoidingView, Platform, StyleSheet, ScrollView } from 'react-native';

import {
  Container,
  Content,
  ViewData,
  TitleData,
  EntryData,
  NameUser,
  NameLabelUser,
  NameInputUser,
  EmailUser,
  EmailLabelUser,
  EmailInputUser,
  WhatsUser,
  WhatsLabelUser,
  WhatsInputUser,
  IconTrash,
  IconEdit,
  AboutUser,
  AboutTitle,
  AboutText,
  ViewButtons
} from './styles';

export const ProfileUser = () => {
  return (
    <Container>
      <Header title='Perfil Do Usuário' />
      <Content>
        <ViewData>
          <TitleData>
            Dados para ser contactado:
          </TitleData>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.containerKeyboard}
            keyboardVerticalOffset={100}
          >
            <ScrollView style={{ width: "100%" }}>
              <EntryData>
                <NameUser>
                  <NameLabelUser>Nome:</NameLabelUser>
                  <NameInputUser />
                  <IconTrash name="edit" />
                  <IconEdit name="trash-2" />
                </NameUser>
                <EmailUser>
                  <EmailLabelUser>E-mail:</EmailLabelUser>
                  <EmailInputUser />
                  <IconTrash name="edit" />
                  <IconEdit name="trash-2" />
                </EmailUser>
                <WhatsUser>
                  <WhatsLabelUser>Whats:</WhatsLabelUser>
                  <WhatsInputUser />
                  <IconTrash name="edit" />
                  <IconEdit name="trash-2" />
                </WhatsUser>
              </EntryData>
            </ScrollView>
          </KeyboardAvoidingView>
        </ViewData>
        <AboutUser>
          <AboutTitle>Sobre:</AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </AboutText>
        </AboutUser>
        <ViewButtons>
          <Button
            title="Confirmar"
            navig="Home"
          />
          <Button
            title="Voltar para o App"
            navig="Home"
          />
          <Button
            title="Sair do App"
            navig="Login"
          />
        </ViewButtons>
      </Content>
    </Container>
  )
};

const styles = StyleSheet.create({
  containerKeyboard: {
    height: 200,
    zIndex: 1
  },

})