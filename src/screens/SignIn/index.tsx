import React from 'react';
import { Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { FormInput } from '../../components/FormInput';
import { SubmitButton } from '../../components/SubmitButton';

import {
  Container,
  Fields,
} from './styles';

interface FormData {
  [name: string]: any
}

interface SignInProps {
  onSignIn: (formData: FormData) => void;
}

export function SignIn({ onSignIn }: SignInProps) {

  const {
    control,
    handleSubmit,
    reset
  } = useForm();


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Fields>
          <Text>Email:</Text>
          <FormInput
            name='email'
            control={control}
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Text>Password:</Text>
          <FormInput
            name='password'
            control={control}
            secureTextEntry
            textContentType='password'
            autoCompleteType='password'
          />
          <SubmitButton title='Login' onPress={handleSubmit(onSignIn)} />
        </Fields>
      </Container>
    </TouchableWithoutFeedback>
  );
}
