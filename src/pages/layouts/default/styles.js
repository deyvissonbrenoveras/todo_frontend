import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(50, 180, 168);
  background: linear-gradient(
    90deg,
    rgba(50, 180, 168, 1) 41%,
    rgba(52, 136, 158, 1) 80%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center; */
  width: 100%;
  height: 85vh;
  max-width: 600px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  overflow: scroll;
`;
