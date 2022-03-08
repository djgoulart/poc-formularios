import React from 'react';
import { Text, View } from 'react-native';
import { FormInput } from '../../components/FormInput';
import { FormSelect } from '../../components/FormSelect';
import { SubmitButton } from '../../components/SubmitButton';

import {
  Container
} from './styles';

export function Home() {
  return (
    <Container>
      <View>
        <Text>Nome:</Text>
        <FormInput />
        <Text>E-mail:</Text>
        <FormInput />
        <Text>Sexo:</Text>
        <FormSelect />
        <SubmitButton title='Gravar' onPress={() => {}}/>
      </View>
    </Container>
  );
}
