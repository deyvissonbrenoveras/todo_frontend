import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
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
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            />
            <strong>{profile.name}</strong>
            <Link to="/perfil">Editar perfil</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
