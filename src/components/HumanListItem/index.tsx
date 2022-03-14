import React from 'react';

import {
  Container,
  Name,
  Wrapper,
  Email,
  Gender,
  GenderIcon
} from './styles';

interface Props {
  name: string;
  email: string;
}

export function HumanListItem(
  { name, email }: Props
) {
  return (
    <Container>
      <Name>{name}</Name>
      <Email>{`${email}`}</Email>
    </Container>
  );
}
