import React, { useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

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

const { useQuery } = GlobalContext;

export function Home() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const result = useQuery(Human);

  const humans = useMemo(
    () => result.sorted("createdAt"),
    [result]
  );

  return (
    <Container>
      <Header />
      <Humans>
        {
          humans.length > 0 ? (
            <HumanList data={humans} />
          ) : <Text style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: "700"
          }}>
            Todo: Instruções iniciais
          </Text>
        }
      </Humans>
      <GenerateButton
        onPress={() => navigate("Form")}>
        <ButtonTitle>Novo</ButtonTitle>
      </GenerateButton>
    </Container>
  );
}
