import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 2px;
  border-radius: 5px ;

`;

export const Name = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Email = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const Gender = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const GenderIcon = styled(MaterialCommunityIcons)`
  font-size: 32px;
`;
