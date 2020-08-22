import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  top: 15%;
  right: 0;
  left: 0;
  /* left: calc(50% - 80% / 2); */
  margin: 0 auto;
  width: 100%;
  height: 300px;
  max-width: 800px;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #848487;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  > button {
    border: 0;
    background: none;
    border-radius: 50%;
    background: #e3e3e3;
    padding: 1px;
    margin: 5px 5px 0 auto;
    display: block;
    &:hover {
      background: ${darken(0.03, '#e3e3e3')};
    }
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      padding: 3px 5px;
      margin: 20px 15px 0 15px;
      border: 2px solid #13a8a8;
      border-radius: 5px;
    }
    span {
      text-align: left;
      color: #ff0000;
      margin-left: 20px;
    }
    textarea {
      padding: 3px 5px;
      height: 50%;
      margin: 15px 15px 0 15px;
      border: 2px solid #13a8a8;
      border-radius: 5px;
    }
    button {
      margin: 15px;
      padding: 5px 10px;
      border-radius: 5px;
      align-self: flex-end;
      display: inline-block;
      color: #fff;
      background: #13a8a8;
      border: none;
      outline: 0;
      &:hover {
        background: ${darken(0.03, '#13a8a8')};
      }
    }
  }
`;
