import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};

  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  margin: 0 auto;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const UserData = styled.View`
  width: 50%;
  height: 100%;  
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const UserPic = styled.Image`
  width: 70px;
  height: 70px;
`;

export const UserGreeting  = styled.View`
  max-width: 150px;
  padding: 10px;
`;

export const TextGreeting = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const UserProfile = styled.TouchableOpacity`
  
`;

export const Icon = styled.Image`
  width: 33px;
  height: 33px;
  margin-top: -10px;
  margin-right: 20px;
`;

export const TitlePageHeader = styled.Text`
  color: #f00;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textLight};
`;