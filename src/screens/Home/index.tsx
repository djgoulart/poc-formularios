import React, { useCallback, useMemo } from 'react';
import { Button, Text, TouchableOpacityProps } from 'react-native';
import Header from '../../components/Header';
import { HumanList } from '../../components/HumanList';

import { Human } from '../../schemes/Human';
import GlobalContext from './../../contexts/global';

import {
  Container,
  Humans,
  GenerateButton,
  ButtonTitle
} from './styles';

const { useRealm, useQuery } = GlobalContext;

export function Home() {
  const data = {
    name: 'Diego',
    age: 34,
    gender: 'm'
  };

  const realm = useRealm();
  const result = useQuery(Human);

  const humans = useMemo(() => result.sorted("createdAt"), [result]);

  const handleAddHuman = useCallback(
    (name: string, age: number, gender: string): void => {
      realm.write(() => {
        realm.create("Human", Human.generate(name, age, gender));
      });
    },
    [realm]
  );

  return (
    <Container>
      <Header />
      <Humans>
        {
          humans.length > 0 ? (
            <HumanList data={humans} />
          ) : <Text>Teste</Text>
        }
      </Humans>
      <GenerateButton
        onPress={() => handleAddHuman(data.name, data.age, data.gender)}>
        <ButtonTitle>Novo</ButtonTitle>
      </GenerateButton>
    </Container>
  );
}
