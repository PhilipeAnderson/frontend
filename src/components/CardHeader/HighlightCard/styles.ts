import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 35%;
`;

export const Content = styled.View`
  width: 280px;
  border-radius: 12px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const InfoSquare = styled.View`
  position: absolute;
  margin-top: 250px;
  width: 90%;
  height: 150px;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.8);
  flex-direction: row;
  align-items: center;
`;

export const SocialNets = styled.View`
  width: 40px;
  height: 100%;
`;

export const Instagram = styled.Image`
  width: 27px;
  height: 27px;
  margin: 5px 10px;
`;

export const Facebook = styled.Image`
  width: 27px;
  height: 27px;
  margin: 5px 10px;
`;

export const LinkedIn = styled.Image`
  width: 27px;
  height: 27px;
  margin: 5px 10px;
`;

export const YouTube = styled.Image`
  width: 27px;
  height: 27px;
  margin: 5px 10px;
`;

export const DetailsInfluencer = styled.Text`
  font-size: 22px;
  color: #fff;
  margin: 0 auto;
  text-align: center;
`;

export const Occupation = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Followers = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const NumberFollowers = styled.Text`
  font-size: 14px;
  color: #fff;
`;