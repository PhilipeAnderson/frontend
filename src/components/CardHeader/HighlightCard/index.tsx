import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  Container, 
  Content, 
  Image, 
  InfoSquare, 
  SocialNets,
  Instagram,
  Facebook,
  LinkedIn,
  YouTube,
  DetailsInfluencer,
  Occupation,
  Followers,
  NumberFollowers
} from './styles';

interface DetailsProps{
  photo: string;
  influencer: string,
  occupation: string,
  numberFollowers: string;
}

const imgs = [
  'https://i.imgur.com/QWbpkAW.jpg',
  'https://i.imgur.com/WYOtWJs.jpg',
  'https://i.imgur.com/wQwznDd.jpg',
  'https://i.imgur.com/AAh1lLc.jpg',
  'https://i.imgur.com/QWbpkAW.jpg',
  'https://i.imgur.com/tBABtgQ.jpg',
  'https://i.imgur.com/7dTwxNI.jpg',
  'https://i.imgur.com/DiI8RPE.jpg'
]

export const HighlightCard = ({ photo, influencer, occupation, numberFollowers }: DetailsProps) => {

  const navigation = useNavigation();

  const openNextScreen = () => {
    navigation.navigate('ProfileInfluencer')
  }

  return (
    <Container onPress={ openNextScreen }>
      <Content>
        <Image source={{uri: imgs[photo]}}/>
        <InfoSquare>
          <SocialNets>
            <Instagram source={require('../../../assets/instagram.png')}/>
            <Facebook source={require('../../../assets/facebook.png')} />
            <LinkedIn source={require('../../../assets/linkedin.png')} />
            <YouTube source={require('../../../assets/youtube.png')}/>
          </SocialNets>
          <DetailsInfluencer>
            { influencer }
            {'\n'}
            <Occupation>
              { occupation }
            </Occupation>
            {'\n'}
            <Followers>
              Seguidores em todas as Redes
            </Followers>
            {'\n'}
            <NumberFollowers>
              Total: { numberFollowers }
            </NumberFollowers>
          </DetailsInfluencer>
        </InfoSquare>
      </Content>
    </Container>
  );
};