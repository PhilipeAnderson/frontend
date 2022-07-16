import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme}) => theme.colors.backgroundDark};
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Logo = styled.Image`
  width: ${RFValue(370)}px;
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

export const TextContent = styled.Text`
  text-align: center;
  font-size: ${RFValue(36)}px;
  margin-top: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.textLight}
`;

export const TextLogin = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(30)}px;
  margin-bottom: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.textLight}

`;