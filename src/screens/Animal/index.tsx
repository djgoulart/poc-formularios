import React, { useCallback, useState } from 'react';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

import { Human } from '../../schemes/Human';
import { Pet } from '../../schemes/Pet';
import GlobalContext from '../../contexts/global';

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

interface Props {
  onCloseForm: () => void;
  humanId: Realm.BSON.ObjectId;
}

export function Animal({ onCloseForm, humanId }: Props) {
  const realm = useRealm();

  const {
    control,
    handleSubmit,
    reset,
  } = useForm();

  const human = realm.objectForPrimaryKey<Human>('Human', humanId);

  const handleAddPet = useCallback(
    (name: string, type: string, owner: Realm.Object): void => {
      try {
        realm.write(() => {
          const pet = realm.create('Pet', Pet.generate(name, type));
          human?.pets.push(pet);
        })
      } catch (error) {
        console.log('Error creating a new Pet', error)
      }

    },
    [realm]
  );

  function handleFormSubmit(form: FormData) {
    const { name, type } = form;

    handleAddPet(name, type, human!);
    reset();
    onCloseForm();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Fields>
          <Text>Nome do Pet:</Text>
          <FormInput name='name' control={control} />
          <Text>Que animal é?:</Text>
          <FormInput name='type' control={control} />
        </Fields>
        <Footer>
          <SubmitButton title='Salvar' onPress={handleSubmit(handleFormSubmit)} />
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
