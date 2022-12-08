import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2AFAFA;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 300px; */
  background-color: #FFF;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;
`;