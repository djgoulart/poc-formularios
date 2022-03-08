import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 120px;
  padding: 10px ;
  display: flex ;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 44px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: 48px;
  height: 48px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const LogoutButton = styled(TouchableOpacity)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
`;
