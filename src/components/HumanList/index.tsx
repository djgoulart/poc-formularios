import React, { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { Human } from '../../schemes/Human';
import { Animal } from '../../screens/Animal';
import { HumanListItem } from '../HumanListItem';

import {
  Container,
} from './styles';

interface Props {
  data: Realm.Results<Human> | [];
}

export function HumanList({ data }: Props) {
  const [petsModalOpen, setPetsModalOpen] = useState(false);
  const [selectedHuman, setSelectedHuman] = useState<Human>({} as Human)

  function handleOnItemPress(item: Human) {
    setSelectedHuman(item);
    setPetsModalOpen(true);
  }

  function handleClosePetModal() {
    setPetsModalOpen(false);
  }

  return (
    <Container>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => (
          <HumanListItem
            name={item.name}
            email={item.email}
            pets={item.pets.length}
            onPress={() => handleOnItemPress(item)}
          />
        )}
      />

      <Modal visible={petsModalOpen}>
        <Animal
          humanId={selectedHuman._id}
          onCloseForm={handleClosePetModal}
        />
      </Modal>
    </Container>
  );
}
