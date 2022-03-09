import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1%;
 background-color: ${({ theme }) => theme.colors.secondary};

 justify-content: flex-start;
 align-items: center;
`;

export const Humans = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 10px;

  padding: 14px;
`;

export const GenerateButton = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;
  height: 72px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 5px;

  margin-top: 10px;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.shape};
`;
