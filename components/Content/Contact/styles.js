import styled from 'styled-components';



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
  :hover{
    width: ${props => props.width + 1 + `em`};
  }
  
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

export const ContactContainer = styled.div`
  /* background-color: red; */
  height: 100%;

  form{
    /* background-color: blue; */
    margin-bottom: 40px;
    div{
      display: flex;
      flex-direction: column;

      input{
        background-color: rgba(0,0,0,0.2);
        border: none;
        margin-bottom: 20px;

        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        transition: all 0.3s;

        width: fit-content;
        :focus{
          outline: none;
          width: 100%;
        }
      }
    }
    button{
      padding-left: 20px;
      padding-right: 20px;
      width: fit-content;
    }
  }
`;