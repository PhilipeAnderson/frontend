import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80px;
  height: 25px;
  padding: 5px;
  border: none;
  border-radius: 5px;;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.backgroundDark}
`;