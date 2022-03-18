import React, { useCallback } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

import { Human } from '../../schemes/Human';
import GlobalContext from './../../contexts/global';

import { FormInput } from '../../components/FormInput';
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
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
  } = useForm();

  const handleAddHuman = useCallback(
    (name: string, email: string): void => {
      try {
        realm.write(() => {
          realm.create("Human",
            Human.generate(name, email)
          );
        });
      } catch (error) {
        console.log("Error creating a Human: ", error);
      }
    },
    [realm]
  );

  function handleFormSubmit(form: FormData) {
    const { name, email } = form;

    handleAddHuman(name, email);
    reset();
    navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Fields>
          <Text>Nome:</Text>
          <FormInput name='name' control={control} />
          <Text>E-mail:</Text>
          <FormInput textContentType='emailAddress' name='email' control={control} />
        </Fields>
        <Footer>
          <SubmitButton title='Salvar' onPress={handleSubmit(handleFormSubmit)} />
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
