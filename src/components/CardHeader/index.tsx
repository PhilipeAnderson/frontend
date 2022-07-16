import React from 'react';

import {
  Container
} from './styles';

import { HighlightCard } from './HighlightCard';

console.log('OI estamos aqui')

export const CardHeader = () => {
  return(
    <Container>
      <HighlightCard 
        photo= "0"
        influencer = "Patrícia Mendonça"
        occupation = "Engenheiro de Software"
        numberFollowers = "1.245.877"
      />
      <HighlightCard 
        photo="1"
        influencer = "Patrícia Mendonça"
        occupation = "Engenheiro de Software"
        numberFollowers = "1.245.877"
      />
      <HighlightCard 
        photo="2"
        influencer = "Patrícia Mendonça"
        occupation = "Engenheiro de Software"
        numberFollowers = "1.245.877"
      />
    </Container>
  )
}