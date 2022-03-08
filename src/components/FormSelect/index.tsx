import React, { useState } from "react";
import { PickerProps, View } from "react-native";
import { Content } from "./styles";

type IProps = PickerProps;

export function FormSelect( {...rest }:IProps) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        // <View>
            <Content
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Content.Item label="Feminino" value="F" />
                <Content.Item label="Masculino" value="M" />
            </Content>
        // </View>
    );
}