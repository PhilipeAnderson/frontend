import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Content = styled.View`
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
`;

export const FrequencyBudget = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const FrequencyBudgetText = styled.Text`
margin-left: -235px;
margin-bottom: 10px;
font-size: 18px;
color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const FrequencyDayWeekMonth = styled.View`
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const ChoiceQuantity = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ChoiceQuantityText = styled.Text`
  margin-left: -150px;
  margin-bottom: 5px;;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ChoiceStoriesPostEvent = styled.View`
  padding: 10px;
  margin-left: 30px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-evenly;

`;

export const ChoiceStories = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ChoiceStoriesText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ChoicePost = styled.View`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ChoicePostText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ChoiceSelectStory = styled.TouchableOpacity`

`;

export const ChoiceSelectPost = styled.TouchableOpacity`

`;


export const ContractValue = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ContractValueText = styled.Text`
  margin-top: 10px;
  margin-left: -270px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const ContractValueMoney = styled.Text`
  font-size: 30px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.backgroundLight};
`;

