import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

type IProps = TextInputProps;

export function FormInput( {...rest }:IProps) {
    return (
        <Container {...rest}/>
    );
}