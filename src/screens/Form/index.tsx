import React, { useCallback, useState } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

import { Human } from '../../schemes/Human';
import GlobalContext from './../../contexts/global';

import Header from '../../components/Header';
import { FormInput } from '../../components/FormInput';
import { FormSelect } from '../../components/FormSelect';
import { SubmitButton } from '../../components/SubmitButton';

import {
  Container,
  Fields,
  Footer
} from './styles';

interface FormData {
  [name: string]: any
}

const { useRealm } = GlobalContext;

export function Form() {
  const realm = useRealm();
  const [gender, setGender] = useState("" as string);

  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
  } = useForm();

  const handleAddHuman = useCallback(
    (name: string, email: string): void => {
      realm.write(() => {
        realm.create("Human", Human.generate(name, email));
      });
    },
    [realm]
  );

  function handleFormSubmit(form: FormData) {
    const { name, email } = form;

    handleAddHuman(name, email);

    reset();
    navigate("Home");
  }

  function handleSelectGender(value: string) {
    setGender(value);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <Fields>
          <Text>Nome:</Text>
          <FormInput name='name' control={control} />
          <Text>E-mail:</Text>
          <FormInput textContentType='emailAddress' name='email' control={control} />
          <Text>Sexo:</Text>
        </Fields>
        <Footer>
          <SubmitButton title='Gravar' onPress={handleSubmit(handleFormSubmit)} />
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
