import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { NetSocial } from '../../components/NetSocial';
import { Button } from '../../components/Button';

import {
  Container,
  Content,
  DataInfluencer,
  TopDataInfluencer,
  ImageInfluencer,
  TopDataInfluencerStarring,
  TopDataInfluencerName,
  TopDataInfluencerCity,
  TopDataInfluencerSegment,
  TopDataInfluencerStars,
  RatingBarStyle,
  StarImageStyle,
  CallInfluencer,
  RequestContact,
  RequestContactAsk,
  RequestContactButton,
  RequestContactButtonText,
  RequestContactText,
  AboutInfluencer,
  AboutTitle,
  AboutText
} from './styles';

import {
  TouchableOpacity,
} from 'react-native';

export const ProfileInfluencer = () => {

  // < Atualizar adicionando ou removendo as estrelas de classificação
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const RatingBar = () => {
    return (
      <RatingBarStyle>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <StarImageStyle
                source={
                  item <= defaultRating
                    ? require('../../assets/starFull.png')
                    : require('../../assets/starEmpty.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </RatingBarStyle>
    );
  };
  // </ Atualizar adicionando ou removendo as estrelas de classificação

  // < Trocar o Valor entre SIM e NÃO da Pergunta Solicitar Contato
  const [yes, setYes] = useState('SIM');

  const changeQuestion = () => {
    yes === 'SIM' ? setYes('NÃO') : setYes('SIM');
  };
  // </ Trocar o Valor entre SIM e NÃO da Pergunta Solicitar Contato

  return (
    <Container>
      <Header title="Perfil Influencer" />
      <Content>
        <DataInfluencer>
          <TopDataInfluencer>
            <ImageInfluencer source={require('../../assets/model01.jpg')} />
            <TopDataInfluencerStarring>
              <TopDataInfluencerName>Nathalia Amaral</TopDataInfluencerName>
              <TopDataInfluencerCity>Cidade: Rio De Janeiro</TopDataInfluencerCity>
              <TopDataInfluencerSegment>Segmento: Alimentação</TopDataInfluencerSegment>
              <TopDataInfluencerStars>
                <RatingBar />
              </TopDataInfluencerStars>
            </TopDataInfluencerStarring>
          </TopDataInfluencer>
          <CallInfluencer>
            <RequestContact>
              <RequestContactAsk>Solicitar Contato?</RequestContactAsk> 
              <RequestContactButton onPress={ changeQuestion }>
                <RequestContactButtonText>{ yes }</RequestContactButtonText>
              </RequestContactButton>
            </RequestContact>
            <RequestContactText>
              Nathalia receberá um aviso em seu aplicativo
            </RequestContactText>
          </CallInfluencer>
          <AboutInfluencer>
            <AboutTitle>Sobre:</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </AboutText>
          </AboutInfluencer>
          <NetSocial
            title="Acesse as redes da: Nathalia"
          />
          <Button
            title="Orçamento"
            navig="BudgetInfluencer"
          />
        </DataInfluencer>
      </Content>
    </Container>
  )
}