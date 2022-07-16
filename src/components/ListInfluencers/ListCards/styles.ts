import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundDark };
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ContentImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const ContentInfo = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ContentName = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const ContentFollowers = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Instagram = styled.Image`
  width: 18px;
  height: 18px;
  margin: 2px;
`;

export const Facebook = styled.Image`
  width: 18px;
  height: 18px;
  margin: 2px;
`;

export const LinkedIn = styled.Image`
  width: 18px;
  height: 18px;
  margin: 2px;
`;

export const YouTube = styled.Image`
  width: 18px;
  height: 18px;
  margin: 2px;
`;

export const ContentFooter = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const ContentSocial = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContentButton = styled.View`
  width: 120px;
  height: 24px;
  border-radius: 5px;
  margin-left: 10px;
  background-color: green;
`;

export const ContentButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;