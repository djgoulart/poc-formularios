import React from 'react';
import { Realm } from '@realm/react';

import {
  Container,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon
} from './styles';

const APP_ID = 'poc-zifqi';
const realmApp = new Realm.App({ id: APP_ID });

function Header() {
  const handleSignOut = () => {
    console.log('user logout');
    realmApp.currentUser?.logOut();
  }

  return (
    <Container>
      <UserWrapper>
        <UserInfo>
          <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/10280312?v=4' }} />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Diego</UserName>
          </User>
        </UserInfo>
        <LogoutButton onPress={() => handleSignOut}>
          <Icon name="power" />
        </LogoutButton>
      </UserWrapper>
    </Container>
  );
}

export default Header;
