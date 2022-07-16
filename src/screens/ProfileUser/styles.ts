import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark };
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.backgroundDark };
`;

export const ViewData = styled.View`
  width: 100%;
  height: 36%;
  padding: 0 10px;
`;

export const TitleData = styled.Text`
  font-size: 26px;
  margin-top: 10px;
  color: ${({ theme }) =>  theme.colors.backgroundLight };
`;

export const EntryData = styled.View`
  width: 100%;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const NameUser = styled.View`
  width: 100%;
  height: 25px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const NameLabelUser = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textLight };
`;

export const NameInputUser = styled.TextInput`
  width: 175px;
  height: 27px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textLight };
  background-color: ${({ theme }) => theme.colors.backgroundGray };
`;

export const EmailUser = styled.View`
  width: 100%;
  height: 25px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const EmailLabelUser = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textLight };
`;

export const EmailInputUser = styled.TextInput`
  width: 175px;
  height: 27px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundGray };
`;

export const WhatsUser = styled.View`
  width: 100%;
  height: 25px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const WhatsLabelUser = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textLight };
`;

export const WhatsInputUser = styled.TextInput`
  width: 175px;
  height: 27px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundGray };
`;

export const AboutUser = styled.View`
  width: 100%;
  height: 30%;
  padding: 0 10px;
  margin-top: -5px;
`;

export const AboutTitle = styled.Text`
  font-size: 26px;
  color: ${({ theme }) =>  theme.colors.backgroundLight };
`;

export const AboutText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) =>  theme.colors.backgroundLight };
`;

export const ViewButtons = styled.View`
  width: 100%;
  height: 33%;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconTrash = styled(Feather)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.iconEdit };
`;

export const IconEdit = styled(Feather)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.iconTrash };
`;

