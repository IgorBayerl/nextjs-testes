import styled, { keyframes } from 'styled-components'



export const SectionContainer = styled.div`
  /* background-color: #dddddd; */
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  /* border: 1px solid;
  border-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const breatheAnimation = (width) => keyframes`
  0%   { 
    width: ${width + `em`}; 
  }
  30%  { 
    width: ${width + `em`}; 
  }
  40%  { 
    width: ${width + 1 + `em`}; 
  }
  80% { 
    width: ${width + 1 + `em`}; 
  }
  100% { 
    width: ${width + `em`};   
  }
`



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
  margin-right: 0.7rem;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 1px;
  animation-name: ${props => breatheAnimation(props.width)};
  animation-duration: ${props => props.time + `s`};
  animation-delay: 2s;
  animation-iteration-count: infinite;
  
  
  @media (min-width: 481px ) and ( max-width: 850px ){
    height: 1em;
    width: ${props => (props.width > 4 ? props.width - 4 : props.width) + `em`};
    margin-right: 0.5rem;
    margin-bottom: 3px;
    margin-top: 3px;
  }
  @media( max-width: 480px ) {
    height: 0.6em;
    width: ${props => (props.width - 8 ) + `em`};
    display: ${props => (props.width > 18 ? `none` : `block`)};
    margin-right: 0.2rem;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
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
  margin-right: 0.7rem;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 0.6em;
  @media( max-width: 850px ) {
    height: 1em;
    width: 1em;
    margin-right: 0.5rem;
    margin-bottom: 3px;
    margin-top: 3px;
  }
  @media( max-width: 480px ) {
    height: 0.6em;
    width: 0.6em;
    margin-right: 0.2rem;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
  }
`;



export const Row = styled.div`
  display: flex;
`;

export const ContentText = styled.p`
  font-size: 0.6em;

  @media( max-width: 850px ) {
    font-size: 0.5em;
  }
  @media( max-width: 480px ) {
    font-size: 0.4em;
  }
  /* pointer-events: auto; */
`;

export const BgTextSection = styled.div`
  position: absolute;
  background-color: brown;
  p{
    font-size: 5em;
    opacity: 0.2;
  }
`;