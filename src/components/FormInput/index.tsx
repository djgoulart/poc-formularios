import React from "react";
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from "react-native";

import { Input } from "../Input";

import { Container } from "./styles";

interface IProps extends TextInputProps {
  control: Control;
  name: string;
}

export function FormInput({
  control,
  name,
  ...rest
}: IProps) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
    </Container>
  );
}
