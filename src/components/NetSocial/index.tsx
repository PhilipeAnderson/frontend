import React from 'react';
import {
  Container,
  Images,
  Instagram,
  Facebook,
  LinkedIn,
  YouTube,
  Text,
  LinkExterno
} from './styles';

interface TitleProps{
  title: string;
}


export const NetSocial = ({ title } : TitleProps) => {
  return(
    <Container>
      <Text>
        { title }       
      </Text>
      <Images>
        <Instagram source={require('../../assets/instagram.png')}/>
        <Facebook source={require('../../assets/facebook.png')} />
        <LinkedIn source={require('../../assets/linkedin.png')} />
        <YouTube source={require('../../assets/youtube.png')}/>
      </Images>
    </Container>
  )
}