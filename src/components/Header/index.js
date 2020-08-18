import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="ToDo" />
          <Link to="/">Painel</Link>
        </nav>
        <aside>
          <Profile>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Deyvisson Breno"
            />
            <strong>Deyvisson Breno</strong>
            <Link to="/perfil">Editar perfil</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
