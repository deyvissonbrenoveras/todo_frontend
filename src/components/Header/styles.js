import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 60px;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  nav {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-align: center;
      max-width: 60px;
      color: blue;
      padding: 3px;
      border-radius: 5px;
      &:hover {
        background: blue;
        color: #fff;
      }
    }
  }
  img {
    width: 60px;
  }
`;

export const Profile = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 10px;
  padding: 5px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
