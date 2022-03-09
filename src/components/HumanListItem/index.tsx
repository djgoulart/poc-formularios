import React from 'react';

import {
  Container,
  Name,
  Wrapper,
  Age,
  Gender,
  GenderIcon
} from './styles';

interface Props {
  name: string;
  age: number;
  gender: string;
}

export function HumanListItem(
  { name, age, gender }: Props
) {
  return (
    <Container>
      <Name>{name}</Name>
      <Age>{`Age: ${age}`}</Age>
      <Wrapper>
        <GenderIcon color={gender === 'm' ? 'blue' : 'pink'} name={gender === 'm' ? 'gender-male' : 'gender-female'} />
      </Wrapper>
    </Container>
  );
}
