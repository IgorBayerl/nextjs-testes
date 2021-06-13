import styled from 'styled-components';


//// Style Compact

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
  border-radius: 1px;
  
 
  
`;

export const TopLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
`;


export const Bolinha = styled.div`
  pointer-events: auto;
  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 200}, 64%, 60%)
  );
  height: 1em;
  width: 1em;
  margin-right: 0.7rem;
  /* margin-bottom: 5px;
  margin-top: 5px; */
  border-radius: 50%;
  
`;

export const MidLayer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 20px;
  h2{
    font-size: 1.4em;
    margin-bottom: 2px;
    padding-left: 0px;
    transition: all 0.3s;
  }
  p{
    display:flex;
    align-items: center;
    padding-left: 0px;
    font-size: 0.8em;
    margin-bottom: 3px;
    transition: all 0.3s;
  }
  
`;

export const BottomLayer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  overflow: hidden;
  border-radius: 7px;
  img{
    min-height: 110%;
    min-width: 110%;
    max-width:160%;
    max-height:160%;
    /* margin-left: -3em; */
    transition: all 0.3s;
    opacity: 0.7;

    object-fit: cover;
  }
`;

export const CardBody = styled.div`
  height: 70%;
  width: 100%;
  background-color: rgba(0,0,0,0);
  transition: all 0.3s;
  transition: all 0.3s;
  :hover{
    
    background-color: rgba(0,0,0,0.2);
  }
  
`;

export const Technologies = styled.div`
  border-radius: 7px;
  height: 2em;
  width: fit-content;
  padding-right: 3px;
  padding-left: 3px;
  background-color: #fff;
  position: absolute;
  left: 0.5em;
  bottom: -2em;
  display: flex;
  transition: all 0.3s;
  opacity: 0;

  img{
    height: 100%;
    padding: 3px;
    border-radius: 3px;
    object-fit: scale-down;
  }
`;

export const ActionsMenu = styled.div`
  position: absolute;
  transition: all 0.3s;
  z-index: 5;
  height: 100%;
  /* width: 80px; */
  width: 0;
  top: 50%;
  overflow: hidden;

  /* right: -80px; */
  right: 0;
  opacity: 0;
  transform: translateY(-50%);
  /* background-color: #fff; */

  /* @media( max-width: 850px ) {
    height: 90%;
    width: 20px;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  } */

  ul{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    /* background-color: rgba(0 , 0 , 0 , 0.1); */
  }

  a{
    cursor: pointer;
    /* background-color: rgba(0 , 0 , 0 , 0.1); */
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px;
  }
  

`;

export const CardContainer = styled.div`
  max-width: 80vw;
  width: 20em;
  height: 6.5em;
  display: flex;
  align-items: center;
  z-index: 0 ;
  position: relative;

  &:hover ${CardBody} {
    height: 100%;
  }
  &:hover ${GradientLine} {
    width: 100%;
  }
  &:hover ${Technologies} {
    bottom: 0.1rem;
    opacity: 1;
  }
  &:hover h2{
      padding-left: 10px;
    }
  &:hover p{
    padding-left: 10px;
  }
  &:hover ${ActionsMenu} {
    opacity: 0.8;
    width: 40px;
    /* right: 0px; */
  }
  /* &:hover ${MidLayer}::after {
    transform: rotate(150deg);
  } */
  /* &:hover ${BottomLayer} img {
    transform: scale(1.3);
  } */
`;

export const ImageBall = styled.div`
  border-radius: 50%;
  height: 4em;
  width: 4em;
  overflow: hidden;
  position: absolute;
  right: -1.5em;
  top: 3.5em;
  transition: all 0.3s;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media ( max-width: 530px ){
    right: 0.2em;
    top: 3.8em;
  }
`;















//// Style Open Mobile
//// Style Open BigScreen

