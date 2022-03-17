import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Name,
  Email,
} from './styles';

export interface HumanListItemProps extends TouchableOpacityProps {
  name: string;
  email: string;
  pets?: number;
  onPress: () => void;
}

export function HumanListItem(
  { name, email, pets, onPress }: HumanListItemProps
) {
  return (
    <Container onPress={onPress}>
      <Name>{name}</Name>
      <Email>{email}</Email>
      <Name>{`pets: ${pets || 0}`}</Name>
    </Container>
  );
}
