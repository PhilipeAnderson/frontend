import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  margin-top: -200px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundDefault };
  `;