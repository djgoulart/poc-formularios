import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Human } from '../../schemes/Human';
import { HumanListItem } from '../HumanListItem';

import {
  Container,
} from './styles';

interface Props {
  data: Realm.Results<Human> | [];
}

export function HumanList({ data }: Props) {
  return (
    <Container>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <HumanListItem
            name={item.name}
            age={item.age}
            gender={item.gender}
          />
        )}
      />
    </Container>
  );
}
