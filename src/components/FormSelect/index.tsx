import React, { useState } from "react";
import { PickerProps } from "@react-native-picker/picker";
import { ItemValue } from '@react-native-picker/picker/typings/Picker';
import { Content } from "./styles";

type IProps = PickerProps;

export function FormSelect({ ...rest }: IProps) {
  const [selectedGender, setSelectedGender] = useState("m" as ItemValue);
  return (
    <Content
      mode="dialog"
      selectedValue={selectedGender}
      onValueChange={(itemValue) => {
        setSelectedGender(itemValue);
      }
      }>
      <Content.Item label="Feminino" value="f" />
      <Content.Item label="Masculino" value="m" />
    </Content>
  );
}
