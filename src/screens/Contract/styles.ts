import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  background-color: black;

  align-items: center;
  justify-content: space-around;

`;

export const ContractTitle = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.backgroundLight };
`;

export const ContractText = styled.Text`
  font-size: 14px;
  padding: 0 30px;
  color: ${({ theme }) => theme.colors.backgroundLight };
`;

export const ConfirmPic = styled.Image`
  width: 250px;
  height: 250px;
`;