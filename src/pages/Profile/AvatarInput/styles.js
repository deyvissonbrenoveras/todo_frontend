import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;

  label {
    cursor: pointer;
    img {
      width: 100px;
      height: 100px;
      background: #eee;
      border-radius: 50%;
      &:hover {
        opacity: 0.7;
      }
    }
    input {
      display: none;
    }
  }
`;
