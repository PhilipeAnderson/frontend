import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(350)}px;
  height: ${RFValue(60)}px;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 0 30px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${({ theme}) => theme.colors.backgroundLight};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 18px;
`;

export const SocialImg = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
`;

