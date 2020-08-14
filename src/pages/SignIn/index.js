import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState({});

  function handleChange(e) {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    const { email, password } = auth;
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="To Do" />
      <form>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="E-mail"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Senha"
        />
        <button onClick={handleSubmit} type="button">
          Login
        </button>
      </form>
    </>
  );
}
