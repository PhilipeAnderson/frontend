import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark };
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.backgroundDark };
`;

export const DataInfluencer = styled.View`
  width: 100%;
  height: 125px;
  margin-top: 50px;
  align-items: center;
`;

export const TopDataInfluencer = styled.View`
  width: 100%;
  padding: 14px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -50px;
  align-items: center;
  justify-content: space-between;
`;

export const ImageInfluencer = styled.Image`
  width: 125px;
  height: 125px;
  margin-top: 5px;
  border-radius: 100px;
`;

export const TopDataInfluencerStarring = styled.View`
  width: 225px;
  height: 30px;
  margin-top: -100px;
  align-items: center;
`;

export const TopDataInfluencerName = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const TopDataInfluencerCity = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const TopDataInfluencerSegment = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const TopDataInfluencerStars = styled.View`
  width: 100%;
  margin-top: -25px;
`;

export const RatingBarStyle = styled.View`
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 12px;
`;

export const StarImageStyle = styled.Image`
  width: 40px;
  height: 40px;
`;

export const CallInfluencer = styled.View`
  width: 100%;
  height: 125px;
  align-items: center;
`;

export const RequestContact = styled.View`
  width: 80%;
  height: 50px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`;

export const RequestContactAsk = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const RequestContactButton = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault };

  align-items: center;
  justify-content: center;
`;

export const RequestContactButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight };
`;

export const RequestContactText = styled.Text`
  font-size:15px;
  color: ${({ theme }) => theme.colors.textLight };
`;

export const AboutInfluencer = styled.View`
  width: 100%;
  height: 100px;
  padding: 0 10px;
  margin-top: -40px;
`;

export const AboutTitle = styled.Text`
  font-size: 26px;
  color: ${({ theme }) =>  theme.colors.textLight };
`;

export const AboutText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) =>  theme.colors.textLight };  
`;


