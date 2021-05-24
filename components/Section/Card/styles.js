import styled from 'styled-components';



export const CardContainer = styled.div`
  background-color: red;
  height: 30em;
  width: 70em;
  margin: 2em;
  pointer-events: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 300vh;
  z-index: 0;    
  position: absolute;
  pointer-events: none;
`;

export const LeftArrowDownContainer = styled.div`
  width: 10% !important;
  height: 100%;
  background-color: green;
`;



