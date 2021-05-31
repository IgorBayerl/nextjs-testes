import styled from 'styled-components';



export const CardContainer = styled.div`
  /* background-color: red; */
  /* height: 30em; */
  min-height: 20em;
  height: fit-content;
  width: 70em;
  max-width: 80vw;
  /* font-size: inherit; */
  margin: 2em;
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
  /* width: 10% !important; */
  /* width: 20px !important; */
  margin-right: 40px;
  /* height: 100%; */
  /* background-color: green; */
`;

export const ArrowLine = styled.div`
  border-left: 1px solid;
  border-color: #dedede;
  height: 100%;
  min-height: 20em;
  /* box-shadow: 1px 0 0 0px #dedede inset; */
  transform: translateX(+50%);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  div{
    position: absolute;
    padding: 5px;
    box-shadow: 1px -1px 0 0.5px #dedede inset;
    border: solid transparent;
    border-width: 0 0 1px 1px;
    transform: translateX(calc(-50% - 0.5px)) translateY(55%) rotate(-45deg);
    /* transform: ; */
  }
`;


export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
`;

export const Title = styled.h1`
  font-size: 6em;
  padding-left: 40px;
  /* pointer-events: auto; */
`;
export const MainContentContainer = styled.h1`
  padding-left: 40px;
`;





