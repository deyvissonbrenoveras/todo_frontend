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
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: ${darken(0.05, '#13a8a8')};
    width: 100%;
  }
  button {
    background: #13a8a8;
    margin-left: auto;
    &:hover {
      background: ${darken(0.03, '#13a8a8')};
    }
  }
`;

export const TodoList = styled.ul`
  padding: 5px;
  li {
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    margin: 8px 0;
    padding: 10px 5px;
    h2 {
      font-size: 17px;
      color: #13a8a8;
      text-align: left;
      margin: 5px 10px;
    }
    p {
      color: #7d7d7d;
      text-align: left;
      margin: 5px 10px;
    }
  }
`;

export const AddModal = styled.div`
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
