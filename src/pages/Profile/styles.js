import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 80%;
  max-width: 600px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  overflow: scroll;
  padding: 10px;
  h2 {
    color: ${darken(0.05, '#13a8a8')};
    width: 100%;
  }
  form {
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;

    input {
      padding: 3px 5px;
      margin: 20px 15px 0 15px;
      border: 2px solid #13a8a8;
      border-radius: 5px;
    }
    button {
      margin: 15px;
      padding: 5px 10px;
      border-radius: 5px;
      display: block;
      color: #fff;
      background: #13a8a8;
      border: none;
      outline: 0;
      &:hover {
        background: ${darken(0.03, '#13a8a8')};
      }
    }
    span {
      color: #ff0000;
      text-align: left;
      margin-left: 20px;
    }
  }
`;
