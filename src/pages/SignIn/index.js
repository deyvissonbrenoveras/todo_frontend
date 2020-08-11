import React from 'react';
import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="To Do" />
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="button">Login</button>
      </form>
    </>
  );
}
