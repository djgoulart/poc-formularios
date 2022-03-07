import React from 'react';

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

const Header: React.FC = () => {
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
        <LogoutButton onPress={() => { }}>
          <Icon name="power" />
        </LogoutButton>
      </UserWrapper>
    </Container>
  );
}

export default Header;
