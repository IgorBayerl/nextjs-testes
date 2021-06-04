import styled from 'styled-components';



export const SectionContainer = styled.div`
  /* background-color: #dddddd; */
  min-height: 100vh;
  height: fit-content;
  /* width: 100%; */
  /* border: 1px solid;
  border-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const GradientLine = styled.div`
  pointer-events: auto;
  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 305}, 64%, 60%)
  );
  height: 1.2em;
  width: ${props => props.width + `em`};
  transition:all 0.3s ;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 1px;
  :hover{
    width: ${props => props.width + 1 + `em`};
  }
`;

export const Bolinha = styled.div`
  pointer-events: auto;
  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 200}, 64%, 60%)
  );
  height: 1.2em;
  width: 1.2em;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 0.6em;
`;



export const Row = styled.div`
  display: flex;
`;

export const ContentText = styled.p`
  font-size: 0.6em;
  /* pointer-events: auto; */
`;