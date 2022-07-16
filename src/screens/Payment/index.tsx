import React from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import { Container, Content, Congratulations, ConfirmText, ConfirmPic } from './styles';

export const Payment = () => {
  return (
    <Container>
      <Header title="Pagamento" />
      <Content>
        <Congratulations>Pagar via PIX</Congratulations>
        <ConfirmText>
          R$: 15.0000,00
        </ConfirmText>
        <ConfirmPic source={require('../../assets/qrcode.png')}/>
        <Button 
          title="Pagar Nathalia" 
          navig="Confirm"  
        />
      </Content>
    </Container>
  );
};