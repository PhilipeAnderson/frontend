import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;