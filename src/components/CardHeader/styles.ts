import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 14 }
})`
  width: 100%;
  height: 400px;
  position: absolute;
  margin-top: -75px;
`;
