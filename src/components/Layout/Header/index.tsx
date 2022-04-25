import React from 'react';
import auth from "@react-native-firebase/auth";
import { LogoutButton } from '@components/Controllers/LogoutButton';
import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {
  function handleSignOut() { 
    auth().signOut()
      .then(() => {})
      .catch((error) => console.log(error))
  }

  return (
    <Container>
      <Greeting>
        <Title>HelpDesk</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}