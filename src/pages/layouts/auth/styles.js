import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: rgb(50, 180, 168);
  background: linear-gradient(
    90deg,
    rgba(50, 180, 168, 1) 41%,
    rgba(52, 136, 158, 1) 80%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  img {
    min-width: 60px;
    width: 35%;
  }
  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      height: 25px;
      padding: 5px 15px;
      background: rgba(0, 0, 0, 0.1);
      margin: 5px 0;
      color: #fff;
      border-radius: 5px;
      border: none;
      &::placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    span {
      align-self: flex-start;
      color: #ffb8b8;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin-top: 5px;
      height: 30px;
      border-radius: 15px;
      border: none;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, 'rgba(255, 255, 255, 0.8)')};
      }
    }
  }
  a {
    color: #fff;
    display: block;
    margin: 10px 0;
    &:hover {
      color: ${darken(0.1, '#fff')};
    }
  }
`;
